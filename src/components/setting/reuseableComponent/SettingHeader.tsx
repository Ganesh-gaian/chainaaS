import React from "react";

interface SettingHeaderProps {
  heading: string;
  text: string;
}

const SettingHeader: React.FC<SettingHeaderProps> = ({ heading, text }) => {
  return (
    <div className="w-[58.296vw] h-[5.6908vw] pt-[1.12vw] mb-[1.12vw] flex flex-col justify-between">
      <span className="flex h-[2.78vw] items-center fs-16 font-semibold">{heading}</span>
      <p className="fs-14 text-gray-600">{text}</p>
    </div>
  );
};

export default SettingHeader;
