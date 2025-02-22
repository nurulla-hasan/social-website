import { Input } from "antd";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step7Props {
  control: Control<FormValues>;
}

const Step7 = ({ control }: Step7Props) => (
  <div>
    <Controller
      name="height"
      control={control}
      render={({ field }) => (
        <Input placeholder="Enter your height" {...field} />
      )}
    />
  </div>
);

export default Step7;
