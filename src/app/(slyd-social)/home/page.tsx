import HomeCom from "@/components/home/HomeCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HOME | LYD SOCIAL",
  description: "Lyd social home page",
};

const HomePage = () => {
  return (
    <div>
      <HomeCom />
    </div>
  );
};

export default HomePage;
