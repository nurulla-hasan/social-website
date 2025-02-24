"use client";

import useBackNavigation from "@/hooks/BackUrl";
import { ColorPalette } from "@/theme/themes";
import { Typography } from "antd";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
const { Title } = Typography;

const VersionDetailsCom: React.FC = () => {
  // navigation back
  const dynamicCurrentPath = "/settings/version-details";
  const dynamicFallbackUrl = "/settings";

  // Using the hook with dynamic currentPath and fallbackUrl
  const { handleBack } = useBackNavigation(
    dynamicCurrentPath,
    dynamicFallbackUrl
  );

  return (
    <>
      {/* Header Section */}
      <button className="cursor-pointer" onClick={handleBack}>
        <div className="flex items-center justify-start">
          <span>
            <FaArrowLeft className="text-2xl text-white" />
          </span>
          <Title
            level={3}
            className="text-left ml-3 pt-2"
            style={{ color: `${ColorPalette?.colorTextPrimary}` }}
          >
            Version Details
          </Title>
        </div>
      </button>
      <div className="bg-black min-h-screen text-white p-6">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-medium mb-1">Current Version: 1.2.0</h2>
            <p className="text-gray-400 mb-4">
              Release Date: February 15, 2025
            </p>

            <h3 className="font-medium mb-3">New Features & Improvements</h3>
            <ul className="space-y-3 list-disc pl-6">
              <li>
                Enhanced Product Detail Page (PDP) – Redesigned for better user
                engagement and higher conversion rates.
              </li>
              <li>
                Improved Mobile Responsiveness – Optimized layout for 375px and
                1440px screen sizes.
              </li>
              <li>
                Faster Load Times – Performance enhancements for quicker
                browsing.
              </li>
              <li>
                Refined User Experience (UX) – Streamlined checkout process and
                intuitive navigation.
              </li>
              <li>Bug Fixes</li>
              <li>
                Fixed an issue where product images were not loading on certain
                browsers.
              </li>
              <li>
                Resolved a payment gateway error causing transaction failures.
              </li>
              <li>Corrected text alignment issues on mobile views.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-1">Previous Versions</h2>

            <h3 className="font-medium mt-4 mb-1">Version 1.1.0</h3>
            <p className="text-gray-400 mb-3">Release Date: January 10, 2025</p>
            <ul className="space-y-3 list-disc pl-6">
              <li>Introduced a new winter collection category.</li>
              <li>Added support for multiple payment options.</li>
              <li>Bug fixes and UI enhancements.</li>
            </ul>

            <h3 className="font-medium mt-4 mb-1">Version 1.0.0</h3>
            <p className="text-gray-400 mb-3">Release Date: December 1, 2024</p>
            {/* Initial release details could go here if needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default VersionDetailsCom;
