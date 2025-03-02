import { Slider } from "antd";
import { useEffect, useState } from "react";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step5Props {
  control: Control<FormValues>;
}

const Step5 = ({ control }: Step5Props) => {
  const [distance, setDistance] = useState(2);

  // ✅ Inject CSS to force the handle color
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .ant-slider-handle {
        background-color: #7DFF19 !important;
        border-color: #7DFF19 !important;
        box-shadow: 0 0 8px #7DFF19 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style); // Cleanup when component unmounts
    };
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center text-2xl lg:text-5xl font-bold">
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

              {/* Slider with fixed styles */}
              <Slider
                style={{ width: "100%" }}
                min={0}
                max={100}
                value={field.value ? parseInt(field.value) : distance}
                onChange={(value) => {
                  setDistance(value);
                  field.onChange(value.toString());
                }}
                trackStyle={{ backgroundColor: "#7DFF19" }} // ✅ Green track
                railStyle={{ backgroundColor: "#1c1c1c" }} // ✅ Dark rail
                handleStyle={{
                  borderColor: "#7DFF19", // ✅ Green border
                  backgroundColor: "#7DFF19", // ✅ Ensure color
                }}
              />

              <div className="flex items-center justify-between relative">
                <span className="absolute mt-[-35px] left-[5px] h-10 w-[1px] bg-[#7DFF19]"></span>
                <span className="absolute mt-[-35px] right-[-5px] h-10 w-[1px] bg-[#7DFF19]"></span>
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
