"use client";

import useHistoryBack from "@/hooks/HistoryBack";
import { ColorPalette } from "@/theme/themes";
import { Button, Card, Typography } from "antd";
import { useState } from "react";
import { BiPowerOff } from "react-icons/bi";
import { FaArrowLeft, FaRegCalendar } from "react-icons/fa6";
import { RiBatteryChargeLine } from "react-icons/ri";
import { SlEnergy } from "react-icons/sl";
import { TbCoinYuanFilled, TbDatabaseImport } from "react-icons/tb";
import PaymentModal from "../payment/PaymentModal";
const { Title } = Typography;

const plans = [
  {
    title: "Power Boost",
    price: "$11.00",
    details: "Profile Booster: 6 Hours\nEvent Booster: 12 Hours (+1 Reboost)",
    selected: true,
    icon: <SlEnergy />,
  },
];

const profileBoosters = [
  { title: "1 Hour", price: "$2.00", details: "No Reboost" },
  { title: "3 Hours", price: "$5.00", details: "No Reboost" },
  { title: "6 Hours", price: "$8.00", details: "No Reboost" },
  { title: "12 Hours", price: "$15.00", details: "+1 Reboost" },
  { title: "1 Day", price: "$22.00", details: "+1 Reboost" },
];

const eventBoosters = [
  { title: "4 Hours", price: "$3.00", details: "No Reboost" },
  { title: "6 Hours", price: "$5.00", details: "No Reboost" },
  { title: "12 Hours", price: "$8.00", details: "+1 Reboost" },
  { title: "1 Day", price: "$15.00", details: "+1 Reboost" },
  { title: "3 Days", price: "$28.00", details: "+1 Reboost" },
];

const packages = [
  {
    title: "Basic Boost",
    price: "$7.00",
    details: "Profile Booster: 3 Hours\nEvent Booster: 6 Hours",
    icon: <BiPowerOff />,
  },
  {
    title: "Power Boost",
    price: "$11.00",
    details: "Profile Booster: 6 Hours\nEvent Booster: 12 Hours",
    icon: <RiBatteryChargeLine />,
  },
  {
    title: "Elite Exposure",
    price: "$24.00",
    details:
      "Profile Booster: 12 Hours (+1 Reboost)\nEvent Booster: 1 Day (+2 Reboosts)",
    icon: <TbCoinYuanFilled />,
  },
  {
    title: "Weekend Warrior",
    price: "$45.00",
    details:
      "Profile Booster: 1 Day (+1 Reboost)\nEvent Booster: 3 Days (+2 Reboosts)",
    icon: <FaRegCalendar />,
  },
  {
    title: "Max Visibility",
    price: "$50.00",
    details: "Profile Booster: 3 Hours\nEvent Booster: 3 Days (+2 Reboosts)",
    icon: <TbDatabaseImport />,
  },
];

const PricingPlans = () => {
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false);
  const cardStyle = {
    body: {
      background: `${ColorPalette?.colorSecondaryBg}`,
      color: `${ColorPalette?.colorPrimaryLight}`,
      textAlign: "center",
    },
  };

  const { goBack } = useHistoryBack();

  return (
    <>
      {/* user block modal */}
      <PaymentModal
        isOpen={openPaymentModal}
        onConfirm={() => {
          setOpenPaymentModal(false);
        }}
        onCancel={() => setOpenPaymentModal(false)}
      />

      {/* Header Section */}
      <button className="cursor-pointer" onClick={goBack}>
        <div className="flex items-center justify-start">
          <span>
            <FaArrowLeft className="text-2xl text-white" />
          </span>
          <Title
            level={3}
            className="text-left ml-3 pt-2"
            style={{ color: `${ColorPalette?.colorTextPrimary}` }}
          >
            Boost Plan
          </Title>
        </div>
      </button>

      <div className=" bg-black text-white p-6">
        <h2 className="text-xl font-bold mb-4">Current Plans</h2>
        <div className="flex justify-start mb-8 ">
          {plans?.map((plan, index) => (
            <Card
              style={{ overflow: "hidden" }}
              // @ts-ignore
              styles={cardStyle}
              key={index}
              className="bg-gray-900 text-white p-4 w-64 rounded-lg border border-gray-700 "
            >
              <p className="bg-green-400 rounded-full flex items-center justify-center text-black w-9 h-9 text-xl mx-auto">
                {plan.icon}
              </p>
              <h3 className="text-lg font-semibold text-purple-400">
                {plan.title}
              </h3>
              <p className="text-2xl font-bold">{plan.price}</p>
              <p className="text-sm">{plan.details}</p>
              <Button type="primary" className="w-full mt-4">
                Selected
              </Button>
            </Card>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">Profile Boosters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {profileBoosters.map((booster, index) => (
            // @ts-ignore
            <Card style={{ overflow: "hidden" }} styles={cardStyle} key={index}>
              <h3 className="text-lg font-semibold text-purple-400">
                {booster.title}
              </h3>
              <p className="text-2xl font-bold">{booster.price}</p>
              <p className="text-sm">{booster.details}</p>
              <Button
                type="primary"
                className="w-full mt-4"
                onClick={() => setOpenPaymentModal(true)}
              >
                Select Plan
              </Button>
            </Card>
          ))}
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4">Event Boosters</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {eventBoosters.map((booster, index) => (
            <Card
              style={{ overflow: "hidden" }}
              // @ts-ignore
              styles={cardStyle}
              key={index}
              className="bg-gray-900 text-white p-4 rounded-lg border border-gray-700"
            >
              <h3 className="text-lg font-semibold text-purple-400">
                {booster.title}
              </h3>
              <p className="text-2xl font-bold">{booster.price}</p>
              <p className="text-sm">{booster.details}</p>
              <Button
                type="primary"
                className="w-full mt-4"
                onClick={() => setOpenPaymentModal(true)}
              >
                Select Plan
              </Button>
            </Card>
          ))}
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4">Buy Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {packages.map((pkg, index) => (
            <Card
              // @ts-ignore
              styles={cardStyle}
              style={{ overflow: "hidden" }}
              key={index}
              className="bg-gray-900 text-white p-4 rounded-lg border border-gray-700"
            >
              <div className="flex items-center justify-center my-2">
                <p className=" text-xl0 bg-green-400 rounded-full flex items-center justify-center text-black w-9 h-9 text-xl mx-auto">
                  {pkg.icon}
                </p>
              </div>
              <h3 className="text-lg font-semibold text-purple-400">
                {pkg.title}
              </h3>
              <p className="text-2xl font-bold">{pkg.price}</p>
              <p className="text-sm">{pkg.details}</p>
              <Button
                type="primary"
                className="w-full mt-4"
                onClick={() => setOpenPaymentModal(true)}
              >
                Select Plan
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingPlans;
