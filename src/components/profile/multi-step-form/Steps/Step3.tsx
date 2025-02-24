import clsx from "clsx";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../FormSchema";

interface Step3Props {
  control: Control<FormValues>;
}

const genderOptions = ["female", "male", "other"];

const Step3 = ({ control }: Step3Props) => (
  <div className="mt-17">
    <h1 className="text-center text-2xl lg:text-5xl font-bold">I am a</h1>

    <div className="w-full mt-12  mx-auto">
      <Controller
        name="gender"
        control={control}
        rules={{ required: "Gender is required" }}
        render={({ field, fieldState: { error } }) => (
          <>
            <div className="flex flex-wrap justify-center gap-4">
              {genderOptions.map((gender) => (
                <label key={gender} className="relative">
                  {/* Hidden Checkbox */}
                  <input
                    type="checkbox"
                    value={gender}
                    checked={field.value === gender}
                    onChange={() => field.onChange(gender)}
                    className="hidden"
                  />

                  {/* Custom Selection Button */}
                  <button
                    className={clsx(
                      "flex flex-col items-center justify-center text-lg font-medium rounded-lg transition",
                      "bg-[#171717] text-white border-2",
                      " w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px] max-w-xs h-[100px] sm:h-[120px] md:h-[150px]", // Responsive sizes
                      field.value === gender
                        ? "border-[#7A32FF] shadow-lg"
                        : "hover:border-gray-500 border-transparent"
                    )}
                    onClick={() => field.onChange(gender)}
                  >
                    {gender.charAt(0).toUpperCase() + gender.slice(1)}
                  </button>
                </label>
              ))}
            </div>

            {error && <p className="text-red-500 mt-2">{error.message}</p>}
          </>
        )}
      />
    </div>
  </div>
);

export default Step3;
