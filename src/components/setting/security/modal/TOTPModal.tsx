import React, { useState } from "react";
import { Modal } from "antd";
import AppInfo from "./AppInfo";
import QRCodeModal from "./QRCodeModal";
import "./TOTPModal.css";

interface TOTPModalProps {
  isVisible: boolean;
  onClose: () => void;
  onToggleOff: () => void;
}

const TOTPModal: React.FC<TOTPModalProps> = ({
  isVisible,
  onClose,
  onToggleOff,
}) => {
  const [isQRCodeModalVisible, setIsQRCodeModalVisible] = useState(false);

  const handleCancel = () => {
    onClose();
    onToggleOff();
  };

  // This will handle the opening of the QR Code Modal and closing of the TOTP Modal
  const handleReadyToScan = () => {
    setIsQRCodeModalVisible(true);
    onClose();
  };

  const handleQRCodeModalClose = () => {
    setIsQRCodeModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Install an authentication app on your phone."
        open={isVisible}
        onCancel={handleCancel}
        className="TOTPCustomModal"
        width={"39.72vw"}
        footer={null}
      >
        <div className=" w-[39.72vw] flex flex-col ">
          <div className="w-full flex flex-col gap-[1.12vw] h-[15.01vw] border-t-[0.1vw] border-b-[0.1vw] ">
            <p className=" px-[1.67vw] pt-[1.67vw] fs-14 text-[rgba(0,0,0,0.85)]">
              You’ll need to install an authentication app on your phone to set
              up Two-Factor Authentication. We recommend one of the following
              apps.
            </p>
            <div className="w-full h-[2.78vw] flex px-[1.67vw] gap-[1.12vw] ">
              <AppInfo
                logoSrc="/images/authyLogo.png"
                altText="Authy"
                appName="Authy"
                appProvider="from Authy Inc."
              />
              <AppInfo
                logoSrc="/images/googleAuthLogo.png"
                altText="Google Authenticator"
                appName="Google Authenticator"
                appProvider="from Google Inc."
              />
            </div>
            <div className="w-full h-[2.78vw] flex px-[1.67vw] gap-[1.12vw] ">
              <AppInfo
                logoSrc="/images/duoAuthLogo.png"
                altText="Duo Mobile"
                appName="Duo Mobile"
                appProvider="from Duo Security"
              />
              <AppInfo
                logoSrc="/images/msAuthLogo.png"
                altText="Microsoft Authenticator"
                appName="Microsoft Authenticator"
                appProvider="from Microsoft Inc."
              />
            </div>
          </div>
          <div className="w-full h-[3.60vw] flex justify-end items-center gap-[1.6vw] px-[1.12vw] py-[0.69vw] border-b-[0.1vw]">
            <p className="text-[#323E4F] fs-14">
              Got your app open ?
            </p>
            <div
              className="w-[10.07vw] h-[2.22vw] flex items-center justify-center bg-[#1890FF] border-[0.1vw] border-[#1890FF] text-[#fff] fs-14 rounded-[0.14vw] cursor-pointer "
              onClick={handleReadyToScan}
            >
              Yes, ready to scan
            </div>
          </div>
          <div className="flex flex-col h-[5.82vw] px-[1.12vw] py-[0.694vw] gap-[0.56vw]">
            <p className="text-[#323E4F] fs-14 h-[2.08vw]">
              Don’t have a Smart Phone ?
            </p>
            <a href="#" className="h-[2.08vw]">
              Enable using SMS
            </a>
          </div>
        </div>
      </Modal>

      {/* QR Code Modal */}
      <QRCodeModal
        isVisible={isQRCodeModalVisible}
        onClose={handleQRCodeModalClose}
      />
    </>
  );
};

export default TOTPModal;
