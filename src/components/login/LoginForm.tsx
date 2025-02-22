"use client";

import { ColorPalette } from "@/theme/themes";
import { GoogleOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Form, Input, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaInstagram, FaSnapchatGhost } from "react-icons/fa";

const { Title, Text } = Typography;

const LoginForm = () => {
  const router = useRouter();

  const onFinish = (values: { email: string; password: string }) => {
    console.log("Success:", values);

    if (values.email) {
      router.push("/auth/profile");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full lg:w-[500px] p-6 rounded-lg">
        <Title
          level={2}
          className="text-center"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Login to Account
        </Title>
        <Text
          className="block text-center mb-5"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Welcome Back, Please Enter Details
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

          {/* Password Field */}
          <Form.Item
            label={<span className="text-white">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              className="bg-gray-900 text-white "
              size="large"
              style={{
                color: "white",
                padding: "0px 11px",
                border: "transparent",
              }}
            />
          </Form.Item>

          {/* Remember Password and Forgot Password */}
          <div className="flex justify-between items-center mb-4">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="text-white" style={{ color: "#fff" }}>
                Remember Password
              </Checkbox>
            </Form.Item>
            <Link
              className="text-purple-500 hover:underline"
              style={{ color: "#fff" }}
              href="/auth/login/forgot-password/"
            >
              Forget Password?
            </Link>
          </div>

          {/* Sign-in Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-purple-600 hover:bg-purple-700"
              style={{ minHeight: "40px" }}
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>

        {/* Social Login */}
        <div className="text-center my-4">
          <Divider
            style={{ color: "white", border: `${ColorPalette?.colorBorder}` }}
            plain
          >
            Or Continue With
          </Divider>
        </div>

        <div className="flex justify-center gap-3">
          <Button
            shape="default"
            size="large"
            icon={<GoogleOutlined />}
            style={{
              padding: "15px 40px",
              background: "#fff",
              fontSize: "25px",
              border: "none",
            }}
          />
          <Button
            shape="default"
            size="large"
            style={{
              padding: "15px 40px",
              background: "#FFFC00",
              fontSize: "25px",
              border: "none",
            }}
            icon={<FaSnapchatGhost className="text-yellow-400" />}
          />
          <Button
            shape="default"
            size="large"
            icon={<FaInstagram className="text-pink-500" />}
            style={{
              padding: "15px 40px",
              background: "linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7)",
              fontSize: "25px",
              border: "none",
              color: "#fff",
            }}
          />
        </div>

        {/* Sign-up Link */}
        <p className="text-center mt-4 text-white">
          Not a member?{" "}
          <Link
            href="/auth/sign-up"
            className="text-purple-500 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
