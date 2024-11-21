"use client";
import React from "react";
import * as echarts from "echarts";
import useResolution from "@/utils/useResolution";
import { vwToPx } from "@/utils/vwToPx";
import ChartGenerator from "../Charts/ChartGenerator";

interface populationReachData {
  xAxisData: string[];
  seriesData: number[];
}

interface populationReachDataLogProps {
  populationReachDataLog: populationReachData;
}

const PopulationReachChart: React.FC<populationReachDataLogProps> = ({
  populationReachDataLog,
}) => {
  if (!populationReachDataLog) {
    return;
  }

  const populationReachData = populationReachDataLog;

  const populationReachOptions: echarts.EChartsOption = {
    title: {
      text: "Population Reach Over Time",
      left: "left",
      textStyle: {
        fontSize: vwToPx(1.1111),
        fontWeight: "bold",
      },
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: populationReachData.xAxisData,
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: "#ccc",
          width: vwToPx(0.0694),
        },
      },
      axisLabel: {
        fontSize: vwToPx(0.8333),
        color: "#333",
        padding: [vwToPx(0.25), 0, 0, 0],
      },
      name: "Months",
      nameLocation: "middle",
      nameGap: vwToPx(2.1),
      nameTextStyle: {
        fontSize: vwToPx(0.9722),
        color: "#595959",
        padding: [vwToPx(0.5), 0, 0, 0],
      },
    },
    yAxis: {
      type: "value",
      name: "No. of individuals in billion",
      nameLocation: "middle",
      nameGap: vwToPx(2.6),
      nameTextStyle: {
        fontSize: vwToPx(0.9722),
        fontWeight: 400,
        color: "#333",
        padding: [0, 0, vwToPx(0.5), 0],
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#ccc",
          width: vwToPx(0.0694),
        },
      },
      axisLabel: {
        fontSize: vwToPx(0.8333),
        color: "#333",
      },
      splitLine: {
        lineStyle: {
          color: "#f2f2f7",
        },
      },
    },
    series: [
      {
        data: populationReachData.seriesData,
        type: "line",
        smooth: true,
        symbol: (_, params) => (params.dataIndex === 0 ? "none" : "circle"),
        symbolSize: (_, params) =>
          params.dataIndex === 0 ? 0 : vwToPx(0.5556),
        lineStyle: {
          color: "#F8C269",
          width: vwToPx(0.0694),
        },
        itemStyle: {
          color: "#F8C269",
        },
        emphasis: {
          focus: "series",
        },
      },
    ],
    grid: {
      left: "10%",
      right: "10%",
      top: "15%",
      bottom: "15%",
    },
  };

  useResolution();

  return (
    <div className="w-[100%] h-[25vw] p-[1vw] bg-white rounded-sm">
      <ChartGenerator options={populationReachOptions} />
    </div>
  );
};

export default PopulationReachChart;
