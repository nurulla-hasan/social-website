import SettingsCom from "@/components/settings/SettingsCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SETTINGS | SLYD SOCIAL",
  description: "SETTINGS | Slyd social setting page",
};

const Settings = () => {
  return (
    <div>
      <SettingsCom />
    </div>
  );
};

export default Settings;
