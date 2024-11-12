"use client";
import { Modal } from "antd";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./OnBoardingModal.css";
import StepIndicator from "./StepIndicator";
import ModalContent from "./ModalContent";

interface MyModalProps {
  showModal: boolean;
  handleClose: () => void;
}

const OnBoardingModal: React.FC<MyModalProps> = ({
  showModal,
  handleClose,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const resetAndClose = () => {
    setCurrentStep(1);
    handleClose();
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      resetAndClose();
    }
  };

  const getButtonLabel = () => {
    return currentStep === 1
      ? "Get Started"
      : currentStep === 2
      ? "Next"
      : "Finish";
  };

  const steps = [
    { step: 1, label: "About" },
    { step: 2, label: "Manage with Ease" },
    { step: 3, label: "Grow Your Revenue" },
  ];

  return (
    <Modal
      open={showModal}
      onCancel={resetAndClose}
      title={null}
      footer={null}
      closeIcon={null}
      width="62.46vw"
      className="onBoardingCustomModal"
      height="39.5vw"
    >
      <div className="flex w-full h-[39.5vw]">
        {/* Logo */}
        <div className="absolute ml-[1.12vw] mt-[1.12vw]">
          <div className="flex items-center justify-center h-[2.8vw] w-[2.8vw] rounded-full bg-gray-200">
            <span className="fs-6 text-[#000] font-bold ">Logo</span>
          </div>
        </div>

        {/* Left Section */}
        <div className="flex justify-center items-center w-[21.24vw] h-full">
          <div>
            <img
              src={
                currentStep === 1
                  ? "/images/towerAntenna.png"
                  : currentStep === 2
                  ? "/images/dashboard.png"
                  : "/images/anlytics.png"
              }
              alt={`Step ${currentStep}`}
              className="responsive-onBoarding-img"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-[1.67vw] w-[41.27vw] h-full">
          {/* Step Indicators */}
          <div className="flex flex-col items-center h-[5.413vw] pt-[1.12vw] pr-[1.12vw]">
            <div className="w-full flex justify-end">
              <CloseOutlined
                onClick={resetAndClose}
                className="cursor-pointer fs-16"
                aria-label="Close"
              />
            </div>
            <StepIndicator currentStep={currentStep} steps={steps} />
          </div>

          {/* Modal Content */}
          <ModalContent currentStep={currentStep} />

          {/* Action Button */}
          <div className="flex justify-start items-center h-[4.44vw] px-[1.12vw] py-[0.833vw]">
            <Button id="get-started-btn" type="primary" onClick={handleNext} className="w-[7.91vw]">
              <span className="fs-16]">{getButtonLabel()}</span>
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default OnBoardingModal;
