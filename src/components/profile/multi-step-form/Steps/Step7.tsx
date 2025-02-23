import { useState } from "react";
import { Control, Controller } from "react-hook-form";

interface Step7Props {
  control: Control<any>;
}

const HeightSelector = ({ control }: Step7Props) => {
  const [selectedFeet, setSelectedFeet] = useState(5);
  const [selectedInches, setSelectedInches] = useState(9);

  const feetOptions = Array.from({ length: 12 }, (_, i) => i + 1);
  const inchesOptions = Array.from({ length: 12 }, (_, i) => i + 1);

  // Function to get visible items with two items padding on each side
  const getVisibleItems = (all: number[], selected: number) => {
    const index = all.indexOf(selected);
    const start = Math.max(0, index - 2);
    const visibleItems = all.slice(start, start + 5);
    return visibleItems;
  };

  const visibleFeet = getVisibleItems(feetOptions, selectedFeet);
  const visibleInches = getVisibleItems(inchesOptions, selectedInches);

  return (
    <div className="w-full max-w-md mx-auto p-8">
      <h1 className="text-4xl font-bold text-white mb-12 text-center">
        What is Your height?
      </h1>

      <Controller
        name="height"
        control={control}
        render={({ field: { onChange } }) => (
          <div className="relative">
            {/* Center selection highlight */}
            <div className="flex justify-center gap-16 relative z-10  ">
              <div
                className="bg-[#2E2E2F] w-full h-7 absolute top-1/2 p-7 mt-[-7px] rounded-md"
                style={{ transform: "translateY(-50%)" }}
              ></div>

              {/* Feet Selector */}
              <div className="h-72 flex flex-col items-center">
                {visibleFeet.map((feet) => (
                  <button
                    key={feet}
                    onClick={() => {
                      setSelectedFeet(feet);
                      onChange(`${feet}ft ${selectedInches}in`);
                    }}
                    className={`w-24 h-14 flex items-center justify-center transition-all duration-300 ease-in-out 
                      ${
                        feet === selectedFeet
                          ? "text-white text-xl scale-110 opacity-100"
                          : "text-gray-500 text-lg opacity-50"
                      }
                    `}
                  >
                    {feet} ft
                  </button>
                ))}
              </div>

              {/* Inches Selector */}
              <div className="h-72 flex flex-col items-center">
                {visibleInches.map((inches) => (
                  <button
                    key={inches}
                    onClick={() => {
                      setSelectedInches(inches);
                      onChange(`${selectedFeet}ft ${inches}in`);
                    }}
                    className={`w-24 h-14 flex items-center justify-center transition-all duration-300 ease-in-out
                      ${
                        inches === selectedInches
                          ? "text-white text-xl scale-110 opacity-100"
                          : "text-gray-500 text-lg opacity-50"
                      }
                    `}
                  >
                    {inches} in
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default HeightSelector;
