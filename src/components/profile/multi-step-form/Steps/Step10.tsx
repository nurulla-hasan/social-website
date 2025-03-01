import { Button, Input } from "antd";
import clsx from "clsx";
import { Control, Controller, useFormContext } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step9Props {
  control: Control<FormValues>;
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

const Step10 = ({ control }: Step9Props) => {
  const { watch, setValue, trigger } = useFormContext<FormValues>();
  const selectedOption = watch("skinColor");

  const handleButtonClick = (value: string) => {
    setValue("skinColor", value === selectedOption ? "" : value);
    trigger("skinColor");

    if (value !== "Other") {
      setValue("otherSkinColor", "");
      trigger("otherSkinColor");
    }
  };

  console.log({ watch }, { setValue }, { trigger });

  return (
    <div>
      <h1 className="text-center text-2xl lg:text-5xl font-bold ">
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
                      background: "#1c1c1c",
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
    </div>
  );
};

export default Step10;
