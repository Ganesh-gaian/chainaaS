"use client";
import { useEffect, useState } from "react";
import BarChartComponent from "@/components/chart/bar/AppPerChain";
import DoughnutChartWithLegends from "@/components/chart/donut/DoughnutChartWithLegends";
import AppReachChart from "@/components/performance/appReach";
import AreaReachChart from "@/components/performance/areaReach";
import ChainsBarChart from "@/components/performance/chainsCard";
import PopulationReachChart from "@/components/performance/populationReach";
import PerformanceCard from "@/components/topPerformance/page";
import UpgradePlan from "@/components/upgradePlan/page";

export default function Performance() {
  const [data, setData] = useState<null | any>(null);
  const [chainData, setChainData] = useState<null | any>(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_JSON_SERVER}/chainaas_performanceData`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_JSON_SERVER}/chainaas_chains`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setChainData(responseData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div
      id="performance_insights"
      className="w-full h-full p-[1.0vw] flex flex-col gap-[1vw] bg-[#F5F6F7] overflow-y-auto scrollBar"
    >
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
          <ChainsBarChart chains={chainData} />
        </div>
      </div>

      <div className="w-full">
        <BarChartComponent citiesReachDataLog={data?.citiesReachData} />
      </div>
      <div className="w-full grid grid-cols-2 gap-[1vw]">
        <PopulationReachChart populationReachDataLog={data?.populationReachData} />
        <AppReachChart appReachDataLog={data?.appReachData} />
      </div>
      <div className="w-full mb-[2vw]">
        <AreaReachChart areaReachDataLog={data?.areaReachData} />
      </div>
    </div>
  );
}
