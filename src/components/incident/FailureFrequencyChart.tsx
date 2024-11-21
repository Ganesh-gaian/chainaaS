"use client";
import React from "react";
import * as echarts from "echarts";
import useResolution from "@/utils/useResolution";
import { vwToPx } from "@/utils/vwToPx";
import ChartGenerator from "../Charts/ChartGenerator";

interface FailureFrequencyProps {
  FailureFrequency: any;
}

const FailureFrequencyChart: React.FC<FailureFrequencyProps> = ({
  FailureFrequency,
}) => {
  if (!FailureFrequency) {
    return;
  }

  const data = FailureFrequency[0];

  const options: echarts.EChartsOption = {
    title: {
      text: "Failure Frequency Timeline",
      left: "left",
      textStyle: {
        fontSize: vwToPx(1.1111),
        fontWeight: "bold",
      },
    },
    tooltip: {
      trigger: "item",
    },
    xAxis: {
      type: "category",
      data: data?.months,
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: "#98A2B3",
          width: vwToPx(0.0694),
        },
      },
      axisTick: {
        show: true,
      },
      axisLabel: {
        fontSize: vwToPx(0.8333),
        padding: [vwToPx(0.5), 0, 0, 0],
      },
    },
    yAxis: {
      type: "value",
      name: "Number of Failures",
      nameLocation: "middle",
      nameGap: vwToPx(2.6),
      nameTextStyle: {
        fontSize: vwToPx(0.8333),
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#98A2B3",
          width: vwToPx(0.0694),
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        formatter: "{value}",
        fontSize: vwToPx(0.8333),
        padding: [0, vwToPx(0.3), 0, 0],
      },
      splitLine: {
        lineStyle: {
          color: "#F2F2F7",
          type: "dotted",
          width: vwToPx(0.06),
        },
      },
    },
    series: [
      {
        name: data?.category,
        data: data?.failures,
        type: "line",
        symbol: (_, params) => (params.dataIndex === 0 ? "none" : "circle"),
        symbolSize: (_, params) =>
          params.dataIndex === 0 ? 0 : vwToPx(0.5556),
        lineStyle: {
          color: "#1976d2",
          width: vwToPx(0.0694),
        },
        itemStyle: {
          color: "#1976d2",
        },
      },
    ],
    grid: {
      top: "25%",
      bottom: "20%",
      left: "10%",
      right: "10%",
    },
  };

  useResolution();

  return (
    <div className="h-[42vh] aspect-auto p-[1vw] bg-white rounded-sm">
      <ChartGenerator options={options} />
    </div>
  );
};

export default FailureFrequencyChart;
