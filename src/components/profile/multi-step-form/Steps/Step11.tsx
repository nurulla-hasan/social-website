import { Checkbox } from "antd";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step11Props {
  control: Control<FormValues>;
}

const Step11 = ({ control }: Step11Props) => (
  <div>
    <Controller
      name="interest.selfCare"
      control={control}
      render={({ field }) => (
        <Checkbox.Group
          options={["Meditation", "Yoga", "Reading", "Journaling"]}
          {...field}
        />
      )}
    />
    {/* Repeat for other interests */}
  </div>
);

export default Step11;
