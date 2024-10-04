"use client";

import Topnav from "@/components/Chains/TopNav/Topnav";
import Towerlist from "../Towerlist/Towerlist";
import Towerinfo from "../TowerInfo/Towerinfo";
import { useCallback, useState } from "react";
import Addchains from "../Modal/Addchains";

export default function Chainsman() {
  const [showmodal, setShowmodal] = useState(false);

  const handleModal = useCallback((value: boolean) => {
    setShowmodal(value);
  }, []);

  return (
    <div className="w-[100%] h-[100%]">
      <div className="w-[100%] h-[8vh]">
        <Topnav />
      </div>
      <div className="w-[98%] h-[calc(100%-8vh)] pl-[1.5vw] pt-[1vw] flex gap-[1.3rem]">
        <section className="w-[25%] h-[100%] bg-[#FFF] rounded-[2px]">
          <Towerlist handleModal={handleModal} />
        </section>
        <section className="w-[75%] h-[100%]">
          <Towerinfo />
        </section>
      </div>
      <Addchains showmodal={showmodal} handleModal={handleModal} />
    </div>
  );
}
