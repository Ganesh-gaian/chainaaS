"use client"
import React, { useEffect } from "react";
import * as echarts from "echarts";

interface WorkflowFailureData {
    name: string;
    value: number;
    color: string;
}

const WorkflowFailureChart: React.FC = () => {
    // Define the data inside the component
    const chartData: WorkflowFailureData[] = [
        { name: "Transmission", value: 3, color: "#F4C45C" },  // Adjusted yellow to match the image
        { name: "Scheduling", value: 8, color: "#86B8F3" },    // Adjusted blue to match the image
        { name: "Encoding", value: 5, color: "#97A781" },      // Adjusted green to match the image
    ];

    useEffect(() => {
        const chartDom = document.getElementById("workflowFailureChart") as HTMLElement;
        const myChart = echarts.init(chartDom);

        const option = {
            title: {
                text: "Workflow Failure Overview",
                left: "left",
                textStyle: {
                    fontSize: 16,  // Slightly larger font size to match the image
                    fontWeight: 'bold',
                },
            },
            tooltip: {
                trigger: "item",
            },
            xAxis: {
                type: "category",
                data: chartData.map(item => item.name),
                axisLabel: {
                    interval: 0,
                    rotate: 0,  // No label rotation
                },
                axisTick: {
                    show: false,  // Hide the ticks to match the clean look
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#C7C7CC",  // Light gray axis line like in the image
                    },
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
                    data: chartData.map(item => ({
                        value: item.value,
                        itemStyle: {
                            color: item.color,  // Use the color from the data
                        },
                    })),
                    type: "bar",
                    barWidth: "40%",  // Same bar width as in the image
                },
            ],
            legend: {
                bottom: "0",
                left: "center",
                itemWidth: 14,  // Width of the color square in the legend
                itemHeight: 14,  // Height of the color square in the legend
                data: chartData.map(item => ({
                    name: item.name,
                    icon: "rect", // Set legend item shape to a rectangle
                })),
                textStyle: {
                    fontSize: 12,  // Font size to match the image
                },
            },
            grid: {
                top: "20%",  // Adjust grid to match the spacing seen in the image
                bottom: "15%",  // Adjust grid to match the spacing seen in the image
                left: "10%",  // Adjust grid to match the spacing seen in the image
                right: "10%",  // Adjust grid to match the spacing seen in the image
            },
        };

        // Set the chart options
        myChart.setOption(option);

        // Cleanup the chart when the component unmounts
        return () => {
            myChart.dispose();
        };
    }, [chartData]);

    return (
        <div className="h-[40vh] aspect-auto p-[1vw] bg-white rounded-sm">
            <div id="workflowFailureChart" className="w-full h-full"></div>
        </div>
    );
};

export default WorkflowFailureChart;
