import ArApTrendChart from "@/components/commercial/ArApTrendChart";
import CommercialCards from "@/components/commercial/CommercialCards";
import GrowthTrendChart from "@/components/commercial/GrowthTrendChart";
import PaymentLedger from "@/components/commercial/PaymentLedger";
import TowerEarningsChart from "@/components/commercial/TowerEarningsChart";

async function getData(endpoint: String) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_JSON_SERVER}/${endpoint}`
  );

  return await response.json();
}

export default async function Commercial() {
  const endpoints = ["chainaas_commercial", "chainaas_MIAs"];

  const [commercial, mias] = await Promise.all(
    endpoints.map((endpoint) => getData(endpoint))
  );

  return (
    <div
      id="commercial_insights"
      className="w-full h-full  p-[1.0vw] flex flex-col gap-[1vw] bg-[#F5F6F7] overflow-y-auto scrollBar"
    >
      <div>
        <CommercialCards Mias={mias} />
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
