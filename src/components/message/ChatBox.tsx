"use client";

import { messages } from "@/app/data/FakeData";
import { ColorPalette } from "@/theme/themes";
import { Input, Tabs } from "antd";
import { useState } from "react";
import ChatUI from "./ChatUI";
import DefaultUIChatBox from "./DefaultUIChatBox";
import General from "./tabs/General";
import Groups from "./tabs/Groups";
import Request from "./tabs/Request";

const ChatBox = ({ isSidebarOpen, handleSidebarToggle }: any) => {
  const [selectedTab, setSelectedTab] = useState("general");
  const [chatBoxInfo, setChatBoxInfo] = useState<{}>({});
  const group = messages?.filter((gr) => gr.status === "group");
  const request = messages?.filter((gr) => gr.request === true);

  const handleOwnDetails = (data: any) => {
    console.log(data);
    setChatBoxInfo(data);
  };

  return (
    <div className="flex relative">
      <div
        className="flex sticky text-white top-0  h-screen"
        style={{
          background: `${ColorPalette.colorSecondaryBg}`,
          overflowY: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          zIndex: "99",
        }}
      >
        {/* Toggle Button (Visible on Small Screens) */}

        {/* Sidebar / User Panel */}
        <div
          style={{
            background: `${ColorPalette.colorSecondaryBg}`,
          }}
          className={`fixed inset-y-0 left-0 w-80 p-4 transition-transform duration-300 md:relative md:translate-x-0  ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="chat-box-search-input">
            <Input
              placeholder="Search Messages"
              className="mb-4 text-white border-none rounded-md "
              style={{ background: ColorPalette.colorTextSecondary }}
            />
          </div>

          {/* Tabs */}
          <Tabs
            activeKey={selectedTab}
            onChange={setSelectedTab}
            className="text-white"
          >
            <Tabs.TabPane
              tab={<span className="font-semibold">General</span>}
              key="general"
            >
              {/* Messages List */}
              <General
                messages={messages}
                handleOwnDetails={handleOwnDetails}
              />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={<span className="font-semibold">Group</span>}
              key="group"
            >
              {/* group list */}
              <Groups group={group} handleOwnDetails={handleOwnDetails} />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span className="font-semibold">{`Request (${request?.length})`}</span>
              }
              key="requests"
            >
              {/* Request list */}
              <Request request={request} handleOwnDetails={handleOwnDetails} />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>

      {/* Main Chat Area */}
      <>
        {Object.keys(chatBoxInfo).length > 0 ? (
          <ChatUI messages={chatBoxInfo} />
        ) : (
          <DefaultUIChatBox />
        )}
      </>
    </div>
  );
};

export default ChatBox;
