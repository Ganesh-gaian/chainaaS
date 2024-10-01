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
            xAxis: {
                type: 'value',
                name: 'Bandwidth Usage (GB)',
                nameLocation: 'center',
                nameGap: 25,
                min: 0,
                max: 70,
            },
            yAxis: {
                type: 'value',
                name: 'User Engagement Rate (%)',
                nameLocation: 'center',
                nameGap: 50,
                min: 50,
                max: 450,
            },
            series: [
                {
                    name: 'User Engagement',
                    type: 'scatter',
                    symbolSize: 20,
                    data: data.map((d) => [d.bandwidthUsage, d.engagementRate]),
                    itemStyle: {
                        color: (params: any) => data[params.dataIndex].color,
                    },
                },
            ],
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%',
                top: '15%',
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

    return <div ref={chartRef} className="w-full h-64" />;
};

export default UserEngagementChart;
