import React from "react";
import { Modal, Input, Button } from "antd";
import "./QRCodeModal.css";

interface QRCodeModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({ isVisible, onClose }) => {
  return (
    <Modal
      title="Scan the QR code using your authenticator app."
      open={isVisible}
      onCancel={onClose}
      className="QRCodeCustomModal"
      width={"39.72vw"}
      footer={null}
    >
      <div className="w-[39.72vw] flex flex-col">
        <div className="w-full h-[9.85vw] border-t-[0.1vw] border-b-[0.1vw] ">
          <div className="w-full h-full  flex items-center p-[1.67vw]">
            <div className="w-[25.4vw] h-[5.55vw] flex gap-[2.22vw]  ">
              <div className="flex items-center justify-center h-full">
                <img
                  src="/images/qrSetting.png"
                  alt="QR Code"
                  className="w-[5.55vw] h-[5.55vw]"
                />
              </div>
              <div className="w-full h-[4.16vw] flex flex-col gap-[0.56vw]">
                <span>Enter your verification code</span>
                <Input placeholder="G-123456" />
              </div>
            </div>
          </div>
        </div>
        <div className="px-[1.12vw] py-[0.694vw] h-[3.608vw] bg-[#fff] flex justify-end gap-[0.56vw]">
          <Button key="cancel" onClick={onClose} className="text-base">
            Back
          </Button>
          <Button
            key="setup"
            type="primary"
            onClick={onClose}
            className="text-base"
          >
            Set Up
          </Button>
        </div>
        <div className="w-full h-[5.82vw] flex flex-col border-t-[0.1vw] px-[1.12vw] py-[0.694vw] gap-[0.28vw] ">
            <span className="h-[2.08vw] flex items-center text-[#323E4F] text-[0.9722vw] " >Trouble scanning? Enter this key in your app instead:</span>
            <span className="h-[2.08vw] flex items-center text-[rgba(0,0,0,0.85)] text-[0.9722vw] " >kms4892091298749891</span>
        </div>
      </div>
    </Modal>
  );
};

export default QRCodeModal;
