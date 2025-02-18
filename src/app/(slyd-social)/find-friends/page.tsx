import FindFriendsCom from "@/components/FindFriends/FindFriendsCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FIND FRIENDS | SLYD SOCIAL",
  description: "Slyd social find friends page",
};

const FindFriends = () => {
  return (
    <div>
      <FindFriendsCom />
    </div>
  );
};

export default FindFriends;
