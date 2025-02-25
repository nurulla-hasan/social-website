"use client";
import { fakeParty } from "@/app/data/FakeData";
import useHistoryBack from "@/hooks/HistoryBack";
import { ColorPalette } from "@/theme/themes";
import { Button, Typography } from "antd";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa6";
import { RxTextAlignLeft } from "react-icons/rx";
import Bio from "../profile/Bio";
const { Title } = Typography;

const HostDetailsCom = ({ id }: any) => {
  const partyHost = fakeParty?.find((host) => host.host === id);
  const host = partyHost?.hostInfo;
  const Party = fakeParty.slice(0, 4);

  // navigation back
  const { goBack } = useHistoryBack();

  return (
    <div>
      {/* back button */}
      <button className="cursor-pointer" onClick={goBack}>
        <div className="flex items-center justify-start">
          <span>
            <FaArrowLeft className="text-2xl text-white" />{" "}
          </span>
          <Title
            level={3}
            className="text-left ml-3 pt-2"
            style={{ color: `${ColorPalette?.colorTextPrimary}` }}
          >
            Activity Host
          </Title>
        </div>
      </button>

      {/* Host top */}
      <div className="ml-3">
        <Title
          level={2}
          className="text-left pt-2"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          {host?.name || "N/A"}{" "}
          <sup
            style={{ fontSize: "17px", fontWeight: "300", marginTop: "-15px" }}
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
          <div className="flex justify-between items-center w-full lg:w-[25%] mt-5">
            <Button
              style={{
                background: "none",
                color: `${ColorPalette?.colorTextPrimary}`,
              }}
            >
              Add friend
            </Button>
            <Button type="primary">Invite to activities</Button>
            <div
              className="border w-6 h-6 flex items-center justify-center"
              style={{ borderRadius: "25px 25px 0px 25px" }}
            >
              <span className="p-1 inline-block">
                <RxTextAlignLeft className="text-sm" />{" "}
              </span>
            </div>

            <button>
              <BiDotsVerticalRounded className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* my bio */}
      <Bio host={host} />
    </div>
  );
};

export default HostDetailsCom;
