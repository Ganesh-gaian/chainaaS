import PrivacyPolicy from "@/components/setting/help/PrivacyPolicy";
import SettingHeader from "@/components/setting/reuseableComponent/SettingHeader";
import React from "react";

const Privacy: React.FC = () => {
  return (
    <div>
      <SettingHeader heading="Privacy Policy" text="Privacy policy 2024" />
      <PrivacyPolicy />
    </div>
  );
};

export default Privacy;
