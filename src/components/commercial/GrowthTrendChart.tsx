// components/GrowthTrendChart.tsx

import React, { useEffect } from "react";
import * as echarts from "echarts";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";

// Define interface for chart data
interface GrowthTrendData {
    months: string[];
    line1: number[];
    line2: number[];
    line3: number[];
}

const GrowthTrendChart: React.FC = () => {
    // Chart data
    const chartData: GrowthTrendData = {
        months: ["Jan", "Feb", "Mar"],
        line1: [100, 400, 900],
        line2: [50, 300, 700],
        line3: [120, 220, 330],
    };

    useEffect(() => {
        const chartDom = document.getElementById("growthChart") as HTMLElement;
        const myChart = echarts.init(chartDom);

        const option = {
            title: {
                text: "Growth trend",
                left: "center",
                textStyle: {
                    fontWeight: "bold",
                    fontSize: 14,
                },
            },
            xAxis: {
                type: "category",
                data: chartData.months,
            },
            yAxis: {
                type: "value",
                axisLabel: {
                    formatter: "${value}M",
                },
            },
            series: [
                {
                    name: "Line 1",
                    data: chartData.line1,
                    type: "line",
                    smooth: true,
                    lineStyle: {
                        color: "#ff5722", // Red Line
                    },
                },
                {
                    name: "Line 2",
                    data: chartData.line2,
                    type: "line",
                    smooth: true,
                    lineStyle: {
                        color: "#888", // Gray dashed line
                        type: "dashed",
                    },
                },
                {
                    name: "Line 3",
                    data: chartData.line3,
                    type: "line",
                    smooth: true,
                    lineStyle: {
                        color: "#9c27b0", // Purple Line
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

    // Dropdown menu for the chart type or any other action
    const menu = (
        <Menu>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
        </Menu>
    );

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Growth Trend</h2>
                <Dropdown overlay={menu}>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold" onClick={(e) => e.preventDefault()}>
                        Options <DownOutlined />
                    </a>
                </Dropdown>
            </div>
            <div id="growthChart" className="w-full h-72" />
        </div>
    );
};

export default GrowthTrendChart;
