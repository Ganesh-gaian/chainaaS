"use client"
import React, { useEffect } from "react";
import * as echarts from "echarts";
import useResolution from "@/utils/useResolution";
import { vwToPx } from "@/utils/vwToPx";

interface FailureFrequencyProps {
    FailureFrequency: any
}

const FailureFrequencyChart: React.FC<FailureFrequencyProps> = ({ FailureFrequency }) => {

    if (!FailureFrequency) {
        return
    }

    useResolution();
    const data = FailureFrequency[0]

    useEffect(() => {
        const chartDom = document.getElementById("failureFrequencyChart") as HTMLElement;
        const myChart = echarts.init(chartDom);
        window.addEventListener("resize", () => {
            myChart.resize();
        })

        const option = {
            title: {
                text: "Failure Frequency Timeline",
                left: "left",
                textStyle: {
                    fontSize: vwToPx(1.1111),
                    fontWeight: "bold",
                },
            },
            tooltip: {
                trigger: "item",
            },
            xAxis: {
                type: "category",
                data: data?.months,
                axisLine: {
                    lineStyle: {
                        color: "#445164",
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    fontSize: vwToPx(0.8333),

                },
            },
            yAxis: {
                type: "value",
                name: "Number of Failures",
                nameLocation: "middle",
                nameGap: vwToPx(2.6),
                nameTextStyle: {
                    rotate: 45,
                    fontSize: vwToPx(0.8333),
                },
                axisLabel: {
                    formatter: '{value}',
                    fontSize: vwToPx(0.8333),
                },
                splitLine: {
                    lineStyle: {
                        color: "#F2F2F7",
                        type: "dotted",
                        width: vwToPx(0.06),
                    },
                },
            },
            series: [
                {
                    name: data?.category,
                    data: data?.failures,
                    type: "line",
                    symbol: "circle",
                    symbolSize: 8,
                    lineStyle: {
                        color: "#1976d2",
                    },
                    itemStyle: {
                        color: "#1976d2",
                    },
                },
            ],
            grid: {
                top: "20%",
                bottom: "20%",
                left: "10%",
                right: "10%",
            },
        };

        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, [data]);

    return (
        <div className="h-[42vh] aspect-auto p-[1vw] bg-white rounded-sm">
            <div id="failureFrequencyChart" className="w-full h-full"></div>
        </div>
    );
};

export default FailureFrequencyChart;
