import { Modal } from "antd";
import { IoClose } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  onClose: () => void; // Pass onClose to handle closing the modal
  children: React.ReactNode;
}

const DynamicModalForUserDataUpdate = ({
  isOpen,
  onConfirm,
  onCancel,
  children,
}: Props) => {
  const modalStyle = {
    content: {
      background: "#171717",
      padding: "24px",
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
        Update user information
      </div>

      {children}

      {/* <button onClick={onConfirm}>Confirm</button> */}
      {/* <button onClick={onCancel}>Cancel</button> */}
    </Modal>
  );
};

export default DynamicModalForUserDataUpdate;
