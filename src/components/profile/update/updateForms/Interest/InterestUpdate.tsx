import { InterestInfo } from "@/constant/constant";
import { RightOutlined } from "@ant-design/icons";
import { Collapse } from "antd"; // Import Ant Design Collapse and Button
import clsx from "clsx";
import { Control, Controller, Path } from "react-hook-form"; // Added useForm
import { FormValues } from "../../../multi-step-form/FormSchema";

const { Panel } = Collapse;

// Define interest options with strong typing
const interestOptions: Record<
  keyof Required<FormValues>["interest"],
  string[]
> = InterestInfo;

interface Props {
  control: Control<FormValues>;
  onUpdateSuccess: () => void;
}

const InterestUpdate = ({ control, onUpdateSuccess }: Props) => (
  <div className="">
    <Collapse
      accordion
      defaultActiveKey={["0"]}
      expandIconPosition="end"
      className="mb-4"
      expandIcon={({ isActive }) => (
        <RightOutlined
          rotate={isActive ? 90 : 0}
          style={{ color: "white", fontSize: "16px", width: "100%" }}
        />
      )}
      style={{ border: "none" }}
    >
      {Object.entries(interestOptions).map(([category, options], index) => (
        <Panel
          style={{
            border: "none",
            marginTop: "15px",
            background: "#171717",
          }}
          header={
            <div className="flex justify-between items-center w-full">
              <span className="text-lg font-semibold capitalize text-white">
                {category
                  .replace(/\//g, " ")
                  .replace(/([a-z])([A-Z])/g, "$1 $2")}
              </span>
            </div>
          }
          key={String(index)}
        >
          <Controller
            name={`interest.${category}` as Path<FormValues>}
            control={control}
            render={({ field }) => {
              // Ensure `field.value` is always an array
              const selectedValues: string[] = Array.isArray(field.value)
                ? field.value
                : [];

              return (
                <div className="flex flex-wrap gap-2 bg-[#171717] mt-6">
                  {options.map((option) => (
                    <button
                      style={{ margin: "7px" }}
                      key={option}
                      type="button"
                      className={clsx(
                        "px-4 py-2 border-2 rounded-full transition-all text-white bg-[#2E2E2F]",
                        selectedValues.includes(option)
                          ? "border-[#6C19FF]" // Active button border color
                          : "border-[#171717]"
                      )}
                      onClick={() => {
                        const newValue = selectedValues.includes(option)
                          ? selectedValues.filter((item) => item !== option)
                          : [...selectedValues, option];

                        field.onChange(newValue);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              );
            }}
          />
        </Panel>
      ))}
    </Collapse>
  </div>
);

export default InterestUpdate;
