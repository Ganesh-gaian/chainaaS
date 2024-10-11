"use client"
import React, { useEffect } from "react";
import * as echarts from "echarts";

interface ConnectivityFailureData {
    locations: string[];
    failures: number[];
    colors: string[];
}

const ConnectivityFailureChart: React.FC = () => {
    // Define the data inside the component
    const chartData: ConnectivityFailureData = {
        locations: ["Location A", "Location B", "Location C", "Location D"],
        failures: [8, 15, 12, 14],
        colors: ["#FFD700", "#87CEFA", "#8FBC8F", "#6A9EB7"], // Colors for bars
    };

    useEffect(() => {
        const chartDom = document.getElementById("connectivityFailureChart") as HTMLElement;
        const myChart = echarts.init(chartDom);

        const option = {
            title: {
                text: "Connectivity failure",
                left: "left", // Align title to the left
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'bold', // Bold title to match image
                },
            },
            xAxis: {
                type: "category",
                data: chartData.locations,
                axisLabel: {
                    rotate: 0,
                    fontSize: 12,  // Match font size with image
                },
                axisLine: {
                    show: false,  // Remove the x-axis line
                },
                axisTick: {
                    show: false,  // Hide ticks on x-axis
                },
            },
            yAxis: {
                type: "value",
                name: "Number of Failures",
                nameLocation: 'middle',
                nameGap: 40,  // Adjust gap for y-axis title
                axisLine: {
                    show: false,  // Remove the y-axis line
                },
                axisTick: {
                    show: false,  // Hide ticks on y-axis
                },
                axisLabel: {
                    fontSize: 12, // Match font size with image
                    formatter: (value: number) => {
                        return value < 10 ? `0${value}` : value.toString(); // Format to match image
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "#F2F2F7",
                        type: "dotted",
                        width: 1,
                    },
                },
            },
            grid: {
                top: '15%',
                left: '5%',
                right: '5%',
                bottom: '15%',
                containLabel: true, // Ensure the labels fit within the chart area
            },
            series: [
                {
                    data: chartData.failures.map((value, index) => ({
                        value,
                        itemStyle: {
                            color: chartData.colors[index],
                        },
                    })),
                    type: "bar",
                    barWidth: "40%",  // Adjust bar width to match image
                    label: {
                        show: false,  // No value labels on top of the bars
                    },
                },
            ],
        };

        // Set the chart options
        myChart.setOption(option);

        // Clean up the chart when the component is unmounted
        return () => {
            myChart.dispose();
        };
    }, [chartData]);

    return (
        <div className="p-[1vw] bg-white rounded-sm col-start-2 col-end-4">
            {/* Explicitly define width and height */}
            <div id="connectivityFailureChart" style={{ width: '100%', height: '300px' }}></div>
        </div>
    );
};

export default ConnectivityFailureChart;
