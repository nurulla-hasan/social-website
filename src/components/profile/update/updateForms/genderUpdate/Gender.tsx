"use client";

import clsx from "clsx";
import { Controller, useForm } from "react-hook-form";

interface FormValues {
  gender: string;
}

interface Props {
  onUpdateSuccess: () => void;
}

const genderOptions = ["female", "male", "other"];

const UpdateGender = ({ onUpdateSuccess }: Props) => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: { gender: "" }, // Ensures controlled input
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted with:", data);
    alert(`Selected Gender: ${data.gender}`);

    onUpdateSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-17">
      <h1 className="text-center text-2xl lg:text-5xl font-bold text-white">
        I am a
      </h1>

      <div className="w-full mt-12 mx-auto">
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
                      type="button"
                      className={clsx(
                        "flex flex-col items-center justify-center text-lg font-medium rounded-lg transition",
                        "bg-[#2e2e2e] text-white border-2",
                        "w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px] max-w-xs h-[100px] sm:h-[120px] md:h-[150px]", // Responsive sizes
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

      {/* Submit Button */}
      <div className="mt-6 text-center">
        <button
          type="submit"
          className="bg-[#6C19FF] text-white font-medium py-2 px-6 rounded-lg hover:bg-[#5b14e0] transition"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default UpdateGender;
