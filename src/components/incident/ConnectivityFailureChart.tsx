"use client";
import React from "react";
import * as echarts from "echarts";
import ChartGenerator from "../Charts/ChartGenerator";
import useResolution from "@/utils/useResolution";
import { vwToPx } from "@/utils/vwToPx";

interface ConnectivityFailureDataProps {
  ConnectivityFailureData: any;
}

const ConnectivityFailureChart: React.FC<ConnectivityFailureDataProps> = ({
  ConnectivityFailureData,
}) => {
  if (!ConnectivityFailureData) {
    return;
  }

  const chartData = ConnectivityFailureData[0];

  const options: echarts.EChartsOption = {
    title: {
      text: "Connectivity failure",
      left: "left",
      textStyle: {
        fontSize: vwToPx(0.9722),
        fontWeight: "bold",
      },
    },
    xAxis: {
      type: "category",
      data: ["Queens","Brooklyn","Harlem","Manhattan"],
      axisLabel: {
        rotate: 0,
        color: "#C7C7CC",
        fontSize: vwToPx(0.8333),
        padding: [vwToPx(0.5), 0, 0, 0],
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#C7C7CC",
          width: vwToPx(0.0694),
        },
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      name: "Number of Failures",
      nameLocation: "middle",
      nameGap: vwToPx(2.7778),
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: vwToPx(0.8333),
        color: "#C7C7CC",
        padding: [0, vwToPx(0.2), 0, 0],
        formatter: (value: number) => {
          return value < 10 ? `0${value}` : value.toString();
        },
      },
      splitLine: {
        lineStyle: {
          color: "#F2F2F7",
          type: "dotted",
          width: vwToPx(0.0694),
        },
      },
    },
    grid: {
      top: "20%",
      left: "5%",
      right: "5%",
      bottom: "5%",
      containLabel: true,
    },
    series: [
      {
        data: chartData.failures.map((value: any, index: number) => ({
          value,
          itemStyle: {
            color: chartData.colors[index],
          },
        })),
        type: "bar",
        barWidth: "40%",
        label: {
          show: false,
        },
      },
    ],
  };

  useResolution();

  return (
    <div className="h-[44vh] aspect-auto p-[1vw] bg-white rounded-sm col-span-2">
      <ChartGenerator options={options} />
    </div>
  );
};

export default ConnectivityFailureChart;
