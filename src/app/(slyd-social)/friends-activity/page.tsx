import FriendsActivityCom from "@/components/FriendsActivity/FriendsActivityCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LYD SOCIAL",
  description: "Lyd social friends activity page",
};

const FriendsActivity = () => {
  return (
    <div>
      <FriendsActivityCom />
    </div>
  );
};

export default FriendsActivity;
