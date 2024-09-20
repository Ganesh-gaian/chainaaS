import React from "react";

import t1 from "../../../../public/svgs/rightNav/Add.svg";
import t2 from "../../../../public/svgs/rightNav/Setting.svg";
import t3 from "../../../../public/svgs/rightNav/InterfaceSignal.svg";

import B1 from "../../../../public/svgs/rightNav/AiCloudRobot.svg";
import B2 from "../../../../public/svgs/rightNav/Frame.svg";
import B3 from "../../../../public/svgs/rightNav/Signage.svg";
import B4 from "../../../../public/svgs/rightNav/Log.svg";
import B5 from "../../../../public/svgs/rightNav/Collabrator.svg";
import B6 from "../../../../public/svgs/rightNav/Notify.svg";

export default function RightNav() {
  return (
    <div className="w-[3vw] h-full flex flex-col justify-between border-l border-[#EBEDEE]">
      {/* Top CTA */}
      <div className="w-full flex flex-col justify-center items-center gap-[1.6vw] first:mt-[2vw] *:w-[2vw] *:cursor-pointer">
        <img src={t1} alt="" />
        <img src={t2} alt="" />
        <img src={t3} alt="" />
      </div>
      {/* Bottom CTA */}
      <div className="w-full flex flex-col justify-center items-center gap-[1.6vw] last:mb-[2vw] *:w-[2vw] *:cursor-pointer">
        <img src={B1} alt="" />
        <img src={B2} alt="" />
        <img src={B3} alt="" />
        <img src={B4} alt="" />
        <img src={B5} alt="" />
        <img src={B6} alt="" />
      </div>
    </div>
  );
}
