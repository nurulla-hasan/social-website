import { fakeImage } from "@/constant/constant";
import { ColorPalette } from "@/theme/themes";
import { EventDataFormat } from "@/utils/DateFormat";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";

const FriendActivityCard = ({ data }: any) => {
  return (
    <>
      <Link href={`/friends-activity/details/${data?.id}`}>
        <Card
          className=" text-white rounded-[50px] p-3 shadow-lg w-full h-full"
          style={{
            background: `${ColorPalette?.colorSecondaryBg}`,
            border: "none",
          }}
          cover={
            <div className="relative">
              <Image
                src={data?.partyImage ? data?.partyImage : fakeImage}
                alt={data?.partyName}
                width={320}
                height={180}
                layout="responsive"
                className="rounded-t-2xl"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>
          }
        >
          <div>
            <div className="text-lg font-semibold flex justify-between items-center ">
              <h3
                style={{ color: `${ColorPalette?.colorTextPrimary}` }}
                className="text-xl lg:text-2xl text-ellipsis overflow-hidden whitespace-nowrap"
              >
                {data?.partyName}
              </h3>
              <span
                style={{ color: `${ColorPalette?.colorTextPrimary}` }}
                className="text-xl font-normal text-[#BFBFBF]"
              >
                {data?.requireAge}
              </span>
            </div>
            <h3
              style={{ color: `${ColorPalette?.colorTextLight}` }}
              className="mt-1 text-md lg:text-lg  text-ellipsis overflow-hidden whitespace-nowrap"
            >
              {data?.address?.length > 30
                ? data?.address?.substring(0, 30) + "..."
                : data?.address}
            </h3>
          </div>

          <div className="mt-1 flex justify-between items-center ">
            <h4
              style={{ color: `${ColorPalette?.colorTextPrimary}` }}
              className="text-md lg:text-lg"
            >
              {EventDataFormat(data?.date)}
            </h4>{" "}
            <span
              style={{ color: `${ColorPalette?.colorTextPrimary}` }}
              className="text-md lg:text-lg"
            >
              {data?.distance}
            </span>
          </div>

          <div className="flex items-center justify-between gap-2 mt-7">
            <Link href={`/attendees`}>
              <Avatar.Group
                max={{
                  count: 3,
                  style: { color: "#000", backgroundColor: "#7DFF19" },
                }}
              >
                <Avatar src="https://randomuser.me/api/portraits/men/20.jpg" />
                <Avatar src="https://randomuser.me/api/portraits/men/21.jpg" />
                <Avatar
                  style={{ backgroundColor: "#f56a00" }}
                  src="https://randomuser.me/api/portraits/men/26.jpg"
                ></Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: "red" }}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: "#1677ff" }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>
            </Link>

            <Button
              size="large"
              type="primary"
              className=" bg-purple-600 hover:bg-purple-700"
            >
              Attend
            </Button>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default FriendActivityCard;
