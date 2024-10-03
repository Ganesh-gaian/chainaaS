import BarChartComponent from "@/components/chart/bar/AppPerChain";
import DoughnutChartWithLegends from "@/components/chart/donut/DoughnutChartWithLegends";
import AppReachChart from "@/components/performance/appReach";
import AreaReachChart from "@/components/performance/areaReach";
import ChainsBarChart from "@/components/performance/chainsCard";
import PopulationReachChart from "@/components/performance/populationReach";
import PerformanceCard from "@/components/topPerformance/page";
import UpgradePlan from "@/components/upgradePlan/page";

export default function Performance() {
  return (
    <div className="w-full h-full  p-[1.0vw] flex flex-col gap-[1vw] bg-[#F5F6F7] overflow-y-auto">
      <div className="grid grid-cols-3 gap-[1vw]">
        <div className="grid col-start-1 col-end-3">
          <div className="grid grid-rows-2 gap-[1vw]">
            <UpgradePlan />
            <div className="w-full grid grid-cols-2 gap-[1vw]">
              <PerformanceCard />
              <DoughnutChartWithLegends />
            </div>
          </div>
        </div>
        <div className="grid col-start-3 col-end-4">
          <ChainsBarChart />
        </div>
      </div>

      <div className="w-full">
        <BarChartComponent />
      </div>
      <div className="w-full h-[80vh] grid grid-cols-2 gap-[1vw]">
        <PopulationReachChart />
        <AppReachChart />
      </div>
      <div className="w-full mb-[8vw]">
        <AreaReachChart />
      </div>

    </div>
  )
}
