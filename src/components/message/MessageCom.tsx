"use client";

import { MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";
import ChatBox from "./ChatBox";

const MessageCom = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 992);
      setIsSmallScreen(width <= 992);
    };

    checkScreenSize(); // Initial check on mount
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle sidebar state
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between py-2 absolute right-[40px] top-[12px] z-10">
        {/* Toggle Button (Visible on Mobile, Hidden on Desktop) */}
        <Button
          style={{ border: "none", boxShadow: "none", background: "none" }}
          className={`md:hidden bg-gray-800 text-white ${
            !isSmallScreen ? "hidden-element" : "block-element"
          }`} // Removed `block` class
          icon={<MenuOutlined />}
          onClick={handleSidebarToggle}
          aria-label="Toggle Sidebar"
        />
      </div>

      {/* ChatBox with Sidebar Control */}
      <ChatBox
        isSidebarOpen={isSidebarOpen}
        handleSidebarToggle={handleSidebarToggle}
      />
    </div>
  );
};

export default MessageCom;
