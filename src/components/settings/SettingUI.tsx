import { ColorPalette } from "@/theme/themes";
import {
  CompassOutlined,
  DeleteOutlined,
  EnvironmentOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  LockOutlined,
  QuestionCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { List } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

interface SettingsItemProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
  route?: string;
}

const SettingsItem: React.FC<SettingsItemProps> = ({
  icon,
  title,
  onClick,
  route,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`flex items-center justify-between w-full py-7 px-5 text-white cursor-pointer hover:bg-[#0A0A0A]`}
      onClick={handleClick}
      style={{
        borderBottom: `1px solid ${ColorPalette?.colorSecondaryBg}`,
      }}
    >
      <div className="flex items-center">
        <span className="mr-4 text-xl">{icon}</span>
        <span className="text-base">{title}</span>
      </div>
      <RightOutlined className="text-gray-400" />
    </div>
  );
};

const SettingsMenu: React.FC = () => {
  const settingsItems = [
    {
      icon: <EnvironmentOutlined />,
      title: "Current Location",
      onClick: () => console.log("Current Location clicked"),
    },
    {
      icon: <CompassOutlined />,
      title: "Maximum Distance",
      onClick: () => console.log("Maximum Distance clicked"),
    },
    {
      icon: <QuestionCircleOutlined />,
      title: "Contact and FAQ",
      route: "/settings/contact-and-faq",
    },
    {
      icon: <LockOutlined />,
      title: "Privacy Policy",
      route: "/settings/privacy-policy",
    },
    {
      icon: <FileTextOutlined />,
      title: "Terms & Condition",
      route: "/settings/terms-and-conditions",
    },
    {
      icon: <InfoCircleOutlined />,
      title: "Version Details",
      route: "/settings/version-details",
    },
    {
      icon: <DeleteOutlined />,
      title: "Delete Account",
      onClick: () => console.log("Delete Account clicked"),
    },
  ];

  return (
    <div className="w-full bg-black text-white">
      <List
        className="w-full"
        itemLayout="horizontal"
        dataSource={settingsItems}
        renderItem={(item) => (
          // Remove List.Item wrapper and directly render SettingsItem
          <SettingsItem
            icon={item.icon}
            title={item.title}
            onClick={item.onClick}
            route={item.route}
          />
        )}
      />
    </div>
  );
};

export default SettingsMenu;
