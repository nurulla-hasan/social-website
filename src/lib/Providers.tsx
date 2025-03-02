"use client";

import { ColorPalette } from "@/theme/themes"; // Ensure ColorPalette is correctly imported
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, theme } from "antd";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Primary colors
          colorPrimary: ColorPalette.colorPrimary,
          // @ts-ignore
          colorPrimaryLight: ColorPalette.colorPrimaryLight,
          colorPrimaryDark: ColorPalette.colorPrimaryDark,

          // Text colors
          colorTextPrimary: ColorPalette.colorTextPrimary,
          colorTextSecondary: ColorPalette.colorTextSecondary,
          colorTextLight: ColorPalette.colorTextLight,
          colorText: ColorPalette.colorText,

          // Background colors
          colorBackground: ColorPalette.commonColor,
          sidebarBg: ColorPalette.sidebarBg,
          colorAccent: ColorPalette.colorAccent,

          // Border and shadow colors
          colorBorder: ColorPalette.colorBorder,
          colorShadow: ColorPalette.colorShadow,

          // Status colors (success, warning, error, info)
          colorSuccess: ColorPalette.colorSuccess,
          colorWarning: ColorPalette.colorWarning,
          colorError: ColorPalette.colorError,
          colorInfo: ColorPalette.colorInfo,

          // Highlight and overlay colors
          colorHighlight: ColorPalette.colorHighlight,
          colorOverlay: ColorPalette.colorOverlay,

          // Deep color (maybe for dark backgrounds or emphasis)
          colorDeep: ColorPalette.colorDeep,
        },
        algorithm: theme.darkAlgorithm,
      }}
    >
      <AntdRegistry>{children}</AntdRegistry>
    </ConfigProvider>
  );
};

export default Providers;
