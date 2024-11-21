"use client";
import React from "react";
import * as echarts from "echarts";
import ChartGenerator from "../Charts/ChartGenerator";
import useResolution from "@/utils/useResolution";
import { vwToPx } from "@/utils/vwToPx";
interface CloudFailureDataProps {
  CloudFailureData: any;
}

const CloudFailureChart: React.FC<CloudFailureDataProps> = ({
  CloudFailureData,
}) => {
  if (!CloudFailureData) {
    return;
  }

  const chartData = CloudFailureData[0].breakdown;

  const options: echarts.EChartsOption = {
    title: {
      text: "Cloud Failure",
      left: "left",
      textStyle: {
        fontSize: vwToPx(0.9722),
        fontWeight: "bold",
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "0%",
      left: "center",
      itemWidth: vwToPx(0.9722),
      itemHeight: vwToPx(0.9722),
      textStyle: {
        fontSize: vwToPx(0.8333),
        color: "#445164",
        padding: [0, 0, 0, vwToPx(0.1)],
      },
      itemGap: vwToPx(1),
      data: chartData?.map((item: any) => ({
        name: item.name,
        icon: "roundRect",
      })),
    },
    series: [
      {
        name: "Cloud Failure",
        type: "pie",
        radius: "70%",
        avoidLabelOverlap: false,
        data: chartData?.map((item: any) => ({
          value: item.value,
          name: item.name,
          itemStyle: { color: item.color },
        })),
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  useResolution();

  return (
    <div className=" h-[44vh] aspect-auto p-[1vw] bg-white rounded-sm">
      <ChartGenerator options={options} />
    </div>
  );
};

export default CloudFailureChart;
