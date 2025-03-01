import { FormValues } from "@/components/profile/multi-step-form/FormSchema";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const options = [
  { label: "Long-term partner", emoji: "💖" },
  { label: "Long-term, Open to short", emoji: "😍" },
  { label: "Short-term, open to long", emoji: "😍" },
  { label: "Short-term fun", emoji: "🎉" },
  { label: "New friends", emoji: "👋" },
  { label: "Still figuring it out", emoji: "🤔" },
];

interface Props {
  onUpdateSuccess: () => void;
}

const LookingFor = ({ onUpdateSuccess }: Props) => {
  const { control, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      // @ts-ignore
      lookingFor: [], // Default value as an empty array
    },
  });

  // Handle form submission
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form data submitted:", data); // Logs the form data (all selected values)
    onUpdateSuccess(); // Call onUpdateSuccess when the form is submitted
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center text-white"
    >
      <h1 className="text-center text-2xl lg:text-4xl font-bold">
        What are you Looking For?
      </h1>

      <div className="mt-12">
        <Controller
          name="lookingFor"
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {options.map(({ label, emoji }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    // Toggle the selection
                    const newSelected = value!.includes(label)
                      ? // @ts-ignore
                        value!.filter((item: string) => item !== label) // Remove if already selected
                      : [...value!, label]; // Add if not selected
                    onChange(newSelected); // Update form value with the new selection
                  }}
                  className={`w-full h-36 p-2 flex flex-col items-center justify-center rounded-xl transition-all duration-300 border-2 
                  ${
                    value!.includes(label)
                      ? "border-purple-500 text-white scale-105"
                      : "border-transparent text-gray-400"
                  }
                  bg-[#2E2E2F] hover:scale-105 focus:outline-none`}
                >
                  <span className="text-3xl">{emoji}</span>
                  <span className="text-sm text-center">{label}</span>
                </button>
              ))}
            </div>
          )}
        />
      </div>

      {/* Submit Button */}

      {/* Submit Button */}
      <div className="mt-6 text-center">
        <button
          disabled={formState.isSubmitting}
          type="submit"
          className="bg-[#6C19FF] text-white font-medium py-2 px-6 rounded-lg hover:bg-[#5b14e0] transition"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default LookingFor;
