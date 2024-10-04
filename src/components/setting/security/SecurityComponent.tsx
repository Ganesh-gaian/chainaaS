"use client";
import { Switch, Select, Radio } from "antd";
import { useState } from "react";
import SMSModal from "./modal/SMSModal";
import TOTPModal from "./modal/TOTPModal";

const { Option } = Select;

const SecurityComponent: React.FC = () => {
  const [require2FA, setRequire2FA] = useState<"no" | "yes">("yes");

  // State to manage SSO provider with radio buttons
  const [ssoProvider, setSSOProvider] = useState<"none" | "google">("none");

  // State to manage session duration and idle timeout
  const [sessionDuration, setSessionDuration] =
    useState<string>("Never Expires");
  const [idleTimeout, setIdleTimeout] = useState<string>("Never Expires");

  // States to control the visibility of modals
  const [isSMSModalVisible, setIsSMSModalVisible] = useState(false);
  const [isTOTPModalVisible, setIsTOTPModalVisible] = useState(false);

  // States to control the switch for modals
  const [isSMSToggled, setIsSMSToggled] = useState(false);
  const [isTOTPToggled, setIsTOTPToggled] = useState(false);

  // Handlers for radio button changes
  const handle2FAChange = (e: any) => {
    setRequire2FA(e.target.value);
  };

  const handleSSOChange = (e: any) => {
    setSSOProvider(e.target.value);
  };

  // Functions to handle SMS Modal
  const handleSMSModalOpen = () => {
    setIsSMSModalVisible(true);
    setIsSMSToggled(true);
  };

  const handleSMSModalClose = () => {
    setIsSMSModalVisible(false);
    setIsSMSToggled(false);
  };

  // Functions to handle TOTP Modal
  const handleTOTPModalOpen = () => {
    setIsTOTPModalVisible(true);
    setIsTOTPToggled(true);
  };

  const handleTOTPModalClose = () => {
    setIsTOTPModalVisible(false);
    setIsTOTPToggled(false);
  };

  return (
    <div className="w-[58.296vw] h-[44.01vw] gap-[0.6944vw] text-[0.9722vw] flex flex-col">
      {/* Row 1 - 2FA Section */}
      <div className="flex gap-[1.12vw] justify-between items-center h-[7.634vw] px-[1.12vw] pt-[1.12vw] bg-[#fff]">
        <div className="flex flex-col w-[27.56vw] pb-[1.12vw] gap-[0.28vw] ">
          <span className="h-[2.083vw] pb-[0.56vw] text-[#262626] font-medium">
            Two-factor authentication (2FA)
          </span>
          <p className="text-[#323E4F]">
            We’ll prompt you Workspace members to enable 2FA on their next
            login.
          </p>
        </div>
        <div className="flex flex-1 h-[5.274vw]">
          <Radio.Group
            onChange={handle2FAChange}
            value={require2FA}
            style={{ display: "flex", flexDirection: "column", gap: "1.12vw" }}
          >
            <Radio value="no">Don't require 2FA</Radio>
            <Radio value="yes">
              Require 2FA (members are required to set up 2FA)
            </Radio>
          </Radio.Group>
        </div>
      </div>

      {/* Row 2 - Text Message (SMS) */}
      <div className="flex flex-col items-center justify-between gap-[0.56vw] h-[5.55vw] px-[1.67vw] bg-[#fff] ">
        <div className="w-full pt-[1.12vw] flex justify-between items-center">
          <span className="text-[#323E4F]">Text Message (SMS)</span>
          <Switch checked={isSMSToggled} onChange={handleSMSModalOpen} />
        </div>
        <p className="w-full pb-[1vw] text-[#697483] ">
          Receive a one-time passcode via SMS each time you log in.
        </p>
      </div>

      {/* Row 3 - Authenticator App (TOTP) */}
      <div className="flex flex-col items-center justify-between gap-[0.56vw] h-[5.55vw] px-[1.67vw] bg-[#fff] ">
        <div className="w-full pt-[1.12vw] flex justify-between items-center">
          <span className="text-[#323E4F]">Authenticator App (TOTP)</span>
          <Switch checked={isTOTPToggled} onChange={handleTOTPModalOpen} />
        </div>
        <p className="w-full pb-[1vw] text-[#697483] ">
          Use an app to receive a temporary one-time passcode each time you log
          in.
        </p>
      </div>

      {/* Row 4 - Single Sign-On (SSO) */}
      <div className="flex gap-[1.12vw] justify-between items-center h-[7.634vw] px-[1.12vw] pt-[1.12vw] bg-[#fff]">
        <div className="flex flex-col w-[27.56vw] pb-[1.12vw] gap-[0.28vw] ">
          <span className="h-[2.083vw] pb-[0.56vw] text-[#262626] font-medium">
            Single Sign-On (SSO)
          </span>
          <p className="text-[#323E4F]">
            Require Workspace members to log into ChainaaS using credentials
            from your SSO identity provider.
          </p>
        </div>
        <div className="flex flex-1 h-[5.274vw]">
          <Radio.Group
            onChange={handleSSOChange}
            value={ssoProvider}
            style={{ display: "flex", flexDirection: "column", gap: "1.12vw" }}
          >
            <Radio value="none">Don't require SSO</Radio>
            <Radio value="google">Google</Radio>
          </Radio.Group>
        </div>
      </div>

      {/* Row 5 - Session Management */}
      <div className="flex flex-col justify-between h-[14.85vw] px-[1.12vw] pt-[1.12vw] bg-[#fff]">
        <div className="flex gap-[1.12vw] items-center justify-between h-[8.057vw] ">
          <div className="flex flex-col w-[27.56vw] pb-[1.12vw] gap-[0.28vw] ">
            <span className="text-[#262626] font-medium">
              Session Management
            </span>
            <p className="text-[#323E4F]">
              Set the session and idle timeout durations for your Workspace.
              Members in your Workspace will be prompted to log back in after
              their session expires.
            </p>
          </div>
          <div className="flex flex-col flex-1 h-[5.274vw]">
            <span className="text-[#697483]">Session Duration</span>
            <Select
              value={sessionDuration}
              onChange={(value) => setSessionDuration(value)}
              className=""
            >
              <Option value="Never Expires">Never Expires</Option>
              <Option value="1 hour">1 hour</Option>
              <Option value="24 hours">24 hours</Option>
            </Select>
          </div>
        </div>
        <div className="flex pb-[1.12vw]  justify-end">
          <div className="flex flex-col w-[27.56vw]">
            <span className="text-[#697483] pb-[0.56vw]">
              Idle Timeout Duration
            </span>
            <Select
              value={idleTimeout}
              onChange={(value) => setIdleTimeout(value)}
              className=""
            >
              <Option value="Never Expires">Never Expires</Option>
              <Option value="30 minutes">30 minutes</Option>
              <Option value="1 hour">1 hour</Option>
            </Select>
          </div>
        </div>
      </div>

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
