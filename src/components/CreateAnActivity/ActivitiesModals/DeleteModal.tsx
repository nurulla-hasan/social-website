import { Button, Modal } from "antd";
import { IoClose } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteModal = ({ isOpen, onConfirm, onCancel }: Props) => {
  const modalStyle = {
    content: {
      background: "#1c1c1c",
      borderRadius: "8px",
      border: "1px solid #7D7D7D",
    },
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onCancel}
      centered
      footer={null}
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "60%",
        xl: "50%",
        xxl: "40%",
      }}
      closeIcon={<IoClose className="text-white text-2xl" />}
      styles={modalStyle}
    >
      <div className="text-white text-lg font-semibold mb-4">
        Delete Activity
      </div>

      <div className="max-w-3xl mx-auto text-white p-6 rounded-lg shadow-lg flex items-center justify-center flex-col">
        <h2 className="text-3xl">Are you sure you want to delete activity?</h2>
        <p className="text-base mt-2">
          Deleting this activity will remove it permanently from your account.
        </p>

        <div className="flex justify-center items-center mt-6">
          <Button
            onClick={onCancel}
            style={{ background: "none", color: "white", margin: "0px 10px" }}
          >
            Keep activity
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
          >
            Delete activity
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
