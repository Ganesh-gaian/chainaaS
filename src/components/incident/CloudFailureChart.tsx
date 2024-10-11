"use client"
import React, { useEffect } from "react";
import * as echarts from "echarts";

interface CloudFailureData {
    name: string;
    value: number;
    color: string;
}

const CloudFailureChart: React.FC = () => {
    // Define the data inside the component
    const chartData: CloudFailureData[] = [
        { name: "Computing", value: 40, color: "#86B8F3" },  // Adjusted light blue color
        { name: "Networking", value: 30, color: "#F4A582" }, // Light Red (as in the image)
        { name: "Storage", value: 30, color: "#F4C45C" },    // Adjusted yellow color to match the image
    ];

    useEffect(() => {
        const chartDom = document.getElementById("cloudFailureChart") as HTMLElement;

        // Check if the chart container exists
        if (chartDom) {
            const myChart = echarts.init(chartDom);

            const option = {
                title: {
                    text: "Cloud Failure",
                    left: "left",  // Left-align the title as per the image
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 'bold',  // Make the title bold to match the image
                    },
                },
                tooltip: {
                    trigger: "item",
                },
                legend: {
                    bottom: "0%",
                    left: "center",
                    itemWidth: 14,
                    itemHeight: 14,
                    textStyle: {
                        fontSize: 12,
                    },
                    data: chartData.map(item => ({
                        name: item.name,
                        icon: "circle",
                    })),
                },
                series: [
                    {
                        name: "Cloud Failure",
                        type: "pie",
                        radius: "70%",
                        avoidLabelOverlap: false,
                        data: chartData.map(item => ({
                            value: item.value,
                            name: item.name,
                            itemStyle: { color: item.color },
                        })),
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
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

            // Set the chart options
            myChart.setOption(option);

            // Cleanup the chart when the component unmounts
            return () => {
                myChart.dispose();
            };
        }
    }, [chartData]);

    return (
        <div className="p-[1vw] bg-white rounded-sm">
            {/* Explicitly define width and height */}
            <div id="cloudFailureChart" style={{ width: '100%', height: '300px' }}></div>
        </div>
    );
};

export default CloudFailureChart;
