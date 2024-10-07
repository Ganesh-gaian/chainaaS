import SettingHeader from "@/components/setting/other/SettingHeader";
import TimeDateFormatSelector from "@/components/setting/time/TimeDateFormatSelector";
import React from "react";

const TimeDateFormat: React.FC = () => {
  return (
    <div>
      <SettingHeader
        heading="Time & Date Format"
        text="Customize your Time & Date Format."
      />
      <TimeDateFormatSelector />
    </div>
  );
};

export default TimeDateFormat;
