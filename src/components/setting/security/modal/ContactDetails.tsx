import React, { useState } from "react";
import { Select, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import CustomButton from "../../reuseableComponent/CustomButton";
import CustomSelect from "../../reuseableComponent/CustomSelect";

interface ContactDetailsProps {
  onClose: () => void;
}

const countryOptions = [
  { value: "USA", label: "USA" },
  { value: "Canada", label: "Canada" },
];

const ContactDetails: React.FC<ContactDetailsProps> = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("98043762812");
  const [varificationCode, setVarificationCode] = useState<string>("1234");
  const [selectedCountry, setSelectedCountry] = useState<string>("USA");

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleVarificationCodeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVarificationCode(e.target.value);
  };

  return (
    <div className="flex flex-col rounded-[0.14vw] h-[20.74vw]">
      {/* Header */}
      <div className="py-[1.12vw] px-[1.67vw] h-[3.89vw] bg-[#fff] flex justify-between items-center border-b-[0.1vw]">
        <p className="text-[#323E4F] font-medium text-[1.09vw]">
          Add your phone number to get a verification code sent to your phone
        </p>
        <CloseOutlined
          onClick={onClose}
          className="cursor-pointer"
          style={{ fontSize: "1.2vw", color: "#B4B9C1" }}
        />
      </div>

      {/* Middle Content */}
      <div className="w-full h-[13.26vw] flex flex-col p-[1.67vw] gap-[1.12vw] border-b-[0.1vw]">
        <div className="w-full flex flex-col gap-[0.56vw]">
          <p className="text-[rgba(0,0,0,0.85)] fs-14">Phone Number</p>
          <div className="w-full h-[2.22vw] flex gap-[0.56vw] ">
            <div className="w-[14.16vw]">
              <CustomSelect
                options={countryOptions}
                selectedValue={selectedCountry}
                onSelect={setSelectedCountry}
              />
            </div>
            <Input
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              style={{
                borderRadius: "0.14vw",
                width: "14.16vw",
                height: "2.22vw",
                fontSize: "0.9722vw",
                color: "#000000D9",
                paddingLeft: "0.833vw",
              }}
              placeholder="Phone Number"
            />
            <CustomButton
              text="Send Code"
              type="default"
              width="6.94vw"
              height="2.22vw"
              color="#40A9FF"
              border="0.1vw solid #40A9FF"
            />
          </div>
        </div>
        <div className="w-[14.16vw] flex flex-col gap-[0.56vw]">
          <p className="text-[#323E4F] fs-14">Enter your verification Code</p>
          <Input
            value={varificationCode}
            onChange={handleVarificationCodeChange}
            style={{
              borderRadius: "0.14vw",
              width: "14.16vw",
              height: "2.22vw",
              fontSize: "0.9722vw",
              color: "#000000D9",
              paddingLeft: "0.833vw",
            }}
            placeholder="Enter your verification code"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="px-[1.12vw] py-[0.694vw] h-[3.608vw] bg-[#fff] flex justify-end gap-[0.56vw]">
        <CustomButton
          key="cancel"
          text="Cancel"
          type="default"
          width="5.17vw"
          height="2.22vw"
          onClick={onClose}
          border="1px solid #D6DAE1"
          color="#323E4F"
        />
        <CustomButton
          key="setup"
          text="Set Up"
          type="primary"
          width="5.07vw"
          height="2.22vw"
          onClick={onClose}
          border="1px solid #1890FF"
          color="#fff"
        />
      </div>
    </div>
  );
};

export default ContactDetails;
