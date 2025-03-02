"use client";

import { notifications } from "@/app/data/FakeData";
import useBackNavigation from "@/hooks/BackUrl";
import { Typography } from "antd";
import NotificationCard from "./NotificationCard";
const { Title } = Typography;

const NotificationsCom = () => {
  const notify = notifications;

  // navigation back
  const dynamicCurrentPath = "/notifications";
  const dynamicFallbackUrl = "/find-an-activities";

  // Using the hook with dynamic currentPath and fallbackUrl
  const { handleBack } = useBackNavigation(
    dynamicCurrentPath,
    dynamicFallbackUrl
  );

  return (
    <div>
      {notify?.map((notify) => (
        <NotificationCard notify={notify} />
      ))}
    </div>
  );
};

export default NotificationsCom;
