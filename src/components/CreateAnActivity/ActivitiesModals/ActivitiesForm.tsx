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
  Switch,
  TimePicker,
  Typography,
  Upload,
} from "antd";
import { UploadChangeParam } from "antd/es/upload";
import { useState } from "react";

const { Option } = Select;
const { TextArea } = Input;
const { Text } = Typography;

const ActivitiesForm = () => {
  const [form] = Form.useForm();
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [venueImage, setVenueImage] = useState<string | null>(null);
  const [distance, setDistance] = useState(2);
  const [ageRange, setAgeRange] = useState([15, 17]);

  // Handle Image Upload
  const handleUpload = (
    info: UploadChangeParam,
    setImage: (url: string | null) => void
  ) => {
    if (info.file.status === "done" && info.file.originFileObj) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target?.result as string);
      reader.readAsDataURL(info.file.originFileObj);
    }
  };

  // Handle Form Submit
  const handleSubmit = (values: any) => {
    console.log("Form Data:", {
      ...values,
      startTime: values.startTime?.format("HH:mm"),
      endTime: values.endTime?.format("HH:mm"),
      date: values.date?.format("YYYY-MM-DD"),
      distance,
      ageRange,
      thumbnail,
      venueImage,
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
        {/* Image Upload */}
        <div className="grid grid-cols-2 gap-4 w-full activities-form-upload">
          <Upload
            className="w-full"
            showUploadList={false}
            onChange={(info) => handleUpload(info, setThumbnail)}
          >
            <div className="border border-dashed border-gray-500 p-6 rounded-lg text-center w-full">
              {thumbnail ? (
                <img
                  src={thumbnail}
                  alt="Thumbnail"
                  className="w-full rounded"
                />
              ) : (
                <>
                  <Text className="text-gray-400">Thumbnail Image</Text>
                  <p className="text-purple-500 cursor-pointer">
                    Drop your image here, or browse
                  </p>
                </>
              )}
            </div>
          </Upload>

          <Upload
            className="w-full"
            showUploadList={false}
            onChange={(info) => handleUpload(info, setVenueImage)}
          >
            <div className="border border-dashed border-gray-500 p-6 rounded-lg text-center w-full">
              {venueImage ? (
                <img src={venueImage} alt="Venue" className="w-full rounded" />
              ) : (
                <>
                  <Text className="text-gray-400">Venue Image (Optional)</Text>
                  <p className="text-purple-500 cursor-pointer">
                    Drop your image here, or browse
                  </p>
                </>
              )}
            </div>
          </Upload>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-4 mt-4 create-an-activity">
          <Form.Item
            name="activityName"
            rules={[{ required: true, message: "Activity Name is required" }]}
          >
            <Input
              size="large"
              placeholder="Activity Name"
              className=" text-white border-none"
              style={{ background: "#fff !important", border: "" }}
            />
          </Form.Item>
          <Form.Item name="theme">
            <Input
              size="large"
              placeholder="Theme (Optional)"
              style={{ background: "#fff !important" }}
              className="bg-red-800 text-white border-none"
            />
          </Form.Item>
        </div>

        {/* Time Selection */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Form.Item
            name="startTime"
            rules={[{ required: true, message: "Start Time is required" }]}
          >
            <TimePicker
              size="large"
              style={{ background: "#fff", height: "50px" }}
              className="w-full text-white create-activity-input"
              format="HH:mm"
            />
          </Form.Item>
          <Form.Item
            name="endTime"
            rules={[{ required: true, message: "End Time is required" }]}
          >
            <TimePicker
              size="large"
              style={{ background: "#fff", height: "50px" }}
              className="w-full text-white create-activity-input"
              format="HH:mm"
            />
          </Form.Item>
        </div>

        {/* Activity & Date */}
        <div className="grid grid-cols-2 gap-4 mt-4 activities-form-input">
          <Form.Item
            style={{ background: "transparent" }}
            name="activity"
            rules={[{ required: true, message: "Please select an activity" }]}
          >
            <Select
              size="large"
              style={{ background: "#171717", height: "50px" }}
              placeholder="Select Activity"
              className="w-full bg-gray-800 text-white create-activity-input"
            >
              <Option value="Hiking">Hiking</Option>
              <Option value="Cycling">Cycling</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="date"
            rules={[{ required: true, message: "Date is required" }]}
          >
            <DatePicker
              style={{ height: "50px" }}
              size="large"
              className="w-full bg-gray-800 text-white"
            />
          </Form.Item>
        </div>

        {/* Distance & Age Range */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="border p-4 rounded-lg">
            <Text
              className="text-gray-400 block mb-4"
              style={{
                color: `${ColorPalette.colorPrimaryLight}`,
                fontWeight: "500",
              }}
            >
              Distance Range {distance} Miles
            </Text>
            <Slider
              min={0}
              max={100}
              value={distance}
              onChange={setDistance}
              styles={siderStyle}
            />
          </div>
          <div className="border p-4 rounded-lg">
            <Text
              className="text-gray-400"
              style={{
                color: `${ColorPalette.colorPrimaryLight}`,
                fontWeight: "500",
              }}
            >
              Age Range {ageRange[0]} to {ageRange[1]}
            </Text>
            <Slider
              styles={siderStyle}
              range
              min={13}
              max={17}
              value={ageRange}
              onChange={setAgeRange}
            />
          </div>
        </div>

        {/* Note */}
        <Form.Item name="note" style={{ marginTop: "30px" }}>
          <TextArea
            style={{ background: "transparent", color: "#fff" }}
            rows={4}
            placeholder="Note"
            className="bg-gray-800 text-white border-none mt-4 custom-textarea"
          />
        </Form.Item>

        {/* Guest Allowance */}
        <div className="flex justify-between items-center mt-4 py-7">
          <div className="flex items-start justify-start flex-col">
            <Text
              className="text-gray-400"
              style={{
                color: `${ColorPalette.colorPrimaryLight}`,
                fontWeight: "500",
                fontSize: "19px",
              }}
            >
              Guest Allowance
            </Text>
            <Text
              className="text-gray-400"
              style={{
                color: `${ColorPalette.colorPrimaryLight}`,
                fontWeight: "500",
              }}
            >
              Activities can also have a number of people each person accepted
              can bring.
            </Text>
          </div>
          <Form.Item name="guestAllowance" valuePropName="checked">
            <Switch />
          </Form.Item>
        </div>

        <div className="activities-form-input">
          <Form.Item
            name="guestsPerParticipant"
            rules={[
              {
                required: true,
                message: "Please select the number of guests per participant",
              },
            ]}
          >
            <Select
              style={{ background: "#171717", height: "50px", color: "#fff" }}
              placeholder="Number of guests per participant"
              className="w-full text-white mt-4 custom-placeholder"
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
            </Select>
          </Form.Item>
        </div>

        {/* Checkboxes */}
        <div className="flex justify-start items-center mt-4">
          <Form.Item
            name="privateActivity"
            valuePropName="checked"
            label={null}
          >
            <Checkbox
              style={{
                color: `${ColorPalette.colorPrimaryLight}`,
                fontWeight: "500",
                fontSize: "15px",
              }}
            >
              {" "}
              Private Activity
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="groupChat"
            valuePropName="checked"
            label={null}
            style={{ marginLeft: "15px" }}
          >
            <Checkbox
              style={{
                color: `${ColorPalette.colorPrimaryLight}`,
                fontWeight: "500",
                fontSize: "15px",
              }}
            >
              Activate Group Chat
            </Checkbox>
          </Form.Item>
        </div>

        {/* Submit Button */}
        <Button htmlType="submit" type="primary">
          Create Activity
        </Button>
      </Form>
    </>
  );
};

export default ActivitiesForm;
