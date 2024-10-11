"use client"
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, BarChart, CanvasRenderer]);

const AppReachChart = () => {

    const chartData = {
        title: 'App reach',
        apps: ['Izak', 'Museo', 'Amplyfund', 'Hear, Here', 'C-link', 'Revee'],
        reach: [120, 100, 190, 80, 100, 120], // Values in billions as seen in the image
        yAxisLabel: 'No. of devices in billion',
        maxValue: 200, // Maximum value for the y-axis based on the image
    };

    const chartRef = useRef(null);

    useEffect(() => {
        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom);

        const option = {
            title: {
                text: chartData.title || 'App reach',
                left: 'left',
                top: '5%',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '10%',
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                data: chartData.apps || ['Izak', 'Museo', 'Amplyfund', 'Hear, Here', 'C-link', 'Revee'],
                axisLabel: {
                    interval: 0,
                },
                axisTick: {
                    alignWithLabel: true,
                },
            },
            yAxis: {
                type: 'value',
                name: chartData.yAxisLabel || 'No. of devices in billion',
                nameLocation: 'middle',
                nameGap: 50,
                min: 0,
                max: chartData.maxValue || 200,
                axisLabel: {
                    formatter: '{value}',
                },
            },
            series: [
                {
                    name: 'App reach',
                    type: 'bar',
                    data: chartData.reach || [120, 100, 190, 80, 100, 120], // Default values based on the image
                    itemStyle: {
                        color: '#87ceeb', // Light blue color matching the image
                        opacity: 0.8,
                    },
                    barWidth: '60%', // Adjust the bar width
                },
            ],
        };

        myChart.setOption(option);

        // Clean up on component unmount
        return () => {
            myChart.dispose();
        };
    }, [chartData]);

    return (
        <div
            ref={chartRef}
            style={{ width: '40%', height: '400px', backgroundColor: "white" }} // Adjust height as needed
        />
    );
};

export default AppReachChart;
