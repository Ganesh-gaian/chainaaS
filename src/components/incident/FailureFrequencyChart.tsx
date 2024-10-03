"use client"
import React, { useEffect } from "react";
import * as echarts from "echarts";
import { color } from "chart.js/helpers";
import { text } from "stream/consumers";

const FailureFrequencyChart: React.FC = () => {
    // Static data for the chart (Application category as an example)
    const data = {
        category: "Application",
        months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        failures: [4, 8, 6, 9, 3, 7],
    };

    useEffect(() => {
        const chartDom = document.getElementById("failureFrequencyChart") as HTMLElement;
        const myChart = echarts.init(chartDom);

        const option = {
            title: {
                text: "Failure Frequency Timeline",
                left: "left",
                textStyle: {
                    fontSize: 14,
                },
            },
            tooltip: {
                trigger: "item",
            },
            xAxis: {
                type: "category",
                data: data.months,
                axisLine: {
                    lineStyle: {
                        color: "#C7C7CC",
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    fontSize: 12,

                },
            },
            yAxis: {
                type: "value",
                name: "Number of Failures",
                nameLocation: "middle",
                nameGap: 40,  // Gap for the y-axis name
                nameTextStyle: {
                    rotate: 45,  // Rotate y-axis name by 45 degrees
                    fontSize: 12,  // Match font size with the image
                },
                axisLabel: {
                    formatter: '{value}',
                    fontSize: 12,  // Match font size with the image
                },
                splitLine: {
                    lineStyle: {
                        color: "#F2F2F7",
                        type: "dotted",
                        width: 1,
                    },
                },
            },
            series: [
                {
                    name: data.category,
                    data: data.failures,
                    type: "line",
                    symbol: "circle", // Points on each data value
                    symbolSize: 8, // Match point size in the image
                    lineStyle: {
                        color: "#1976d2", // Blue line
                    },
                    itemStyle: {
                        color: "#1976d2", // Blue points
                    },
                },
            ],
            grid: {
                top: "20%", // Adjust grid to match spacing seen in the image
                bottom: "20%", // Adjust grid to match spacing seen in the image
                left: "10%", // Adjust grid to match spacing seen in the image
                right: "10%", // Adjust grid to match spacing seen in the image
            },
        };

        // Set the chart options
        myChart.setOption(option);

        // Cleanup the chart when the component unmounts
        return () => {
            myChart.dispose();
        };
    }, []);

    return (
        <div className="h-[40vh] aspect-auto p-[1vw] bg-white rounded-sm">
            <div id="failureFrequencyChart" className="w-full h-full"></div>
        </div>
    );
};

export default FailureFrequencyChart;
