import LikesCom from "@/components/likes/LikesCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LIKE | LYD SOCIAL",
  description: "Lyd social user like page",
};

const Likes = () => {
  return (
    <div>
      <LikesCom />
    </div>
  );
};

export default Likes;
