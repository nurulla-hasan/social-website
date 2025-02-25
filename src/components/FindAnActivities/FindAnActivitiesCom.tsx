"use client";

import { fakeParty } from "@/app/data/FakeData";
import { ColorPalette } from "@/theme/themes";
import { Typography } from "antd";
import ActivitiesFilter from "./filters/Filter";
import ActivitySearch from "./filters/Search";
import SinglePartyCard from "./SinglePartyCard";

const FindAnActivitiesCom = () => {
  const Party = fakeParty;

  const { Title, Text } = Typography;
  return (
    <div>
      <Title
        level={3}
        className="text-left"
        style={{ color: `${ColorPalette?.colorTextPrimary}` }}
      >
        Find an Activity
      </Title>
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
          <SinglePartyCard data={party} key={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default FindAnActivitiesCom;
