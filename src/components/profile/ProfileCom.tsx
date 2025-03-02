"use client";

import { fakeParty } from "@/app/data/FakeData";
import { fakeImage } from "@/constant/constant";
import useBackNavigation from "@/hooks/BackUrl";
import { ColorPalette } from "@/theme/themes";
import { Button, Progress, Typography } from "antd";
import Link from "next/link";
import Bio from "./Bio";
import Participated from "./Participated";

const { Title } = Typography;

const ProfileCom = () => {
  const host = fakeParty[0]?.hostInfo;

  // navigation back
  const dynamicCurrentPath = "/profile";
  const dynamicFallbackUrl = "/find-an-activities";

  // Using the hook with dynamic currentPath and fallbackUrl
  const { handleBack } = useBackNavigation(
    dynamicCurrentPath,
    dynamicFallbackUrl
  );

  return (
    <>
      <div className="flex items-center justify-start">
        {/* Profile Image with Circular Progress Bar */}
        <div className="relative flex items-center justify-center mt-6">
          {/* Circular Progress Bar */}
          <Progress
            type="circle"
            percent={80}
            format={() => ""}
            strokeColor={{
              "0%": "#00FF00",
              "100%": "#00AA00",
            }}
            strokeWidth={5}
            strokeLinecap="round" // Ensures smooth rounded ends
            width={150}
            trailColor="rgba(255, 255, 255, 0.2)"
          />

          {/* Profile Image Inside Progress Bar */}
          <div className="absolute w-[140px] h-[140px] rounded-full overflow-hidden">
            <img
              src={host?.profileImage || fakeImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Progress Percentage Label */}
          <div className="absolute bottom-[-14px] bg-green-500 text-black text-xs font-bold px-2 py-1 rounded-lg">
            80%
          </div>
        </div>

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

            {/* Edit button */}
            <div className="mt-4">
              <Link href={`/profile/update`}>
                <Button style={{ background: "none", color: "white" }}>
                  Edit profile
                </Button>
              </Link>
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

export default ProfileCom;
