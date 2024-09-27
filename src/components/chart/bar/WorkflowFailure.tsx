"use client"
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, BarChart, CanvasRenderer]);

const DynamicWorkflowFailureChart = () => {

    const chartData = {
        title: 'Workflow Failure Overview', // Chart title
        categories: ['Transmission', 'Scheduling', 'Encoding'], // X-axis categories
        yAxisLabel: 'Number of Failures', // Y-axis label
        maxValue: 10, // Maximum value for the Y-axis
        series: [
            { name: 'Transmission', value: 4 },  // Value for Transmission
            { name: 'Scheduling', value: 8 },    // Value for Scheduling
            { name: 'Encoding', value: 6 },      // Value for Encoding
        ],
        colors: ['#f7c843', '#87ceeb', '#90c695'], // Corresponding colors for the bars
    };

    const chartRef = useRef(null)

    useEffect(() => {
        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom);

        const option = {
            title: {
                text: chartData.title || 'Workflow Failure Overview',
                left: 'center',
                top: '5%',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
            },
            legend: {
                bottom: '0%',
                data: chartData.categories,
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '10%',
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                // data: chartData.categories,
                axisTick: {
                    alignWithLabel: true,
                },
            },
            yAxis: {
                type: 'value',
                name: 'Number of Failures',
                nameLocation: 'middle',
                nameGap: 35,
                min: 0,
                max: chartData.maxValue || 10,
            },
            series: chartData.series.map((item, index) => ({
                name: item.name,
                type: 'bar',
                data: [item.value],
                itemStyle: {
                    color: chartData.colors[index],
                },
            })),
        };

        myChart.setOption(option);

        // Clean up on component unmount
        return () => {
            myChart.dispose();
        };
    }, [chartData]); // Update the chart if chartData changes

    return (
        <div
            ref={chartRef}
            style={{ width: '38%', height: '400px', backgroundColor: "white" }} // Adjust height as needed
        />
    );
};

export default DynamicWorkflowFailureChart;
