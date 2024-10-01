"use client";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface ChartData {
    value: number;
    name: string;
    itemStyle: {
        color: string;
    };
}

const DoughnutChart: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    // Define the data within the component from API
    const data: ChartData[] = [
        { value: 15, name: "iZak", itemStyle: { color: "#9A9AFF" } },
        { value: 20, name: "Amplyfund", itemStyle: { color: "#94D0FF" } },
        { value: 15, name: "Hear, Here", itemStyle: { color: "#F1AE9D" } },
        { value: 10, name: "C-Links", itemStyle: { color: "#E3E1DE" } },
        { value: 25, name: "Museo", itemStyle: { color: "#FBC96C" } },
        { value: 10, name: "Spectra-Gaurd", itemStyle: { color: "#A6AF88" } },
        { value: 5, name: "Revee", itemStyle: { color: "#CBC3EE" } },
    ];

    useEffect(() => {
        const chartDom = chartRef.current!;
        const myChart = echarts.init(chartDom);
        const option: echarts.EChartsOption = {
            legend: {
                show: false,
            },
            title: {
                show: true,
                text: "",
                left: "center",
                textStyle: {
                    fontFamily: "Manrope",
                    fontSize: 14,
                },
            },
            series: [
                {
                    name: "App Distribution",
                    type: "pie",
                    radius: ["50%", "70%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 6,
                        borderColor: "#fff",
                        borderWidth: 2,
                    },
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    data: data,
                },
            ],
        };
        myChart.setOption(option);

        // Cleanup on unmount
        return () => {
            myChart.dispose();
        };
    }, []);

    return <div className="w-[200px] h-[200px]" ref={chartRef} />;
};

export default DoughnutChart;
