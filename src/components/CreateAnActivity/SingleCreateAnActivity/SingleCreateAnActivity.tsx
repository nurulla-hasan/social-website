"use client";

import { fakeParty } from "@/app/data/FakeData";
import { fakeImage } from "@/constant/constant";
import { ColorPalette } from "@/theme/themes";
import { EventDataFormat, EventTimeFormat } from "@/utils/DateFormat";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, MenuProps, Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { MdAccessTime, MdOutlineDateRange } from "react-icons/md";
import DeleteModal from "../ActivitiesModals/DeleteModal";
import EditActivitiesModal from "../ActivitiesModals/EditActivitiesModal";

const SingleCreateAnActivity = ({ id }: any) => {
  const [EditActivityModal, setEditActivityModal] = useState<boolean>(false);
  const [DeleteActivityModal, setDeleteActivityModal] =
    useState<boolean>(false);

  const party = fakeParty?.find((party: any) => party.id === id);
  console.log(party);

  const menuItems: MenuProps["items"] = [
    {
      key: "1",
      label: <button onClick={() => setEditActivityModal(true)}>Edit</button>,
    },
    {
      key: "2",
      label: "Share",
    },
    {
      key: "3",
      label: (
        <button onClick={() => setDeleteActivityModal(true)}>Delete</button>
      ),
    },
  ];

  return (
    <>
      {/* user block modal */}
      <EditActivitiesModal
        isOpen={EditActivityModal}
        onConfirm={() => {
          setEditActivityModal(false);
        }}
        onCancel={() => setEditActivityModal(false)}
      />
      {/* user block modal */}
      <DeleteModal
        isOpen={DeleteActivityModal}
        onConfirm={() => {
          setDeleteActivityModal(false);
        }}
        onCancel={() => setDeleteActivityModal(false)}
      />
      <div>
        {/* top box area */}
        <div
          className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center gap-7 rounded-md overflow-hidden"
          style={{ background: `${ColorPalette.colorSecondaryBg}` }}
        >
          {/* image part */}
          <div>
            <Image
              src={party?.partyImage || fakeImage}
              alt="Logo"
              layout="responsive"
              width={100}
              height={100}
              style={{ maxHeight: "350px", width: "100%", objectFit: "cover" }}
            />
          </div>

          {/* article part */}
          <article className="p-5">
            <h1
              className="text-3xl font-semibold"
              style={{ color: `${ColorPalette?.colorTextPrimary}` }}
            >
              {party?.partyName || "N/A"}
            </h1>
            <h3
              style={{ color: `${ColorPalette?.colorTextSecondary}` }}
              className="text-xl mt-2"
            >
              {party?.distance || "N/A"} Away
            </h3>
            <p
              className="mt-2 text-base flex items-center justify-start"
              style={{ color: `${ColorPalette?.colorTextSecondary}` }}
            >
              <MdOutlineDateRange />{" "}
              <span className="ml-2">
                {EventDataFormat(party?.createdAt || "")}
              </span>
            </p>
            <p
              className="mt-2 text-base flex items-center justify-start"
              style={{ color: `${ColorPalette?.colorTextSecondary}` }}
            >
              <MdAccessTime />{" "}
              <span className="ml-2">
                {EventTimeFormat(party?.eventStartTime!)} -{" "}
                {EventTimeFormat(party?.eventEndTime!)}
              </span>
            </p>

            {/* button */}
            <div className="flex items-center justify-start mt-5">
              <Link href={`/pricing-plan`}>
                <Button type="primary">Boost</Button>
              </Link>
              <Link href={`/messages`}>
                <Button
                  style={{
                    marginLeft: "10px",
                    background: "none",
                    color: "#fff",
                  }}
                >
                  Group Chat
                </Button>
              </Link>

              <Dropdown
                menu={{ items: menuItems }}
                placement="bottom"
                arrow={{ pointAtCenter: true }}
              >
                <Button
                  style={{
                    marginLeft: "10px",
                    background: "none",
                    color: "#fff",
                    border: "none",
                    fontSize: "22px",
                  }}
                >
                  <IoEllipsisVerticalSharp />
                </Button>
              </Dropdown>
            </div>
          </article>
        </div>

        {/* bottom article */}
        <article className="flex flex-col lg:flex-row gap-[20px]">
          <div className="w-full lg:w-[65%]">
            {/* <!-- Content for the first child --> */}

            {/* activities */}
            <div
              className="mt-5 rounded-md p-5"
              style={{
                background: `${ColorPalette?.colorSecondaryBg}`,
                color: `${ColorPalette?.colorTextPrimary}`,
              }}
            >
              <h2 className="font-semibold text-xl">Activity Details</h2>

              <p className="text-base mt-3">Theme - {party?.theme || "N/A"}</p>
              <p className="text-base mt-1">
                Activity - {party?.Activity || "N/A"}
              </p>
              <p className="text-base mt-1">
                Age Range - {party?.ageRange || "N/A"}
              </p>
              <p className="text-base mt-1">
                Number of guests per participant -{" "}
                {party?.perParticipant || "N/A"}
              </p>
            </div>

            {/* avatar */}
            <div
              className="flex items-center justify-between mt-5 rounded-md p-5"
              style={{
                background: `${ColorPalette?.colorSecondaryBg}`,
                color: `${ColorPalette?.colorTextPrimary}`,
              }}
            >
              <div>
                <h2 className="text-xl font-semibold">Attendees</h2>
                <p className="text-base">
                  {party?.attendance || 0}/{party?.totalParticipants || 0}
                </p>
              </div>

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
            </div>
          </div>
          <div className="w-full lg:w-[35%]">
            {/* <!-- Content for the last child --> */}
            {/* note */}
            <div
              className="mt-5 p-5 rounded-md pb-24"
              style={{
                background: `${ColorPalette.colorSecondaryBg}`,
                color: `${ColorPalette?.colorTextPrimary}`,
              }}
            >
              <h2 className="font-semibold text-xl">Note</h2>

              <p className="mt-3">{party?.note || "N/A"}</p>
              <p className="mt-3">💌 Note for Participants:</p>
              <ul className="pl-5">
                <li>
                  Parking is limited, so consider carpooling or using public
                  transport.
                </li>
                <li>Only participants within a 10-mile radius are eligible.</li>
              </ul>
              <p>Let’s make it a night to remember! 🌟</p>
            </div>
          </div>
        </article>

        {/* Map */}
        <div
          className="lg:flex items-center justify-between rounded-md mt-5 gap-8"
          style={{ background: `${ColorPalette.colorSecondaryBg}` }}
        >
          <div className="w-full lg:w-[20%]">
            <Image
              src="/assets/images/login.png"
              alt="Logo"
              layout="responsive"
              width={100}
              height={100}
              style={{
                maxHeight: "180px",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div
            className="w-full lg:w-[80%] lg:flex items-center justify-between p-5"
            style={{ color: `${ColorPalette?.colorTextPrimary}` }}
          >
            <div className="mb-7 lg:mb-0">
              <h2 className="text-xl font-semibold">Location</h2>
              <p className="text-base">{party?.address || "N/A"}</p>
            </div>

            <Link href={`/map`}>
              <Button
                style={{
                  background: "none",
                  padding: "15px 22px",
                  color: "#fff",
                }}
              >
                View Map
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCreateAnActivity;
