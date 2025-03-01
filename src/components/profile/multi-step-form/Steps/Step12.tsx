import { Button, Input } from "antd";
import clsx from "clsx";
import { Control, Controller, useFormContext } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step9Props {
  control: Control<FormValues>;
}

const heir: string[] = [
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
];

const Step12 = ({ control }: Step9Props) => {
  const { watch, setValue, trigger } = useFormContext<FormValues>();
  const selectedOption = watch("hairColor");

  const handleButtonClick = (value: string) => {
    setValue("hairColor", value === selectedOption ? "" : value);
    trigger("hairColor");

    if (value !== "Other") {
      setValue("hairColorOther", "");
      trigger("hairColorOther");
    }
  };

  console.log({ watch }, { setValue }, { trigger });

  return (
    <div>
      <h1 className="text-center text-2xl lg:text-5xl font-bold ">
        Heir Color
      </h1>

      {/* heir color Selection */}
      <div className="mt-12">
        <Controller
          name="hairColor"
          control={control}
          rules={{ required: "Please select a heir color" }}
          render={({ field, fieldState }) => (
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {heir?.map((option) => (
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
            name="hairColorOther"
            control={control}
            rules={{
              required:
                selectedOption === "Other"
                  ? "Please specify your heir color"
                  : false,
            }}
            render={({ field, fieldState }) => (
              <div style={{ marginTop: "16px" }}>
                <Input
                  placeholder="Specify your heir color"
                  {...field}
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    trigger("hairColorOther"); // Validate field on change
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

export default Step12;

// import { Input, Radio } from "antd";
// import { Control, Controller } from "react-hook-form";
// import { FormValues } from "../FormSchema";

// interface Step12Props {
//   control: Control<FormValues>;
// }

// const Step12 = ({ control }: Step12Props) => (
//   <div>
//     <Controller
//       name="hairColor"
//       control={control}
//       render={({ field }) => (
//         <Radio.Group {...field}>
//           <Radio value="black">Black</Radio>
//           <Radio value="white">White</Radio>
//           <Radio value="other">Other</Radio>
//         </Radio.Group>
//       )}
//     />
//     <Controller
//       name="otherHairColor"
//       control={control}
//       render={({ field }) => (
//         <Input placeholder="Specify your hair color" {...field} />
//       )}
//     />
//   </div>
// );

// export default Step12;
