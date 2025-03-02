"use client";

import { Typography } from "antd";
import React from "react";
import { IconType } from "react-icons";

const { Title } = Typography;

interface PageHeaderProps {
  icon?: IconType;
  text: string;
  goBack: () => void;
  textColor?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  icon: Icon,
  text,
  goBack,
  textColor,
}) => {
  return (
    <button className="cursor-pointer" onClick={goBack}>
      <div className="flex items-center justify-start">
        {/* <span>
          <Icon className="text-2xl text-white" />
        </span> */}
        <Title
          level={3}
          className="text-left ml-3 pt-2"
          style={{ color: textColor || "black" }}
        >
          {text}
        </Title>
      </div>
    </button>
  );
};

export default PageHeader;
