import React from "react";
import { Button } from "antd";
import CustomButton from "../reuseableComponent/CustomButton";

const AccountSettings: React.FC = () => {
  return (
    <div className="w-[58.296vw] flex flex-col gap-[1.12vw] fs-14 ">
      {/* Logout Section */}
      <div className="w-full h-[6.25vw] flex flex-col justify-between items-center gap-[0.28vw] bg-white rounded-[0.14vw] px-[1.67vw] shadow-[inset_0px_-0.1vw_0px_0px_#F0F0F0]">
        <div className="w-full h-[3.33vw] flex justify-between items-center pt-[1.12vw]">
          <span className=" text-[#323E4F]">Logout</span>
          <CustomButton
            text="Logout"
            type="default"
            width="5.274vw"
            height="2.22vw"
            fontSize="0.9722vw"
            borderRadius="0.14vw"
            border="0.1vw solid #d9d9d9"
            color="#697483"
          />
        </div>
        <p className="w-full h-[2.64vw] text-[#697483]">
          Sign out of your session safely.
        </p>
      </div>

      {/* Delete Account Section */}
      <div className="w-full h-[6.25vw] flex flex-col justify-between items-center gap-[0.28vw] bg-white rounded-[0.14vw] px-[1.67vw] shadow-[inset_0px_-0.1vw_0px_0px_#F0F0F0]">
        <div className="w-full h-[3.33vw] flex justify-between items-center pt-[1.12vw]">
          <span className=" text-[#323E4F]">Delete Account</span>
          <CustomButton
            text="Delete"
            type="primary"
            danger={true}
            width="5.274vw"
            height="2.22vw"
            fontSize="0.9722vw"
            borderRadius="0.14vw"
            color="#fff"
          />
        </div>
        <p className="w-full h-[2.64vw] text-[#697483]">
          You will lose all your workspace data associated with the Marco. .
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;
