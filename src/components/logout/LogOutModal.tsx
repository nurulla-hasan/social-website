import { Button, Modal } from "antd";
import { IoClose } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const LogOutModal = ({ isOpen, onConfirm, onCancel }: Props) => {
  const modalStyle = {
    content: {
      background: "#171717",
      borderRadius: "8px",
      border: "1px solid #7D7D7D",
      color: "#fff",
    },
    closeButton: {
      color: "#fff",
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
      style={modalStyle.content}
    >
      <div className="text-center">
        <div className="text-2xl font-semibold text-white mb-4">
          Are you sure you want to log out?
        </div>
        <p className="text-white mb-6">
          You will be signed out from your account. Any unsaved changes will be
          lost.
        </p>

        <div className="flex justify-center space-x-4">
          <Button
            onClick={onCancel}
            type="default"
            className="bg-gray-600 hover:bg-gray-700 text-white border border-gray-700"
            style={{ height: "40px", width: "120px" }}
          >
            Cancel
          </Button>

          <Button
            onClick={onConfirm}
            type="primary"
            className="bg-red-600 hover:bg-red-700 text-white"
            style={{ height: "40px", width: "120px" }}
          >
            Log Out
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default LogOutModal;
