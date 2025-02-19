import MessageCom from "@/components/message/MessageCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MESSAGE | SLYD SOCIAL",
  description: "Slyd social message page",
};

const Messages = () => {
  return (
    <div>
      <MessageCom />
    </div>
  );
};

export default Messages;
