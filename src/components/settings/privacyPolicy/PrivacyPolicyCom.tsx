"use client";

import { Typography } from "antd";
import React from "react";
const { Title } = Typography;

import { ColorPalette } from "@/theme/themes";
import { FaArrowLeft } from "react-icons/fa6";

const PrivacyPolicyCom: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex items-center justify-start">
        <span>
          <FaArrowLeft className="text-2xl text-white" />
        </span>
        <Title
          level={3}
          className="text-left ml-3 pt-2"
          style={{ color: `${ColorPalette?.colorTextPrimary}` }}
        >
          Privacy & Policy
        </Title>
      </div>
      <div className="bg-black min-h-screen text-white p-6">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-medium mb-4">Introduction</h2>
            <p className="text-gray-400 mb-4">
              Your privacy is important to us. This Privacy Policy outlines how
              we collect, use, and protect your personal information when you
              use our platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4">Information We Collect</h2>
            <p className="text-gray-400 mb-4">
              We may collect personal information such as your name, email
              address, and usage data when you interact with our platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4">
              How We Use Your Information
            </h2>
            <ul className="space-y-3 list-disc pl-6">
              <li>To provide and maintain our services.</li>
              <li>To improve user experience and functionality.</li>
              <li>To communicate with you regarding updates and promotions.</li>
              <li>To ensure security and prevent fraudulent activities.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4">Data Protection</h2>
            <p className="text-gray-400 mb-4">
              We implement security measures to protect your personal
              information from unauthorized access, alteration, or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4">Third-Party Services</h2>
            <p className="text-gray-400 mb-4">
              We may use third-party services to analyze usage and improve our
              platform. These services have their own privacy policies, and we
              encourage you to review them.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4">Changes to This Policy</h2>
            <p className="text-gray-400 mb-4">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and your continued use of our
              platform constitutes acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:support@example.com"
                className="text-blue-500 hover:underline"
              >
                support@example.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyCom;
