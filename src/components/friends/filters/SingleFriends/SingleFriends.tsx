"use client";

import { fakeUser } from "@/app/data/FakeData";
import Bio from "@/components/profile/Bio";
import Participated from "@/components/profile/Participated";
import { ColorPalette } from "@/theme/themes";
import { Button, Typography } from "antd";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa6";
import { LuHeartHandshake } from "react-icons/lu";

const { Title } = Typography;

const SingleFriends = ({ id }: any) => {
  const host = fakeUser?.find((user) => user?.id === Number(id));

  return (
    <>
      {/* Header Section */}
      <div className="flex items-center justify-start">
        <span>
          <FaArrowLeft className="text-2xl text-white" />
        </span>
        <Title
          level={3}
          className="text-left ml-3 pt-2"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Friends
        </Title>
      </div>

      <div className="flex items-center justify-start">
        <div className="ml-3 w-full">
          <Title
            level={2}
            className="text-left pt-2"
            style={{ color: `${ColorPalette?.colorTextPrimary}` }}
          >
            {host?.name || "N/A"}{" "}
            <sup
              style={{
                fontSize: "17px",
                fontWeight: "300",
                marginTop: "-15px",
              }}
            >{`(${host?.pronouns || "N/A"})`}</sup>
          </Title>

          {/* Likes */}
          <div style={{ color: `${ColorPalette?.colorTextPrimary}` }}>
            <span
              className="text-base"
              style={{
                margin: "5px",
                color: `${ColorPalette?.colorTextPrimary}`,
              }}
            >
              {host?.likeReceived?.length || 0} likes Received
            </span>
            <span
              className="text-base"
              style={{
                margin: "5px",
                color: `${ColorPalette?.colorTextPrimary}`,
              }}
            >
              {host?.likeProfile?.length || 0} liked Profiles
            </span>

            <br />

            <button
              className="py-1 px-4  rounded-full mt-3 text-base"
              style={{ background: `${ColorPalette?.colorSecondaryBg}` }}
            >
              {host?.userName || "N/A"}
            </button>

            {/* button area */}
            <div className="flex items-center justify-between mt-5">
              <div className="flex justify-between items-center w-full lg:w-[20%] ">
                <Button
                  style={{
                    background: "none",
                    color: `${ColorPalette?.colorTextPrimary}`,
                  }}
                >
                  Send message
                </Button>
                <Button type="primary">Invite to activities</Button>

                <button>
                  <BiDotsVerticalRounded className="text-2xl" />
                </button>
              </div>
              <span
                className="w-8 h-8 bg-gray-500 p-1 flex items-center justify-center rounded-full cursor-pointer"
                style={{ zIndex: "50", color: "red" }}
                onClick={(e) => e.stopPropagation()} // Prevents link navigation
              >
                <LuHeartHandshake className="text-xl text-white" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <Bio host={host} />

      <div className="mt-7">
        <Title
          level={4}
          className="text-left pt-2"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Participated in these Activities
        </Title>

        <Participated />
      </div>
    </>
  );
};

export default SingleFriends;
