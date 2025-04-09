"use client";

import { ColorPalette } from "@/theme/themes";
import { fetcher } from "@/utils/fetcher";
import { Button, Form, Input, message, Typography } from "antd";
import { OTPProps } from "antd/es/input/OTP";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const { Title, Text } = Typography;

const ActiveAccountForm = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (!email) {
      router.push("/auth/sign-up");
    }
  }, [email]);

  const onFinish = async (values: { otp: string }) => {
    try {
      await fetcher("/auth/activate", {
        method: "POST",
        body: {
          email: email,
          otp: values.otp,
        },
      });

      messageApi.success("Account activated successfully!");
      router.push("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleResendOTP = async () => {
    try {
      await fetcher("/auth/resend-otp", {
        method: "POST",
        body: { email: email, status: "activate" },
      });

      messageApi.success(
        "A new OTP has been sent to your email. Please check your inbox."
      );
    } catch (error) {
      console.log(error);
      messageApi.error(
        error instanceof Error ? error.message : "Failed to resend OTP"
      );
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      {contextHolder}
      <div className="w-full max-w-md  p-8 rounded-lg shadow-lg flex items-center justify-center flex-col">
        {/* Title */}

        <Title
          level={2}
          className="text-center"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Verification your account
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
              Active now
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

export default ActiveAccountForm;
