import Topnav from "@/components/Chains/TopNav/Topnav";
import Towerlist from "../Towerlist/Towerlist";
import Towerinfo from "../TowerInfo/Towerinfo";

export default function Chainsman() {
  return (
    <div className="w-[100%] h-[100%]">
      <div className="w-[100%] h-[4vw]">
        <Topnav />
      </div>
      <div className="w-[100%] h-[calc(100%-4vw)] pl-[1.5vw] pt-[1vw] flex gap-[1.3rem]">
        <section className="w-[25%] bg-[#FFF] rounded-[2px]">
          <Towerlist/>
        </section>
        <section className="w-[75%]">
           <Towerinfo/>
        </section>
      </div>
    </div>
  );
}
