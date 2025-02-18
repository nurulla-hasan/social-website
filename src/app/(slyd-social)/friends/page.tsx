import FriendsCom from "@/components/friends/FriendsCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FRIENDS | SLYD SOCIAL",
  description: "Slyd social create and friend lists page",
};

const Friends = () => {
  return (
    <div>
      <FriendsCom />
    </div>
  );
};

export default Friends;
