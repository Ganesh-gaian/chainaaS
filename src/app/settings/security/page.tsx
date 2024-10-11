import SettingHeader from "@/components/setting/other/SettingHeader";
import SecurityComponent from "@/components/setting/security/SecurityComponent";
import React from "react";

const Security: React.FC = () => {
  return (
    <div className="h-[85vh] overflow-y-auto no-scrollbar">
      <SettingHeader
        heading="Security"
        text="Take control of your workspace security by reviewing roles and enabling extra protections."
      />
      <SecurityComponent/>
    </div>
  );
};

export default Security;
