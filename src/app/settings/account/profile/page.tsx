import SettingHeader from "@/components/setting/other/SettingHeader";
import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div>
      <SettingHeader
        heading="Profile"
        text="Your personal information and account security settings."
      />
      <h1>Profile Settings</h1>
      <div>This is my profile page</div>
    </div>
  );
};

export default ProfilePage;
