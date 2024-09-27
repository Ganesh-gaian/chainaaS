import BarChartComponent from "@/components/chart/bar/AppPerChain";
import AppReachChart from "@/components/chart/bar/AppReach";
import WorkflowFailure from "@/components/chart/bar/WorkflowFailure";
import DoughnutChartWithLegends from "@/components/chart/donut/DoughnutChartWithLegends";
import PerformanceCard from "@/components/topPerformance/page";

export default function Performance() {
  return (
    <div className="w-full h-full  p-[1.0vw] flex flex-col gap-[1vw] bg-[#F5F6F7] overflow-y-auto">
      <div className="flex gap-[2vw]">
        <DoughnutChartWithLegends />
        <PerformanceCard />
      </div>
      <div>
        <BarChartComponent />
      </div>
      <div className="flex gap-[2vw]">
        <WorkflowFailure />
        <AppReachChart />

      </div>
    </div>
  )
}
