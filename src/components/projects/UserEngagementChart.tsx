"use client";
import React from "react";
import * as echarts from "echarts";
import { vwToPx } from "@/utils/vwToPx";
import ChartGenerator from "../Charts/ChartGenerator";
import useResolution from "@/utils/useResolution";

interface AppEngagementData {
  name: string;
  bandwidthUsage: number;
  engagementRate: number;
  color: string;
}

interface UserEngagementsProps {
  user_engagements: AppEngagementData[];
}

const UserEngagementChart: React.FC<UserEngagementsProps> = ({
  user_engagements,
}) => {
  const axisFontSize = vwToPx(0.6944);

  const options: echarts.EChartsOption = {
    xAxis: {
      type: "value",
      name: "Bandwidth Usage (GB)",
      nameLocation: "middle",
      nameTextStyle: {
        color: "#595959",
        fontSize: axisFontSize,
        fontWeight: 500,
        lineHeight: vwToPx(1.3194),
      },
      nameGap: vwToPx(2.7778),
      min: 10,
      max: 70,
      interval: 10,
      splitLine: {
        lineStyle: {
          color: "#F2F2F7",
          type: "dotted",
          width: vwToPx(0.0694),
        },
      },
      axisLine: {
        lineStyle: {
          color: "#98A2B3",
          width: vwToPx(0.0694),
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: axisFontSize,
        color: "#98A2B3",
        padding: [vwToPx(0.5), 0, 0, 0],
      },
    },
    yAxis: {
      type: "value",
      name: "User Engagement Rate (%)",
      nameLocation: "middle",
      nameGap: vwToPx(2.7778),
      nameTextStyle: {
        color: "#595959",
        fontSize: axisFontSize,
        fontWeight: 500,
        lineHeight: vwToPx(1.3194),
      },
      min: 50,
      max: 450,
      interval: 100,
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
      axisLabel: {
        formatter: "{value}",
        fontSize: axisFontSize,
        color: "#98A2B3",
        padding: [0, vwToPx(0.5), 0, 0],
      },
      axisTick: {
        show: false,
      },
    },
    series: user_engagements.map((app) => ({
      name: app.name,
      type: "line",
      data: [[app.bandwidthUsage, app.engagementRate]],
      symbol: "circle",
      symbolSize: vwToPx(0.7),
      lineStyle: {
        color: "#EAECF04D",
        width: vwToPx(0.0694),
      },
      itemStyle: {
        color: app.color,
      },
    })),
    legend: {
      orient: "horizontal",
      data: user_engagements.map((app) => ({
        name: app.name,
        icon: "roundRect",
        itemStyle: {
          color: app.color,
        },
      })),
      bottom: vwToPx(2),
      textStyle: {
        fontSize: vwToPx(0.6944),
        color: "#445164",
        padding: [0, 0, 0, vwToPx(0.1)]
      },
      itemWidth: vwToPx(1.1),
      itemHeight: vwToPx(1),
      itemGap: vwToPx(2),
    },
    tooltip: {
      trigger: "item",
      formatter: (params: any) => {
        const app = user_engagements[params.dataIndex];
        return `${app.name}<br/>Bandwidth: ${app.bandwidthUsage} GB<br/>Engagement: ${app.engagementRate}%`;
      },
    },
    grid: {
      left: "10%",
      right: "10%",
      bottom: "35%",
      top: "5%",
    },
  };

  useResolution();

  return (
    <div className="p-[1vw] bg-white rounded-sm col-start-2 col-end-4">
      <h2 className="fs-16 font-[500] mb-[0.4vw]">
        User Engagement for Live Apps
      </h2>
      <div className="w-[100%] h-[58vh]">
        <ChartGenerator options={options} />
      </div>
    </div>
  );
};

export default UserEngagementChart;
