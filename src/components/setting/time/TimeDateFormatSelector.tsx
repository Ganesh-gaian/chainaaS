// "use client";

// import React, { useState } from "react";
// import { Radio } from "antd";

// const TimeDateFormatSelector: React.FC = () => {
//   const [timeFormat, setTimeFormat] = useState<string>("24");
//   const [dateFormat, setDateFormat] = useState<string>("mm/dd/yyyy");

//   const handleTimeFormatChange = (e: any) => {
//     setTimeFormat(e.target.value);
//   };

//   const handleDateFormatChange = (e: any) => {
//     setDateFormat(e.target.value);
//   };

//   return (
//     <div className="w-[58.296vw] h-[24.5vw] flex flex-col border rounded-[0.14vw] bg-[#fff] fs-14">
//       {/* Header */}
//       <div className="w-full h-[3.75vw] flex items-center px-[1.67vw] shadow-[inset_0px_-0.1vw_0px_0px_#F0F0F0]">
//         <span className="text-[rgba(0,0,0,0.85) fs-14]">
//           Select Time & Date Format
//         </span>
//       </div>

//       {/* Content */}
//       <div className="w-full flex flex-col p-[1.67vw] gap-[0.56vw]">
//         {/* Time Format Section */}
//         <div className="w-full flex flex-col gap-[0.56vw] pb-[1.12vw]">
//           <span className="text-[#697483] fs-14">Time Format</span>
//           <Radio.Group
//             onChange={handleTimeFormatChange}
//             value={timeFormat}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "1.12vw",
//               fontSize: "0.9722vw",
//             }}
//           >
//             <Radio value="24" className="custom-time-radio">
//               24 Hour
//             </Radio>
//             <Radio value="12" className="custom-time-radio">
//               12 Hour
//             </Radio>
//           </Radio.Group>
//         </div>

//         {/* Date Format Section */}
//         <div className="w-full flex flex-col gap-[0.56vw] pb-[1.12vw]">
//           <span className="text-[#697483] fs-14">Date Format</span>
//           <Radio.Group
//             onChange={handleDateFormatChange}
//             value={dateFormat}
//             style={{ display: "flex", flexDirection: "column", gap: "1.12vw" }}
//           >
//             <Radio value="mm/dd/yyyy" className="custom-time-radio">
//               mm/dd/yyyy
//             </Radio>
//             <Radio value="dd/mm/yyyy" className="custom-time-radio">
//               dd/mm/yyyy
//             </Radio>
//             <Radio value="yyyy/mm/dd" className="custom-time-radio">
//               yyyy/mm/dd
//             </Radio>
//           </Radio.Group>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimeDateFormatSelector;

"use client";

import React, { useState } from "react";
import { Radio } from "antd";
import "../security/SettingRow.css";

// Reusable component for radio group selections
interface FormatSelectorProps {
  title: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const FormatSelector: React.FC<FormatSelectorProps> = ({
  title,
  options,
  selectedValue,
  onChange,
}) => (
  <div className="w-full flex flex-col gap-[0.56vw] pb-[1.12vw]">
    <span className="text-[#697483] fs-14">{title}</span>
    <Radio.Group
      onChange={(e) => onChange(e.target.value)}
      value={selectedValue}
      style={{ display: "flex", flexDirection: "column", gap: "1.12vw" }}
    >
      {options.map((option) => (
        <Radio
          key={option.value}
          value={option.value}
          className="custom-radio"
          style={{
            fontSize: "0.9722vw",
            color: "rgba(0,0,0,0.85)",
            display: "flex",
            gap: "0.56vw",
          }}
        >
          {option.label}
        </Radio>
      ))}
    </Radio.Group>
  </div>
);

const TimeDateFormatSelector: React.FC = () => {
  const [timeFormat, setTimeFormat] = useState<string>("24");
  const [dateFormat, setDateFormat] = useState<string>("mm/dd/yyyy");

  const timeFormatOptions = [
    { label: "24 Hour", value: "24" },
    { label: "12 Hour", value: "12" },
  ];

  const dateFormatOptions = [
    { label: "mm/dd/yyyy", value: "mm/dd/yyyy" },
    { label: "dd/mm/yyyy", value: "dd/mm/yyyy" },
    { label: "yyyy/mm/dd", value: "yyyy/mm/dd" },
  ];

  return (
    <div className="w-[58.296vw] h-[24.5vw] flex flex-col border rounded-[0.14vw] bg-[#fff] fs-14">
      {/* Header */}
      <div className="w-full h-[3.75vw] flex items-center px-[1.67vw] shadow-[inset_0px_-0.1vw_0px_0px_#F0F0F0]">
        <span className="text-[rgba(0,0,0,0.85) fs-14]">
          Select Time & Date Format
        </span>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col p-[1.67vw] gap-[0.56vw]">
        {/* Time Format Section */}
        <FormatSelector
          title="Time Format"
          options={timeFormatOptions}
          selectedValue={timeFormat}
          onChange={setTimeFormat}
        />

        {/* Date Format Section */}
        <FormatSelector
          title="Date Format"
          options={dateFormatOptions}
          selectedValue={dateFormat}
          onChange={setDateFormat}
        />
      </div>
    </div>
  );
};

export default TimeDateFormatSelector;
