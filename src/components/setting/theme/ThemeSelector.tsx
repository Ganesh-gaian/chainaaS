"use client";

import React, { useState } from "react";

const ThemeSelector: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>("system");

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="w-[58.296vw] h-[14.85vw] flex flex-col border rounded-[0.14vw] bg-[#fff]">
      {/* Header */}
      <div className="w-full h-[3.75vw] flex items-center px-[1.67vw] shadow-[inset_0px_-0.1vw_0px_0px_#F0F0F0]">
        <span className="text-[#323E4F]">Interface Theme</span>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col p-[1.67vw] gap-[0.56vw]">
        <p className="text-[#697483] text-[0.972vw] pb-[1.12vw]">
          Select or Customize your UI Theme
        </p>

        <div className="flex gap-[0.56vw]">
          {/* System Preference */}
          <div
            className="flex flex-col cursor-pointer gap-[1.12vw]"
            onClick={() => handleThemeChange("system")}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={selectedTheme === "system"}
                readOnly
                className="mr-2"
              />
              <div
                className={`w-[7.91vw] h-[2.78vw] rounded-lg border-2 ${
                  selectedTheme === "system"
                    ? "border-purple-600 bg-gray-300"
                    : "border-gray-400"
                }`}
              ></div>
            </div>
            <span className="text-[rgba(0,0,0,0.45)] text-[0.972vw]">
              System Preference
            </span>
          </div>

          {/* Light Mode */}
          <div
            className="flex flex-col cursor-pointer gap-[1.12vw]"
            onClick={() => handleThemeChange("light")}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={selectedTheme === "light"}
                readOnly
                className="mr-2"
              />
              <div
                className={`w-[7.91vw] h-[2.78vw] rounded-lg border-2 ${
                  selectedTheme === "light"
                    ? "border-purple-600 bg-gray-300"
                    : "border-gray-400"
                }`}
              ></div>
            </div>
            <span className="text-[rgba(0,0,0,0.45)] text-[0.972vw]">
              Light Mode
            </span>
          </div>

          {/* Dark Mode */}
          <div
            className="flex flex-col cursor-pointer gap-[1.12vw]"
            onClick={() => handleThemeChange("dark")}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={selectedTheme === "dark"}
                readOnly
                className="mr-2"
              />
              <div
                className={`w-[7.91vw] h-[2.78vw] rounded-lg border-2 ${
                  selectedTheme === "dark"
                    ? "border-purple-600 bg-gray-300"
                    : "border-gray-400"
                }`}
              ></div>
            </div>
            <span className="text-[rgba(0,0,0,0.45)] text-[0.972vw]">
              Dark Mode
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
