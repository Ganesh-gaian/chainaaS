"use client"
import React, { useEffect } from "react";
import * as echarts from "echarts";

interface TowerEarningsData {
    city: string;
    earning: number;
    color: string;
}

const TowerEarningsChart: React.FC = () => {
    // Restructured tower earnings data
    const chartData: TowerEarningsData[] = [
        { city: "Orlando", earning: 5000, color: "#FFD700" }, // Gold
        { city: "Las Vegas", earning: 15000, color: "#87CEFA" }, // Light Blue
        { city: "New York City", earning: 12000, color: "#556B2F" }, // Olive
        { city: "Los Angeles", earning: 4000, color: "#9370DB" }, // Purple
        { city: "Chicago", earning: 18000, color: "#4169E1" }, // Royal Blue
        { city: "Miami", earning: 10000, color: "#32CD32" }, // Lime Green
        { city: "San Francisco", earning: 8000, color: "#A9A9A9" }, // Gray
        { city: "Washington", earning: 9000, color: "#8A2BE2" }, // Blue Violet
        { city: "San Diego", earning: 6000, color: "#00CED1" }, // Dark Turquoise
        { city: "New Orleans", earning: 7000, color: "#FF69B4" }, // Hot Pink
    ];

    useEffect(() => {
        const chartDom = document.getElementById("towerEarningsChart") as HTMLElement;
        const myChart = echarts.init(chartDom);

        const option = {
            title: {
                text: "Tower-Specific Earnings",
                left: "left",
                textStyle: {
                    fontWeight: "bold",
                    fontSize: 16,
                },
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
            },
            xAxis: {
                type: "category",
                data: chartData.map((data) => data.city),
                axisLabel: {
                    show: true,
                    interval: 0,
                    formatter: function (value: string) {
                        // Add a small circle before the city name with the corresponding bar color
                        const index = chartData.findIndex((item) => item.city === value);
                        const color = chartData[index].color;
                        return `{circle|●} {cityLabel|${value}}`; // Circle and city name
                    },
                    rich: {
                        circle: {
                            fontSize: 16, // Size of the circle
                            color: function (value: any) {
                                const city = value?.replace("{circle|●}", "").trim();
                                const foundCity = chartData.find((item) => item.city === city);
                                return foundCity ? foundCity.color : "#000";
                            },
                        },
                        cityLabel: {
                            color: '#000', // City name color
                            padding: [3, 0, 0, 4], // Padding to adjust alignment
                        },
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#000', // X-axis line color
                    },
                },
            },
            yAxis: {
                type: "value",
                axisLabel: {
                    formatter: "${value}k",
                },
                splitLine: {
                    lineStyle: {
                        color: "#F2F2F7",
                        type: "dotted",
                        width: 1,
                    },
                },
            },
            series: [
                {
                    name: "Earnings",
                    type: "bar",
                    data: chartData.map((data) => data.earning),
                    itemStyle: {
                        color: function (params: any) {
                            return chartData[params.dataIndex].color;
                        },
                    },
                },
            ],
        };

        // Set the options
        myChart.setOption(option);

        // Cleanup on component unmount
        return () => {
            myChart.dispose();
        };
    }, [chartData]);

    return (
        <div className="h-[60vh] p-[1vw] bg-white rounded-sm">
            <div id="towerEarningsChart" className="w-full h-full " />
        </div>
    );
};

export default TowerEarningsChart;
