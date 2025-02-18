import NotificationsCom from "@/components/Notifications/NotificationsCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NOTIFICATION | SLYD SOCIAL",
  description: "Slyd social notification page",
};

const Notifications = () => {
  return (
    <div>
      <NotificationsCom />
    </div>
  );
};

export default Notifications;
