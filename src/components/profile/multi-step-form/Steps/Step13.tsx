import { professions } from "@/constant/constant";
import { Select } from "antd";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step13Props {
  control: Control<FormValues>;
}

const Step13 = ({ control }: Step13Props) => (
  <div>
    <h1 className="text-center text-2xl lg:text-5xl font-bold ">Profession</h1>

    <div className="mt-12">
      <label
        htmlFor="userName"
        className="capitalize my-2 flex items-start justify-start w-full text-sm"
      >
        Select your profession (Optional)
      </label>
      <Controller
        name="profession"
        control={control}
        render={({ field }) => (
          <Select
            className="custom-select" // Add a custom class for styling
            style={{
              width: "100%",
              height: "50px", // Set fixed height
              border: "none", // Remove border
              backgroundColor: "#171717", // Set background color
              color: "#fff", // Set text color to white for better contrast
              borderRadius: "5px",
            }}
            {...field}
            placeholder="Select your profession"
            options={professions.map((profession) => ({
              label: profession,
              value: profession,
            }))}
            showSearch // Enable search functionality
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            virtual // Enable virtual scrolling for better performance
          />
        )}
      />
    </div>
  </div>
);

export default Step13;
