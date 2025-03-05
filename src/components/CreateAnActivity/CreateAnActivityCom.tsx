"use client";

import { fakeParty } from "@/app/data/FakeData";
import { ColorPalette } from "@/theme/themes";
import { Button } from "antd";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import ActivitiesModal from "./ActivitiesModals/ActivitiesModal";
import CreateAnActivityCard from "./CreateAnActivityCard";

const CreateAnActivityCom = () => {
  const [CreateAnActivityOpen, setCreateAnActivityOpen] =
    useState<boolean>(false);

  const Party = fakeParty.slice(2, 6);

  return (
    <>
      {/* user block modal */}
      <ActivitiesModal
        isOpen={CreateAnActivityOpen}
        onConfirm={() => {
          // console.log("User Blocked");
          setCreateAnActivityOpen(false);
        }}
        onCancel={() => setCreateAnActivityOpen(false)}
      />

      <div>
        <div className="capitalize">
          <Button
            onClick={() => setCreateAnActivityOpen(true)}
            type="primary"
            style={{
              padding: "20px",
              fontWeight: "500",
              fontSize: "17px",
              borderRadius: "10px !important",
              textTransform: "capitalize",
            }}
          >
            <span>
              <TbPlus
                className="text-white text-2xl"
                style={{ color: `${ColorPalette?.colorPrimaryLight}` }}
              />
            </span>{" "}
            Create an Activity
          </Button>
        </div>

        {/* Party */}
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-7 mt-3">
          {Party?.map((party, index: number) => (
            <CreateAnActivityCard data={party} key={index + 1} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CreateAnActivityCom;
