import { fakeImage } from "@/constant/constant";
import { ColorPalette } from "@/theme/themes";
import { Avatar } from "antd";
import Link from "next/link";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

const HostInfo = ({ partyHost }: any) => {
  const host = partyHost?.hostInfo;
  console.log(host);
  return (
    <>
      <div
        className="mt-5 p-5 rounded-md"
        style={{
          background: `${ColorPalette.colorSecondaryBg}`,
          color: `${ColorPalette?.colorTextPrimary}`,
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Activity Host</h2>
            <div className="flex items-center justify-start mt-3">
              <Avatar src={host?.profileImage || fakeImage} size="default" />
              <h3 className="ml-3 text-base">Robert Smith, 21</h3>
            </div>
          </div>

          <Link href={`/host/details/${partyHost?.host}`}>
            {" "}
            <button className="text-white">
              <HiOutlineArrowTopRightOnSquare className="text-2xl" />{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HostInfo;
