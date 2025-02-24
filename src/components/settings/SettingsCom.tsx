"use client";
import useBackNavigation from "@/hooks/BackUrl";
import { ColorPalette } from "@/theme/themes";
import { Typography } from "antd";
import { FaArrowLeft } from "react-icons/fa6";
import SettingsMenu from "./SettingUI";

const SettingsCom = () => {
  const { Title } = Typography;

  // navigation back
  const dynamicCurrentPath = "/settings";
  const dynamicFallbackUrl = "/find-an-activities";

  // Using the hook with dynamic currentPath and fallbackUrl
  const { handleBack } = useBackNavigation(
    dynamicCurrentPath,
    dynamicFallbackUrl
  );

  return (
    <div>
      {/* Header Section */}
      <button onClick={handleBack}>
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
      </button>

      {/* Setting route */}
      <SettingsMenu />
    </div>
  );
};

export default SettingsCom;
