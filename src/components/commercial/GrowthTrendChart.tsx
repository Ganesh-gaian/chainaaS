"use client";
import React, { useEffect } from "react";
import * as echarts from "echarts";
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
                left: "left",
                textStyle: {
                    fontWeight: "bold",
                    fontSize: 16,
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

    // Custom legends below the chart
    const legends = [
        { name: "izak", color: "#ff5722" }, 
        { name: "Hear, Here", color: "#888" },    
        { name: "Amplyfund", color: "#9c27b0" }, 
    ];

    return (
        <div className="p-[1vw] bg-white rounded-sm">
            {/* Chart */}
            <div id="growthChart" className="w-full h-80" />

            {/* Custom Legends */}
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
                        <span className="text-[#242F3E] text-[12px] font-bold">{legend.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GrowthTrendChart;
