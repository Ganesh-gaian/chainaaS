import { Modal, Input, Button } from "antd";

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
  const handleCancel = () => {
    onClose();
    onToggleOff();
  };

  return (
    <Modal
      title="Install an authentication app on your phone."
      open={isVisible}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="scan" type="primary" onClick={handleCancel}>
          Yes, ready to scan
        </Button>,
      ]}
    >
      <p>
        You'll need to install an authentication app on your phone to set up
        Two-Factor Authentication. We recommend one of the following apps:
      </p>
      <div className="flex justify-around items-center my-4">
        <img src="/authy-logo.png" alt="Authy" className="w-[3vw]" />
        <img
          src="/google-authenticator-logo.png"
          alt="Google Authenticator"
          className="w-[3vw]"
        />
        <img src="/duo-logo.png" alt="Duo Mobile" className="w-[3vw]" />
        <img
          src="/microsoft-authenticator-logo.png"
          alt="Microsoft Authenticator"
          className="w-[3vw]"
        />
      </div>
      <p>Got your app open?</p>
      <Input placeholder="Enter your code" />
      <p className="mt-4">
        Don’t have a smartphone? <a href="#">Enable using SMS</a>
      </p>
    </Modal>
  );
};

export default TOTPModal;
