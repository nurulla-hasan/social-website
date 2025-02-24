"use client";

import { Button, Input } from "antd";
import clsx from "clsx";
import { Controller, useForm } from "react-hook-form";

interface FormValues {
  skinColor: string;
  otherSkinColor?: string;
}

const skin: string[] = [
  "White (Caucasian)",
  "Black or African American",
  "Hispanic or Latino",
  "Native American or Alaska Native",
  "Asian",
  "Mixed Race",
  "Native Hawaiian or Other Pacific Islander",
  "Middle Eastern or North African",
  "Prefer Not to Answer",
  "Other",
];

interface Props {
  onUpdateSuccess: () => void;
}

const SkinColor = ({ onUpdateSuccess }: Props) => {
  const { handleSubmit, control, watch, setValue, trigger } =
    useForm<FormValues>();
  const selectedOption = watch("skinColor");

  const handleButtonClick = (value: string) => {
    setValue("skinColor", value === selectedOption ? "" : value);
    trigger("skinColor");

    if (value !== "Other") {
      setValue("otherSkinColor", "");
      trigger("otherSkinColor");
    }
  };

  // Form submission handler
  const onSubmit = (data: FormValues) => {
    console.log("Form data submitted:", data);
    alert("Form updated successfully!");

    onUpdateSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="text-center text-2xl lg:text-4xl font-bold text-white">
          Race/Skin Color
        </h1>

        {/* skin color Selection */}
        <div className="mt-12">
          <Controller
            name="skinColor"
            control={control}
            rules={{ required: "Please select a skin color" }}
            render={({ field, fieldState }) => (
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {skin.map((option) => (
                    <Button
                      key={option}
                      style={{
                        background: "#2E2E2F",
                        border:
                          selectedOption === option
                            ? "2px solid #6C19FF"
                            : "2px solid transparent",
                        borderRadius: "50px",
                        padding: "15px 35px",
                        height: "40px",
                        color: "#fff",
                        fontWeight: "500",
                        marginTop: "15px",
                      }}
                      className={clsx(
                        "custom-button",
                        selectedOption === option && "selected-button"
                      )}
                      onClick={() => handleButtonClick(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
                {fieldState.error && (
                  <p style={{ color: "red" }}>{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          {/* Other Skin Color Input Field (Only if "Other" is Selected) */}
          {selectedOption === "Other" && (
            <Controller
              name="otherSkinColor"
              control={control}
              rules={{
                required:
                  selectedOption === "Other"
                    ? "Please specify your skin color"
                    : false,
              }}
              render={({ field, fieldState }) => (
                <div style={{ marginTop: "16px" }}>
                  <Input
                    placeholder="Specify your skin color"
                    {...field}
                    value={field.value || ""}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                      trigger("otherSkinColor"); // Validate field on change
                    }}
                  />
                  {fieldState.error && (
                    <p style={{ color: "red" }}>{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-[#6C19FF] text-white font-medium py-2 px-6 rounded-lg hover:bg-[#5b14e0] transition"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default SkinColor;
