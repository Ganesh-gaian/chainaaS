import ContactInfo from "@/components/setting/help/ContactInfo";
import SettingHeader from "@/components/setting/reuseableComponent/SettingHeader";
import React from "react";

const Support: React.FC = () => {
  return (
    <div>
      <SettingHeader heading="Support" text="Contact Us" />
      <ContactInfo />
    </div>
  );
};

export default Support;
