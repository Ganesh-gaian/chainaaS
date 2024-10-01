import React, { useEffect } from "react";
import * as echarts from "echarts";
import "tailwindcss/tailwind.css";

// Define the interface for the chart data
interface CloudFailureData {
    name: string;
    value: number;
    color: string;
}

const CloudFailureChart: React.FC = () => {
    // Define the data inside the component
    const chartData: CloudFailureData[] = [
        { name: "Computing", value: 40, color: "#87CEFA" }, // Light Blue
        { name: "Networking", value: 30, color: "#F4A582" }, // Light Red
        { name: "Storage", value: 30, color: "#FFD700" },    // Gold
    ];

    useEffect(() => {
        const chartDom = document.getElementById("cloudFailureChart") as HTMLElement;
        const myChart = echarts.init(chartDom);

        const option = {
            title: {
                text: "Cloud Failure",
                left: "center",
                textStyle: {
                    fontSize: 14,
                },
            },
            tooltip: {
                trigger: "item",
            },
            legend: {
                bottom: "0", // Positioning the legend at the bottom
                left: "center",
                itemWidth: 14, // Width of the color square in the legend
                itemHeight: 14, // Height of the color square in the legend
                textStyle: {
                    fontSize: 12,
                },
                data: chartData.map(item => ({
                    name: item.name,
                    icon: "circle", // Set legend item shape to circle
                })),
            },
            series: [
                {
                    name: "Cloud Failure",
                    type: "pie",
                    radius: "60%",
                    data: chartData.map(item => ({
                        value: item.value,
                        name: item.name,
                        itemStyle: { color: item.color },
                    })),
                    label: {
                        show: false, // Hide labels inside the pie chart to focus on the legend
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)",
                        },
                    },
                },
            ],
        };

        // Set the options
        myChart.setOption(option);

        // Cleanup on component unmount
        return () => {
            myChart.dispose();
        };
    }, [chartData]);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div id="cloudFailureChart" className="w-full h-72"></div>
        </div>
    );
};

export default CloudFailureChart;
