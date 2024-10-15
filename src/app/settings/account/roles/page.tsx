import React from "react";
import SettingHeader from "@/components/setting/reuseableComponent/SettingHeader";
import ManagePeople from "@/components/setting/account/ManagePeople";

const Roles: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col gap-[1vw]">
      <SettingHeader heading="Roles & Permission" text="Take control of your workspace security by reviewing roles and enabling extra protections" />
      <ManagePeople />
    </div>
  );
};

export default Roles;
