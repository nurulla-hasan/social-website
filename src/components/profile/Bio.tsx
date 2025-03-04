"use client";
import { fakeParty } from "@/app/data/FakeData";
import { fakeImage } from "@/constant/constant";
import { ColorPalette } from "@/theme/themes";
import { Typography } from "antd";
import Image from "next/image";
import SinglePartyCard from "../FindAnActivities/SinglePartyCard";
const { Title, Text } = Typography;
const Party = fakeParty.slice(0, 4);

const Bio = ({ host }: any) => {
  return (
    <>
      <div className="mt-7">
        <Title
          level={4}
          className="text-left pt-2"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          My Bio
        </Title>

        <p
          className="text-base"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          {host?.bio || "N/A"}
        </p>

        {/* Image gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-7 mt-7">
          {host?.gallery?.map((img: string, i: number) => (
            <Image
              key={i}
              src={img ? img : fakeImage}
              alt=""
              width={150}
              height={300}
              style={{
                width: "100%",
                height: "450px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          ))}
        </div>

        {/* About me */}
        <div className="mt-7">
          <Title
            level={4}
            className="text-left"
            style={{ color: `${ColorPalette?.colorTextPrimary}` }}
          >
            About me
          </Title>

          <div
            style={{ color: ColorPalette?.colorPrimaryLight }}
            className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 gap-2"
          >
            {[
              "Single",
              "White skin",
              "6' 3\"",
              "Shawnvile High School",
              "A very long button text example",
            ].map((interest: string, i: number) => (
              <button
                key={i}
                className="py-2 px-4 rounded-full text-base capitalize w-full text-ellipsis overflow-hidden whitespace-nowrap"
                style={{ background: ColorPalette?.colorSecondaryBg }}
                title={interest} // Shows full text on hover
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        {/* My interest */}
        <div className="mt-7">
          <Title
            level={4}
            className="text-left"
            style={{ color: `${ColorPalette?.colorTextPrimary}` }}
          >
            My interest
          </Title>

          <div
            style={{ color: ColorPalette?.colorPrimaryLight }}
            className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 gap-2"
          >
            {host?.interests?.map((interest: string, i: number) => (
              <button
                key={i}
                className="py-2 px-4 rounded-full text-base capitalize w-full text-ellipsis overflow-hidden whitespace-nowrap"
                style={{ background: ColorPalette?.colorSecondaryBg }}
                title={interest} // Shows full text on hover
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        {/* location */}
        <div className="mt-7">
          <Title
            level={4}
            className="text-left pt-2"
            style={{ color: `${ColorPalette?.colorTextPrimary}` }}
          >
            Location
          </Title>

          <div style={{ color: `${ColorPalette?.colorTextPrimary}` }}>
            <p className="text-base">2 Miles Away</p>
            <p className="text-base">Richardson, California</p>
          </div>
        </div>

        {/* Future Attendance */}

        <div className="mt-7">
          <Title
            level={4}
            className="text-left pt-2"
            style={{ color: `${ColorPalette?.colorTextPrimary}` }}
          >
            Future Attendance
          </Title>

          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-7 ">
            {Party?.map((party: any, index: number) => (
              <SinglePartyCard data={party} key={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bio;
