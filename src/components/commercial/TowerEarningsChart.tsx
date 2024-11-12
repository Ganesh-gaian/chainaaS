"use client";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { vwToPx } from "@/utils/vwToPx";
import useResolution from "@/utils/useResolution";

interface TowerEarningsData {
  city: string;
  earning: number;
  color: string;
}

interface TowerEarningsChartProps {
  TowerEarningsData: TowerEarningsData[];
}

const TowerEarningsChart: React.FC<TowerEarningsChartProps> = ({
  TowerEarningsData,
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const axisFontSize = vwToPx(0.6944);

  useResolution();

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: "Tower-Specific Earnings",
        left: "left",
        textStyle: {
          fontSize: vwToPx(1.1111),
          fontWeight: 600,
          lineHeight: vwToPx(1.3194),
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {
        type: "category",
        name: "Months",
        nameTextStyle: {
          color: "#595959",
          fontSize: vwToPx(0.8333),
          fontWeight: 500,
          lineHeight: vwToPx(1.3194),
        },
        nameLocation: "middle",
        nameGap: vwToPx(2.7778),
        data: TowerEarningsData.map((data) => data.city),
        axisLabel: {
          fontSize: axisFontSize,
          color: "#98A2B3",
          padding: [vwToPx(0.5), 0, 0, 0],
          show: true,
          interval: 0,
          rich: {
            labelStyle: {
              backgroundColor: "#F5F6F7",
              borderRadius: 4,
              padding: [6, 6],
              fontSize: axisFontSize,
              color: "#445164",
            },
          },

          formatter: function (value: string) {
            return `{labelStyle|${value}}`;
          },
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
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "${value}k",
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
          name: "Earnings",
          type: "bar",
          data: TowerEarningsData.map((data) => data.earning),
          barWidth: vwToPx(2),
          itemStyle: {
            color: function (params: any) {
              return TowerEarningsData[params.dataIndex].color;
            },
          },
        },
      ],
      grid: {
        bottom: "15%",
      },
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [TowerEarningsData]);

  return (
    <div className="h-[60vh] p-[1vw] bg-white rounded-sm">
      <div ref={chartRef} className="w-full h-full" />
    </div>
  );
};

export default TowerEarningsChart;
