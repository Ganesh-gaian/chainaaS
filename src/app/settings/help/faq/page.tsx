import FAQ from "@/components/setting/help/FAQ";
import SettingHeader from "@/components/setting/other/SettingHeader";
import React from "react";

const Faq: React.FC = () => {
  return (
    <div>
      <SettingHeader heading="FAQ" text="Frequently Asked Questions" />
      <FAQ/>
    </div>
  );
};

export default Faq;
