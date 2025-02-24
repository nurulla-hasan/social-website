"use client";

import { ColorPalette } from "@/theme/themes";
import { RightOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import BioInfo from "./updateForms/BioInfo";
import DynamicModalForUserDataUpdate from "./updateForms/DynamicModalForUserDataUpdate";
import HeightSelectorForm from "./updateForms/Height/UpdateHeight";
import InterestUpdateForm from "./updateForms/Interest/InterestedUpdateForm";
import PictureUpdate from "./updateForms/PictureUpdate";
import AddSchool from "./updateForms/addSchool/AddSchool";
import UpdateGender from "./updateForms/genderUpdate/Gender";
import LookingFor from "./updateForms/looingFor/LookingFor";
import ProfessionUpdateForm from "./updateForms/profession/Profession";
import Relationship from "./updateForms/relationship/Relationship";
import SkinColor from "./updateForms/skinColor/SkinColor";

const { Title } = Typography;

const UpdateCom = () => {
  const [bioUpdateModal, setBioUpdateModal] = useState<boolean>(false);
  const [InterestModal, setInterestUpdateModal] = useState<boolean>(false);
  const [LookingForModal, setLookingForUpdateModal] = useState<boolean>(false);
  const [SkinColorModal, setSkinColorModal] = useState<boolean>(false);
  const [AddSchoolModal, setAddSchoolModal] = useState<boolean>(false);
  const [UpdateGenderModal, setUpdateGenderModal] = useState<boolean>(false);
  const [ProfessionModal, setProfessionModal] = useState<boolean>(false);
  const [HeightUpdateModal, setHeightUpdateModal] = useState<boolean>(false);
  const [RelationshipModal, setRelationshipUpdateModal] =
    useState<boolean>(false);

  const handleCloseModal = () => {
    setBioUpdateModal(false);
  };

  return (
    <>
      <DynamicModalForUserDataUpdate
        isOpen={bioUpdateModal}
        onConfirm={() => setBioUpdateModal(false)}
        onCancel={() => setBioUpdateModal(false)}
        onClose={handleCloseModal}
      >
        <BioInfo onUpdateSuccess={handleCloseModal} />
      </DynamicModalForUserDataUpdate>

      {/* interest */}
      <DynamicModalForUserDataUpdate
        isOpen={InterestModal}
        onConfirm={() => setInterestUpdateModal(false)}
        onCancel={() => setInterestUpdateModal(false)}
        onClose={handleCloseModal}
      >
        <InterestUpdateForm onUpdateSuccess={handleCloseModal} />
      </DynamicModalForUserDataUpdate>

      {/* Looking for */}
      <DynamicModalForUserDataUpdate
        isOpen={LookingForModal}
        onConfirm={() => setLookingForUpdateModal(false)}
        onCancel={() => setLookingForUpdateModal(false)}
        onClose={handleCloseModal}
      >
        <LookingFor onUpdateSuccess={handleCloseModal} />
      </DynamicModalForUserDataUpdate>

      {/* Relationship Status */}
      <DynamicModalForUserDataUpdate
        isOpen={RelationshipModal}
        onConfirm={() => setRelationshipUpdateModal(false)}
        onCancel={() => setRelationshipUpdateModal(false)}
        onClose={handleCloseModal}
      >
        <Relationship onUpdateSuccess={handleCloseModal} />
      </DynamicModalForUserDataUpdate>

      {/* Skin color */}
      <DynamicModalForUserDataUpdate
        isOpen={SkinColorModal}
        onConfirm={() => setSkinColorModal(false)}
        onCancel={() => setSkinColorModal(false)}
        onClose={handleCloseModal}
      >
        <SkinColor onUpdateSuccess={handleCloseModal} />
      </DynamicModalForUserDataUpdate>

      {/* Update gender */}
      <DynamicModalForUserDataUpdate
        isOpen={UpdateGenderModal}
        onConfirm={() => setUpdateGenderModal(false)}
        onCancel={() => setUpdateGenderModal(false)}
        onClose={handleCloseModal}
      >
        <UpdateGender onUpdateSuccess={handleCloseModal} />
      </DynamicModalForUserDataUpdate>

      {/* add school graduation */}
      <DynamicModalForUserDataUpdate
        isOpen={AddSchoolModal}
        onConfirm={() => setAddSchoolModal(false)}
        onCancel={() => setAddSchoolModal(false)}
        onClose={handleCloseModal}
      >
        <AddSchool onUpdateSuccess={handleCloseModal} />
      </DynamicModalForUserDataUpdate>

      {/* Profession */}
      <DynamicModalForUserDataUpdate
        isOpen={ProfessionModal}
        onConfirm={() => setProfessionModal(false)}
        onCancel={() => setProfessionModal(false)}
        onClose={handleCloseModal}
      >
        <ProfessionUpdateForm onUpdateSuccess={handleCloseModal} />
      </DynamicModalForUserDataUpdate>

      {/* Update height */}
      <DynamicModalForUserDataUpdate
        isOpen={HeightUpdateModal}
        onConfirm={() => setHeightUpdateModal(false)}
        onCancel={() => setHeightUpdateModal(false)}
        onClose={handleCloseModal}
      >
        <HeightSelectorForm onUpdateSuccess={handleCloseModal} />
      </DynamicModalForUserDataUpdate>

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
            Edit information
          </Title>
        </div>

        {/* Update information */}
        <div>
          <PictureUpdate />

          <div className="w-full mx-auto mt-10 text-white">
            <div className="bg-black rounded-lg shadow-md">
              {/* Direct Rendering of Profile Data */}

              {/* Bio */}
              <div
                className="px-4 py-3 flex justify-between items-center"
                onClick={() => setBioUpdateModal(true)}
              >
                <div className="w-full cursor-pointer">
                  <p className="text-base text-gray-400">My Bio</p>
                  <div className="bg-[#171717] p-4 rounded-md flex items-center justify-between">
                    <p>
                      Just here for good vibes, great parties, and meeting
                      amazing people. Loves dancing, random late-night talks,
                      and exploring new places. Let’s make some unforgettable
                      memories! 🥂🎉
                    </p>
                    <RightOutlined className="text-gray-500 text-xs ml-2" />
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div
                className="px-4 py-3 flex justify-between items-center"
                onClick={() => setInterestUpdateModal(true)}
              >
                <div className="w-full cursor-pointer">
                  <p className="text-base text-gray-400">Interests</p>
                  <div className="bg-[#171717] p-4 rounded-md flex items-center justify-between">
                    <p>Watching Movies, Gym, Football, Photography, Funny</p>
                    <RightOutlined className="text-gray-500 text-xs ml-2" />
                  </div>
                </div>
              </div>

              {/* What are you looking for? */}
              <div
                className="px-4 py-3 flex justify-between items-center"
                onClick={() => setLookingForUpdateModal(true)}
              >
                <div className="w-full cursor-pointer">
                  <p className="text-base text-gray-400">
                    What are you looking for?
                  </p>
                  <div className="bg-[#171717] p-4 rounded-md flex items-center justify-between">
                    <p>💞 Long Term Partner</p>
                    <RightOutlined className="text-gray-500 text-xs ml-2" />
                  </div>
                </div>
              </div>

              {/* Relationship Status */}
              <div
                className="px-4 py-3 flex justify-between items-center"
                onClick={() => setRelationshipUpdateModal(true)}
              >
                <div className="w-full cursor-pointer">
                  <p className="text-base text-gray-400">Relationship Status</p>
                  <div className="bg-[#171717] p-4 rounded-md flex items-center justify-between">
                    <p>Single</p>
                    <RightOutlined className="text-gray-500 text-xs ml-2" />
                  </div>
                </div>
              </div>

              {/* Height */}
              <div
                className="px-4 py-3 flex justify-between items-center"
                onClick={() => setHeightUpdateModal(true)}
              >
                <div className="w-full cursor-pointer">
                  <p className="text-base text-gray-400">Height</p>
                  <div className="bg-[#171717] p-4 rounded-md flex items-center justify-between">
                    <p>5ft 11in</p>
                    <RightOutlined className="text-gray-500 text-xs ml-2" />
                  </div>
                </div>
              </div>

              {/* Race/Skin Color */}
              <div
                className="px-4 py-3 flex justify-between items-center"
                onClick={() => setSkinColorModal(true)}
              >
                <div className="w-full cursor-pointer">
                  <p className="text-base text-gray-400">Race/Skin Color</p>
                  <div className="bg-[#171717] p-4 rounded-md flex items-center justify-between">
                    <p>White (Caucasian)</p>
                    <RightOutlined className="text-gray-500 text-xs ml-2" />
                  </div>
                </div>
              </div>

              {/* School */}
              <div
                className="px-4 py-3 flex justify-between items-center"
                onClick={() => setAddSchoolModal(true)}
              >
                <div className="w-full cursor-pointer">
                  <p className="text-base text-gray-400">School</p>
                  <div className="bg-[#171717] p-4 rounded-md flex items-center justify-between">
                    <p>Add School</p>
                    <RightOutlined className="text-gray-500 text-xs ml-2" />
                  </div>
                </div>
              </div>

              {/* Gender */}
              <div
                className="px-4 py-3 flex justify-between items-center"
                onClick={() => setUpdateGenderModal(true)}
              >
                <div className="w-full cursor-pointer">
                  <p className="text-base text-gray-400">Gender</p>
                  <div className="bg-[#171717] p-4 rounded-md flex items-center justify-between">
                    <p>Male</p>
                    <RightOutlined className="text-gray-500 text-xs ml-2" />
                  </div>
                </div>
              </div>

              {/* Profession */}
              <div
                className="px-4 py-3 flex justify-between items-center"
                onClick={() => setProfessionModal(true)}
              >
                <div className="w-full cursor-pointer">
                  <p className="text-base text-gray-400">Profession</p>
                  <div className="bg-[#171717] p-4 rounded-md flex items-center justify-between">
                    <p>Student</p>
                    <RightOutlined className="text-gray-500 text-xs ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateCom;
