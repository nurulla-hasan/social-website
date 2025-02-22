import { Radio } from "antd";
import clsx from "clsx";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step3Props {
  control: Control<FormValues>;
}

const Step3 = ({ control }: Step3Props) => (
  <div className="">
    <h1 className="text-center text-2xl lg:text-5xl font-bold ">I am a</h1>

    <div className="w-full mt-12">
      <Controller
        name="gender"
        control={control}
        rules={{ required: "Gender is required" }}
        render={({ field, fieldState: { error } }) => (
          <>
            <Radio.Group
              {...field}
              className=" justify-between w-full"
              optionType="button"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {["female", "male", "other"].map((gender) => (
                <Radio.Button
                  key={gender}
                  value={gender}
                  style={{
                    width: "150px",
                    height: "150px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                  className={clsx(
                    "h-[150px] w-[150px] flex items-center justify-center text-white bg-[#181818] rounded-lg border border-transparent text-lg",
                    {
                      "border-[#7A32FF]": field.value === gender, // Selected border color
                      "hover:border-gray-500": field.value !== gender, // Hover effect
                    }
                  )}
                >
                  <span className="flex items-start justify-center w-full h-full">
                    {gender.charAt(0).toUpperCase() + gender.slice(1)}
                  </span>
                </Radio.Button>
              ))}
            </Radio.Group>
            {error && <p className="text-red-500">{error.message}</p>}
          </>
        )}
      />
    </div>
  </div>
);

export default Step3;
