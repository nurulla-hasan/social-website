import { Button, Input } from "antd";
import clsx from "clsx";
import { Control, Controller, useFormContext } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step9Props {
  control: Control<FormValues>;
}

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

const Step9 = ({ control }: Step9Props) => {
  const { watch, setValue, trigger } = useFormContext<FormValues>();
  const selectedOption = watch("relationShip");

  const handleButtonClick = (value: string) => {
    setValue("relationShip", value === selectedOption ? "" : value);
    trigger("relationShip");

    if (value !== "Other") {
      setValue("otherRelationShip", "");
      trigger("otherRelationShip");
    }
  };

  console.log({ watch }, { setValue }, { trigger });

  return (
    <div>
      <h1 className="text-center text-2xl lg:text-5xl font-bold ">
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
                      background: "#171717",
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
    </div>
  );
};

export default Step9;
