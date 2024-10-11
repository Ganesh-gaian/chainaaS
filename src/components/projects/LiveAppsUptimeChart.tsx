"use client";
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

// Define the interface for live apps uptime data
interface AppUptimeData {
    name: string;
    uptime: number[];
    color: string;
}

const LiveAppsUptimeChart: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    // Data inside the component
    const data: AppUptimeData[] = [
        { name: 'Izak', uptime: [40, 60, 80, 70, 90, 50, 60, 40, 70, 80, 60, 90], color: '#F87171' }, // Tailwind's red-400
        { name: 'Amplyfund', uptime: [20, 30, 40, 80, 60, 70, 90, 50, 60, 40, 90, 100], color: '#34D399' }, // Tailwind's green-400
        { name: 'Museo', uptime: [10, 20, 30, 50, 60, 50, 60, 50, 50, 60, 70, 80], color: '#60A5FA' }, // Tailwind's blue-400
    ];

    useEffect(() => {
        const chartDom = chartRef.current!;
        const myChart = echarts.init(chartDom);

        const option: echarts.EChartsOption = {
            xAxis: {
                type: 'category',
                name: 'Months',
                nameLocation: 'center',
                nameGap: 25,
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            },
            yAxis: {
                type: 'value',
                name: 'Count',
                nameLocation: 'center',
                nameGap: 50,
                min: 0,
                max: 100,
            },
            series: data.map((app) => ({
                name: app.name,
                type: 'line',
                data: app.uptime,
                smooth: true,
                lineStyle: {
                    color: app.color,
                },
                itemStyle: {
                    color: app.color,
                },
            })),
            legend: {
                data: data.map((app) => app.name),
                bottom: 0,
            },
            tooltip: {
                trigger: 'axis',
                formatter: (params: any) => {
                    const monthIndex = params[0].axisValueIndex;
                    return `
            <strong>${params[0].name}</strong><br/>
            ${data.map((app) => `${app.name}: ${app.uptime[monthIndex]}%`).join('<br/>')}
          `;
                },
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '25%',
                top: '15%',
            },
        };

        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, [data]);
    return (
        <div className="p-[1vw] bg-white rounded-sm">
            <h2 className="text-lg font-semibold mb-[0.4vw]">Live Apps Uptime</h2>
            <div ref={chartRef} className="w-full h-72"></div>
        </div>
    )
};

export default LiveAppsUptimeChart;
