import React from "react";
import SettingHeader from "@/components/setting/other/SettingHeader";

const Roles: React.FC = () => {
  return (
    <div className="h-[85vh] overflow-y-auto no-scrollbar">
      <SettingHeader
        heading="Profile"
        text="Take control of your workspace security by reviewing roles and enabling extra protections."
      />

      <h1>Roles Settings</h1>
      <div>This is my Roles page</div>
    </div>
  );
};

export default Roles;
