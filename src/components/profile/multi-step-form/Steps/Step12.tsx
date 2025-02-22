import { Input, Radio } from "antd";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step12Props {
  control: Control<FormValues>;
}

const Step12 = ({ control }: Step12Props) => (
  <div>
    <Controller
      name="hairColor"
      control={control}
      render={({ field }) => (
        <Radio.Group {...field}>
          <Radio value="black">Black</Radio>
          <Radio value="white">White</Radio>
          <Radio value="other">Other</Radio>
        </Radio.Group>
      )}
    />
    <Controller
      name="otherHairColor"
      control={control}
      render={({ field }) => (
        <Input placeholder="Specify your hair color" {...field} />
      )}
    />
  </div>
);

export default Step12;
