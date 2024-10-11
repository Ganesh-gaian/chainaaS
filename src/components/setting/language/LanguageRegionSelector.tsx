"use client";

import React, { useState } from "react";
import { Input } from "antd";
import { DownOutlined } from "@ant-design/icons";

const languageOptions = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
];

const LanguageRegionSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("english");
  const [region, setRegion] = useState<string>("New York");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    setDropdownOpen(false);
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegion(e.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="w-[58.296vw] h-[18.47vw] flex flex-col border rounded-[0.14vw] bg-white text-[0.9722vw]">
      {/* Header */}
      <div className="w-full h-[3.75vw] flex items-center px-[1.67vw] shadow-[inset_0px_-0.1vw_0px_0px_#F0F0F0]">
        <span className="text-[#323E4F]">Select Language and Region</span>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col p-[1.67vw] gap-[0.56vw]">
        <div className="w-full flex flex-col gap-[0.56vw] pb-[1.12vw]">
          <label className="text-[#697483]">Language</label>

          {/* Custom Dropdown for Language */}
          <div className="relative w-[27.8vw]">
            <div
              className="w-full h-[2.22vw] border-[0.1vw] border-[#D9D9D9] px-[0.833vw] flex items-center justify-between rounded-[0.14vw] cursor-pointer"
              onClick={toggleDropdown}
            >
              <span>
                {
                  languageOptions.find((opt) => opt.value === selectedLanguage)
                    ?.label
                }
              </span>
              <DownOutlined className="text-[0.833vw] text-[#323E4F]" />
            </div>

            {dropdownOpen && (
              <div className="absolute z-10 bg-white border-[0.1vw] border-[#D9D9D9] rounded-[0.14vw] w-full mt-[0.14vw]">
                {languageOptions.map((option) => (
                  <div
                    key={option.value}
                    className="px-[0.833vw] py-[0.42vw] hover:bg-[#F0F0F0] cursor-pointer"
                    onClick={() => handleLanguageChange(option.value)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="w-full h-[5.413vw] flex flex-col gap-[0.56vw] pb-[1.12vw]">
          <label className="text-[#697483]">Region</label>
          <Input
            value={region}
            onChange={handleRegionChange}
            style={{
              borderRadius: "0.14vw",
              width: "27.8vw",
              height: "2.22vw",
              fontSize: "0.9722vw",
              paddingLeft: "0.833vw",
            }}
            placeholder="New York"
          />
        </div>
      </div>
    </div>
  );
};

export default LanguageRegionSelector;
