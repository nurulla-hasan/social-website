"use client";

import { CloseOutlined } from "@ant-design/icons";
import { Button, Form, Modal, Radio } from "antd";

interface Props {
  isOpen: boolean;
  onConfirm: (paymentMethod: string) => void;
  onCancel: () => void;
}

const paymentGetWay = [
  { name: "Stripe", icon: `/assets/images/str.png` },
  { name: "PayPal", icon: `/assets/images/paypal.png` },
  { name: "Venmo", icon: `/assets/images/ven.png` },
  { name: "American Express", icon: `/assets/images/amer.png` },
];

const PaymentModal = ({ isOpen, onCancel, onConfirm }: Props) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: { paymentMethod: string }) => {
    console.log("Selected Payment Method:", values.paymentMethod);
    onConfirm(values.paymentMethod);
    onCancel(); // Close modal after submit
  };

  const modalStyle = {
    content: {
      background: "#1c1c1c",
      padding: "24px",
      borderRadius: "8px",
      border: "1px solid #7D7D7D",
    },
  };

  return (
    <Modal
      styles={modalStyle}
      open={isOpen}
      closeIcon={<CloseOutlined style={{ color: "#fff" }} />}
      footer={null}
      onCancel={onCancel}
    >
      <div className=" p-6 rounded-lg">
        <h2 className="text-white text-xl font-semibold text-center mb-6">
          Payment Option
        </h2>

        <Form
          form={form}
          onFinish={handleSubmit}
          className="space-y-4 payment-form"
          style={{ background: "none" }}
        >
          <Form.Item
            name="paymentMethod"
            rules={[
              { required: true, message: "Please select a payment method!" },
            ]}
          >
            <Radio.Group className="flex flex-col space-y-4 w-full">
              {paymentGetWay?.map((method) => (
                <label
                  key={method.name}
                  className="flex items-center justify-between cursor-pointer p-3 hover:border-purple-500 transition w-full"
                >
                  <div className="w-full">
                    <Radio value={method.name} className="text-purple-500" />
                    <span className="text-white text-lg">{method.name}</span>
                  </div>
                  <img src={method?.icon} alt={method.name} className="h-5" />
                </label>
              ))}
            </Radio.Group>
          </Form.Item>

          <div className="flex justify-center items-center mt-6">
            <Button
              onClick={onCancel}
              style={{ background: "none", color: "white", margin: "0px 10px" }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
            >
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default PaymentModal;
