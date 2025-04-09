"use client";

import { ColorPalette } from "@/theme/themes";
import { fetcher } from "@/utils/fetcher";
import { Button, Form, Input, message, Typography } from "antd";
import { useRouter, useSearchParams } from "next/navigation";

const { Title, Text } = Typography;

const OTPForm = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const onFinish = async (values: { otp: string }) => {
    try {
      await fetcher("/auth/recovery-verification", {
        method: "POST",
        body: { ...values, email },
      });
      messageApi
        .open({
          type: "success",
          content: "OTP verified successfully.",
        })
        .then(() => {
          router.push(`/auth/login/reset-new-password?email=${email}`);
        });
    } catch (error) {
      console.log("OTP Verification Error:", error);
      messageApi.open({
        type: "error",
        content:
          (error as any)?.message || "An error occurred. Please try again.",
      });
    }
  };

  const handleResendOTP = async () => {
    try {
      await fetcher("/auth/resend-otp", {
        method: "POST",
        body: { email, status: "recovery" },
      });
      messageApi.open({
        type: "success",
        content: "Verification code resent to your email.",
      });
    } catch (error) {
      console.log("Resend OTP Error:", error);
      messageApi.open({
        type: "error",
        content:
          (error as any)?.message || "An error occurred. Please try again.",
      });
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      {contextHolder}
      {/* OTP Form Container */}
      <div className="w-full max-w-md  p-8 rounded-lg shadow-lg flex items-center justify-center flex-col">
        {/* Title */}

        <Title
          level={2}
          className="text-center"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          OTP Verification
        </Title>

        {/* Description */}
        <Text
          className="block text-center text-gray-600"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          We have sent a verification code to
        </Text>

        {/* Email Address */}
        <Text
          className="block text-center text-gray-800 font-semibold mb-6"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          {email}
        </Text>

        {/* OTP Input Form */}
        <Form onFinish={onFinish}>
          {/* OTP Input Field */}
          <Form.Item
            name="otp"
            rules={[
              { required: true, message: "Please enter the OTP" },
              { len: 6, message: "OTP must be 6 digits" },
            ]}
          >
            <Input.OTP
              length={6} // Set the length of the OTP (6 digits)
              formatter={(str) => str.toUpperCase()} // Optional: Format the input
              className="w-full justify-center"
              style={{ outline: "none", border: "transparent" }}
            />
          </Form.Item>

          {/* Verify Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 mt-7"
              style={{ minHeight: "40px" }}
            >
              Verify
            </Button>
          </Form.Item>
        </Form>

        {/* Resend OTP Link */}
        <div className="text-center mt-4">
          <Text
            className="text-gray-600"
            style={{ color: `${ColorPalette?.colorTextPrimary}` }}
          >
            Didn't receive the OTP?{" "}
            <button
              onClick={handleResendOTP}
              className="text-purple-500 hover:underline"
              style={{ color: `${ColorPalette?.colorPrimary}` }}
            >
              Resend OTP
            </button>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default OTPForm;
