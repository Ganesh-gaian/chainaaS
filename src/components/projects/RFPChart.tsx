"use client";
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

// Define the interface for RFP status data
interface RFPStatusData {
    value: number;
    name: string;
    itemStyle: { color: string };
}

const RFPChart: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    // Data inside the component
    const data: RFPStatusData[] = [
        { value: 60, name: 'Accepted', itemStyle: { color: '#93c5fd' } }, // Tailwind's blue-300
        { value: 30, name: 'Pending', itemStyle: { color: '#fcd34d' } }, // Tailwind's yellow-300
        { value: 10, name: 'Declined', itemStyle: { color: '#fda4af' } }, // Tailwind's red-300
    ];

    useEffect(() => {
        const chartDom = chartRef.current!;
        const myChart = echarts.init(chartDom);

        const option: echarts.EChartsOption = {
            tooltip: {
                trigger: 'item',
            },
            legend: {
                orient: 'horizontal',
                bottom: 10,
                data: data.map((d) => d.name),
            },
            series: [
                {
                    name: 'RFP Status',
                    type: 'pie',
                    radius: '50%',
                    data: data,
                    label: {
                        formatter: '{d}%',
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
            ],
        };

        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, [data]);

    return <div ref={chartRef} className="w-full h-64" />;
};

export default RFPChart;
