"use client";

import useBackNavigation from "@/hooks/BackUrl";
import { ColorPalette } from "@/theme/themes";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import ChatBox from "./ChatBox";
const { Title } = Typography;

const MessageCom = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 992);
      setIsSmallScreen(width <= 768);
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

  // navigation back
  const dynamicCurrentPath = "/messages";
  const dynamicFallbackUrl = "/find-an-activities";

  // Using the hook with dynamic currentPath and fallbackUrl
  const { handleBack } = useBackNavigation(
    dynamicCurrentPath,
    dynamicFallbackUrl
  );
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between py-2">
        <button onClick={handleBack}>
          <div className="flex items-center">
            <FaArrowLeft className="text-2xl text-white" />
            <Title
              level={3}
              className="text-left ml-3 pt-2"
              style={{ color: `${ColorPalette?.colorTextPrimary}` }}
            >
              Messages
            </Title>
          </div>
        </button>

        {/* Toggle Button (Visible on Mobile, Hidden on Desktop) */}
        <Button
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
