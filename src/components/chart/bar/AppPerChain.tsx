"use client";

import React from "react";
import { vwToPx } from "@/utils/vwToPx";
import useResolution from "@/utils/useResolution";
import ChartGenerator from "@/components/Charts/ChartGenerator";
import { SeriesOption } from "echarts";

type CitiesReachData = {
  cities: string[];
  rawData: {
    name: string;
    data: number[];
  }[];
};

interface BarChartComponentProps {
  citiesReachDataLog: CitiesReachData;
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({
  citiesReachDataLog,
}) => {
  if (!citiesReachDataLog) {
    return null;
  }

  const { cities, rawData } = citiesReachDataLog;

  useResolution();

  // Data for each city
  const totalData = Array(cities.length).fill(0);
  rawData.forEach((series) => {
    series.data.forEach((value, index) => {
      totalData[index] += value;
    });
  });

  console.log(rawData, totalData);

  const options: echarts.EChartsOption = {
    tooltip: {
      trigger: "axis",
    },
    title: {
      text: "App per Chain",
      left: "left",
      top: 10,
      textStyle: {
        fontSize: vwToPx(1.1111),
        fontWeight: "bold",
        color: "rgba(0, 0, 0, 0.85)",
      },
    },
    legend: {
      itemWidth: vwToPx(1.1),
      itemHeight: vwToPx(1.1),
      itemGap: vwToPx(1),
      bottom: 0,
      textStyle: {
        fontSize: vwToPx(0.8333),
        color: "#242F3E",
        padding: [0, 0, 0, vwToPx(0.1)],
      },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 100,
      axisLabel: {
        formatter: (value: number) => `${value.toFixed(0)}%`,
        fontSize: "0.8333vw",
      },
      name: "App Percentage",
      nameLocation: "middle",
      nameGap: vwToPx(3.6),
      nameTextStyle: {
        color: "#595959",
        fontSize: vwToPx(0.9333),
        fontWeight: 500,
      },
      splitLine: {
        lineStyle: {
          color: "#F2F2F7",
          type: "dotted",
          width: vwToPx(0.0994),
        },
      },
    },
    xAxis: {
      type: "category",
      data: cities,

      axisLabel: {
        rotate: 0,
        fontSize: vwToPx(0.8333),
        interval: 0,
        padding: [vwToPx(0.5), 0, 0, 0],
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
      name: "Chains",
      nameLocation: "middle",
      nameGap: vwToPx(3.2),
      nameTextStyle: {
        color: "#595959",
        fontSize: vwToPx(0.9333),
        fontWeight: 500,
        padding: [vwToPx(0.1), 0, 0, 0],
      },
    },
    series: [
      ...rawData.flatMap((series) => [
        // data series
        {
          name: series.name,
          type: "bar",
          stack: "total",
          barWidth: "50%",
          label: {
            show: false,
          },
          data: series.data.map((value, index) =>
            totalData[index] > 0
              ? ((value / totalData[index]) * 100).toFixed(2)
              : 0
          ),
        } as SeriesOption,
        // gap series
        {
          name: "",
          type: "bar",
          stack: "total",
          barWidth: "50%",
          data: series.data.map(() => 0.01 * 100), // Small constant value to simulate a gap
          itemStyle: {
            color: "white", // White gap
          },
          tooltip: {
            show: false, // Hide tooltip for spacers
          },
          emphasis: {
            disabled: true,
          },
          legendHoverLink: false,
        } as SeriesOption,
      ]),
    ],
    color: ["#9A9AFF", "#A6AF88", "#94D0FF", "#F1AE9D", "#F8C269", "#E3E1DE"],
    grid: {
      left: "7%",
      right: "5%",
      bottom: "25%",
      top: "20%",
    },
  };

  return (
    <div className="h-[60vh] w-full p-[1vw] bg-white rounded-sm">
      <ChartGenerator options={options} />
    </div>
  );
};

export default BarChartComponent;
