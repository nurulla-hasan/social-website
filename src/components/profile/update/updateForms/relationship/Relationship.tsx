"use client";

import { Button, Input } from "antd";
import clsx from "clsx";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface FormValues {
  relationShip: string;
  otherRelationShip?: string;
}

type Props = {
  onUpdateSuccess: () => void;
};

const relationShip: string[] = [
  "Single",
  "In a Relationship",
  "Married",
  "Engaged",
  "Divorced",
  "Widowed",
  "Prefer Not to Answer",
  "Other",
];

const Relationship = ({ onUpdateSuccess }: Props) => {
  const { handleSubmit, control, setValue, trigger, watch } =
    useForm<FormValues>();
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleButtonClick = (value: string) => {
    setValue("relationShip", value === selectedOption ? "" : value);
    trigger("relationShip");

    if (value !== "Other") {
      setValue("otherRelationShip", "");
      trigger("otherRelationShip");
    }
    setSelectedOption(value === selectedOption ? "" : value);
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
          Relationship Status
        </h1>

        {/* Relationship Status Selection */}
        <div className="mt-12">
          <Controller
            name="relationShip"
            control={control}
            rules={{ required: "Please select a relationship status" }}
            render={({ field, fieldState }) => (
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {relationShip.map((option) => (
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

          {/* Other Relationship Input Field (Only if "Other" is Selected) */}
          {selectedOption === "Other" && (
            <Controller
              name="otherRelationShip"
              control={control}
              rules={{
                required:
                  selectedOption === "Other"
                    ? "Please specify your relationship status"
                    : false,
              }}
              render={({ field, fieldState }) => (
                <div style={{ marginTop: "16px" }}>
                  <Input
                    placeholder="Specify your relationship status"
                    {...field}
                    value={field.value || ""}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                      trigger("otherRelationShip"); // Validate field on change
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

export default Relationship;
