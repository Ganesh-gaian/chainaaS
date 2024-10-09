"use client";

import React, { useState } from "react";
import { Select, Input } from "antd";

// Define the types for language options
const languageOptions = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
];

const LanguageRegionSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("english");
  const [region, setRegion] = useState<string>("New York");

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegion(e.target.value);
  };

  return (
    <div className="w-[58.296vw] h-[18.47vw] flex flex-col border rounded-[0.14vw] bg-[#fff] fs-14">
      {/* Header */}
      <div className="w-full h-[3.75vw] flex items-center px-[1.67vw] shadow-[inset_0px_-0.1vw_0px_0px_#F0F0F0]">
        <span className="text-[#323E4F]">Select Language and Region</span>
      </div>
      {/* Content */}
      <div className="w-full flex flex-col p-[1.67vw] gap-[0.56vw]">
        <div className="w-full h-[5.413vw] flex flex-col gap-[0.56vw] pb-[1.12vw]">
          <label className="text-[#697483]">Language</label>
          <Select
            defaultValue={selectedLanguage}
            onChange={handleLanguageChange}
            className="w-[27.8vw] rounded-[0.14vw]"
            options={languageOptions}
          />
        </div>
        <div className="w-full h-[5.413vw] flex flex-col gap-[0.56vw] pb-[1.12vw]">
          <label className="text-[#697483]">Region</label>
          <Input
            value={region}
            onChange={handleRegionChange}
            style={{ borderRadius: "0.14vw", width:"27.8vw" }}
            placeholder="New York"
          />
        </div>
      </div>
    </div>
  );
};

export default LanguageRegionSelector;
