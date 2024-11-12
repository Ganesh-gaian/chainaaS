"use client";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { vwToPx } from "@/utils/vwToPx";
import useResolution from "@/utils/useResolution";

interface RFPStatusData {
  value: number;
  name: string;
  itemStyle: { color: string };
}

interface RequestforProposalsProps {
  RequestforProposals: RFPStatusData[];
}

const RFPChart: React.FC<RequestforProposalsProps> = ({
  RequestforProposals,
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useResolution();

  useEffect(() => {
    const chartDom = chartRef.current!;
    const myChart = echarts.init(chartDom);

    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "horizontal",
        bottom: 10,
        data: RequestforProposals.map((d) => d.name),
        textStyle: {
          fontSize: vwToPx(0.6944),
          color: "#445164",
        },
        itemWidth: vwToPx(1.1),
        itemHeight: vwToPx(1),
        itemGap: vwToPx(1),
      },
      series: [
        {
          name: "RFP Status",
          type: "pie",
          radius: "50%",
          data: RequestforProposals,
          label: {
            formatter: "{d}%",
            fontSize: vwToPx(0.6944),
          },
          emphasis: {
            itemStyle: {
              shadowBlur: vwToPx(1.3889),
              shadowOffsetX: vwToPx(0),
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [RequestforProposals]);

  return (
    <div className="p-[1vw] bg-white rounded-sm">
      <h2 className="fs-16 font-[500] mb-[0.4vw]">Request for Proposals</h2>
      <div className="mb-[1vw]">
        <p className="fs-14 opacity-45">
          Total RFPs Issued this quarter:{" "}
          <span className="opacity-100">12</span>
        </p>
      </div>
      <div ref={chartRef} style={{ width: "100%", height: "40vh" }}></div>
    </div>
  );
};

export default RFPChart;
