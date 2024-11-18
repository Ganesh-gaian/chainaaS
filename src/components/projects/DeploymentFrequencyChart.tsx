"use client";
import React from "react";
import * as echarts from "echarts";
import { vwToPx } from "@/utils/vwToPx";
import ChartGenerator from "../Charts/ChartGenerator";
import useResolution from "@/utils/useResolution";

interface DeploymentFrequencyData {
  month: string;
  deployments: number;
}

interface DeploymentFrequencyProps {
  DepFrequencydata: DeploymentFrequencyData[];
}

const DeploymentFrequencyChart: React.FC<DeploymentFrequencyProps> = ({
  DepFrequencydata,
}) => {
  const axisFontSize = vwToPx(0.6944);

  const options: echarts.EChartsOption = {
    tooltip: {
      trigger: "item",
    },
    xAxis: {
      type: "category",
      data: DepFrequencydata.map((d) => d.month),
      name: "Months",
      nameLocation: "middle",
      nameGap: vwToPx(1.7778),
      nameTextStyle: {
        color: "#595959",
        fontSize: vwToPx(0.8333),
        fontWeight: 500,
        lineHeight: vwToPx(1.3194),
      },
      axisLabel: {
        interval: 0,
        rotate: 0,
        fontSize: axisFontSize,
        color: "#98A2B3",
        padding: [vwToPx(0.2), 0, 0, 0],
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#98A2B3",
          width: vwToPx(0.0694),
        },
      },
    },
    yAxis: {
      type: "value",
      name: "Number of deployed apps",
      nameLocation: "middle",
      nameGap: vwToPx(2.7778),
      nameTextStyle: {
        color: "#595959",
        fontSize: vwToPx(0.8333),
        fontWeight: 500,
        lineHeight: vwToPx(1.3194),
      },
      axisLabel: {
        formatter: "{value}",
        fontSize: axisFontSize,
        color: "#98A2B3",
        padding: [0, vwToPx(0.5), 0, 0],
      },
      splitLine: {
        lineStyle: {
          color: "#F2F2F7",
          type: "dotted",
          width: vwToPx(0.0694),
        },
      },
    },
    series: [
      {
        data: DepFrequencydata.map((d) => d.deployments),
        type: "bar",
        itemStyle: {
          color: "#13A791",
        },
      },
    ],
    grid: {
      left: "10%",
      right: "10%",
      bottom: "15%",
      top: "15%",
    },
  };

  useResolution();

  return (
    <div className="h-[50vh] aspect-auto p-[1vw] bg-white rounded-sm">
      <h2 className="fs-16 font-[500] mb-[0.4vw]">
        Incident Resolution Time per month
      </h2>
      <div className="fs-16">
        2,458
        <span className="text-red-500 fs-12 ml-[0.4vw]">▲ 4.8%</span>
      </div>
      <div className="w-full h-[38vh]">
        <ChartGenerator options={options} />
      </div>
    </div>
  );
};

export default DeploymentFrequencyChart;
