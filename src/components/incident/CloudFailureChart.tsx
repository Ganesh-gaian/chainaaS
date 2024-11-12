"use client"
import React, { useEffect } from "react";
import * as echarts from "echarts";
interface CloudFailureDataProps {
    CloudFailureData: any
}

const CloudFailureChart: React.FC<CloudFailureDataProps> = ({ CloudFailureData }) => {

    if (!CloudFailureData) {
        return
    }

    const chartData = CloudFailureData[0].breakdown

    useEffect(() => {
        const chartDom = document.getElementById("cloudFailureChart") as HTMLElement;

        if (chartDom) {
            const myChart = echarts.init(chartDom);
            window.addEventListener("resize", () => {
                myChart.resize();
            })

            const option = {
                title: {
                    text: "Cloud Failure",
                    left: "left",
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 'bold',
                    },
                },
                tooltip: {
                    trigger: "item",
                },
                legend: {
                    bottom: "0%",
                    left: "center",
                    itemWidth: 14,
                    itemHeight: 14,
                    textStyle: {
                        fontSize: 12,
                    },
                    data: chartData?.map((item: any) => ({
                        name: item.name,
                        icon: "circle",
                    })),
                },
                series: [
                    {
                        name: "Cloud Failure",
                        type: "pie",
                        radius: "70%",
                        avoidLabelOverlap: false,
                        data: chartData?.map((item: any) => ({
                            value: item.value,
                            name: item.name,
                            itemStyle: { color: item.color },
                        })),
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)",
                            },
                        },
                    },
                ],
            };

            // Set the chart options
            myChart.setOption(option);

            return () => {
                myChart.dispose();
            };
        }
    }, [chartData]);

    return (
        <div className=" h-[44vh] aspect-auto p-[1vw] bg-white rounded-sm">
            <div id="cloudFailureChart" style={{ width: '100%', height: '100%' }}></div>
        </div>
    );
};

export default CloudFailureChart;
