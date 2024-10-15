import AccountSettings from "@/components/setting/logout/AccountSettings";
import SettingHeader from "@/components/setting/reuseableComponent/SettingHeader";
import React from "react";

const Logout: React.FC = () => {
  return (
    <div>
      <SettingHeader
        heading="Logout"
        text="Proceed with Caution"
      />
      <AccountSettings/>
    </div>
  );
};
export default Logout;
