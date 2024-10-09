"use client";

import React, { useState } from "react";

const predefinedColors = [
  "#007BFF",
  "#E83E8C",
  "#6F42C1",
  "#20C997",
  "#FFC107",
  "#FD7E14",
  "#343A40",
  "#17A2B8",
  "#6C757D",
  "#5A6268",
  "#FF5733",
];

const BrandColorPicker: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("#007BFF");
  const [customColor, setCustomColor] = useState<string>("#1890FF");

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setCustomColor(color); // Update custom color to match selected color
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomColor(e.target.value);
    setSelectedColor(e.target.value); // Update selected color to match custom input
  };

  return (
    <div className="w-[58.296vw] h-[18.74vw] flex flex-col border rounded-[0.14vw] bg-[#fff]">
      <div className="w-full h-[3.75vw] flex items-center px-[1.67vw] shadow-[inset_0px_-0.1vw_0px_0px_#F0F0F0] ">
        <span className="text-[#323E4F]">Brand Color</span>
      </div>
      <div className="w-full flex flex-col p-[1.67vw] gap-[0.56vw]">
        <div className="w-full h-[5.7vw] flex flex-col justify-between">
          <p className="text-[#697483] fs-14">Select or Customize your Brand Color</p>
          <div className="flex flex-wrap">
            {predefinedColors.map((color) => (
              <div
                key={color}
                className={`w-10 h-10 rounded-full cursor-pointer m-1 border-2 ${
                  selectedColor === color
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
              />
            ))}
          </div>
        </div>

        <div className="w-full h-[5.41vw] flex flex-col justify-between pb-[1.12vw] ">
          <p className="text-[#697483] fs-14">Custom Color</p>
          <div className="flex items-center">
            <input
              type="text"
              value={customColor}
              onChange={handleCustomColorChange}
              className="border rounded p-1 mr-2 w-80"
              placeholder="#1890FF"
            />
            <div
              className="w-9 h-9 rounded-full"
              style={{ backgroundColor: customColor }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandColorPicker;
