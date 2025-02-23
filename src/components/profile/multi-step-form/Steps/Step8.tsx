import { useState } from "react";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step8Props {
  control: Control<FormValues>;
}

const options = [
  { label: "Long-term partner", emoji: "💖" },
  { label: "Long-term, Open to short", emoji: "😍" },
  { label: "Short-term, open to long", emoji: "😍" },
  { label: "Short-term fun", emoji: "🎉" },
  { label: "New friends", emoji: "👋" },
  { label: "Still figuring it out", emoji: "🤔" },
];

const Step8 = ({ control }: Step8Props) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelection = (
    option: string,
    onChange: (value: string[]) => void
  ) => {
    let newSelected;
    if (selected.includes(option)) {
      newSelected = selected.filter((item) => item !== option);
    } else {
      newSelected = [...selected, option];
    }
    setSelected(newSelected);
    onChange(newSelected);
  };

  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="text-center text-2xl lg:text-5xl font-bold ">
        What are you Looking For?
      </h1>

      <p className="text-base text-center mt-5">
        All good if it changes, There’s something for everyone.
      </p>

      <div className="mt-12">
        <Controller
          name="lookingFor"
          control={control}
          render={({ field: { onChange } }) => (
            <div className="grid grid-cols-3 gap-4">
              {options.map(({ label, emoji }) => (
                <button
                  key={label}
                  onClick={() => toggleSelection(label, onChange)}
                  className={`w-36 h-36 flex flex-col items-center justify-center rounded-xl transition-all duration-300 border-2 
                  ${
                    selected.includes(label)
                      ? "border-purple-500 text-white scale-105"
                      : "border-transparent text-gray-400"
                  }
                  bg-black hover:scale-105 focus:outline-none`}
                >
                  <span className="text-3xl">{emoji}</span>
                  <span className="text-sm text-center">{label}</span>
                </button>
              ))}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Step8;
