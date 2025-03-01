import { FriendsData } from "@/app/data/FakeData";
import ActivitySearch from "@/components/FindAnActivities/filters/Search";
import { Avatar, Button, Modal, Typography } from "antd";
import { useState } from "react";
import { BsCheckCircleFill, BsCircle } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const { Text } = Typography;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface Props {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const modalStyle = {
  content: {
    background: "#1c1c1c",
    borderRadius: "8px",
    border: "1px solid #7D7D7D",
  },
};

const GroupCreateModal = ({ isOpen, onConfirm, onCancel }: Props) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([1, 4]); // Preselected IDs

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((selectedId) => selectedId !== id)
        : [...prev, id]
    );
  };

  return (
    <Modal
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "60%",
        xl: "50%",
        xxl: "40%",
      }}
      //   title="Add member"
      open={isOpen}
      onOk={onConfirm}
      onCancel={onCancel}
      centered
      footer={null} // This removes the footer
      styles={modalStyle}
      closeIcon={<IoClose className="text-white text-2xl" />}
    >
      <div>
        <div className="text-white text-lg font-semibold mb-4">
          Create a new group
        </div>

        {/* Search Input */}
        <div className="new-chat-input">
          <ActivitySearch placeholder="Search name or username" />
        </div>

        {/* Friends List */}
        <div className="mt-4">
          <Text className="text-gray-400 text-sm" style={{ color: "#ddd" }}>
            Friends
          </Text>
          {FriendsData.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center justify-between py-3 border-b border-[#2e2e2f] cursor-pointer"
              onClick={() => toggleSelect(friend.id)}
            >
              <div className="flex items-center">
                <Avatar src={friend.avatar} size={40} className="mr-3" />
                <div>
                  <Text
                    className="text-white font-medium"
                    style={{ color: "#ddd" }}
                  >
                    {friend.name}
                  </Text>
                  <div className="text-gray-400 text-sm">{friend.username}</div>
                </div>
              </div>
              {/* Checkmark Toggle */}
              {selectedIds.includes(friend.id) ? (
                <BsCheckCircleFill className="text-green-500 text-xl" />
              ) : (
                <BsCircle className="text-gray-500 text-xl" />
              )}
            </div>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between mt-4">
          <Button
            className="bg-gray-700 text-white px-4 py-2 rounded-md"
            onClick={onCancel}
            style={{ background: "none", color: "white" }}
          >
            Back
          </Button>
          <Button type="primary">Next</Button>
        </div>
      </div>
    </Modal>
  );
};

export default GroupCreateModal;
