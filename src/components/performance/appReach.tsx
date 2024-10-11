"use client";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts"; // Import ECharts

const AppReachChart = () => {
    const chartRef = useRef<HTMLDivElement>(null); // Reference to the chart DOM element

    // Data for App Reach
    const appReachData = {
        xAxisData: ["Izak", "Museo", "Amplyfund", "Hear, Here", "C-link", "Revee"],
        seriesData: [120, 90, 180, 140, 110, 130],
    };

    // Options for App Reach (bar chart)
    const appReachOptions = {
        title: {
            text: "App reach",
            left: "left",
            textStyle: {
                fontSize: 16,
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
                fontSize: 12,
                color: "#666",
            },
            name: "Apps",
            nameLocation: "middle",
            nameGap: 30,
            nameTextStyle: {
                fontSize: 14,
                fontWeight: "bold",
                color: "#333",
            },
        },
        yAxis: {
            type: "value",
            name: "No. of devices in billion",
            nameLocation: "middle",
            nameGap: 40,
            nameTextStyle: {
                fontSize: 14,
                fontWeight: "bold",
                color: "#333",
            },
            axisLabel: {
                fontSize: 12,
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
                    color: "rgba(83, 147, 255, 0.5)", // Light blue with opacity
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
            // Initialize the chart
            const chartInstance = echarts.init(chartRef.current);

            // Set the options for the chart
            chartInstance.setOption(appReachOptions);

            // Cleanup the chart when the component unmounts
            return () => {
                chartInstance.dispose();
            };
        }
    }, [appReachOptions]);

    return (
        <div className="w-full">
            <div ref={chartRef} className="h-[400px] w-full p-[1vw] bg-white rounded-sm" />
        </div>
    );
};

export default AppReachChart;
