"use client";
import React from "react";
import * as echarts from "echarts";
import useResolution from "@/utils/useResolution";
import { vwToPx } from "@/utils/vwToPx";
import ChartGenerator from "../Charts/ChartGenerator";
interface WorkflowFailureDataProps {
  WorkflowFailureData: any;
}

const WorkflowFailureChart: React.FC<WorkflowFailureDataProps> = ({
  WorkflowFailureData,
}) => {
  const axisFontSize = vwToPx(0.6944);

  if (!WorkflowFailureData) {
    return;
  }

  const chartData = WorkflowFailureData[0].breakdown;

  const options: echarts.EChartsOption = {
    title: {
      text: "Workflow Failure Overview",
      left: "left",
      textStyle: {
        fontSize: vwToPx(1.1111),
        fontWeight: 600,
        lineHeight: vwToPx(1.3194),
      },
    },
    tooltip: {
      trigger: "item",
    },
    xAxis: {
      type: "category",
      data: chartData?.map((item: any) => item?.name),
      axisLabel: {
        fontSize: axisFontSize,
        color: "#98A2B3",
        padding: [vwToPx(0.8), 0, 0, 0],
        formatter: (value: string) => {
          return `{labelStyle|${value}}`;
        },
        rich: {
          labelStyle: {
            fontSize: vwToPx(0.6944),
            fontWeight: 400,
            backgroundColor: "#F5F6F7",
            borderRadius: vwToPx(0.2),
            padding: [vwToPx(0.3), vwToPx(0.5)],
            color: "#445164",
            align: "center",
          },
        },
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
      name: "Number of Failures",
      nameLocation: "middle",
      nameGap: vwToPx(2.6),
      nameTextStyle: {
        color: "#595959",
        fontSize: vwToPx(0.8333),
        fontWeight: 500,
        lineHeight: vwToPx(1.3194),
      },
      axisLabel: {
        rotate: 0,
        fontSize: axisFontSize,
        color: "#98A2B3",
        padding: [vwToPx(0.2), 0, 0, 0],
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
        data: chartData.map((item: any) => ({
          value: item?.value,
          itemStyle: {
            color: item?.color,
          },
        })),
        type: "bar",
        barWidth: "45%",
      },
    ],
    grid: {
      top: "20%",
      bottom: "15%",
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

export default WorkflowFailureChart;
