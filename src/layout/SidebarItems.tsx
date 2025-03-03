import {
  FileSearchOutlined,
  LogoutOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import { FaHandsClapping } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuSquarePlus } from "react-icons/lu";
import { PiCalendarStarBold } from "react-icons/pi";
import { RiUserSearchLine } from "react-icons/ri";
import { TbMessages } from "react-icons/tb";

const sidebarItems = () => {
  // Main Content Items
  const mainContentItems: MenuProps["items"] = [
    {
      label: <Link href="/find-an-activities">Find an Activities</Link>,
      key: `/find-an-activities`,
      icon: <FileSearchOutlined style={{ fontSize: "19px" }} />,
    },
    {
      label: <Link href="/friends-activity">Friends Activities</Link>,
      key: `/friends-activity`,
      icon: <UsergroupAddOutlined style={{ fontSize: "19px" }} />,
    },
    {
      label: <Link href="/your-activities">Your Activities</Link>,
      key: `/your-activities`,
      icon: <PiCalendarStarBold style={{ fontSize: "19px" }} />,
    },
    {
      label: <Link href="/create-an-activity">Create an Activities</Link>,
      key: `/create-an-activity`,
      icon: <LuSquarePlus style={{ fontSize: "19px" }} />,
    },
    {
      label: <Link href="/friends">Friends</Link>,
      key: `/friends`,
      icon: <FaHandsClapping style={{ fontSize: "19px" }} />,
    },
    {
      label: <Link href="/find-friends">Find Friends</Link>,
      key: `/find-friends`,
      icon: <RiUserSearchLine style={{ fontSize: "19px" }} />,
    },
    {
      label: <Link href="/messages">Messages</Link>,
      key: `/messages`,
      icon: <TbMessages style={{ fontSize: "19px" }} />,
    },
    {
      label: <Link href="/notifications">Notifications</Link>,
      key: `/notifications`,
      icon: <IoNotificationsOutline style={{ fontSize: "19px" }} />,
    },
  ];

  // Bottom Items (Settings and Log Out)
  const bottomItems: MenuProps["items"] = [
    {
      label: <Link href="/settings">Settings</Link>,
      key: "/settings",
      icon: <SettingOutlined style={{ fontSize: "19px" }} />,
    },
    {
      label: <Link href="/logout">Log Out</Link>,
      key: "/logout",
      icon: <LogoutOutlined style={{ fontSize: "19px" }} />,
    },
  ];

  const items = [...mainContentItems];

  return items;
};

export default sidebarItems;
