import { Input } from "antd";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step13Props {
  control: Control<FormValues>;
}

const Step13 = ({ control }: Step13Props) => (
  <div>
    <Controller
      name="profession"
      control={control}
      render={({ field }) => (
        <Input placeholder="Enter your profession" {...field} />
      )}
    />
  </div>
);

export default Step13;
