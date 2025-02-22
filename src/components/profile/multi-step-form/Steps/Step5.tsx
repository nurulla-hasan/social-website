import { Slider } from "antd";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step5Props {
  control: Control<FormValues>;
}

const Step5 = ({ control }: Step5Props) => (
  <div>
    <Controller
      name="distance"
      control={control}
      render={({ field }) => (
        <Slider
          min={0}
          max={100}
          value={field.value ? parseInt(field.value) : 0}
          onChange={(value) => field.onChange(value.toString())}
        />
      )}
    />
  </div>
);

export default Step5;
