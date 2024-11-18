"use client";
import React from "react";
import * as echarts from "echarts";
import { vwToPx } from "@/utils/vwToPx";
import ChartGenerator from "../Charts/ChartGenerator";
import useResolution from "@/utils/useResolution";

interface AppUptimeData {
  name: string;
  uptime: number[];
  color: string;
}

interface LiveAppsUptimeProps {
  Live_apps_uptime: AppUptimeData[];
}

const LiveAppsUptimeChart: React.FC<LiveAppsUptimeProps> = ({
  Live_apps_uptime,
}) => {
  const axisFontSize = vwToPx(0.6944);

  const options: echarts.EChartsOption = {
    xAxis: {
      type: "category",
      name: "Months",
      nameLocation: "middle",
      boundaryGap: false,
      nameGap: vwToPx(2.7778),
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      nameTextStyle: {
        color: "#595959",
        fontSize: vwToPx(0.8333),
        fontWeight: 500,
        lineHeight: vwToPx(1.3194),
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
      axisLabel: {
        fontSize: axisFontSize,
        color: "#98A2B3",
        padding: [vwToPx(0.5), 0, 0, 0],
      },
    },
    yAxis: {
      type: "value",
      name: "Count",
      nameLocation: "middle",
      nameGap: vwToPx(2.7778),
      min: 0,
      max: 100,
      interval: 10,
      nameTextStyle: {
        color: "#595959",
        fontSize: vwToPx(0.8333),
        fontWeight: 500,
        lineHeight: vwToPx(1.3194),
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
    series: Live_apps_uptime.map((app) => ({
      name: app.name,
      type: "line",
      data: app.uptime,
      lineStyle: {
        color: app.color,
        width: vwToPx(0.0694),
      },
      symbol: "none",
    })),
    legend: {
      data: Live_apps_uptime.map((app) => ({
        name: app.name,
        icon: "roundRect",
        itemStyle: {
          color: app.color,
        },
      })),
      bottom: vwToPx(0),
      left: vwToPx(39),
      textStyle: {
        fontSize: vwToPx(0.6944),
        color: "#445164",
        padding: [0, 0, 0, vwToPx(0.1)]
      },
      itemWidth: vwToPx(1.1),
      itemHeight: vwToPx(1),
      itemGap: vwToPx(1),
    },
    tooltip: {
      trigger: "axis",
      formatter: (params: any) => {
        const tooltipContent = params
          .map((param: any) => {
            const appName = param.seriesName;
            const uptime = param.data;
            return `${appName}: ${uptime}%`;
          })
          .join("<br/>");
        return `<strong>${params[0].name}</strong><br/>${tooltipContent}`;
      },
    },
    grid: {
      left: "5%",
      right: "2%",
      bottom: "25%",
      top: "5%",
    },
  };

  useResolution();

  return (
    <div className="p-[1vw] bg-white rounded-sm">
      <h2 className="fs-16 font-[500] mb-[0.4vw]">Live Apps Uptime</h2>
      <div className="w-full h-[52vh]">
        <ChartGenerator options={options} />
      </div>
    </div>
  );
};

export default LiveAppsUptimeChart;
