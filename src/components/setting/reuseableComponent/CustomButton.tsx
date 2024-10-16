import React from "react";
import { Button, ButtonProps } from "antd";

interface CustomButtonProps {
  text: string;
  type?: ButtonProps["type"]; // Use type directly from antd's ButtonProps
  danger?: boolean;
  width?: string;
  height?: string;
  fontSize?: string;
  borderRadius?: string;
  border?: string;
  onClick?: () => void;
  disabled?: boolean; // Disabled state
  color?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  type = "default",
  danger = false,
  width = "auto",
  height = "auto",
  fontSize = "0.9722vw",
  borderRadius = "0.14vw",
  border = "1px solid #d9d9d9",
  onClick,
  disabled = false,
  color = "#000",
}) => {
  return (
    <Button
      type={type}
      danger={danger}
      disabled={disabled}
      onClick={onClick}
      style={{
        width,
        height,
        fontSize,
        borderRadius,
        border,
        color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="hover:border-[#5c42fb00]"
    >
      {text}
    </Button>
  );
};

export default CustomButton;
