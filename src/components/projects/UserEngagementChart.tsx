"use client";
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

// Define the interface for app engagement data
interface AppEngagementData {
    name: string;
    bandwidthUsage: number;
    engagementRate: number;
    color: string;
}

const UserEngagementChart: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    // Data inside the component
    const data: AppEngagementData[] = [
        { name: 'Izak', bandwidthUsage: 10, engagementRate: 100, color: '#CBC3EE' }, // Purple
        { name: 'Amplyfund', bandwidthUsage: 20, engagementRate: 150, color: '#A6AF88' }, // Green
        { name: 'Hear, Here', bandwidthUsage: 30, engagementRate: 250, color: '#94D0FF' }, // Blue
        { name: 'C-Link', bandwidthUsage: 40, engagementRate: 200, color: '#F1AE9D' }, // Red
        { name: 'Museo', bandwidthUsage: 50, engagementRate: 300, color: '#FBC96C' }, // Yellow
        { name: 'Spectra-Guard', bandwidthUsage: 60, engagementRate: 400, color: '#E3E1DE' }, // Gray
    ];

    useEffect(() => {
        const chartDom = chartRef.current!;
        const myChart = echarts.init(chartDom);

        const option: echarts.EChartsOption = {
            title: {
                text: "User Engagement for Live Apps",
                left: "left",
                textStyle: {
                    fontSize: 16,  // Adjust font size to match the image
                    fontWeight: 'bold',
                },
            },
            xAxis: {
                type: 'value',
                name: 'Bandwidth Usage (GB)',
                nameLocation: 'center',
                nameGap: 30, // Adjust gap to match spacing in the image
                min: 0,
                max: 70,
                splitLine: {
                    lineStyle: {
                        color: "#F2F2F7",
                        type: "dotted",
                        width: 1,
                    },
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#D3D3D3',
                    },
                },
            },
            yAxis: {
                type: 'value',
                name: 'User Engagement Rate (%)',
                nameLocation: 'center',
                nameGap: 60, // Adjust gap to match the image
                min: 50,
                max: 450,
                splitLine: {
                    lineStyle: {
                        color: "#F2F2F7",
                        type: "dotted",
                        width: 1,
                    },
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#D3D3D3',
                    },
                },
            },
            series: [
                {
                    name: 'User Engagement',
                    type: 'scatter',
                    symbolSize: 16, // Adjusted to better match the image
                    data: data.map((d) => [d.bandwidthUsage, d.engagementRate]),
                    itemStyle: {
                        color: (params: any) => data[params.dataIndex].color,
                        opacity: 0.8,  // Add slight transparency to match style in the image
                    },
                },
            ],
            grid: {
                left: '10%',
                right: '10%',
                bottom: '35%',  // Significantly increase the bottom margin for more legend space
                top: '15%', // Adjust top margin
            },
            legend: {
                data: data.map((d) => d.name),
                bottom: '5%',  // Place legend lower
                left: 'center',
                itemWidth: 14,
                itemHeight: 14,
                textStyle: {
                    fontSize: 12,
                    color: '#444',
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: (params: any) => {
                    const app = data[params.dataIndex];
                    return `${app.name}<br/>Bandwidth: ${app.bandwidthUsage} GB<br/>Engagement: ${app.engagementRate}%`;
                },
            },
        };

        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, [data]);

    return (
        <div className="p-[1vw] bg-white rounded-sm col-start-2 col-end-4">
            <div ref={chartRef} style={{ width: '100%', height: '350px' }}></div> {/* Increased the height here */}
        </div>
    );
};

export default UserEngagementChart;
