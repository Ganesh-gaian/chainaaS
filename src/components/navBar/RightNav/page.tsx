"use client";

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
import { useCallback, useState } from "react";
import TimelineModal from "@/components/Chains/Modal/Timeline";
import OnBoardingModal from "@/components/onBoarding/OnBoardingModal";

export default function RightNav() {
  const [showtimeline, setTimeLine] = useState(false);
  const [showOnBoardingModal, setShowOnBoardingModal] = useState(false);

  const handleTimeline = useCallback((value: boolean) => {
    setTimeLine(value);
  }, []);

  const handleOnBoardingModal = useCallback((value: boolean) => {
    setShowOnBoardingModal(value);
  }, []);

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
        <Image src={B1} alt="" 
          onClick={() => {
            setShowOnBoardingModal(true);
          }}
        />
        <Image src={B2} alt="" />
        <Image src={B3} alt="" />
        <Image
          onClick={() => {
            console.log("logo");
            handleTimeline(true);
          }}
          src={B4}
          alt=""
        />
        <Image src={B5} alt="" />
        <Image src={B6} alt="" />
      </div>

      {/* The timeline modal */}
      <TimelineModal showtimeline={showtimeline} handleTimeline={handleTimeline} />

      {/* The custom modal */}
      <OnBoardingModal showModal={showOnBoardingModal} handleClose={() => setShowOnBoardingModal(false)} />
    </div>
  );
}
