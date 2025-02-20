import { Button, Slider } from "antd";
import { useState } from "react";

const Distance = ({ onCancel }: any) => {
  const [distance, setDistance] = useState<number>(50); // Default distance value

  const handleDoneClick = () => {
    console.log("Selected Distance:", distance, "Miles");
  };

  const siderStyle = {
    track: {
      backgroundColor: "#7DFF19", // Customize the slider track color
    },
    rail: {
      backgroundColor: "#d9d9d9", // Customize the slider rail color
    },
    handle: {
      borderColor: "#7DFF19", // Customize the slider handle color
    },
  };

  return (
    <div className=" p-4 rounded-lg my-7">
      <div className="flex w-full items-center justify-between relative">
        <span className="absolute top-[-20px] left-[-20px] text-gray-500 font-semibold">
          0 Miles
        </span>
        <span className="inline-block h-[50px] w-[1px]  bg-[#7DFF19] mr-[-5px]"></span>
        <Slider
          min={0}
          max={100}
          value={distance}
          onChange={(value) => setDistance(value)}
          styles={siderStyle}
          style={{ width: "100%" }}
        />
        <span className="absolute top-[-20px] right-[-20px] text-gray-500 font-semibold">
          100 Miles
        </span>
        <span className="inline-block h-[50px] w-[1px] bg-[#7DFF19] ml-[-5px] "></span>
      </div>

      <div className="text-gray-400 block mb-4 text-center ">
        <h4 className="font-semibold text-base">{distance} Miles</h4>
      </div>
      <Button
        type="primary"
        onClick={onCancel}
        className="mt-4 mx-2"
        style={{ background: "none", border: "1px solid #fff" }}
      >
        Cancel
      </Button>
      <Button type="primary" onClick={handleDoneClick} className="mt-4 mx-2">
        Done
      </Button>
    </div>
  );
};

export default Distance;
