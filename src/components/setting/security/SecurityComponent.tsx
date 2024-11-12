"use client";
import { useState } from "react";
import SMSModal from "./modal/SMSModal";
import TOTPModal from "./modal/TOTPModal";
import SettingRow from "./SettingRow";
import SwitchSettingRow from "./SwitchSettingRow";
import SessionSetting from "./SessionSetting";

const SecurityComponent: React.FC = () => {
  const [require2FA, setRequire2FA] = useState<"no" | "yes">("yes");
  const [ssoProvider, setSSOProvider] = useState<"none" | "google">("none");
  const [sessionDuration, setSessionDuration] =
    useState<string>("Never Expires");
  const [idleTimeout, setIdleTimeout] = useState<string>("Never Expires");
  const [isSMSModalVisible, setIsSMSModalVisible] = useState(false);
  const [isTOTPModalVisible, setIsTOTPModalVisible] = useState(false);
  const [isSMSToggled, setIsSMSToggled] = useState(false);
  const [isTOTPToggled, setIsTOTPToggled] = useState(false);

  // Handlers for modals
  const handleSMSModalOpen = () => setIsSMSModalVisible(true);
  const handleSMSModalClose = () => {
    setIsSMSModalVisible(false);
    setIsSMSToggled(false);
  };

  const handleTOTPModalOpen = () => setIsTOTPModalVisible(true);
  const handleTOTPModalClose = () => {
    setIsTOTPModalVisible(false);
    setIsTOTPToggled(false);
  };

  return (
    <div className="w-[58.296vw] h-[44.01vw] gap-[0.6944vw] fs-14 flex flex-col">
      {/* 2FA Section */}
      <SettingRow
        title="Two-factor authentication (2FA)"
        description="We’ll prompt your Workspace members to enable 2FA on their next login."
        options={[
          { label: "Don't require 2FA", value: "no" },
          {
            label: "Require 2FA (members are required to set up 2FA)",
            value: "yes",
          },
        ]}
        value={require2FA}
        onChange={(value: "no" | "yes") => setRequire2FA(value)} // The type is inferred correctly
      />

      {/* Conditionally render SMS and TOTP settings based on 2FA */}
      {require2FA === "yes" && (
        <>
          {/* Text Message (SMS) */}
          <SwitchSettingRow
            title="Text Message (SMS)"
            description="Receive a one-time passcode via SMS each time you log in."
            isToggled={isSMSToggled}
            onToggle={(checked) => {
              setIsSMSToggled(checked);
              if (checked) handleSMSModalOpen();
            }}
          />

          {/* Authenticator App (TOTP) */}
          <SwitchSettingRow
            title="Authenticator App (TOTP)"
            description="Use an app to receive a temporary one-time passcode each time you log in."
            isToggled={isTOTPToggled}
            onToggle={(checked) => {
              setIsTOTPToggled(checked);
              if (checked) handleTOTPModalOpen();
            }}
          />
        </>
      )}

      {/* Single Sign-On (SSO) */}
      <SettingRow
        title="Single Sign-On (SSO)"
        description="Require Workspace members to log into ChainaaS using credentials from your SSO identity provider."
        options={[
          { label: "Don't require SSO", value: "none" },
          { label: "Google", value: "google" },
        ]}
        value={ssoProvider}
        onChange={(value: "none" | "google") => setSSOProvider(value)}
      />

      {/* Session Management */}
      <SessionSetting
        sessionDuration={sessionDuration}
        idleTimeout={idleTimeout}
        setSessionDuration={setSessionDuration}
        setIdleTimeout={setIdleTimeout}
      />

      {/* SMS Modal Component */}
      <SMSModal
        isVisible={isSMSModalVisible}
        onClose={handleSMSModalClose}
        onToggleOff={() => setIsSMSToggled(false)}
      />

      {/* TOTP Modal Component */}
      <TOTPModal
        isVisible={isTOTPModalVisible}
        onClose={handleTOTPModalClose}
        onToggleOff={() => setIsTOTPToggled(false)}
      />
    </div>
  );
};

export default SecurityComponent;
