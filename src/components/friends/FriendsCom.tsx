"use client";

import { fakeUser } from "@/app/data/FakeData";
import { ColorPalette } from "@/theme/themes";
import { Typography } from "antd";
import { FaArrowLeft } from "react-icons/fa6";
import FriendsProfileCard from "./FriendsProfileCard";
import FriendsFilter from "./filters/Filters";

const { Title } = Typography;

const user = fakeUser;

const FriendsCom = () => {
  return (
    <div>
      <div className="flex items-center justify-start">
        <span>
          <FaArrowLeft className="text-2xl text-white" />
        </span>
        <Title
          level={3}
          className="text-left ml-3 pt-2"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Friends(48)
        </Title>
      </div>
      <div className="py-7">
        <FriendsFilter />
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7 ">
        {user?.map((user, index: number) => (
          <FriendsProfileCard user={user} key={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default FriendsCom;
