"use client";

import { ColorPalette } from "@/theme/themes";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Layout } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

const { Header } = Layout;

const TopMenu = ({ collapsed, setCollapsed, isMobile, onToggle }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        transition: "background 0.3s ease", // Smooth transition
        boxShadow: isScrolled ? "0 2px 8px rgba(0, 0, 0, 0.1)" : "none", // Optional: Add shadow on scroll
        borderBottom: `1px solid ${ColorPalette?.colorSecondaryBg}`,
      }}
    >
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
    </Header>
  );
};

export default TopMenu;
