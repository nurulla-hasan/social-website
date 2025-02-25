"use client";

import { fakeParty } from "@/app/data/FakeData";
import useBackNavigation from "@/hooks/BackUrl";
import { ColorPalette } from "@/theme/themes";
import { Typography } from "antd";
import { FaArrowLeft } from "react-icons/fa6";
import YourActivitiesCard from "./YourActivitiesCard";

const YourActivitiesCom = () => {
  const Party = fakeParty;
  const { Title } = Typography;

  // navigation back
  const dynamicCurrentPath = "/your-activities";
  const dynamicFallbackUrl = "/find-an-activities";

  // Using the hook with dynamic currentPath and fallbackUrl
  const { handleBack } = useBackNavigation(
    dynamicCurrentPath,
    dynamicFallbackUrl
  );

  return (
    <div>
      {/* Header Section */}
      <button onClick={handleBack}>
        <div className="flex items-center justify-start">
          <span>
            <FaArrowLeft className="text-2xl text-white" />
          </span>
          <Title
            level={3}
            className="text-left ml-3 pt-2"
            style={{ color: `${ColorPalette?.colorTextPrimary}` }}
          >
            Your Activity
          </Title>
        </div>
      </button>

      {/* Party */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-7 mt-7 ">
        {Party?.map((party, index: number) => (
          <YourActivitiesCard data={party} key={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default YourActivitiesCom;
