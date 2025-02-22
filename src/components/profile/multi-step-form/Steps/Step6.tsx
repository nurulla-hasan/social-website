import { Input } from "antd";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step6Props {
  control: Control<FormValues>;
}

const Step6 = ({ control }: Step6Props) => (
  <div>
    <Controller
      name="schoolName"
      control={control}
      rules={{ required: "School name is required" }}
      render={({ field, fieldState: { error } }) => (
        <>
          <Input placeholder="Enter your school name" {...field} />
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </>
      )}
    />
    <Controller
      name="graduationYear"
      control={control}
      render={({ field }) => (
        <Input placeholder="Enter your graduation year" {...field} />
      )}
    />
  </div>
);

export default Step6;
