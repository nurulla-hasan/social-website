"use client";
import { FriendsData } from "@/app/data/FakeData";
import ActivitySearch from "@/components/FindAnActivities/filters/Search";
import { Avatar, Button, Modal, Typography } from "antd";
import { useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import GroupCreateModal from "./GroupCreateModal";

const { Text } = Typography;

export interface Friend {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const modalStyle = {
  content: {
    background: "#171717",
    padding: "24px",
    borderRadius: "8px",
    border: "1px solid #7D7D7D",
  },
};

const NewChatModal = ({ isOpen, onConfirm, onCancel }: Props) => {
  const [createGroup, setCreateGroup] = useState(false);

  return (
    <>
      <GroupCreateModal
        isOpen={createGroup}
        onConfirm={() => {
          setCreateGroup(false);
        }}
        onCancel={() => setCreateGroup(false)}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      ;
      <Modal
        closeIcon={<IoClose className="text-white text-2xl" />}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
          xxl: "40%",
        }}
        open={isOpen}
        onOk={onConfirm}
        onCancel={onCancel}
        footer={null}
        centered
        styles={modalStyle}
      >
        {/* Header */}
        <div className="text-white text-lg font-semibold mb-4">New Chat</div>

        {/* Search Input */}
        <div className="new-chat-input">
          <ActivitySearch placeholder="Search name or username" />
        </div>

        {/* New Group Button */}
        <div
          className="mt-3 flex items-center bg-[#2e2e2f] px-3 py-2 rounded-lg cursor-pointer"
          onClick={() => setCreateGroup(true)}
        >
          <AiOutlineUsergroupAdd className="text-xl text-white mr-3" />
          <Text className="text-white font-semibold" style={{ color: "#ddd" }}>
            New Group
          </Text>
        </div>

        {/* Friends List */}
        <div className="mt-4">
          <Text className="text-white text-sm" style={{ color: "#fff" }}>
            Friends
          </Text>
          {FriendsData.map((friend) => (
            <div
              key={friend.id}
              className={`flex items-center py-3 border-b border-[#2e2e2f]`}
            >
              <Avatar src={friend.avatar} size={40} className="mr-3" />
              <div>
                <Text
                  className="text-white font-medium"
                  style={{ color: "#fff" }}
                >
                  {friend.name}
                </Text>
                <div className="text-gray-400 text-sm">{friend.username}</div>
              </div>
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
      </Modal>
    </>
  );
};

export default NewChatModal;
