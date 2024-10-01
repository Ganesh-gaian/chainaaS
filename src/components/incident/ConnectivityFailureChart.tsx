// components/ConnectivityFailureChart.tsx

import React, { useEffect } from "react";
import * as echarts from "echarts";
import "tailwindcss/tailwind.css";

// Define interface for chart data
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
                left: "center",
                textStyle: {
                    fontSize: 14,
                },
            },
            xAxis: {
                type: "category",
                data: chartData.locations,
                axisLabel: {
                    rotate: 0,
                },
            },
            yAxis: {
                type: "value",
                name: "Number of Failures",
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
                    barWidth: "40%",
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
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div id="connectivityFailureChart" className="w-full h-72"></div>
        </div>
    );
};

export default ConnectivityFailureChart;
