import ArApTrendChart from "@/components/commercial/ArApTrendChart";
import CommercialCards from "@/components/commercial/CommercialCards";
import GrowthTrendChart from "@/components/commercial/GrowthTrendChart";
import PaymentLedger from "@/components/commercial/PaymentLedger";
import TowerEarningsChart from "@/components/commercial/TowerEarningsChart";

export default async function Commercial() {
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_JSON_SERVER}/chainaas_commercial`
  );
  let commercial = await data.json();

  return (
    <div
      id="commercial_insights"
      className="w-full h-full  p-[1.0vw] flex flex-col gap-[1vw] bg-[#F5F6F7] overflow-y-auto scrollBar"
    >
      <div>
        <CommercialCards />
      </div>
      <div className="grid grid-cols-2 gap-[1vw]">
        <GrowthTrendChart GrowthTrendData={commercial["GrowthTrends"]} />
        <ArApTrendChart ArApData={commercial["ArApData"]} />
      </div>
      <div className="w-full">
        <TowerEarningsChart TowerEarningsData={commercial["TowerEarnings"]} />
      </div>
      <div className="w-full mb-[2vw]">
        <PaymentLedger />
      </div>
    </div>
  );
}
