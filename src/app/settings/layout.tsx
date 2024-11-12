"use client";
import Image from "next/image";
import company from "../../../public/images/company.png";
import Sidebar from "../../components/setting/sidebar/Sidebar";
import { ReactNode } from "react";

interface SettingProps {
  children: ReactNode;
};

const Setting: React.FC<SettingProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <div className="flex items-center justify-between w-full px-[1.67vw] py-[1.12vw] bg-white">
        <span className="font-bold text-[1.39vw]">Settings</span>
        <div className="flex items-center gap-[0.4vw]">
          <Image className="w-[2vw]" src={company} alt="Company Logo" />
          <p className="fs-14">NBC</p>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-1 w-full">
        {/* Sidebar */}
        <div className="flex w-[17%] h-full py-[1.12vw] pl-[1.12vw] bg-white mt-[0.1vw]">
          <Sidebar />
        </div>

        {/* Content */}
        <div className="w-[83%] h-full pl-[1.12vw] mb-[1.12vw]">{children}</div>
      </div>
    </div>
  );
};

export default Setting;
