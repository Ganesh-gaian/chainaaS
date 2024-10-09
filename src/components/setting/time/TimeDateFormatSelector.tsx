"use client";

import React, { useState } from "react";
import { Radio } from "antd";

const TimeDateFormatSelector: React.FC = () => {
  const [timeFormat, setTimeFormat] = useState<string>("24");
  const [dateFormat, setDateFormat] = useState<string>("mm/dd/yyyy");

  const handleTimeFormatChange = (e: any) => {
    setTimeFormat(e.target.value);
  };

  const handleDateFormatChange = (e: any) => {
    setDateFormat(e.target.value);
  };

  return (
    <div className="w-[58.296vw] h-[24.5vw] flex flex-col border rounded-[0.14vw] bg-[#fff] fs-14">
      {/* Header */}
      <div className="w-full h-[3.75vw] flex items-center px-[1.67vw] shadow-[inset_0px_-0.1vw_0px_0px_#F0F0F0]">
        <span className="text-[#323E4F]">Select Time & Date Format</span>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col p-[1.67vw] gap-[0.56vw]">
        {/* Time Format Section */}
        <div className="w-full flex flex-col gap-[0.56vw] pb-[1.12vw]">
          <span className="text-[#323E4F]">Time Format</span>
          <Radio.Group
            onChange={handleTimeFormatChange}
            value={timeFormat}
            style={{ display: "flex", flexDirection: "column", gap: "1.12vw" }}
          >
            <Radio value="24">24 Hour</Radio>
            <Radio value="12">12 Hour</Radio>
          </Radio.Group>
        </div>

        {/* Date Format Section */}
        <div className="w-full flex flex-col gap-[0.56vw] pb-[1.12vw]">
          <span className="text-[#323E4F]">Date Format</span>
          <Radio.Group
            onChange={handleDateFormatChange}
            value={dateFormat}
            style={{ display: "flex", flexDirection: "column", gap: "1.12vw" }} 
          >
            <Radio value="mm/dd/yyyy">mm/dd/yyyy</Radio>
            <Radio value="dd/mm/yyyy">dd/mm/yyyy</Radio>
            <Radio value="yyyy/mm/dd">yyyy/mm/dd</Radio>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};

export default TimeDateFormatSelector;
