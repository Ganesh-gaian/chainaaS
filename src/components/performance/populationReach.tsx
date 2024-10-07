"use client";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts"; // Import ECharts

const PopulationReachChart = () => {
    const chartRef = useRef<HTMLDivElement>(null); // Reference to the chart DOM element

    // Data for Population Reach Over Time
    const populationReachData = {
        xAxisData: [
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
        ],
        seriesData: [150, 180, 200, 230, 250, 270, 290, 310, 330, 350, 370, 400],
    };

    // Options for Population Reach Over Time (line chart)
    const populationReachOptions = {
        title: {
            text: "Population Reach Over Time",
            left: "left",
            textStyle: {
                fontSize: 16,
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
                fontSize: 12,
                color: "#333",
            },
            name: "Months",
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
            name: "No. of individuals in billion",
            nameLocation: "middle",
            nameGap: 40,
            nameTextStyle: {
                fontSize: 14,
                fontWeight: "bold",
                color: "#333",
            },
            axisLine: {
                lineStyle: {
                    color: "#ccc",
                },
            },
            axisLabel: {
                fontSize: 12,
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
                    color: "#f6c343",
                    width: 3,
                },
                itemStyle: {
                    color: "#f6c343",
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
            // Initialize the chart
            const chartInstance = echarts.init(chartRef.current);

            // Set the options for the chart
            chartInstance.setOption(populationReachOptions);

            // Cleanup the chart when the component unmounts
            return () => {
                chartInstance.dispose();
            };
        }
    }, [populationReachOptions]);

    return (
        <div className="w-full">
            <div ref={chartRef} className="h-[400px] w-full p-[1vw] bg-white rounded-sm" />
        </div>
    );
};

export default PopulationReachChart;
