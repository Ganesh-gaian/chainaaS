import AlliancePartnerCard from "@/components/setting/help/AlliancePartnerCard";
import SettingHeader from "@/components/setting/reuseableComponent/SettingHeader";
import React from "react";

const Alliance: React.FC = () => {
  return (
    <div>
      <SettingHeader heading="Alliance Partner" text="Broadcast Partner " />
      <AlliancePartnerCard/>
    </div>
  );
};

export default Alliance;
