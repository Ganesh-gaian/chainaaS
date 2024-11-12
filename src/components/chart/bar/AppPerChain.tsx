"use client";

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import { GridComponent, LegendComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { vwToPx } from "@/utils/vwToPx";
import useResolution from "@/utils/useResolution";

// Register the necessary components for echarts
echarts.use([GridComponent, LegendComponent, BarChart, CanvasRenderer]);

type CitiesReachData = {
    cities: string[];
    rawData: {
        name: string;
        data: number[];
    }[];
};

interface BarChartComponentProps {
    citiesReachDataLog: CitiesReachData;
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({
    citiesReachDataLog,
}) => {
    if (!citiesReachDataLog) {
        return null;
    }

    const { cities, rawData } = citiesReachDataLog;
    const chartRef = useRef<HTMLDivElement>(null);

    useResolution();

    // Calculate total data for each city
    const totalData = Array(cities.length).fill(0);
    rawData.forEach((series) => {
        series.data.forEach((value, index) => {
            totalData[index] += value;
        });
    });

    const formattedSeries = rawData.map((series) => ({
        name: series.name,
        type: "bar",
        stack: "total",
        barWidth: "50%",
        label: {
            show: false,
        },
        data: series.data.map((value, index) =>
            totalData[index] > 0 ? value / totalData[index] : 0
        ),
    }));

    useEffect(() => {
        if (!cities || !rawData || rawData.length === 0) {
            return;
        }

        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom!);

        // Resize chart on window resize
        window.addEventListener("resize", () => {
            myChart.resize();
        });

        const option = {
            title: {
                text: "App per Chain",
                left: "left",
                top: 10,
                textStyle: {
                    fontSize: vwToPx(1.1111),
                    fontWeight: "bold",
                    color: "rgba(0, 0, 0, 0.85)",
                },
            },
            yAxis: {
                type: "value",
                min: 0,
                max: 1,
                axisLabel: {
                    formatter: (value: number) => `${(value * 100).toFixed(0)}%`,
                    fontSize: "0.8333vw",
                },
                name: "App Percentage",
                nameLocation: "middle",
                nameGap: vwToPx(3.6),
                nameTextStyle: {
                    fontSize: vwToPx(0.8333),
                },
            },
            xAxis: {
                type: "category",
                data: cities,
                axisLabel: {
                    rotate: 0,
                    fontSize: vwToPx(0.8333),
                },
                name: "Chains",
                nameLocation: "middle",
                nameGap: vwToPx(3.2),
                nameTextStyle: {
                    fontSize: vwToPx(0.8333),
                },
            },
            series: formattedSeries,
            color: [
                "#9A9AFF",
                "#94D0FF",
                "#F1AE9D",
                "#E3E1DE",
                "#FBC96C",
                "#A6AF88",
            ],
        };

        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, [cities, rawData, formattedSeries]);

    // Custom legends for the chart
    const legends = [
        { name: "iZak", color: "#9A9AFF" },
        { name: "Amplyfund", color: "#94D0FF" },
        { name: "Hear, Here", color: "#F1AE9D" },
        { name: "C-Link", color: "#E3E1DE" },
        { name: "Museo", color: "#FBC96C" },
        { name: "Spectra-Guard", color: "#A6AF88" },
    ];

    return (
        <div className="h-[60vh] w-full p-[1vw] bg-white rounded-sm">
            {/* Chart */}
            <div ref={chartRef} className="h-[90%] w-full" />

            {/* Custom Legends */}
            <div className="flex justify-center gap-[1vw] mt-[1vw]">
                {legends.map((legend, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-[0.4vw] px-[0.8vw] py-[0.4vw] bg-[#F5F6F7] rounded-md"
                    >
                        <div
                            className="w-[1.2vw] h-[1.2vw] rounded-[20%]"
                            style={{ backgroundColor: legend.color }}
                        ></div>
                        <span className="text-[#242F3E] text-[0.833vw] font-bold">
                            {legend.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BarChartComponent;
