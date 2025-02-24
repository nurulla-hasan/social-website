"use client";

import { professions } from "@/constant/constant";
import { Select } from "antd";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

interface FormValues {
  profession?: string;
}

interface Props {
  onUpdateSuccess: () => void;
}

const ProfessionUpdateForm = ({ onUpdateSuccess }: Props) => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: { profession: undefined },
  });

  useEffect(() => {
    // Apply styles dynamically using JavaScript if necessary
    document
      .querySelectorAll(".custom-select .ant-select-selector")
      .forEach((el) => {
        (el as HTMLElement).style.backgroundColor = "#1F1F1F"; // Dark gray
        (el as HTMLElement).style.border = "2px solid #7A32FF";
        (el as HTMLElement).style.color = "#fff";
      });
  }, []);

  const onSubmit = (data: FormValues) => {
    console.log("Selected Profession:", data.profession || "None");
    alert(`Selected Profession: ${data.profession || "None"}`);

    onUpdateSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center text-2xl lg:text-4xl font-bold text-white">
        Profession
      </h1>

      <div className="mt-12 update-add-custom-select-input">
        <label className="capitalize my-2 flex items-start justify-start w-full text-sm text-gray-300">
          Select your profession (Optional)
        </label>
        <Controller
          name="profession"
          control={control}
          render={({ field }) => (
            <Select
              className="custom-select"
              style={{ width: "100%" }}
              {...field}
              placeholder="Select your profession"
              options={professions.map((profession) => ({
                label: profession,
                value: profession,
              }))}
              showSearch
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              virtual
            />
          )}
        />
      </div>

      {/* Submit Button */}
      <div className="mt-12 text-center">
        <button
          type="submit"
          className="bg-[#6C19FF] text-white font-medium py-2 px-6 rounded-lg hover:bg-[#5b14e0] transition"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProfessionUpdateForm;
