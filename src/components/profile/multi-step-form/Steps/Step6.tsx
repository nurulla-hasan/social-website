import { Input } from "antd";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step6Props {
  control: Control<FormValues>;
}

const Step6 = ({ control }: Step6Props) => (
  <div>
    <div>
      <h1 className="text-center text-2xl lg:text-5xl font-bold ">
        If studying is your thing...
      </h1>

      <p className="text-base text-center mt-5">
        This is how it’ll appear on your profile.
      </p>
    </div>

    <div className="mt-12">
      <label
        htmlFor="schoolName"
        className="capitalize my-2 inline-block text-sm"
      >
        Enter your school name
      </label>
      <Controller
        name="schoolName"
        control={control}
        rules={{ required: "School name is required" }}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              // placeholder="Enter your school name"
              id="schoolName"
              {...field}
            />
            {error && <p style={{ color: "red" }}>{error.message}</p>}
          </>
        )}
      />
    </div>
    <div>
      <label
        htmlFor="graduationYear"
        className="capitalize my-2 inline-block text-sm mt-7"
      >
        Enter your graduation year (Optional)
      </label>
      <Controller
        name="graduationYear"
        control={control}
        render={({ field }) => (
          <Input
            // placeholder="Enter your graduation year"
            id="graduationYear"
            {...field}
          />
        )}
      />
    </div>
  </div>
);

export default Step6;
