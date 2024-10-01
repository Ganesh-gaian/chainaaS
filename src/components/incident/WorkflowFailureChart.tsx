// components/WorkflowFailureChart.tsx

import React, { useEffect } from "react";
import * as echarts from "echarts";
import "tailwindcss/tailwind.css";

// Define the interface for the chart data
interface WorkflowFailureData {
    name: string;
    value: number;
    color: string;
}

const WorkflowFailureChart: React.FC = () => {
    // Define the data inside the component
    const chartData: WorkflowFailureData[] = [
        { name: "Transmission", value: 3, color: "#FFD700" },  // Gold
        { name: "Scheduling", value: 8, color: "#87CEFA" },    // Light Blue
        { name: "Encoding", value: 5, color: "#8FBC8F" },      // Light Green
    ];

    useEffect(() => {
        const chartDom = document.getElementById("workflowFailureChart") as HTMLElement;
        const myChart = echarts.init(chartDom);

        const option = {
            title: {
                text: "Workflow Failure Overview",
                left: "center",
                textStyle: {
                    fontSize: 14,
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
                    rotate: 0,  // Prevent rotation of labels under each bar
                },
            },
            yAxis: {
                type: "value",
                name: "Number of Failures",
                axisLabel: {
                    formatter: '{value}', // Simple formatting for y-axis
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
                    barWidth: "40%",
                    label: {
                        show: true,
                        position: "top",
                        formatter: "{c}",  // Display the value on top of each bar
                    },
                },
            ],
            legend: {
                bottom: "0",
                left: "center",
                itemWidth: 14, // Width of the color square in the legend
                itemHeight: 14, // Height of the color square in the legend
                data: chartData.map(item => ({
                    name: item.name,
                    icon: "rect", // Set legend item shape to a rectangle
                })),
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
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div id="workflowFailureChart" className="w-full h-72"></div>
        </div>
    );
};

export default WorkflowFailureChart;
