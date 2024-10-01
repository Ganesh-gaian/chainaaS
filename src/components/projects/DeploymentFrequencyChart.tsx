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
            },
            yAxis: {
                type: 'value',
                name: 'Number of deployed apps',
                nameLocation: 'center',
                nameGap: 50,
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

    return <div ref={chartRef} className="w-full h-64" />;
};

export default DeploymentFrequencyChart;
