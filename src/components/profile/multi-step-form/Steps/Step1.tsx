import { Input } from "antd";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step1Props {
  control: Control<FormValues>;
}

const Step1 = ({ control }: Step1Props) => (
  <div className="mt-17">
    <h1 className="text-center text-2xl lg:text-5xl font-bold ">
      Create user name
    </h1>

    <div className="mt-12">
      <label htmlFor="userName" className="capitalize my-2 inline-block">
        Enter your username
      </label>
      <Controller
        name="userName"
        control={control}
        rules={{ required: "User name is required" }}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input id="userName" placeholder="Enter username" {...field} />
            {error && <p style={{ color: "red" }}>{error.message}</p>}
          </>
        )}
      />
    </div>
  </div>
);

export default Step1;
