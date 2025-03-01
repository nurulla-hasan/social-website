import { Button, Input } from "antd";
import clsx from "clsx";
import { Controller, FormProvider, useForm } from "react-hook-form";

// Define form values interface
interface FormValues {
  hairColor: string;
  hairColorOther?: string;
}

// Hair color options
const hairColors: string[] = [
  "Black",
  "Brown",
  "Blonde",
  "Red",
  "Gray",
  "White",
  "Auburn",
  "Strawberry Blonde",
  "Platinum Blonde",
  "Dark Brown",
  "Light Brown",
  "Dark Blonde",
  "Light Blonde",
  "Dark Red",
  "Light Red",
  "Salt and Pepper",
  "Multicolored",
  "Other",
];

interface Props {
  onUpdateSuccess: () => void;
}

const HairColorForm = ({ onUpdateSuccess }: Props) => {
  const methods = useForm<FormValues>();
  const { handleSubmit, control, watch, setValue, trigger } = methods;
  const selectedOption = watch("hairColor");

  // Handle button click
  const handleButtonClick = (value: string) => {
    setValue("hairColor", value === selectedOption ? "" : value);
    trigger("hairColor");

    if (value !== "Other") {
      setValue("hairColorOther", "");
      trigger("hairColorOther");
    }
  };

  // Form submission handler
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted with:", data);

    onUpdateSuccess();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1 className="text-center text-2xl lg:text-4xl font-bold text-white">
            Hair Color
          </h1>

          {/* Hair Color Selection */}
          <div className="mt-12 update-hair-color">
            <Controller
              name="hairColor"
              control={control}
              rules={{ required: "Please select a hair color" }}
              render={({ field, fieldState }) => (
                <div>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                  >
                    {hairColors.map((option) => (
                      <Button
                        key={option}
                        style={{
                          background: "#2e2e2f",
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
                        onClick={(e) => {
                          e.preventDefault();
                          handleButtonClick(option);
                        }}
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

            {/* "Other" Input Field */}
            {selectedOption === "Other" && (
              <Controller
                name="hairColorOther"
                control={control}
                rules={{
                  required: "Please specify your hair color",
                }}
                render={({ field, fieldState }) => (
                  <div style={{ marginTop: "16px" }}>
                    <Input
                      placeholder="Specify your hair color"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        trigger("hairColorOther");
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
    </FormProvider>
  );
};

export default HairColorForm;
