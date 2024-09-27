"use client";
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { GridComponent, LegendComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, LegendComponent, BarChart, CanvasRenderer]);

const BarChartComponent = () => {
    const cities = [
        'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
        'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
        'Austin', 'Jacksonville'
    ];

    const rawData = [
        [85, 90, 80, 70, 75, 60, 65, 78, 72, 83, 88, 91], // Data for "Direct"
        [70, 75, 60, 50, 55, 45, 50, 68, 58, 73, 77, 80], // Data for "Mail Ad"
        [50, 65, 55, 60, 65, 70, 72, 68, 65, 60, 55, 58], // Data for "Affiliate Ad"
        [30, 40, 35, 30, 40, 50, 45, 35, 40, 38, 42, 50], // Data for "Video Ad"
        [40, 45, 42, 35, 30, 38, 50, 48, 52, 55, 57, 60]  // Data for "Search Engine"
    ];

    const seriesNames = ["iZak", "Amplyfund", "Hear, Here", "C-Links", "Museo", "Spectra-Gaurd"]

    const chartRef = useRef(null); // Reference to the chart container

    // Calculate total data for each city
    const totalData = [];
    for (let i = 0; i < rawData[0].length; ++i) {
        let sum = 0;
        for (let j = 0; j < rawData.length; ++j) {
            sum += rawData[j][i];
        }
        totalData.push(sum);
    }

    // Correctly map the series data
    const formattedSeries = seriesNames.map((name, sid) => {
        if (!rawData[sid]) return null; // Ensure rawData[sid] exists before accessing it
        return {
            name,
            type: 'bar',
            stack: 'total',
            barWidth: '50%',
            barGap: '20%', // Adjust the gap between bars from different series
            barCategoryGap: '30%', // Adjust the gap between bars of the same category
            label: {
                show: false,
                formatter: (params) => Math.round(params.value * 1000) / 10 + '%',
            },
            data: rawData[sid].map((d, did) =>
                totalData[did] <= 0 ? 0 : d / totalData[did]
            ),
        };
    }).filter(Boolean); // Filter out any null entries

    useEffect(() => {
        if (!cities || !rawData || rawData.length === 0) {
            return; // Exit if there's no data
        }

        // Initialize the chart
        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom);

        // Chart option configuration using the `formattedSeries` variable
        const option = {
            legend: {
                selectedMode: false,
            },
            grid: {
                left: 100,
                right: 100,
                top: 50,
                bottom: 50,
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 1, // Percentage (0-1)
                axisLabel: {
                    formatter: (value) => value * 100 + '%', // Show percentage
                },
            },
            xAxis: {
                type: 'category',
                data: cities, // City names on x-axis
            },
            series: formattedSeries, // Use the formattedSeries variable here
        };

        // Set the option to the chart
        myChart.setOption(option);

        // Clean up on component unmount
        return () => {
            myChart.dispose();
        };
    }, [cities, rawData, formattedSeries]); // Re-run the effect when cities, rawData, or formattedSeries change

    return (
        <div
            ref={chartRef} // This div will contain the chart
            style={{ width: '100%', height: '500px', backgroundColor: "white" }} // Set chart size
        />
    );
};


export default BarChartComponent;
