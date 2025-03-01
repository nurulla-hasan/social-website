"use client";
import { Button, Input, Modal } from "antd";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

const LocationAccess = ({
  isModalOpen,
  setIsModalOpen,
  showLocationForm,
  setShowLocationForm,
}: any) => {
  const [location, setLocation] = useState("");

  // Handle "Deny" button
  const handleDeny = () => {
    setIsModalOpen(false);
  };

  // Handle "Allow" button
  const handleAllow = () => {
    setShowLocationForm(true);
  };

  // Handle "Done" button
  const handleDone = () => {
    console.log("Current Location:", location);
    setIsModalOpen(false);
  };

  // Handle "Cancel" button
  const handleCancel = () => {
    setShowLocationForm(false); // Hide the location form
    setIsModalOpen(false); // Close the modal
  };

  const modalStyle = {
    content: {
      background: "#1c1c1c",
      padding: "24px",
      borderRadius: "8px",
      border: "1px solid #7D7D7D",
    },
  };

  return (
    <div className="flex justify-center items-center">
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
        centered
        closeIcon={<CgClose />}
        styles={modalStyle}
      >
        {!showLocationForm ? (
          <div className="text-center">
            <div className="py-4 text-white">
              <h2 className="mb-4 text-2xl font-semibold ">
                Location access need
              </h2>
              <p className="text-base">
                To help you discover nearby activities, friends, and people, we
                need access to your location.
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-7">
              <Button
                onClick={handleDeny}
                className="bg-red-500 text-white"
                style={{
                  color: "white",
                  border: "1px solid #fff",
                  background: "none",
                }}
              >
                Deny
              </Button>
              <Button
                onClick={handleAllow}
                type="primary"
                className="bg-green-500 text-white"
              >
                Allow
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center text-white">
            <h2 className="mb-4 text-2xl font-semibold ">
              Edit Current Location
            </h2>
            <Input
              style={{ border: "1px solid #ddd" }}
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mb-4"
            />
            <Button
              onClick={handleCancel} // Corrected: Use onClick instead of onCancel
              className="bg-blue-500 text-white mt-7 mx-2"
              style={{ background: "none", color: "#fff" }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleDone}
              type="primary"
              className="bg-blue-500 text-white mt-7 mx-2"
            >
              Done
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default LocationAccess;
