"use client";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "tailwindcss/tailwind.css";
import { vwToPx } from "@/utils/vwToPx";
import useResolution from "@/utils/useResolution";

interface GrowthTrendData {
  name: string;
  uptime: number[];
  color: string;
}

interface GrowthTrendChartprops {
  GrowthTrendData: GrowthTrendData[];
}

const GrowthTrendChart: React.FC<GrowthTrendChartprops> = ({
  GrowthTrendData,
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const axisFontSize = vwToPx(0.6944);

  useResolution();

  useEffect(() => {
    const chartDom = chartRef.current!;
    const myChart = echarts.init(chartDom);

    const option = {
      tooltip: {
        trigger: "axis",
      },
      title: {
        text: "Growth trend",
        left: "left",
        textStyle: {
          fontSize: vwToPx(1.1111),
          fontWeight: 600,
          lineHeight: vwToPx(1.3194),
        },
      },
      xAxis: {
        type: "category",
        data: ["Jan", "Feb", "Mar", "Apr"],
        nameTextStyle: {
          color: "#595959",
          fontSize: vwToPx(0.8333),
          fontWeight: 500,
          lineHeight: vwToPx(1.3194),
        },
        nameLocation: "middle",
        nameGap: vwToPx(2.7778),
        boundaryGap: false,
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
        axisLabel: {
          formatter: "${value}M",
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
      },
      series: GrowthTrendData.map((app) => ({
        name: app.name,
        type: "line",
        data: app.uptime,
        lineStyle: {
          color: app.color,
          type: app.name === "Amplyfund" ? "dashed" : "",
          width: vwToPx(0.0694),
        },
        symbol: "none",
      })),
      legend: {
        data: GrowthTrendData.map((app) => ({
          name: app.name,
          icon: "roundRect",
          itemStyle: {
            color: app.color,
          },
        })),
        bottom: vwToPx(0),
        textStyle: {
          fontSize: vwToPx(0.6944),
          color: "#242F3E",
        },
        itemWidth: vwToPx(1.1),
        itemHeight: vwToPx(1),
        itemGap: vwToPx(1),
      },
      grid: {
        left: "10%",
        right: "2%",
        bottom: "20%",
        top: "15%",
      },
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [GrowthTrendData]);

  return (
    <div className="p-[1vw] bg-white rounded-sm">
      <div ref={chartRef} className="w-full h-[45vh]" />
    </div>
  );
};

export default GrowthTrendChart;
