import ArApTrendChart from "@/components/commercial/ArApTrendChart";
import CommercialCards from "@/components/commercial/CommercialCards";
import GrowthTrendChart from "@/components/commercial/GrowthTrendChart";
import PaymentLedger from "@/components/commercial/PaymentLedger";
import TowerEarningsChart from "@/components/commercial/TowerEarningsChart";

export default function Commercial() {
  return (
    <div className='w-full h-full  p-[1.0vw] flex flex-col gap-[1vw] bg-[#F5F6F7] overflow-y-auto'>
      <div>
        <CommercialCards />
      </div>
      <div className="grid grid-cols-2 gap-[1vw]">
        <GrowthTrendChart />
        <ArApTrendChart />
      </div>
      <div className="w-full">
        <TowerEarningsChart />
      </div>
      <div className="w-full mb-[7vw]">
        <PaymentLedger />
      </div>
    </div>
  )
}
