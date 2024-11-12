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
interface DataProps {
    data: ChartData[]
}

const DoughnutChart: React.FC<DataProps> = ({ data }) => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const chartDom = chartRef.current!;
        const myChart = echarts.init(chartDom);
        window.addEventListener("resize", () => {
            myChart.resize();
        })
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

        return () => {
            myChart.dispose();
        };
    }, []);

    return <div className="h-full w-[16vw]">
        <div
            ref={chartRef}
            className="h-[100%] w-[100%]"
        />
    </div>
};

export default DoughnutChart;
