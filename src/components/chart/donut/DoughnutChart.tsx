"use client";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const DoughnutChart = ({
    data = [
        { value: 15, name: "iZak", itemStyle: { color: "#9A9AFF" } },
        { value: 20, name: "Amplyfund", itemStyle: { color: "#94D0FF" } },
        { value: 15, name: "Hear, Here", itemStyle: { color: "#F1AE9D" } },
        { value: 10, name: "C-Links", itemStyle: { color: "#E3E1DE" } },
        { value: 25, name: "Museo", itemStyle: { color: "#FBC96C" } },
        { value: 10, name: "Spectra-Gaurd", itemStyle: { color: "#A6AF88" } },
        { value: 5, name: "Revee", itemStyle: { color: "#CBC3EE" } },
    ],
    showTitle = "",
    isTitle = false,
}) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom);
        const option = {
            legend: {
                show: false,
            },
            title: {
                show: isTitle,
                text: showTitle,
                left: "1%",
                textStyle: {
                    fontFamily: "Manrope",
                },
            },
            series: [
                {
                    name: "Access From",
                    type: "pie",
                    radius: ["50%", "70%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 4,
                        borderColor: "#fff",
                        borderWidth: 1,
                    },
                    label: {
                        show: false,
                        position: "center",
                    },
                    labelLine: {
                        show: false,
                    },
                    data: data,
                },
            ],
        };
        myChart.setOption(option);

        // Cleanup when the component is unmounted
        return () => {
            myChart.dispose();
        };
    }, [data, showTitle, isTitle]);

    return <div className="w-full h-full" ref={chartRef} />;
};

export default DoughnutChart;
