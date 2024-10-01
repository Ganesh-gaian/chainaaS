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
            xAxis: {
                type: 'category',
                data: data.map((d) => d.month),
                name: 'Months',
                nameLocation: 'center',
                nameGap: 25,
            },
            yAxis: {
                type: 'value',
                name: 'Number of alliances formed',
                nameLocation: 'center',
                nameGap: 50,
            },
            series: [
                {
                    data: data.map((d) => d.alliancesFormed),
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        color: '#3b82f6', // Tailwind's blue-500
                    },
                    itemStyle: {
                        color: '#3b82f6',
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

    return <div ref={chartRef} className="w-full h-64" />;
};

export default AllianceGrowthChart;
