import { DatePicker } from "antd";
import dayjs from "dayjs";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step2Props {
  control: Control<FormValues>;
}

const Step2 = ({ control }: Step2Props) => (
  <div>
    <h1 className="text-center text-2xl lg:text-5xl font-bold ">
      Date of birth
    </h1>

    <p className="text-base text-center mt-5">
      Your profile shows your age, not your date of birth.
    </p>

    <div className="flex items-center flex-col justify-start mt-12">
      <label
        htmlFor="userName"
        className="capitalize my-2 flex items-start justify-start w-full"
      >
        Enter your username
      </label>

      <Controller
        name="birthDay"
        control={control}
        rules={{ required: "Birthday is required" }}
        render={({ field, fieldState: { error } }) => (
          <>
            <DatePicker
              className="w-full h-[60px] bg-gray-700"
              // styles={{
              //   backgroundColor: "#374151",
              //   color: "#fff", // bg-gray-700 and white text
              // }}
              placeholder="Select your birthday"
              value={field.value ? dayjs(field.value) : null}
              onChange={(date) => field.onChange(date?.toISOString())}
            />
            {error && <p style={{ color: "red" }}>{error.message}</p>}
          </>
        )}
      />
    </div>
  </div>
);

export default Step2;
