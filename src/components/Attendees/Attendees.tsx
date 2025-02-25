"use client";

import { fakeUser } from "@/app/data/FakeData";
import useHistoryBack from "@/hooks/HistoryBack";
import { ColorPalette } from "@/theme/themes";
import { Typography } from "antd";
import { FaArrowLeft } from "react-icons/fa6";
import AttendeesCard from "./AttendeesCard";

const { Title } = Typography;

const user = fakeUser;

const AttendeesCom = () => {
  const { goBack } = useHistoryBack();

  return (
    <div>
      <button className="cursor-pointer" onClick={goBack}>
        <div className="flex items-center justify-start">
          <span>
            <FaArrowLeft className="text-2xl text-white" />
          </span>
          <Title
            level={3}
            className="text-left ml-3 pt-2"
            style={{ color: `${ColorPalette?.colorTextPrimary}` }}
          >
            Attendees (13/120)
          </Title>
        </div>
      </button>

      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7 mt-7">
        {user?.map((user, index: number) => (
          <AttendeesCard user={user} key={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default AttendeesCom;
