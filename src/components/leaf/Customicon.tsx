import React from "react";
import towericon from "../../../public/svgs/chains/tower_icon.svg";
import Image from "next/image";

interface CustomIconProps {
  towername: string;
}

function Customicon({ towername }: CustomIconProps) {
  return (
    <>
      <p className="text-[#0066FF] fs-14 font-[600] whitespace-nowrap mb-[0.5vw]">
        {towername}
      </p>
      <div className="w-[2.5vw] h-[2.5vw] bg-[#FFFFFF] border-[#0066FF] border-[0.15vw] rounded-[50%] flex items-center justify-center">
        <Image style={{ width: "75%" }} src={towericon} alt="towericon" />
      </div>
    </>
  );
}

export default Customicon;
