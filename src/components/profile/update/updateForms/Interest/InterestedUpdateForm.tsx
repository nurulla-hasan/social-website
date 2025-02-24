import { FormValues } from "@/components/profile/multi-step-form/FormSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import InterestUpdate from "./InterestUpdate";

interface Props {
  onUpdateSuccess: () => void;
}

const InterestUpdateForm = ({ onUpdateSuccess }: Props) => {
  const { control, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      interest: {}, // Initial empty object for interests
    },
  });

  // Handle form submission
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form submitted:", data);
    // Call the onUpdateSuccess callback or do further actions after form submission
    // For example, update state or send the data to an API
    // You can also display a success message or redirect
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Pass the control from useForm to InterestUpdate */}
      <InterestUpdate
        control={control}
        onUpdateSuccess={() => console.log("Update successful!")}
      />

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

export default InterestUpdateForm;
