"use client";

import LogOutModal from "@/components/logout/LogOutModal";
import { TriggerSiderStyle } from "@/styles/GStyle";
import { ColorPalette } from "@/theme/themes";
import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./Menu.css";
import sidebarItems from "./SidebarItems";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const { Sider } = Layout;

const Sidebar = ({
  collapsed,
  setCollapsed,
  setIsMobile: setMobile,
  onToggle,
}: any) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [LogOutOpen, setLogOutOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 992);
      setIsSmallScreen(width <= 480);
    };

    checkScreenSize(); // Initial check on mount
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleLogout = () => {
    setLogOutOpen(false);
    Cookies.remove("token");
    router.push("/auth/login");
  };
  return (
    <>
      <LogOutModal
        isOpen={LogOutOpen}
        onConfirm={handleLogout}
        onCancel={() => setLogOutOpen(false)}
      />

      {/* Overlay to close menu */}
      {isMobile && (
        <div
          onClick={onToggle}
          className={`${!collapsed ? "overly" : "overly-out"}`}
        />
      )}
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="lg"
        collapsedWidth="0"
        width={280}
        trigger={null}
        style={{
          transform: collapsed ? "translateX(-300%)" : "translateX(0)",
          visibility: collapsed ? "hidden" : "visible",
          opacity: collapsed ? "0" : "1",
          ...TriggerSiderStyle,
          height: "100vh",
          position: isMobile ? "fixed" : "sticky",
          background: `${ColorPalette?.sidebarBg}`,
          border: "none",
        }}
        className="trigger-menu custom-menu"
        onBreakpoint={(broken) => {
          setMobile(broken);
          if (broken) {
            setCollapsed(true);
          } else {
            setCollapsed(false);
          }
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{ margin: "25px 0" }}
        >
          <Link href={`/`}>
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={sidebarItems()}
          style={{
            minHeight: "75vh",
            background: `${ColorPalette.sidebarBg}`,
          }}
        />

        <div className="z-10 bg-pink-700 px-7 mt-2">
          <Link href={`/settings`}>
            <button
              className="text-[#9da0a3] text-base"
              // onClick={() => setLogOutOpen(true)}
            >
              <SettingOutlined
                className="text-[22px]"
                style={{ color: "#9da0a3" }}
              />
              <span
                className="text-[12px] inline-block mr-1"
                style={{
                  fontSize: "14px",
                  color: "#9da0a3",
                  marginLeft: "10px",
                }}
              >
                Settings
              </span>
            </button>
            <br />
          </Link>

          <button
            className="text-[#9da0a3] text-base mt-5"
            onClick={() => setLogOutOpen(true)}
          >
            <LogoutOutlined
              className="text-[22px]"
              style={{ color: "#9da0a3" }}
            />{" "}
            <span
              className="text-[14px] inline-block mr-1"
              style={{ fontSize: "14px", color: "#9da0a3", marginLeft: "10px" }}
            >
              Log out
            </span>
          </button>
        </div>
      </Sider>
    </>
  );
};

export default Sidebar;
