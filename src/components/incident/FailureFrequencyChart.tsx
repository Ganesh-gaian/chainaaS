// components/FailureFrequencyChart.tsx

import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import { Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

// Define the interface for the chart data
interface FailureFrequencyData {
    category: string;
    months: string[];
    failures: number[];
}

const FailureFrequencyChart: React.FC = () => {
    // Define the data inside the component
    const data: { [key: string]: FailureFrequencyData } = {
        Application: {
            category: "Application",
            months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
            failures: [4, 8, 6, 9, 3, 7],
        },
        Tower: {
            category: "Tower",
            months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
            failures: [5, 6, 7, 11, 0, 8],
        },
        Spectrum: {
            category: "Spectrum",
            months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
            failures: [2, 9, 6, 10, 1, 4],
        },
        Exciter: {
            category: "Exciter",
            months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
            failures: [6, 5, 9, 12, 3, 5],
        },
    };

    // State to manage the current category of data being displayed
    const [selectedCategory, setSelectedCategory] = useState("Application");

    // Handle category change when the user selects a new category from the dropdown
    const handleMenuClick = (e: any) => {
        setSelectedCategory(e.key);
    };

    useEffect(() => {
        const chartDom = document.getElementById("failureFrequencyChart") as HTMLElement;
        const myChart = echarts.init(chartDom);

        const option = {
            title: {
                text: "Failure Frequency Timeline",
                left: "center",
                textStyle: {
                    fontSize: 14,
                },
            },
            tooltip: {
                trigger: "axis",
            },
            xAxis: {
                type: "category",
                data: data[selectedCategory].months,
            },
            yAxis: {
                type: "value",
                name: "Number of Failures",
            },
            series: [
                {
                    name: data[selectedCategory].category,
                    data: data[selectedCategory].failures,
                    type: "line",
                    smooth: true,
                    lineStyle: {
                        color: "#1976d2", // Blue line
                    },
                    itemStyle: {
                        color: "#1976d2", // Blue points
                    },
                    label: {
                        show: true,
                        position: "top",
                        formatter: "{c}",
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
    }, [selectedCategory, data]);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Failure Frequency Timeline</h2>
            </div>
            <div id="failureFrequencyChart" className="w-full h-72"></div>
        </div>
    );
};

export default FailureFrequencyChart;
