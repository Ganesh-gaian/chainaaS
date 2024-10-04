import LanguageRegionSelector from "@/components/setting/language/LanguageRegionSelector";
import SettingHeader from "@/components/setting/other/SettingHeader";
import React from "react";

const LanguageAndRegion: React.FC = () => {
  return (
    <div>
      <SettingHeader
        heading="Language and Region"
        text="Customize your language and region."
      />
      <LanguageRegionSelector/>
    </div>
  );
};

export default LanguageAndRegion;
