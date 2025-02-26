"use client";

import { fakeParty } from "@/app/data/FakeData";
import useHistoryBack from "@/hooks/HistoryBack";
import { ColorPalette } from "@/theme/themes";
import { Typography } from "antd";
import { FaArrowLeft } from "react-icons/fa6";
import ActivitiesFilter from "../FindAnActivities/filters/Filter";
import ActivitySearch from "../FindAnActivities/filters/Search";
import FriendActivityCard from "./FriendActivityCard";

const FriendsActivityCom = () => {
  const Party = fakeParty;

  const { Title, Text } = Typography;
  const { goBack } = useHistoryBack();
  return (
    <div>
      {/* Header Section */}
      <button onClick={goBack}>
        <div className="flex items-center justify-start">
          <span>
            <FaArrowLeft className="text-2xl text-white" />
          </span>
          <Title
            level={3}
            className="text-left ml-3 pt-2"
            style={{ color: `${ColorPalette?.colorTextPrimary}` }}
          >
            Friends Activity
          </Title>
        </div>
      </button>

      {/* Filter area */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-2 w-full">
        <div>
          <ActivitySearch />
        </div>
        <div className="mb-7 xl:mb-0">
          <ActivitiesFilter />
        </div>
      </div>

      {/* Party */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-7 mt-7 lg:mt-0 ">
        {Party?.map((party, index: number) => (
          <FriendActivityCard data={party} key={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default FriendsActivityCom;
