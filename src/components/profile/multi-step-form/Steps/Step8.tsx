import { Checkbox } from "antd";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step8Props {
  control: Control<FormValues>;
}

const Step8 = ({ control }: Step8Props) => (
  <div>
    <Controller
      name="lookingFor"
      control={control}
      render={({ field }) => (
        <Checkbox.Group
          options={[
            "Long-term partner",
            "Long-term open to short",
            "Short-term fun",
            "New friends",
            "Still figuring it out",
          ]}
          {...field}
        />
      )}
    />
  </div>
);

export default Step8;
