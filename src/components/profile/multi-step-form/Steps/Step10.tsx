import { Checkbox } from "antd";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step10Props {
  control: Control<FormValues>;
}

const Step10 = ({ control }: Step10Props) => (
  <div>
    <Controller
      name="skinColor"
      control={control}
      render={({ field }) => (
        <Checkbox.Group
          options={[
            "White (Caucasian)",
            "Black or African American",
            "Hispanic or Latino",
          ]}
          {...field}
        />
      )}
    />
  </div>
);

export default Step10;
