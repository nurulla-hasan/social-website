"use client";

import { fakeUser } from "@/app/data/FakeData";
import { Typography } from "antd";
import AttendeesCard from "./AttendeesCard";

const { Title } = Typography;

const user = fakeUser;

const AttendeesCom = () => {
  return (
    <div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-7 mt-7">
        {user?.map((user, index: number) => (
          <AttendeesCard user={user} key={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default AttendeesCom;
