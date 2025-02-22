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
    label: "Block",
  },
  {
    key: "2",
    label: "Report",
  },
];

const FindFriendsCard = ({ user }: any) => {
  return (
    <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-lg">
      {/* Profile Image */}
      <Link href={`/friends/details/${user?.id}`}>
        <div className="relative">
          <Image
            src={user?.profileImage || fakeImage}
            alt={user?.name || "N/A"}
            width={200}
            height={450}
            className="w-full h-[500px] object-cover"
          />
        </div>
      </Link>

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

      <Link href={`/friends/details/${user?.id}`}>
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

          {/* Buttons */}
          <div className="lg:flex flex-row gap-2 mt-3 items-center justify-between">
            <Link href={`/messages`} onClick={(e) => e.stopPropagation()}>
              <Button
                className="bg-black text-white border border-white px-4 py-2 rounded-lg w-full"
                style={{
                  background: "none",
                  color: `${ColorPalette?.colorPrimaryLight}`,
                }}
              >
                Add Friend
              </Button>
            </Link>

            <Link href={`/messages`} onClick={(e) => e.stopPropagation()}>
              <Button
                type="primary"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full mt-2 lg:mt-0"
              >
                Invite to Activity
              </Button>
            </Link>

            <Link href={`/messages`} className="">
              <div
                className="border w-6 h-6 flex items-center justify-center text-white mt-4 lg:mt-0"
                style={{ borderRadius: "25px 25px 0px 25px" }}
              >
                <span className="p-1 inline-block">
                  <RxTextAlignLeft className="text-sm" />{" "}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FindFriendsCard;
