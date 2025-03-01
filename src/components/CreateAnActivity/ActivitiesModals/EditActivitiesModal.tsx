import { Modal } from "antd";
import { IoClose } from "react-icons/io5";
import EditForm from "./EditForm";

interface Props {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const EditActivitiesModal = ({ isOpen, onConfirm, onCancel }: Props) => {
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
        Activity Filters
      </div>

      <div className="max-w-3xl mx-auto text-white p-6 rounded-lg shadow-lg">
        <EditForm />
      </div>
    </Modal>
  );
};

export default EditActivitiesModal;
