"use client";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts"; // Import ECharts

const AreaReachChart = () => {
    const chartRef = useRef<HTMLDivElement>(null); // Reference to the chart DOM element

    // Data for Area Reach Over Time
    const areaReachData = {
        xAxisData: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
        ],
        seriesData: [
            {
                name: "Izak",
                data: [100, 120, 140, 110, 150, 180, 130, 160, 140, 180, 190, 200],
            },
            {
                name: "Amplyfund",
                data: [150, 130, 110, 150, 120, 140, 180, 170, 130, 160, 180, 220],
            },
            {
                name: "Museo",
                data: [90, 110, 130, 120, 140, 130, 110, 150, 130, 170, 150, 190],
            },
        ],
    };

    // Options for Area Reach Over Time (line chart)
    const areaReachOptions = {
        title: {
            text: "Area Reach Over Time",
            left: "left",
            textStyle: {
                fontSize: 16,
                fontWeight: "bold",
            },
        },
        tooltip: {
            trigger: "axis",
        },
        legend: {
            data: ["Izak", "Amplyfund", "Museo"],
            bottom: 0, // Position legend at the bottom of the chart
            left: "center", // Center the legend
            itemGap: 20, // Space between items in the legend
        },
        xAxis: {
            type: "category",
            data: areaReachData.xAxisData,
            axisLabel: {
                fontSize: 12,
                color: "#666",
            },
            name: "Months",
            nameLocation: "middle",
            nameGap: 30,
            nameTextStyle: {
                fontSize: 14,
                fontWeight: "bold",
            },
        },
        yAxis: {
            type: "value",
            name: "Area Reach",
            axisLabel: {
                formatter: "{value}m", // Display values in millions with 'm'
                fontSize: 12,
                color: "#666",
            },
            nameLocation: "middle",
            nameGap: 50,
            nameTextStyle: {
                fontSize: 14,
                fontWeight: "bold",
            },
        },
        grid: {
            left: "10%",
            right: "10%",
            top: "15%",
            bottom: "20%", // Ensure there is space for the legend at the bottom
        },
        series: areaReachData.seriesData.map((seriesItem) => ({
            name: seriesItem.name,
            data: seriesItem.data,
            type: "line",
            smooth: true,
            symbolSize: 6, // Symbol size for the data points
            lineStyle: {
                width: 2, // Thicker line width
            },
        })),
        color: ["#ff7f0e", "#1f77b4", "#2ca02c"], // Custom colors for the lines
    };

    useEffect(() => {
        if (chartRef.current) {
            // Initialize the chart instance
            const chartInstance = echarts.init(chartRef.current);

            // Set the chart options
            chartInstance.setOption(areaReachOptions);

            // Clean up the chart instance on component unmount
            return () => {
                chartInstance.dispose();
            };
        }
    }, [areaReachOptions]);

    return (
        <div>
            {/* Chart container */}
            <div ref={chartRef} style={{ height: "400px", width: "100%" }} />
        </div>
    );
};

export default AreaReachChart;
