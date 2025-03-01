"use client"; // ✅ Ensure this is at the very top

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaImage, FaPaperPlane, FaTimes } from "react-icons/fa";

// ✅ Define Message Type
type Message = {
  type: "text" | "image" | "audio";
  content: string;
};

const ChatInput = () => {
  const { register, handleSubmit, setValue } = useForm<{ message: string }>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false); // ✅ Fix SSR Hydration Error

  // ✅ Handle sending message (Text + Images)
  const onSubmit = (data: { message: string }) => {
    const { message } = data;

    if (message.trim() !== "") {
      setMessages((prev) => [...prev, { type: "text", content: message }]);
    }
  };

  // ✅ Handle image selection
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const imageUrls = files.map((file) =>
        isClient ? URL.createObjectURL(file) : ""
      );
      setSelectedImages((prev) => [...prev, ...imageUrls]);
    }

    e.target.value = ""; // Clear input field
  };

  // ✅ Remove selected image before sending
  const removeImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="chat-container bg-[#121212] p-4 text-white">
      {/* Messages List */}
      <div className="messages-list max-h-[400px] overflow-y-auto mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className="message p-2 rounded-lg">
            {msg.type === "text" && (
              <div className="bg-gray-700 p-2 rounded-lg">{msg.content}</div>
            )}
            {msg.type === "image" && (
              <img
                src={msg.content}
                alt="sent"
                className="max-w-[200px] rounded-lg"
              />
            )}
            {msg.type === "audio" && (
              <audio controls src={msg.content} className="w-full"></audio>
            )}
          </div>
        ))}
      </div>

      {/* Show Selected Images */}
      {selectedImages.length > 0 && (
        <div className="flex gap-2 mb-2">
          {selectedImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt="preview"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <button
                className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1"
                onClick={() => removeImage(index)}
              >
                <FaTimes size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Input Area */}
      <form
        className="chat-input-form flex items-center bg-[#1e1e1e] rounded-full px-4 py-2 gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="imageUpload" className="cursor-pointer text-purple-500">
          <FaImage size={20} />
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleImageSelect}
          />
        </label>

        {/* ✅ Audio Recorder with Microphone Icon */}

        <input
          type="text"
          className="flex-1 bg-transparent text-white outline-none px-2"
          placeholder="Type a message..."
          {...register("message")}
        />

        <button type="submit" className="text-purple-500 hover:text-purple-400">
          <FaPaperPlane size={20} />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
