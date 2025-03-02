"use client";

import { ColorPalette } from "@/theme/themes";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import Link from "next/link";

const { Title, Text } = Typography;

const SignUpForm = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full lg:w-[500px] p-6 rounded-lg">
        <Title
          level={2}
          className="text-center"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Sign Up
        </Title>
        <Text
          className="block text-center mb-5"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Join the Community – It’s Quick & Easy
        </Text>

        <Form layout="vertical" onFinish={onFinish}>
          {/* Name Field */}
          <Form.Item
            label={<span className="text-white">Full name</span>}
            name="name"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input
              placeholder="Full Name"
              style={{ outline: "none", border: "transparent" }}
              size="large"
              className="bg-gray-900 text-white"
            />
          </Form.Item>

          {/* Mobile number Field */}
          <Form.Item
            label={<span className="text-white">Mobile number</span>}
            name="mobile"
            rules={[{ required: true, message: "Please enter your number" }]}
          >
            <Input
              placeholder="Mobile number"
              style={{ outline: "none", border: "transparent" }}
              size="large"
              className="bg-gray-900 text-white"
            />
          </Form.Item>

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
              placeholder="Email Address"
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
              placeholder="Password"
              className="bg-gray-900 text-white "
              size="large"
              style={{
                color: "white",
                padding: "0px 11px",
                border: "transparent",
              }}
            />
          </Form.Item>

          {/* Confirm Password Field */}
          <Form.Item
            label={<span className="text-white">Confirm password</span>}
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Confirm Password"
              className="bg-gray-900 text-white "
              size="large"
              style={{
                color: "white",
                padding: "0px 11px",
                border: "transparent",
              }}
            />
          </Form.Item>

          {/* Accept terms and conditions */}
          <Form.Item
            name="agreeToTerms"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("You must accept the terms and conditions")
                      ),
              },
            ]}
          >
            <Checkbox className="text-white" style={{ color: "#fff" }}>
              By selecting Sign up below, I agree to{" "}
              <Link href={`/`} className="text-purple-500">
                Terms & Condition
              </Link>{" "}
              and{" "}
              <Link href={`/`} className="text-purple-500">
                Privacy Policy
              </Link>
            </Checkbox>
          </Form.Item>

          {/* Sign-up Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-purple-600 hover:bg-purple-700"
              style={{ minHeight: "40px" }}
            >
              Sign up
            </Button>
          </Form.Item>
        </Form>

        {/* Sign-in Link */}
        <p className="text-center mt-4 text-white">
          Already have an account{" "}
          <Link href="/auth/login" className="text-purple-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
