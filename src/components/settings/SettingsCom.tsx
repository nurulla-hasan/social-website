"use client";
import { ColorPalette } from "@/theme/themes";
import { Typography } from "antd";
import { FaArrowLeft } from "react-icons/fa6";
import SettingsMenu from "./SettingUI";

const SettingsCom = () => {
  const { Title } = Typography;

  return (
    <div>
      {/* Header Section */}
      <div className="flex items-center justify-start">
        <span>
          <FaArrowLeft className="text-2xl text-white" />
        </span>
        <Title
          level={3}
          className="text-left ml-3 pt-2"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Settings
        </Title>
      </div>

      {/* Setting route */}
      <SettingsMenu />
    </div>
  );
};

export default SettingsCom;
