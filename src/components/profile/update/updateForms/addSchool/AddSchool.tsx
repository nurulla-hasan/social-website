"use client";

import { Button, Input } from "antd";
import { Controller, useForm } from "react-hook-form";

interface FormValues {
  schoolName: string;
  graduationYear?: string;
}

interface Props {
  onUpdateSuccess: () => void;
}

const AddSchool = ({ onUpdateSuccess }: Props) => {
  const { handleSubmit, control, setValue, trigger } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form data submitted:", data);
    alert("Form submitted successfully!");

    onUpdateSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="text-center text-2xl lg:text-4xl font-bold text-white">
          If studying is your thing...
        </h1>
      </div>

      {/* School Name Field */}
      <div className="mt-12 update-add-custom-input">
        <label
          htmlFor="schoolName"
          className="capitalize my-2 inline-block text-sm text-white"
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
                id="schoolName"
                {...field}
                // placeholder="Enter your school name"
                style={{ background: "#2e2e2e" }}
              />
              {error && <p style={{ color: "red" }}>{error.message}</p>}
            </>
          )}
        />
      </div>

      {/* Graduation Year Field */}
      <div className="update-add-custom-input">
        <label
          htmlFor="graduationYear"
          className="capitalize my-2 inline-block text-sm mt-7 text-white"
        >
          Enter your graduation year (Optional)
        </label>
        <Controller
          name="graduationYear"
          control={control}
          render={({ field }) => (
            <Input
              id="graduationYear"
              {...field}
              //   placeholder="Enter your graduation year"
              style={{ background: "#2e2e2e" }}
            />
          )}
        />
      </div>

      {/* Submit Button */}
      <div style={{ marginTop: "24px", textAlign: "center" }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            background: "#6C19FF",
            padding: "15px 30px",
            color: "#fff",
            fontWeight: "500",
            height: "40px",
          }}
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default AddSchool;
