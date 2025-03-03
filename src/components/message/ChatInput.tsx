import { FaImage, FaMicrophone, FaPaperPlane } from "react-icons/fa";

const ChatInputDesign = () => {
  return (
    <div className="flex items-center bg-[#1c1c1c] p-2 rounded-full w-[95%] mx-auto mb-2">
      {/* Voice Recorder Icon */}
      <button className="p-2 text-purple-500">
        <FaMicrophone size={20} />
      </button>

      {/* Image Upload Icon */}
      <button className="p-2 text-white ml-2">
        <FaImage size={20} />
      </button>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Type a message"
        className="flex-1 bg-[#2a2a2a] text-gray-300 placeholder-gray-500 px-4 py-2 rounded-full outline-none mx-3"
      />

      {/* Send Button */}
      <button className="p-2 text-white">
        <FaPaperPlane size={20} />
      </button>
    </div>
  );
};

export default ChatInputDesign;
