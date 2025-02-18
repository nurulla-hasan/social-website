"use client";

import { ColorPalette } from "@/theme/themes";
import { Button } from "antd";
import Image from "next/image";

const NotificationCard = ({ notify }: { notify: any }) => {
  return (
    <div
      className="lg:flex items-center justify-between w-full bg-black text-white p-4 rounded-lg shadow-lg border-b"
      style={{ borderBottom: `1px solid ${ColorPalette?.colorSecondaryBg}` }}
    >
      {/* Left Side - Profile Image & Details */}
      <div className="flex items-center gap-4 w-full lg:w-[50%]">
        <Image
          src={notify.user.profileImage}
          alt={notify.user.name}
          width={50}
          height={50}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-lg">You're Invited</p>
          <p className="text-gray-400 text-sm">
            {notify.event.description} on {notify.event.date} from{" "}
            {notify.event.time}
          </p>
        </div>
      </div>

      {/* Right Side - Event Image & Button */}
      <div className="flex items-center gap-4 w-full lg:w-[50%] mt-5 lg:mt-0">
        <div className="flex justify-start items-center w-full">
          <div className="mr-5 ">
            <Image
              src={notify.event.image}
              alt={notify.event.title}
              width={80}
              height={50}
              className="rounded-sm object-cover"
              style={{ width: "100px", height: "50px", objectFit: "cover" }}
            />
          </div>

          <div className="mr-3">
            <h5 className="mb-1">{notify.event.title}</h5>
            <Button type="primary" className="bg-purple-600">
              View Details
            </Button>
          </div>
        </div>
        <div className="text-right w-full">
          <p className="text-gray-500 text-xs text-right">{notify.timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
