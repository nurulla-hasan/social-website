"use client";

import { fakeImage } from "@/constant/constant";
import { ColorPalette } from "@/theme/themes";
import { Button, Dropdown, MenuProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
import { RxTextAlignLeft } from "react-icons/rx";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Make Co-host",
  },
  {
    key: "2",
    label: "Remove Friend",
  },
  {
    key: "3",
    label: "Blog",
  },
  {
    key: "4",
    label: "Report",
  },
];

const AttendeesCard = ({ user }: any) => {
  console.log(user);

  return (
    <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-lg">
      {/* Profile Image */}

      <div className="relative">
        <Image
          src={user?.profileImage || fakeImage}
          alt={user?.name || "N/A"}
          width={200}
          height={450}
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* Top Icons (Heart & Dropdown) */}
      <div className="absolute top-[5%] left-0 flex items-center justify-between w-full px-4 z-10">
        {/* Heart Icon - Prevents Navigation on Click */}
        <span
          className="w-8 h-8 bg-gray-500 p-1 flex items-center justify-center rounded-full cursor-pointer"
          style={{ zIndex: "50", color: "red" }}
          onClick={(e) => e.stopPropagation()} // Prevents link navigation
        >
          <LuHeartHandshake className="text-xl text-white" />
        </span>

        {/* Dropdown - Prevents Navigation on Click */}
        <Dropdown
          menu={{ items }}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
        >
          <span
            className="w-8 h-8 p-1 flex items-center justify-center rounded-full cursor-pointer"
            onClick={(e) => e.stopPropagation()} // Prevents link navigation
          >
            <IoEllipsisVerticalSharp
              className="text-xl"
              style={{ zIndex: "50", color: "#fff" }}
            />
          </span>
        </Dropdown>
      </div>

      {/* Content Section */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 flex flex-col justify-end">
        {/* Distance */}
        <p className="text-white text-sm mb-1">{user?.distance || "N/A"}</p>

        {/* Name & Age */}
        <p className="text-white text-lg font-bold">
          {user?.name || "N/A"} - {user?.age || "N/A"}
        </p>

        {/* Location (Handles Long Text) */}
        <p className="text-white text-sm">
          {user?.location?.length > 50 ? (
            <>
              {user?.location.substring(0, 50)}...
              <span className="text-green-400 font-bold cursor-pointer">
                {" "}
                See More.
              </span>
            </>
          ) : (
            user?.location
          )}
        </p>

        {/* button area */}
        <div className="flex justify-start items-center w-full  mt-5">
          <Button
            style={{
              background: "none",
              color: `${ColorPalette?.colorTextPrimary}`,
            }}
          >
            Remove
          </Button>
          <Link href={`/profile/details/${user?.id}`}>
            <Button className="ml-3" type="primary">
              {" "}
              View profile
            </Button>
          </Link>
          <Link href={`/messages`}>
            <div
              className="border w-6 h-6 flex items-center justify-center ml-3 text-white"
              style={{ borderRadius: "25px 25px 0px 25px" }}
            >
              <span className="p-1 inline-block">
                <RxTextAlignLeft className="text-sm" />{" "}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AttendeesCard;
