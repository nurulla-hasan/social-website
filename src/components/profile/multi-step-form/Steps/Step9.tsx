import { Radio } from "antd";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step9Props {
  control: Control<FormValues>;
}

const Step9 = ({ control }: Step9Props) => (
  <div>
    <Controller
      name="relationShip"
      control={control}
      render={({ field }) => (
        <Radio.Group {...field}>
          <Radio value="single">Single</Radio>
          <Radio value="married">Married</Radio>
          <Radio value="other">Other</Radio>
        </Radio.Group>
      )}
    />
    {/* <Controller
      name="otherRelationship"
      control={control}
      render={({ field }) => (
        <Input placeholder="Specify your relationship status" {...field} />
      )}
    /> */}
  </div>
);

export default Step9;
