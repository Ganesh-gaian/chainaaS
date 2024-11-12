"use client";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import useResolution from "@/utils/useResolution";
import { vwToPx } from "@/utils/vwToPx";

interface appReachData {
    xAxisData: string[],
    seriesData: number[]
}
interface appReachDataLogProps {
    appReachDataLog: appReachData
}

const AppReachChart: React.FC<appReachDataLogProps> = ({ appReachDataLog }) => {

    if (!appReachDataLog) {
        return
    }
    const appReachData = appReachDataLog

    const chartRef = useRef<HTMLDivElement>(null);
    useResolution();

    const appReachOptions = {
        title: {
            text: "App reach",
            left: "left",
            textStyle: {
                fontSize: vwToPx(1.1111), //16
                fontWeight: "bold",
                color: "#333",
            },
        },
        tooltip: {
            trigger: "axis",
        },
        xAxis: {
            type: "category",
            data: appReachData.xAxisData,
            axisLabel: {
                fontSize: vwToPx(0.8333), //12
                color: "#666",
            },
            name: "Apps",
            nameLocation: "middle",
            nameGap: vwToPx(2.1),
            nameTextStyle: {
                fontSize: vwToPx(0.9722), //14
                fontWeight: "bold",
                color: "#333",
            },
        },
        yAxis: {
            type: "value",
            name: "No. of devices in billion",
            nameLocation: "middle",
            nameGap: vwToPx(2.6),
            nameTextStyle: {
                fontSize: vwToPx(0.9722),
                fontWeight: "bold",
                color: "#333",
            },
            axisLabel: {
                fontSize: vwToPx(0.8333),
                color: "#666",
            },
            splitLine: {
                lineStyle: {
                    color: "#f0f0f0",
                },
            },
        },
        series: [
            {
                data: appReachData.seriesData,
                type: "bar",
                barWidth: "50%",
                itemStyle: {
                    color: "rgba(83, 147, 255, 0.5)",
                },
            },
        ],
        grid: {
            left: "10%",
            right: "10%",
            top: "20%",
            bottom: "15%",
        },
    };

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = echarts.init(chartRef.current);
            window.addEventListener("resize", () => {
                chartInstance.resize();
            })
            chartInstance.setOption(appReachOptions);
            return () => {
                chartInstance.dispose();
            };
        }
    }, [appReachOptions]);

    return (
        <div className="w-[100%] h-[24vw] p-[1vw] bg-white rounded-sm">
            <div ref={chartRef} className="h-[100%] w-[100%] " />
        </div>
    );
};

export default AppReachChart;
