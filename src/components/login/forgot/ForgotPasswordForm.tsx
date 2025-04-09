"use client";

import { ColorPalette } from "@/theme/themes";
import { fetcher } from "@/utils/fetcher";
import { Button, Form, Input, message, Typography } from "antd";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

const ForgotPasswordForm = () => {
  const router = useRouter();

  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: { email: string }) => {
    try {
      await fetcher("/auth/recovery", {
        method: "POST",
        body: values,
      });

      router.push(`/auth/login/otp-verify?email=${values.email}`);
      messageApi.open({
        type: "success",
        content: "Verification code sent to your email.",
      });
    } catch (error) {
      console.log("Forgot Password Error:", error);
      messageApi.open({
        type: "error",
        content:
          (error as any)?.message || "An error occurred. Please try again.",
      });
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      {contextHolder}
      <div className="w-full lg:w-[500px] p-6 rounded-lg">
        <Title
          level={2}
          className="text-center"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Forgot Password
        </Title>
        <Text
          className="block text-center mb-5"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Please enter your email to get verification code
        </Text>

        <Form layout="vertical" onFinish={onFinish}>
          {/* Email Field */}
          <Form.Item
            label={<span className="text-white">Email address</span>}
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input
              style={{ outline: "none", border: "transparent" }}
              size="large"
              className="bg-gray-900 text-white"
            />
          </Form.Item>

          {/* Sign-up Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-purple-600 hover:bg-purple-700"
              style={{ minHeight: "40px" }}
            >
              Continue
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
