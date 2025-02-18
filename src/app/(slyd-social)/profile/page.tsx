import ProfileCom from "@/components/profile/ProfileCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PROFILE | SLYD SOCIAL",
  description: "Slyd social profile  page",
};

const Profile = () => {
  return (
    <div>
      <ProfileCom />
    </div>
  );
};

export default Profile;
