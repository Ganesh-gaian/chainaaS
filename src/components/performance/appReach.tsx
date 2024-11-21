"use client";
import React from "react";
import * as echarts from "echarts";
import useResolution from "@/utils/useResolution";
import { vwToPx } from "@/utils/vwToPx";
import ChartGenerator from "../Charts/ChartGenerator";

interface appReachData {
  xAxisData: string[];
  seriesData: number[];
}
interface appReachDataLogProps {
  appReachDataLog: appReachData;
}

const AppReachChart: React.FC<appReachDataLogProps> = ({ appReachDataLog }) => {
  if (!appReachDataLog) {
    return;
  }
  const appReachData = appReachDataLog;

  useResolution();

  const appReachOptions: echarts.EChartsOption = {
    title: {
      text: "App reach",
      left: "left",
      textStyle: {
        fontSize: vwToPx(1.1111),
        fontWeight: "bold",
        color: "#333",
      },
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: appReachData.xAxisData,
      axisLabel: {
        fontSize: vwToPx(0.8333),
        color: "#666",
        interval: 0,
      },
      axisLine: {
        lineStyle: {
          color: "#ccc",
          width: vwToPx(0.0994),
        },
      },
      axisTick: {
        show: false,
      },
      name: "Apps",
      nameLocation: "middle",
      nameGap: vwToPx(2.1),
      nameTextStyle: {
        fontSize: vwToPx(0.9722),
        fontWeight: 400,
        color: "#333",
        padding: [vwToPx(0.3), 0, 0, 0],
      },
    },
    yAxis: {
      type: "value",
      name: "No. of devices in billion",
      nameLocation: "middle",
      nameGap: vwToPx(2.6),
      nameTextStyle: {
        fontSize: vwToPx(0.9722),
        fontWeight: 400,
        color: "#333",
        padding: [0, 0, vwToPx(0.5), 0],
      },
      axisLabel: {
        fontSize: vwToPx(0.8333),
        color: "#666",
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        data: appReachData.seriesData,
        type: "bar",
        barWidth: vwToPx(4),
        itemStyle: {
          color: "#98d4fc",
        },
        markLine: {
          symbol: "none",
          // data: [
          //   {
          //     yAxis: 60,
          //     lineStyle: {
          //       color: "#F2F2F7",
          //       width: vwToPx(0.1),
          //       type: [4, 4],
          //     },
          //     label: {
          //       show: false,
          //     },
          //   },
          // ],
          data: [30, 60, 90, 120, 150, 180].map((data) => ({
            yAxis: data,
            lineStyle: {
              color: "#F2F2F7",
              width: vwToPx(0.1),
              type: [vwToPx(0.1389), vwToPx(0.1389)],
            },
            label: {
              show: false,
            },
          })),
        },
      },
    ],
    grid: {
      left: "10%",
      right: "10%",
      top: "20%",
      bottom: "15%",
    },
  };

  return (
    <div className="w-[100%] h-[25vw] p-[1vw] bg-white rounded-sm">
      <ChartGenerator options={appReachOptions} />
    </div>
  );
};

export default AppReachChart;
