"use client";

import { ColorPalette } from "@/theme/themes";
import { Typography } from "antd";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
const { Title } = Typography;

const TermsConditionsCom: React.FC = () => {
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
          Terms & Conditions
        </Title>
      </div>
      <div className="bg-black min-h-screen text-white p-6">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-medium mb-4">Introduction</h2>
            <p className="text-gray-400 mb-4">
              Welcome to our platform. By accessing or using our services, you
              agree to comply with and be bound by the following terms and
              conditions. Please read them carefully before using our platform.
            </p>

            <h3 className="font-medium mb-3">Acceptance of Terms</h3>
            <p className="text-gray-400 mb-4">
              By using our platform, you confirm that you accept these terms and
              conditions and agree to abide by them. If you do not agree to
              these terms, you must not use our platform.
            </p>

            <h3 className="font-medium mb-3">User Responsibilities</h3>
            <ul className="space-y-3 list-disc pl-6">
              <li>
                You must provide accurate and complete information when
                registering on our platform.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account and password.
              </li>
              <li>
                You agree not to use our platform for any illegal or
                unauthorized purposes.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4">Intellectual Property</h2>
            <p className="text-gray-400 mb-4">
              All content on this platform, including text, graphics, logos, and
              images, is the property of our company and is protected by
              intellectual property laws. You may not use, reproduce, or
              distribute any content without our prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-400 mb-4">
              Our platform is provided "as is" without any warranties, express
              or implied. We shall not be liable for any indirect, incidental,
              or consequential damages arising out of your use of or inability
              to use our platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4">Changes to Terms</h2>
            <p className="text-gray-400 mb-4">
              We reserve the right to modify these terms and conditions at any
              time. Any changes will be effective immediately upon posting on
              this page. Your continued use of the platform after changes are
              posted constitutes your acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-4">
              If you have any questions about these terms and conditions, please
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

export default TermsConditionsCom;
