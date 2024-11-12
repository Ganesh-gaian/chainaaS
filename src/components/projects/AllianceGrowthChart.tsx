"use client";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { vwToPx } from "@/utils/vwToPx";
import useResolution from "@/utils/useResolution";

interface AllianceGrowthData {
  month: string;
  alliancesFormed: number;
}

interface AllianceGrowthProps {
  AllianceGrowthdata: AllianceGrowthData[];
}

const AllianceGrowthChart: React.FC<AllianceGrowthProps> = ({
  AllianceGrowthdata,
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const axisFontSize = vwToPx(0.6944);

  useResolution();

  useEffect(() => {
    const chartDom = chartRef.current!;
    const myChart = echarts.init(chartDom);

    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: "item",
      },
      xAxis: {
        type: "category",
        data: AllianceGrowthdata.map((d) => d.month),
        name: "Months",
        nameTextStyle: {
          color: "#595959",
          fontSize: vwToPx(0.8333),
          fontWeight: 500,
          lineHeight: vwToPx(1.3194),
        },
        nameLocation: "middle",
        nameGap: vwToPx(2.7778),
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
          color: "#98A2B3#445164",
          padding: [vwToPx(0.5), 0, 0, 0],
        },
      },
      yAxis: {
        type: "value",
        name: "Number of Failures",
        nameLocation: "middle",
        nameGap: vwToPx(2.7778),
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
      series: [
        {
          data: AllianceGrowthdata.map((d) => d.alliancesFormed),
          type: "line",
          symbol: "circle",
          symbolSize: vwToPx(0.5556),
          lineStyle: {
            color: "#1976d2",
            width: vwToPx(0.0694),
          },
        },
      ],
      grid: {
        top: "5%",
        bottom: "20%",
        left: "10%",
        right: "10%",
      },
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [AllianceGrowthdata]);

  return (
    <div className="h-[50vh] aspect-auto p-[1vw] bg-white rounded-sm">
      <h2 className="fs-16 font-[500] mb-[0.4vw]">Alliance Growth Over Time</h2>
      <div ref={chartRef} className="w-full h-[95%]"></div>
    </div>
  );
};

export default AllianceGrowthChart;
