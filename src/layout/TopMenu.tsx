"use client";

import useHistoryBack from "@/hooks/HistoryBack";
import { ColorPalette } from "@/theme/themes";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Layout, Typography } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const { Header } = Layout;
const { Title } = Typography;

const TopMenu = ({ collapsed, setCollapsed, isMobile, onToggle }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname();

  // Function to get the page title based on the pathname
  const getPageTitle = () => {
    const pathMap: Record<string, string> = {
      "/": "Home",
      "/create-an-activity": "Create an activities",
      "/find-an-activities": "Find an activities",
      "/friends-activity": "Friends activities",
      "/your-activities": "Your activities",
      "/friends": "Friends",
      "/find-friends": "Find friends",
      "/messages": "Messages",
      "/profile": "Profile",
      "/profile/update": "Edit information",
      "/notifications": "Notifications",
      "/settings": "Settings",
      "/settings/privacy-policy": "Privacy & Policy",
      "/settings/terms-and-conditions": "Terms & Condition",
      "/settings/version-details": "Version Details",
      "/settings/contact-and-faq": "Contact & FAQ",
      "/pricing-plan": "Boost Plan",
    };
    return pathMap[pathName] || "Back";
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { goBack } = useHistoryBack();

  return (
    <Header
      style={{
        background: isScrolled ? `${ColorPalette?.sidebarBg}` : "transparent",
        padding: "0 15px",
        textAlign: "center",
        minHeight: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        position: "sticky",
        top: "0",
        zIndex: 1000,
        transition: "background 0.3s ease",
        boxShadow: isScrolled ? "0 2px 8px rgba(0, 0, 0, 0.1)" : "none",
        borderBottom: `1px solid ${ColorPalette?.colorSecondaryBg}`,
      }}
    >
      <div className="flex justify-between w-full items-center">
        {/* Header Section */}
        <button className="cursor-pointer" onClick={goBack}>
          <div className="flex items-center justify-start">
            <span>
              <FaArrowLeft className="text-2xl text-white" />
            </span>
            <Title
              level={3}
              className="text-left ml-3 pt-2"
              style={{ color: `${ColorPalette?.colorTextPrimary}` }}
            >
              {getPageTitle()}
            </Title>
          </div>
        </button>

        <div>
          <Link href={`/profile`}>
            <Avatar
              style={{ margin: "0 10px", border: "1px solid #fff" }}
              size="default"
              icon={<UserOutlined />}
            />
          </Link>

          {isMobile && (
            <Button
              className="ml-auto w-full mx-3"
              icon={<MenuOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
          )}
        </div>
      </div>
    </Header>
  );
};

export default TopMenu;
