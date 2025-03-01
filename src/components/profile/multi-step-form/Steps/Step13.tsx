import { professions } from "@/constant/constant";
import { Select } from "antd";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step13Props {
  control: Control<FormValues>;
}

const Step13 = ({ control }: Step13Props) => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <div>
      <h1 className="text-center text-2xl lg:text-5xl font-bold ">
        Profession
      </h1>

      <div className="mt-12">
        <label
          htmlFor="userName"
          className="capitalize my-2 flex items-start justify-start w-full text-sm custom-select"
        >
          Select your profession (Optional)
        </label>
        <Controller
          name="profession"
          control={control}
          render={({ field }) => (
            <Select
              dropdownStyle={{
                backgroundColor: "#1c1c1c",
                color: "#fff",
              }}
              showSearch
              placeholder="Select your profession"
              optionFilterProp="label"
              className="custom-select"
              onChange={onChange}
              onSearch={onSearch}
              style={{
                width: "100%",
                height: "50px",
                border: "none",
                backgroundColor: "#1c1c1c",
                color: "#fff",
                borderRadius: "5px",
              }}
              options={professions.map((profession) => ({
                label: profession,
                value: profession,
              }))}
            />
          )}
        />
      </div>
    </div>
  );
};

export default Step13;
