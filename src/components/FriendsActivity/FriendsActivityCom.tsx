"use client";

import { fakeParty } from "@/app/data/FakeData";
import ActivitiesFilter from "../FindAnActivities/filters/Filter";
import ActivitySearch from "../FindAnActivities/filters/Search";
import FriendActivityCard from "./FriendActivityCard";

const FriendsActivityCom = () => {
  const Party = fakeParty;

  return (
    <div>
      {/* Filter area */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-2 w-full">
        <div>
          <ActivitySearch placeholder="Search here..." />
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
