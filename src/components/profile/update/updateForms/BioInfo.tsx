import { Input } from "antd";
import { useState } from "react";

interface Props {
  onUpdateSuccess: () => void;
}

const BioInfo = ({ onUpdateSuccess }: Props) => {
  const [bio, setBio] = useState("Just here for good vibes, great parties...");

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  const handleSave = () => {
    console.log("Updated Bio:", bio);

    // After successful update, call the onUpdateSuccess function to close the modal
    onUpdateSuccess();
  };

  return (
    <div>
      <label
        htmlFor="userName"
        className="capitalize my-2 inline-block text-white"
      >
        Edit Bio
      </label>
      <Input.TextArea
        value={bio}
        onChange={handleBioChange}
        rows={8}
        placeholder="Update your bio here"
        style={{
          backgroundColor: "#2e2e2e",
          borderRadius: "6px",
          border: "none",
          color: "#fff",
        }} // Change background color
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
    </div>
  );
};

export default BioInfo;
