import SettingHeader from "@/components/setting/reuseableComponent/SettingHeader";
import BrandColorPicker from "@/components/setting/theme/BrandColorPicker";
import ThemeSelector from "@/components/setting/theme/ThemeSelector";
import React from "react";

const ThemeSettings: React.FC = () => {
  return (
    <div>
      <SettingHeader
        heading="Theme Setting"
        text="Choose the preferred theme for the app."
      />
      <div className="flex flex-col gap-[2vw]">
        <BrandColorPicker />
        <ThemeSelector />
      </div>
    </div>
  );
};

export default ThemeSettings;
