"use client";

import { notifications } from "@/app/data/FakeData";
import { ColorPalette } from "@/theme/themes";
import { Typography } from "antd";
import { FaArrowLeft } from "react-icons/fa6";
import NotificationCard from "./NotificationCard";
const { Title } = Typography;

const NotificationsCom = () => {
  const notify = notifications;

  return (
    <div>
      <div className="flex items-center justify-start">
        <span>
          <FaArrowLeft className="text-2xl text-white" />
        </span>
        <Title
          level={3}
          className="text-left ml-3 pt-2"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Notifications
        </Title>
      </div>

      {notify?.map((notify) => (
        <NotificationCard notify={notify} />
      ))}
    </div>
  );
};

export default NotificationsCom;
