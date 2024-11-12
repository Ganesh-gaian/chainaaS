"use client";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import useResolution from "@/utils/useResolution";
import { vwToPx } from "@/utils/vwToPx";

interface areaReachData {
    xAxisData: string[],
    seriesData: [
        {
            name: string,
            data: number[]
        }
    ]
}
interface areaReachDataLogProps {
    areaReachDataLog: areaReachData
}

const AreaReachChart: React.FC<areaReachDataLogProps> = ({ areaReachDataLog }) => {
    if (!areaReachDataLog) {
        return
    }

    const areaReachData = areaReachDataLog

    const chartRef = useRef<HTMLDivElement>(null);
    useResolution();

    const areaReachOptions = {
        title: {
            text: "Area Reach Over Time",
            left: "left",
            textStyle: {
                fontSize: vwToPx(1.1111),
                fontWeight: "bold",
            },
        },
        tooltip: {
            trigger: "axis",
        },
        legend: {
            data: ["Izak", "Amplyfund", "Museo"],
            bottom: 0,
            left: "center",
            itemGap: vwToPx(2),
            textStyle: {
                fontSize: vwToPx(1),
            },
            symbolSize: vwToPx(2.2),
        },
        xAxis: {
            type: "category",
            data: areaReachData.xAxisData,
            axisLabel: {
                fontSize: vwToPx(0.8333),
                color: "#666",
            },
            name: "Months",
            nameLocation: "middle",
            nameGap: vwToPx(3.2),
            nameTextStyle: {
                fontSize: vwToPx(0.9722),
                fontWeight: "bold",
            },
        },
        yAxis: {
            type: "value",
            name: "Area Reach",
            axisLabel: {
                formatter: "{value}m",
                fontSize: vwToPx(0.8333),
                color: "#666",
            },
            nameLocation: "middle",
            nameGap: vwToPx(3.6),
            nameTextStyle: {
                fontSize: vwToPx(0.9722),
                fontWeight: "bold",
            },
        },
        grid: {
            left: "10%",
            right: "10%",
            top: "15%",
            bottom: "20%",
        },
        series: areaReachData.seriesData.map((seriesItem) => ({
            name: seriesItem.name,
            data: seriesItem.data,
            type: "line",
            smooth: true,
            symbolSize: 6,
            lineStyle: {
                width: vwToPx(0.08),
            },
        })),
        color: ["#9A9AFF", "#94D0FF", "#FBC96C"],
    };

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = echarts.init(chartRef.current);
            window.addEventListener("resize", () => {
                chartInstance.resize();
            });
            chartInstance.setOption(areaReachOptions);
            return () => {
                chartInstance.dispose();
            };
        }
    }, [areaReachOptions]);

    return (
        <div className="h-[30vw] w-[100%] bg-white p-[1vw] rounded-sm">
            {/* Chart container */}
            <div ref={chartRef} className="w-[100%] h-[100%]" />
        </div>
    );
};

export default AreaReachChart;
