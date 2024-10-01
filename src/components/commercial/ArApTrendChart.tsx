// components/ArApTrendChart.tsx

import React, { useEffect } from "react";
import * as echarts from "echarts";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";

// Define interface for chart data
interface ArApData {
    months: string[];
    pending: number[];
    totalBilled: number[];
    receivedPayment: number[];
}

const ArApTrendChart: React.FC = () => {
    // Chart data
    const chartData: ArApData = {
        months: ["Jan", "Feb", "Mar", "Apr", "May"],
        pending: [300, 500, 400, 600, 400],
        totalBilled: [100, 400, 300, 200, 500],
        receivedPayment: [200, 100, 500, 300, 700],
    };

    useEffect(() => {
        const chartDom = document.getElementById("arApChart") as HTMLElement;
        const myChart = echarts.init(chartDom);

        const option = {
            title: {
                text: "Accounts Receivable/Accounts Payable (AR/AP) Trend",
                left: "center",
                textStyle: {
                    fontWeight: "bold",
                    fontSize: 14,
                },
            },
            tooltip: {
                trigger: "axis",
            },
            legend: {
                bottom: "0",
                data: ["Pending", "Total Billed", "Received payment"],
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
                    name: "Pending",
                    data: chartData.pending,
                    type: "line",
                    lineStyle: {
                        color: "#ff5722", // Red Line
                    },
                },
                {
                    name: "Total Billed",
                    data: chartData.totalBilled,
                    type: "line",
                    lineStyle: {
                        color: "#1976d2", // Blue Line
                    },
                },
                {
                    name: "Received payment",
                    data: chartData.receivedPayment,
                    type: "line",
                    lineStyle: {
                        color: "#4caf50", // Green Line
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

    // Dropdown menu for any additional actions
    const menu = (
        <Menu>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
        </Menu>
    );

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">AR/AP Trend</h2>
                <Dropdown overlay={menu}>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold" onClick={(e) => e.preventDefault()}>
                        Options <DownOutlined />
                    </a>
                </Dropdown>
            </div>
            <div id="arApChart" className="w-full h-80" />
        </div>
    );
};

export default ArApTrendChart;
