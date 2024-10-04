import React from "react";
import { Modal } from "antd";
import ContactDetails from "./ContactDetails";
import "./SMSModal.css";

interface SMSModalProps {
  isVisible: boolean;
  onClose: () => void;
  onToggleOff: () => void;
}

const SMSModal: React.FC<SMSModalProps> = ({
  isVisible,
  onClose,
  onToggleOff,
}) => {
  const handleCancel = () => {
    onClose();
    onToggleOff();
  };

  return (
    <Modal
      open={isVisible}
      title=""
      onCancel={handleCancel}
      footer={null}
      closeIcon={null}
      width={"39.72vw"}
    //   height={"20.74vw"}
      className="SMSCustomModal"
    >
        <ContactDetails onClose={handleCancel} />
    </Modal>
  );
};

export default SMSModal;
