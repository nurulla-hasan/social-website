import CreateAnActivityCom from "@/components/CreateAnActivity/CreateAnActivityCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CREATE AN ACTIVITIES | LYD SOCIAL",
  description: "Lyd social create and activities layout page",
};

const CreateAnActivity = () => {
  return (
    <div>
      <CreateAnActivityCom />
    </div>
  );
};

export default CreateAnActivity;
