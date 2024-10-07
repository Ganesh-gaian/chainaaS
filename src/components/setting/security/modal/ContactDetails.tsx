import React from "react";
import { Button, Select, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Option } = Select;

interface ContactDetailsProps {
  onClose: () => void; 
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col rounded-[0.14vw]">
      {/* Header */}
      <div className="py-[1.12vw] px-[1.67vw] h-[3.89vw] bg-[#fff] flex justify-between items-center border-b-[0.1vw]">
        <p className="text-[#323E4F] font-medium text-[1.09vw]">
          Add your phone number to get a verification code sent to your phone
        </p>
        <CloseOutlined
          onClick={onClose}
          className="cursor-pointer"
          style={{ fontSize: "1.2vw", color: "#323E4F" }}
        />
      </div>

      {/* Middle Content */}
      <div className="w-full flex flex-col p-[1.67vw] gap-[1.12vw] border-b-[0.1vw]">
        <div className="w-full flex flex-col gap-[0.56vw]">
          <p className="text-[rgba(0,0,0,0.85)]">Phone Number</p>
          <div className="w-full flex gap-[0.56vw]">
            <Select defaultValue="USA" className="w-full">
              <Option value="USA">USA</Option>
              <Option value="Canada">Canada</Option>
            </Select>
            <Input placeholder="Phone Number" />
            <Button
              className="smsCustomButton"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#40A9FF",
                borderRadius:"0.14vw"
              }}
            >
              Send Code
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[0.56vw]">
          <p className="text-[#323E4F]">Enter your verification Code</p>
          <Input placeholder="Enter your verification code" />
        </div>
      </div>

      {/* Footer */}
      <div className="px-[1.12vw] py-[0.694vw] h-[3.608vw] bg-[#fff] flex justify-end gap-[0.56vw]">
        <Button key="cancel" onClick={onClose} className="text-base">
          Cancel
        </Button>
        <Button key="setup" type="primary" onClick={onClose} className="text-base">
          Set Up
        </Button>
      </div>
    </div>
  );
};

export default ContactDetails;
