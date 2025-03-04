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
import { useEffect, useState } from "react";

const { Option } = Select;
const { TextArea } = Input;
const { Text } = Typography;

const FilterForm = () => {
  const [form] = Form.useForm();
  const [distance, setDistance] = useState(2);
  const [ageRange, setAgeRange] = useState([15, 17]);

  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 992);
      setIsSmallScreen(width <= 480);
    };

    checkScreenSize(); // Initial check on mount
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Handle Form Submit
  const handleSubmit = (values: any) => {
    console.log("Form Data:", {
      ...values,
      startTime: values.startTime?.format("h:mm A"),
      date: values.date?.format("YYYY-MM-DD"),
      distance,
      ageRange,
    });
  };

  const siderStyle = {
    track: {
      backgroundColor: "#7DFF19",
    },
    rail: {
      backgroundColor: "#1c1c1c",
    },
    handle: {
      borderColor: "#7DFF19",
      backgroundColor: "#7DFF19",
    },
  };

  return (
    <>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        {/* Time Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
          <Form.Item
            name="startTime"
            rules={[{ required: true, message: "Start Time is required" }]}
          >
            <TimePicker
              size="large"
              className="w-full text-white create-activity-input"
              format="h:mm A"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 w-full">
          <div
            className="flex items-center justify-between border rounded-lg"
            style={{ height: "42px" }}
          >
            <span
              className={`px-2 text-[#bfbfbf] text-md ${
                isSmallScreen ? "hidden" : "block"
              }`}
            >
              Guest Allowance
            </span>

            <Form.Item
              name="privateActivity"
              valuePropName="checked"
              label={null}
              style={{ margin: "0", padding: "5px" }}
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
              dropdownStyle={{
                backgroundColor: "#1c1c1c",
                color: "#fff",
              }}
              size="large"
              placeholder="Activity Type"
              className="w-full text-white create-activity-input-filter"
            >
              <Option value="Hiking">Hiking</Option>
              <Option value="Cycling">Cycling</Option>
              <Option value="Running">Running</Option>
              <Option value="Swimming">Swimming</Option>
              <Option value="Yoga">Yoga</Option>
              <Option value="Camping">Camping</Option>
              <Option value="Fishing">Fishing</Option>
              <Option value="Kayaking">Kayaking</Option>
              <Option value="Rock Climbing">Rock Climbing</Option>
              <Option value="Skiing">Skiing</Option>
            </Select>
          </Form.Item>
        </div>

        {/* age  */}
        <div>
          <Form.Item
            style={{ background: "transparent" }}
            name="age"
            rules={[{ required: true, message: "Please select an activity" }]}
          >
            <Select
              dropdownStyle={{
                backgroundColor: "#1c1c1c",
                color: "#fff",
              }}
              size="large"
              placeholder="Select your age range"
              className="w-full text-white create-activity-input-filter"
            >
              <Option value="0-3">0-3 years</Option>
              <Option value="3-6">3-6 years</Option>
              <Option value="6-9">6-9 years</Option>
              <Option value="9-12">9-12 years</Option>
              <Option value="12-15">12-15 years</Option>
              <Option value="15-18">15-18 years</Option>
              <Option value="18-21">18-21 years</Option>
              <Option value="21-24">21-24 years</Option>
              <Option value="24-27">24-27 years</Option>
              <Option value="27-30">27-30 years</Option>
              <Option value="30-33">30-33 years</Option>
              <Option value="33-35">33-35 years</Option>
            </Select>
          </Form.Item>
        </div>

        {/* Distance & Age Range */}
        <div className="w-full mt-4">
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
          {/* <div className="border p-4 rounded-lg">
            <span className="text-white">
              {" "}
              Age Range {ageRange[0]} to {ageRange[1]}
            </span>
            <div className="flex w-full items-center justify-between relative ">
              <span className="absolute bottom-0 left-[0px] mt-7 ml-7 text-gray-500 font-semibold">
                13
              </span>
              <span className="inline-block h-[50px] w-[1px]  bg-[#7DFF19] mr-[-5px]"></span>
             
              <Slider
                styles={siderStyle}
                range
                min={13}
                max={50}
                value={ageRange}
                onChange={(newRange) => {
                  let [minAge, maxAge] = newRange;

                  // Ensure the age range does not exceed a 3-year difference
                  if (maxAge - minAge > 3) {
                    maxAge = minAge + 3;
                  }
                  if (minAge > maxAge - 3) {
                    minAge = maxAge - 3;
                  }

                  setAgeRange([minAge, maxAge]);
                }}
                style={{ width: "100%" }}
              />
              <span className="absolute bottom-0 mt-7 mr-5 right-0 text-gray-500 font-semibold">
                50
              </span>
              <span className="inline-block h-[50px] w-[1px] bg-[#7DFF19] ml-[-5px] "></span>
            </div>
          </div> */}
        </div>

        {/* Hair Color Field */}
        <div className="mt-7">
          <Form.Item
            name="hairColor"
            rules={[{ required: true, message: "Please select a hair color" }]}
          >
            <Select placeholder="Hair Color" size="large">
              <Option value="Black">Black</Option>
              <Option value="Brown">Brown</Option>
              <Option value="Blonde">Blonde</Option>
              <Option value="Red">Red</Option>
              <Option value="Gray">Gray</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
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
