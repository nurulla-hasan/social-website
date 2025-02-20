"use client";

import { ColorPalette } from "@/theme/themes";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  Slider,
  TimePicker,
  Typography,
} from "antd";
import { useState } from "react";

const { Option } = Select;
const { TextArea } = Input;
const { Text } = Typography;

const FilterForm = () => {
  const [form] = Form.useForm();
  const [distance, setDistance] = useState(2);
  const [ageRange, setAgeRange] = useState([15, 17]);

  // Handle Form Submit
  const handleSubmit = (values: any) => {
    console.log("Form Data:", {
      ...values,
      startTime: values.startTime?.format("HH:mm"),
      date: values.date?.format("YYYY-MM-DD"),
      distance,
      ageRange,
    });
  };

  const siderStyle = {
    track: {
      backgroundColor: "#7DFF19", // Blue color for the track
    },
    rail: {
      backgroundColor: "#7DFF19", // Light gray color for the rail
    },
    handle: {
      borderColor: "#7DFF19", // Blue color for the handle border
      backgroundColor: "#7DFF19", // White color for the handle
    },
  };

  return (
    <>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        {/* Time Selection */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Form.Item
            name="startTime"
            rules={[{ required: true, message: "Start Time is required" }]}
          >
            <TimePicker
              size="large"
              className="w-full text-white create-activity-input"
              format="HH:mm"
            />
          </Form.Item>

          <Form.Item
            name="date"
            rules={[{ required: true, message: "Date is required" }]}
          >
            <DatePicker size="large" className="w-full" />
          </Form.Item>
        </div>

        {/* Activity & Date */}
        <div className="grid grid-cols-2 gap-4 mt-4 w-full">
          <div
            className="flex items-center justify-between border rounded-lg"
            style={{ height: "42px" }}
          >
            <span className="px-2 text-[#bfbfbf] text-md">
              {" "}
              Guest Allowance
            </span>
            <Form.Item
              name="privateActivity"
              valuePropName="checked"
              label={null}
              style={{ margin: "0", padding: "0" }}
            >
              <Checkbox
                style={{
                  color: `${ColorPalette.colorPrimaryLight}`,

                  fontSize: "14px",
                }}
              >
                {" "}
                Not limit
              </Checkbox>
            </Form.Item>
          </div>

          <Form.Item
            style={{ background: "transparent" }}
            name="activity"
            rules={[{ required: true, message: "Please select an activity" }]}
          >
            <Select
              size="large"
              placeholder="Select Activity"
              className="w-full bg-gray-800 text-white create-activity-input"
            >
              <Option value="Hiking">Hiking</Option>
              <Option value="Cycling">Cycling</Option>
            </Select>
          </Form.Item>
        </div>

        {/* Distance & Age Range */}

        <div className="grid grid-cols-2 gap-4 mt-6">
          {/* Distance/Miles */}

          <div className="border p-4 rounded-lg">
            <span className="text-white">Distance Range {distance} Miles</span>
            <div className="flex w-full items-center justify-between relative ">
              <span className="absolute bottom-0 left-[0px] mt-7 ml-7 text-gray-500 font-semibold">
                0
              </span>
              <span className="inline-block h-[50px] w-[1px]  bg-[#7DFF19] mr-[-5px]"></span>
              {/* Distance Range {distance} Miles */}
              <Slider
                min={0}
                max={100}
                value={distance}
                onChange={(value) => setDistance(value)}
                styles={siderStyle}
                style={{ width: "100%" }}
              />
              <span className="absolute bottom-0 mt-7 mr-5 right-0 text-gray-500 font-semibold">
                100
              </span>
              <span className="inline-block h-[50px] w-[1px] bg-[#7DFF19] ml-[-5px] "></span>
            </div>
          </div>

          {/* Age */}
          <div className="border p-4 rounded-lg">
            <span className="text-white">
              Age Range {ageRange[0]} to {ageRange[1]}
            </span>
            {/* Age Range {ageRange[0]} to {ageRange[1]} */}
            <div className="flex w-full items-center justify-between relative">
              <span className="inline-block h-[50px] w-[1px]  bg-[#7DFF19] mr-[-5px]"></span>
              <Slider
                styles={siderStyle}
                range
                min={13}
                max={17}
                value={ageRange}
                onChange={setAgeRange}
                style={{ width: "100%" }}
              />

              <span className="inline-block h-[50px] w-[1px] bg-[#7DFF19] ml-[-5px] "></span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-7">
          <Button htmlType="submit" type="primary" className="mx-2">
            Reset all
          </Button>
          <Button htmlType="submit" type="primary" className="mx-2">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FilterForm;
