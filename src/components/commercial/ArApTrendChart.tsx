"use client";
import React, { useEffect } from "react";
import * as echarts from "echarts";
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
                left: "left",
                textStyle: {
                    fontWeight: "bold",
                    fontSize: 16,
                },
            },
            tooltip: {
                trigger: "axis",
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

    // Custom legends below the chart
    const legends = [
        { name: "Pending", color: "#ff5722" },
        { name: "Total Billed", color: "#1976d2" },
        { name: "Received payment", color: "#4caf50" },
    ];

    return (
        <div className="p-[1vw] bg-white rounded-sm">
            {/* Chart */}
            <div id="arApChart" className="w-full h-80" />

            {/* Legends */}
            <div className="flex justify-center gap-[1vw]">
                {legends.map((legend, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-[0.4vw] px-[0.8vw] py-[0.4vw] bg-[#F5F6F7] rounded-md"
                    >
                        <div
                            className="w-[1.2vw] h-[1.2vw] rounded-[20%]"
                            style={{ backgroundColor: legend.color }}
                        ></div>
                        <span className="text-[#242F3E] fs-12 font-bold">{legend.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArApTrendChart;
