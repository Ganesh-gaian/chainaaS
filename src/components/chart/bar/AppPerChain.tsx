"use client";

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import { GridComponent, LegendComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

// Register the necessary components for echarts
echarts.use([GridComponent, LegendComponent, BarChart, CanvasRenderer]);

const BarChartComponent: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    // Data is now inside the component itself
    const cities = [
        "Orlando",
        "Las Vegas",
        "New York City",
        "Los Angeles",
        "Chicago",
        "Miami",
        "San Francisco",
        "Washington",
        "San Diego",
        "New Orleans",
        "Seattle",
        "Boston",
    ];

    const rawData = [
        [85, 90, 80, 70, 75, 60, 65, 78, 72, 83, 88, 91], // Data for "iZak"
        [70, 75, 60, 50, 55, 45, 50, 68, 58, 73, 77, 80], // Data for "Amplyfund"
        [50, 65, 55, 60, 65, 70, 72, 68, 65, 60, 55, 58], // Data for "Hear, Here"
        [30, 40, 35, 30, 40, 50, 45, 35, 40, 38, 42, 50], // Data for "C-Link"
        [40, 45, 42, 35, 30, 38, 50, 48, 52, 55, 57, 60], // Data for "Museo"
        [20, 25, 35, 40, 45, 55, 60, 50, 55, 48, 40, 35], // Data for "Spectra-Guard"
    ];

    const seriesNames = [
        "iZak",
        "Amplyfund",
        "Hear, Here",
        "C-Link",
        "Museo",
        "Spectra-Guard",
    ];

    // Calculate total data for each city
    const totalData = rawData[0].map((_, i) => {
        return rawData.reduce((sum, row) => sum + row[i], 0);
    });

    // Format the series for the chart
    const formattedSeries = seriesNames
        .map((name, sid) => {
            if (!rawData[sid]) return null;
            return {
                name,
                type: "bar",
                stack: "total",
                barWidth: "50%",
                label: {
                    show: false,
                },
                data: rawData[sid].map((d, did) =>
                    totalData[did] <= 0 ? 0 : d / totalData[did]
                ),
            };
        })
        .filter(Boolean);

    // Initialize the chart with the data
    useEffect(() => {
        if (!cities || !rawData || rawData.length === 0) {
            return;
        }

        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom!);

        const option = {
            title: {
                text: "App per chain",
                left: "left",
                top: 10,
            },
            legend: {
                bottom: 10,
                left: "center",
                itemGap: 20,
                textStyle: {
                    fontSize: 12,
                },
            },
            grid: {
                left: "10%",
                right: "10%",
                top: 70,
                bottom: 100, // Adjust for legend spacing
            },
            yAxis: {
                type: "value",
                min: 0,
                max: 1,
                axisLabel: {
                    formatter: (value: number) => `${value * 100}%`,
                },
                name: "App percentage", // Label for y-axis
                nameLocation: "middle",
                nameGap: 50,
            },
            xAxis: {
                type: "category",
                data: cities,
                axisLabel: {
                    rotate: 0, // No rotation for city labels
                },
                name: "Chains", // Label for x-axis
                nameLocation: "middle",
                nameGap: 30,
            },
            series: formattedSeries,
            color: [
                "#9467bd", // Color for "iZak"
                "#2ca02c", // Color for "Amplyfund"
                "#1f77b4", // Color for "Hear, Here"
                "#d62728", // Color for "C-Link"
                "#ff7f0e", // Color for "Museo"
                "#c7c7c7", // Color for "Spectra-Guard"
            ],
        };

        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, [cities, rawData, formattedSeries]);

    return (
        <div className="w-full p-[1vw] bg-white">
            <div
                ref={chartRef}
                className="h-[500px] w-full rounded-sm"
            />
        </div>
    );
};

export default BarChartComponent;
