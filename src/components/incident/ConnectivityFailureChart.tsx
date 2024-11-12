"use client"
import React, { useEffect } from "react";
import * as echarts from "echarts";

interface ConnectivityFailureDataProps {
    ConnectivityFailureData: any
}

const ConnectivityFailureChart: React.FC<ConnectivityFailureDataProps> = ({ ConnectivityFailureData }) => {

    if (!ConnectivityFailureData) {
        return
    }

    const chartData = ConnectivityFailureData[0]

    useEffect(() => {
        const chartDom = document.getElementById("connectivityFailureChart") as HTMLElement;
        const myChart = echarts.init(chartDom);
        window.addEventListener("resize", () => {
            myChart.resize()
        })

        const option = {
            title: {
                text: "Connectivity failure",
                left: "left",
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'bold',
                },
            },
            xAxis: {
                type: "category",
                data: chartData.locations,
                axisLabel: {
                    rotate: 0,
                    fontSize: 12,
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
            },
            yAxis: {
                type: "value",
                name: "Number of Failures",
                nameLocation: 'middle',
                nameGap: 36,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    fontSize: 12,
                    formatter: (value: number) => {
                        return value < 10 ? `0${value}` : value.toString();
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "#F2F2F7",
                        type: "dotted",
                        width: 1,
                    },
                },
            },
            grid: {
                top: '15%',
                left: '5%',
                right: '5%',
                bottom: '15%',
                containLabel: true,
            },
            series: [
                {
                    data: chartData.failures.map((value: any, index: number) => ({
                        value,
                        itemStyle: {
                            color: chartData.colors[index],
                        },
                    })),
                    type: "bar",
                    barWidth: "40%",
                    label: {
                        show: false,
                    },
                },
            ],
        };

        // Set the chart options
        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, [chartData]);

    return (
        <div className="h-[44vh] aspect-auto p-[1vw] bg-white rounded-sm col-start-2 col-end-4">
            <div id="connectivityFailureChart" style={{ width: '100%', height: '100%' }}></div>
        </div>
    );
};

export default ConnectivityFailureChart;
