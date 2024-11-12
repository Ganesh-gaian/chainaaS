import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  selectedValue,
  onSelect,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelect = (value: string) => {
    onSelect(value);
    setDropdownOpen(false);
  };

  return (
    <div className="relative ">
      <div
        className="w-full h-[2.22vw] border-[0.1vw] border-[#D9D9D9] px-[1.12vw] flex items-center justify-between rounded-[0.14vw] cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-[#323E4F] fs-14">{options.find((opt) => opt.value === selectedValue)?.label}</span>
        <DownOutlined className="text-[0.833vw] text-[#323E4F]" />
      </div>

      {dropdownOpen && (
        <div className="absolute z-10 bg-white border-[0.1vw] border-[#D9D9D9] rounded-[0.14vw] w-full mt-[0.14vw]">
          {options.map((option) => (
            <div
              key={option.value}
              className="px-[0.833vw] py-[0.42vw] hover:bg-[#F0F0F0] cursor-pointer fs-14"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
