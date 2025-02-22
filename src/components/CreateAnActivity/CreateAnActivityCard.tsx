import { fakeImage } from "@/constant/constant";
import { ColorPalette } from "@/theme/themes";
import { EventDataFormat } from "@/utils/DateFormat";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";

const CreateAnActivityCard = ({ data }: any) => {
  return (
    <>
      <Link href={`/create-an-activity/details/${data?.id}`}>
        <Card
          className=" text-white rounded-[50px] p-3 shadow-lg w-full"
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
            <div className="text-lg font-semibold flex justify-between items-center">
              <h3 style={{ color: `${ColorPalette?.colorTextPrimary}` }}>
                {data?.partyName}
              </h3>
              <span style={{ color: `${ColorPalette?.colorTextPrimary}` }}>
                {data?.requireAge}
              </span>
            </div>
            <h3 style={{ color: `${ColorPalette?.colorTextSecondary}` }}>
              {data?.address?.length > 40
                ? data?.address?.substring(0, 40) + "..."
                : data?.address}
            </h3>
          </div>

          <div className="mt-3 flex justify-between items-center">
            <h4 style={{ color: `${ColorPalette?.colorTextPrimary}` }}>
              {EventDataFormat(data?.date)}
            </h4>{" "}
            <span style={{ color: `${ColorPalette?.colorTextPrimary}` }}>
              {data?.distance}
            </span>
          </div>

          <div className="flex items-center justify-between gap-2 mt-3">
            <Link href={`/attendees`}>
              <Avatar.Group
                max={{
                  count: 2,
                  style: { color: "#f56a00", backgroundColor: "#fde3cf" },
                }}
              >
                <Avatar src="https://randomuser.me/api/portraits/men/21.jpg" />
                <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: "#1677ff" }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>
            </Link>

            <Link href={`/pricing-plan`}>
              <Button
                type="primary"
                className="mt-3 bg-purple-600 hover:bg-purple-700"
              >
                Boost
              </Button>
            </Link>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default CreateAnActivityCard;
