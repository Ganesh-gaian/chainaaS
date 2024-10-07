"use client";
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

// Define the interface for data points
interface DeploymentFrequencyData {
    month: string;
    deployments: number;
}

const DeploymentFrequencyChart: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    // Data inside the component
    const data: DeploymentFrequencyData[] = [
        { month: 'Jan', deployments: 30 },
        { month: 'Feb', deployments: 60 },
        { month: 'Mar', deployments: 75 },
        { month: 'Apr', deployments: 80 },
        { month: 'May', deployments: 95 },
        { month: 'Jun', deployments: 100 },
        { month: 'Jul', deployments: 110 },
        { month: 'Aug', deployments: 105 },
        { month: 'Sep', deployments: 85 },
    ];

    useEffect(() => {
        const chartDom = chartRef.current!;
        const myChart = echarts.init(chartDom);

        const option: echarts.EChartsOption = {

            xAxis: {
                type: 'category',
                data: data.map((d) => d.month),
                name: 'Months',
                nameLocation: 'center',
                nameGap: 25,
                axisLabel: {
                    interval: 0,
                    rotate: 0,  // No label rotation
                },
                axisTick: {
                    show: false,  // Hide the ticks to match the clean look
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#C7C7CC",  // Light gray axis line like in the image
                    },
                },
            },
            yAxis: {
                type: "value",
                name: "Number of deployed apps",
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
                    data: data.map((d) => d.deployments),
                    type: 'bar',
                    itemStyle: {
                        color: '#10b981', // Tailwind's green-500
                    },
                },
            ],
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%',
                top: '15%',
            },
        };

        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, [data]);

    return (
        <div className="h-[50vh] aspect-auto p-[1vw] bg-white rounded-sm">
            <h2 className="text-base font-medium mb-[0.4vw]">Incident Resolution Time per month</h2>
            <div className="text-[12px]">
                2,458
                <span className="text-red-500 text-[12px]">
                    ▲ 4.8%
                </span>
            </div>
            <div ref={chartRef} className="w-full h-60"></div>
        </div>
    )
};

export default DeploymentFrequencyChart;
