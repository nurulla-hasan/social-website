"use client";

import { fakeParty } from "@/app/data/FakeData";
import { ColorPalette } from "@/theme/themes";
import { Button, Typography } from "antd";
import { FaArrowLeft } from "react-icons/fa6";
import { TbPlus } from "react-icons/tb";
import CreateAnActivityCard from "./CreateAnActivityCard";

const CreateAnActivityCom = () => {
  const Party = fakeParty.slice(2, 6);

  const { Title } = Typography;
  return (
    <div>
      {/* Header Section */}
      <div className="flex items-center justify-start">
        <span>
          <FaArrowLeft className="text-2xl text-white" />
        </span>
        <Title
          level={3}
          className="text-left ml-3 pt-2"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Create an Activity
        </Title>
      </div>

      <div className="my-7">
        <Button
          type="primary"
          style={{
            padding: "20px",
            fontWeight: "500",
            fontSize: "17px",
            borderRadius: "10px !important",
          }}
        >
          <span>
            <TbPlus
              className="text-white text-2xl"
              style={{ color: `${ColorPalette?.colorPrimaryLight}` }}
            />
          </span>{" "}
          Create an Activities
        </Button>
      </div>

      {/* Party */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7 ">
        {Party?.map((party, index: number) => (
          <CreateAnActivityCard data={party} key={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default CreateAnActivityCom;
