"use client";

import { Form, Input } from "antd";
import { FiSearch } from "react-icons/fi";

const ActivitySearch = ({ placeholder }: { placeholder?: string }) => {
  return (
    <>
      <Form.Item
        className="relative"
        name="name"
        rules={[{ required: true, message: "Please enter your full name" }]}
      >
        <Input
          placeholder={placeholder ? placeholder : ""}
          style={{ border: "none" }} // Remove only the border
          size="large"
          className="bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" // Example focus styling with Tailwind CSS
        />

        {/* Search Text */}
        <span className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent h-full flex items-center justify-center w-[50px] cursor-pointer text-white text-xl">
          <FiSearch />
        </span>
      </Form.Item>
    </>
  );
};

export default ActivitySearch;
