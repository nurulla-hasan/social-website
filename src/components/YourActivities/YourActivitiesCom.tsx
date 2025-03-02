"use client";

import { fakeParty } from "@/app/data/FakeData";
import YourActivitiesCard from "./YourActivitiesCard";

const YourActivitiesCom = () => {
  const Party = fakeParty;

  return (
    <div>
      {/* Party */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-7 mt-7 ">
        {Party?.map((party, index: number) => (
          <YourActivitiesCard data={party} key={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default YourActivitiesCom;
