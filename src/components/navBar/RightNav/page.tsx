import Image from "next/image";

import t1 from "../../../../public/svgs/rightNav/Add.svg";
import t2 from "../../../../public/svgs/rightNav/Setting.svg";
import t3 from "../../../../public/svgs/rightNav/InterfaceSignal.svg";

import B2 from "../../../../public/svgs/rightNav/Frame.svg";
import B1 from "../../../../public/svgs/rightNav/AiCloudRobot.svg";
import B3 from "../../../../public/svgs/rightNav/Signage.svg";
import B4 from "../../../../public/svgs/rightNav/Log.svg";
import B5 from "../../../../public/svgs/rightNav/Collabrator.svg";
import B6 from "../../../../public/svgs/rightNav/Notify.svg";

export default function RightNav() {
  return (
    <div className="w-[3vw] h-full flex flex-col justify-between border-l border-[#EBEDEE] bg-white">
      {/* Top CTA */}
      <div className="w-full flex flex-col justify-center items-center gap-[1.6vw] first:mt-[2vw] *:w-[2vw] *:cursor-pointer">
        <Image src={t1} alt="" />
        <Image src={t2} alt="" />
        <Image src={t3} alt="" />
      </div>
      {/* Bottom CTA */}
      <div className="w-full flex flex-col justify-center items-center gap-[1.6vw] last:mb-[2vw] *:w-[2vw] *:cursor-pointer">
        <Image src={B1} alt="" />
        <Image src={B2} alt="" />
        <Image src={B3} alt="" />
        <Image src={B4} alt="" />
        <Image src={B5} alt="" />
        <Image src={B6} alt="" />
      </div>
    </div>
  );
}
