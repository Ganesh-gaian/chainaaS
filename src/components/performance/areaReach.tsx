"use client";
import React from "react";
import * as echarts from "echarts";
import useResolution from "@/utils/useResolution";
import { vwToPx } from "@/utils/vwToPx";
import ChartGenerator from "../Charts/ChartGenerator";

interface areaReachData {
  xAxisData: string[];
  seriesData: [
    {
      name: string;
      data: number[];
    }
  ];
}
interface areaReachDataLogProps {
  areaReachDataLog: areaReachData;
}

const AreaReachChart: React.FC<areaReachDataLogProps> = ({
  areaReachDataLog,
}) => {
  if (!areaReachDataLog) {
    return;
  }

  const areaReachData = areaReachDataLog;

  useResolution();

  const areaReachOptions: echarts.EChartsOption = {
    title: {
      text: "Area Reach Over Time",
      left: "left",
      textStyle: {
        fontSize: vwToPx(1.1111),
        fontWeight: "bold",
      },
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Izak", "Amplyfund", "Museo"].map((app) => ({
        name: app,
        icon: "roundRect",
      })),
      bottom: 0,
      left: "center",
      textStyle: {
        fontSize: vwToPx(0.6944),
      },
      itemWidth: vwToPx(1.1),
      itemHeight: vwToPx(1),
      itemGap: vwToPx(1),
    },
    xAxis: {
      type: "category",
      data: areaReachData.xAxisData,
      axisLabel: {
        fontSize: vwToPx(0.8333),
        color: "#666",
        padding: [vwToPx(0.5), 0, 0, 0],
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#98A2B3",
          width: vwToPx(0.0694),
        },
      },
      boundaryGap: false,
      name: "Months",
      nameLocation: "middle",
      nameGap: vwToPx(3.2),
      nameTextStyle: {
        color: "#595959",
        fontSize: vwToPx(0.9333),
        fontWeight: 500,
      },
    },
    yAxis: {
      type: "value",
      name: "Area Reach",
      axisLabel: {
        formatter: "{value}m",
        fontSize: vwToPx(0.8333),
        color: "#666",
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#98A2B3",
          width: vwToPx(0.0694),
        },
      },
      nameLocation: "middle",
      nameGap: vwToPx(3.6),
      nameTextStyle: {
        color: "#595959",
        fontSize: vwToPx(0.9333),
        fontWeight: 500,
      },
      splitLine: {
        lineStyle: {
          color: "#F2F2F7",
          type: "dotted",
          width: vwToPx(0.1),
        },
      },
    },
    grid: {
      left: "10%",
      right: "10%",
      top: "15%",
      bottom: "22%",
    },
    series: areaReachData.seriesData.map((seriesItem) => ({
      name: seriesItem.name,
      data: seriesItem.data,
      type: "line",
      //smooth: true,
      lineStyle: {
        width: vwToPx(0.08),
      },
      symbol: "none",
    })),
    color: ["#9A9AFF", "#94D0FF", "#FBC96C"],
  };

  return (
    <div className="h-[30vw] w-[100%] bg-white p-[1vw] rounded-sm">
      <ChartGenerator options={areaReachOptions} />
    </div>
  );
};

export default AreaReachChart;
