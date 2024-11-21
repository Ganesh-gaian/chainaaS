"use client";
import React from "react";
import * as echarts from "echarts";
import ChartGenerator from "../Charts/ChartGenerator";
import useResolution from "@/utils/useResolution";
import { vwToPx } from "@/utils/vwToPx";
interface ResolutionTimeDataProps {
  ResolutionTimeData: any;
}

const IncidentResolutionTimeChart: React.FC<ResolutionTimeDataProps> = ({
  ResolutionTimeData,
}) => {
  if (!ResolutionTimeData) {
    return;
  }
  const chartData = ResolutionTimeData;

  const options: echarts.EChartsOption = {
    grid: {
      top: "8%",
      left: "3%",
      right: "4%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: chartData?.months,
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: "#98A2B3",
          width: vwToPx(0.0994),
        },
      },
      axisTick: {
        show: true,
      },
      axisLabel: {
        fontSize: vwToPx(0.6944),
        color: "#98A2B3",
        padding: [vwToPx(0.5), 0, 0, 0],
      },
    },
    yAxis: {
      type: "value",
      name: "Hours",
      nameLocation: "middle",
      nameGap: vwToPx(1.7778),
      nameTextStyle: {
        fontSize: vwToPx(0.8333),
      },
      axisLabel: {
        formatter: "{value}",
        fontSize: vwToPx(0.8333),
      },
      splitLine: {
        lineStyle: {
          color: "#F2F2F7",
          type: "dotted",
          width: vwToPx(0.0694),
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#98A2B3",
          width: vwToPx(0.0694),
        },
      },
    },
    series: [
      {
        name: "Resolution Time",
        data: chartData?.resolutionTimes,
        type: "line",
        // smooth: true,
        symbol: (_, params) => (params.dataIndex === 0 ? "none" : "circle"),
        symbolSize: (_, params) =>
          params.dataIndex === 0 ? 0 : vwToPx(0.5556),
        lineStyle: {
          color: "#1976d2",
          width: vwToPx(0.0694),
        },
        label: {
          show: true,
          position: "top",
          formatter: "{c} hrs",
          fontSize: vwToPx(0.6944),
          fontWeight: 400,
        },
        itemStyle: {
          color: "#1976d2",
        },
      },
    ],
  };

  useResolution();

  return (
    <div className="h-[50vh] aspect-auto p-[1vw] bg-white rounded-sm">
      <h2 className="fs-16 font-semibold mb-[0.4vw]">
        Incident Resolution Time per month
      </h2>
      <div>
        <p className="fs-20 font-medium">4 hour</p>
        <p className="text-gray-500">Average Resolution Time</p>
      </div>
      <div className="w-[100%] h-[80%]">
        <ChartGenerator options={options} />
      </div>
    </div>
  );
};

export default IncidentResolutionTimeChart;
