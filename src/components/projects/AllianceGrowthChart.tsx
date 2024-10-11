"use client";
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

// Define the interface for data points
interface AllianceGrowthData {
    month: string;
    alliancesFormed: number;
}

const AllianceGrowthChart: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    // Data inside the component
    const data: AllianceGrowthData[] = [
        { month: 'Jan', alliancesFormed: 5 },
        { month: 'Feb', alliancesFormed: 7 },
        { month: 'Mar', alliancesFormed: 6 },
        { month: 'Apr', alliancesFormed: 8 },
        { month: 'May', alliancesFormed: 5 },
        { month: 'Jun', alliancesFormed: 10 },
        { month: 'Jul', alliancesFormed: 12 },
        { month: 'Aug', alliancesFormed: 3 },
        { month: 'Sep', alliancesFormed: 7 },
        { month: 'Oct', alliancesFormed: 5 },
    ];

    useEffect(() => {
        const chartDom = chartRef.current!;
        const myChart = echarts.init(chartDom);

        const option: echarts.EChartsOption = {
            title: {
                text: "Alliance Growth Over Time",
                left: "left",
                textStyle: {
                    fontSize: 16,
                    fontWeight: 'bold',
                },
            },
            tooltip: {
                trigger: "item",
            },
            xAxis: {
                type: 'category',
                data: data.map((d) => d.month),
                name: 'Months',
                nameLocation: "center",
                nameGap: 40,
                axisLine: {
                    lineStyle: {
                        color: "#C7C7CC",
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    fontSize: 12,

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
                    data: data.map((d) => d.alliancesFormed),
                    type: 'line',
                    symbol: "circle", // Points on each data value
                    symbolSize: 8, // Match point size in the image
                    lineStyle: {
                        color: "#1976d2", // Blue line
                    },
                    itemStyle: {
                        color: "#1976d2", // Blue points
                    },
                },
            ],
            grid: {
                top: "20%",
                bottom: "20%",
                left: "10%",
                right: "10%",
            },
        };

        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, [data]);

    return (
        <div className="h-[50vh] aspect-auto p-[1vw] bg-white rounded-sm">
            <div ref={chartRef} className="w-full h-full"></div>
        </div>
    )
};

export default AllianceGrowthChart;
