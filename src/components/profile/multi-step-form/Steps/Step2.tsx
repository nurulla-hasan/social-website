import { DatePicker } from "antd";
import dayjs from "dayjs";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step2Props {
  control: Control<FormValues>;
}

const Step2 = ({ control }: Step2Props) => (
  <div className="mt-17">
    <h1 className="text-center text-2xl lg:text-5xl font-bold">
      Date of birth
    </h1>

    <p className="text-base text-center mt-5">
      Your profile shows your age, not your date of birth.
    </p>

    <div className=" items-center flex-col justify-start mt-12">
      <label
        htmlFor="userName"
        className="capitalize my-2  items-start justify-start w-full"
      >
        Date of birth
      </label>

      <Controller
        name="birthDay"
        control={control}
        rules={{ required: "Birthday is required" }}
        render={({ field, fieldState: { error } }) => (
          <>
            <DatePicker
              className="custom-datepicker"
              style={{
                width: "100%",
                height: "50px",
                border: "transparent",
                backgroundColor: "#ddd",
                color: "#fff",
              }}
              placeholder="D D / M M / Y Y Y Y"
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
