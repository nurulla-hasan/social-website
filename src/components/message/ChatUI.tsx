"use client";

import { ColorPalette } from "@/theme/themes";
import { MoreOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useState } from "react";
import ChatInputDesign from "./ChatInput";
import GroupCreateModal from "./MegModals/GroupCreateModal";

interface Message {
  id: number;
  text: string;
  time: string;
  sender: "user" | "other";
}

const ChatUI = ({ messages }: any) => {
  console.log(messages);
  const message: Message[] = messages?.messages || [];

  const [input, setInput] = useState("");
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
      <div
        className="flex flex-col h-screen  bg-[#121212] text-white w-full lg:w-[80%] sticky "
        style={{
          overflowY: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          zIndex: "1",
        }}
      >
        {/* Header */}
        <div
          className="flex justify-between items-center px-4 py-3 w-full max-w-full"
          style={{
            borderBottom: `1px solid ${ColorPalette?.colorSecondaryBg}`,
          }}
        >
          {/* avatar */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setCreateGroup(true)}
          >
            <Avatar
              size={40}
              src={messages?.avatar || "https://i.pravatar.cc/100?img=2"}
            />
            <div>
              <h4 className="text-lg font-semibold">
                {messages?.name || "N/A"} {messages?.age || "N/A"}
              </h4>
              <p className="text-green-400 text-sm">Online</p>
            </div>
          </div>
          <MoreOutlined className="text-xl cursor-pointer" />
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 w-full max-w-full">
          {message?.map((msg: Message) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "other" && (
                <Avatar
                  size={35}
                  src={messages?.avatar || "https://i.pravatar.cc/100?img=2"}
                  style={{ marginRight: "10px" }}
                />
              )}
              <div
                style={{
                  borderRadius: `${
                    msg?.sender === "user"
                      ? "15px 15px 0px 15px"
                      : "15px 15px 15px 0px"
                  }`,
                  background: `${
                    msg?.sender === "user" ? "#6C19FF" : "#2E2E2F"
                  }`,
                }}
                className={`max-w-[75%] p-3 ${
                  msg.sender === "user"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-700 text-white"
                }`}
              >
                <p>{msg.text}</p>
                <span className="text-xs text-gray-300">{msg.time}</span>
              </div>
              {msg.sender === "user" && (
                <Avatar
                  size={35}
                  src="https://i.pravatar.cc/100?img=2"
                  style={{ marginLeft: "10px" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* <ChatInput /> */}

        {/* <ChatBoxDesign /> */}

        <ChatInputDesign />

        {/* <div
          className="p-3 border-t border-gray-700 flex items-center w-full max-w-full"
          style={{ borderTop: `1px solid ${ColorPalette.colorSecondaryBg}` }}
        >
          <Input
            className="flex-1 bg-gray-800 text-white border-none rounded-md"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            //   onPressEnter={handleSend}
          />
          <Button
            type="text"
            shape="circle"
            className="ml-3"
            style={{ fontSize: "25px", color: "#fff" }}
            icon={<LuSend />}
            //   onClick={handleSend}
          />
        </div> */}
      </div>
    </>
  );
};

export default ChatUI;
