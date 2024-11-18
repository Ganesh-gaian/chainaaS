"use client";
import React, { memo, useEffect, useRef } from "react";
import * as echarts from "echarts";
import "tailwindcss/tailwind.css";
import { EChartsOption } from "echarts";

interface ChartGeneratorProps {
  options: EChartsOption;
}

function ChartGenerator({ options }: ChartGeneratorProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    myChart.setOption(options);

    return () => {
      myChart.dispose();
    };
  }, [options]);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
}

export default memo(ChartGenerator);
