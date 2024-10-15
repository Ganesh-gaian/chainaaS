"use client"
import React, { useEffect } from "react";
import * as echarts from "echarts";
interface ResolutionTimeData {
    months: string[];
    resolutionTimes: number[];
}

const IncidentResolutionTimeChart: React.FC = () => {
    // Define the data
    const chartData: ResolutionTimeData = {
        months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        resolutionTimes: [4, 8.6, 5.6, 7.6, 4.3, 11, 0.6, 5.6, 4.5],
    };

    const averageResolutionTime = 4; // Define the average resolution time

    useEffect(() => {
        const chartDom = document.getElementById("resolutionTimeChart") as HTMLElement;
        const myChart = echarts.init(chartDom);

        const option = {
            title: {
                text: "",
                left: "center",
                textStyle: {
                    fontSize: 14,
                },
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true,
            },
            xAxis: {
                type: "category",
                data: chartData.months,
            },
            yAxis: {
                type: "value",
                name: "Hours",
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
                    name: "Resolution Time",
                    data: chartData.resolutionTimes,
                    type: "line",
                    smooth: true,
                    lineStyle: {
                        color: "#1976d2",
                    },
                    label: {
                        show: true,
                        position: "top",
                        formatter: "{c} hrs",
                    },
                    itemStyle: {
                        color: "#1976d2",
                    },
                },
            ],
        };

        // Set the chart options
        myChart.setOption(option);

        // Clean up on component unmount
        return () => {
            myChart.dispose();
        };
    }, [chartData]);

    return (
        <div className="p-[1vw] bg-white rounded-sm">
            <h2 className="fs-16 font-semibold mb-[0.4vw]">Incident Resolution Time per month</h2>
            <div className="mb-[1vw]">
                <p className="fs-20 font-medium">4 hour</p>
                <p className="text-gray-500">Average Resolution Time</p>
            </div>
            <div id="resolutionTimeChart" className="w-full h-72"></div>
        </div>
    );
};

export default IncidentResolutionTimeChart;
