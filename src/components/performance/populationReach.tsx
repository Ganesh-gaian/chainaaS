"use client";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts"
import useResolution from "@/utils/useResolution";
import { vwToPx } from "@/utils/vwToPx";

interface populationReachData {
    xAxisData: string[],
    seriesData: number[],
}

interface populationReachDataLogProps {
    populationReachDataLog: populationReachData
}

const PopulationReachChart: React.FC<populationReachDataLogProps> = ({ populationReachDataLog }) => {

    if (!populationReachDataLog) {
        return
    }

    const populationReachData = populationReachDataLog

    const chartRef = useRef<HTMLDivElement>(null);
    useResolution();

    const populationReachOptions = {
        title: {
            text: "Population Reach Over Time",
            left: "left",
            textStyle: {
                fontSize: vwToPx(1.1111),
                fontWeight: "bold",
            },
        },
        tooltip: {
            trigger: "axis",
        },
        xAxis: {
            type: "category",
            data: populationReachData.xAxisData,
            axisLine: {
                lineStyle: {
                    color: "#ccc",
                },
            },
            axisLabel: {
                fontSize: vwToPx(0.8333),
                color: "#333",
            },
            name: "Months",
            nameLocation: "middle",
            nameGap: vwToPx(2.1),
            nameTextStyle: {
                fontSize: vwToPx(0.9722),
                fontWeight: "bold",
                color: "#333",
            },
        },
        yAxis: {
            type: "value",
            name: "No. of individuals in billion",
            nameLocation: "middle",
            nameGap: vwToPx(2.6),
            nameTextStyle: {
                fontSize: vwToPx(0.9722),
                fontWeight: "bold",
                color: "#333",
            },
            axisLine: {
                lineStyle: {
                    color: "#ccc",
                },
            },
            axisLabel: {
                fontSize: vwToPx(0.8333),
                color: "#333",
            },
            splitLine: {
                lineStyle: {
                    color: "#f0f0f0",
                },
            },
        },
        series: [
            {
                data: populationReachData.seriesData,
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 10,
                lineStyle: {
                    color: "#F8C269",
                    width: 3,
                },
                itemStyle: {
                    color: "#F8C269",
                },
                emphasis: {
                    focus: "series",
                },
            },
        ],
        grid: {
            left: "10%",
            right: "10%",
            top: "15%",
            bottom: "15%",
        },
    };

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = echarts.init(chartRef.current);
            window.addEventListener("resize", () => {
                chartInstance.resize();
            })

            chartInstance.setOption(populationReachOptions);
            return () => {
                chartInstance.dispose();
            };
        }
    }, [populationReachOptions]);

    return (
        <div className="w-[100%] h-[24vw] p-[1vw] bg-white rounded-sm">
            <div ref={chartRef} className="h-[100%] w-[100%] " />
        </div>
    );
};

export default PopulationReachChart;
