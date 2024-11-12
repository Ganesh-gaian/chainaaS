"use client"
import React, { useEffect } from "react";
import * as echarts from "echarts";
interface ResolutionTimeDataProps {
    ResolutionTimeData: any
}

const IncidentResolutionTimeChart: React.FC<ResolutionTimeDataProps> = ({ ResolutionTimeData }) => {

    if (!ResolutionTimeData) {
        return
    }
    const chartData = ResolutionTimeData

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
                data: chartData?.months,
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
                    data: chartData?.resolutionTimes,
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
        <div className="h-[50vh] aspect-auto p-[1vw] bg-white rounded-sm">
            <h2 className="fs-16 font-semibold mb-[0.4vw]">Incident Resolution Time per month</h2>
            <div className="">
                <p className="fs-20 font-medium">4 hour</p>
                <p className="text-gray-500">Average Resolution Time</p>
            </div>
            <div id="resolutionTimeChart" className="w-[100%] h-[78%]"></div>
        </div>
    );
};

export default IncidentResolutionTimeChart;
