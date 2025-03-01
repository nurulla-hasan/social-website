import { Slider } from "antd";
import { useState } from "react";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step5Props {
  control: Control<FormValues>;
}

const siderStyle = {
  track: {
    backgroundColor: "#7DFF19",
  },
  rail: {
    backgroundColor: "#1c1c1c",
  },
  handle: {
    borderColor: "#7DFF19",
    backgroundColor: "#7DFF19",
  },
};

const Step5 = ({ control }: Step5Props) => {
  const [distance, setDistance] = useState(2);

  return (
    <div>
      <div>
        <h1 className="text-center text-2xl lg:text-5xl font-bold ">
          Distance Preference for Activities?
        </h1>
      </div>

      <div className="mt-12">
        <Controller
          name="distance"
          control={control}
          render={({ field }) => (
            <div className="relative">
              <div className="flex items-center justify-between my-3 mb-7">
                <span>0 Miles</span>
                <span>100 Miles</span>
              </div>
              <Slider
                style={{ width: "100%" }}
                min={0}
                max={100}
                value={field.value ? parseInt(field.value) : distance}
                onChange={(value) => {
                  setDistance(value);
                  field.onChange(value.toString());
                }}
                styles={siderStyle} // FIXED: Changed from "styles" to "style"
              />

              <div className="flex items-center justify-between relative">
                <span className="absolute bottom-[] mt-[-35px] left-[5px] h-10 w-[1px] bg-[#7DFF19]"></span>
                <span className="absolute bottom-[] mt-[-35px] right-[-5px] h-10 w-[1px] bg-[#7DFF19]"></span>
              </div>
            </div>
          )}
        />

        <p className="text-base text-center mt-5 py-7">
          You can change preferences later in settings
        </p>
      </div>
    </div>
  );
};

export default Step5;
