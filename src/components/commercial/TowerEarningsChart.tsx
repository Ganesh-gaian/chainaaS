import React, { useEffect } from "react";
import * as echarts from "echarts";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

// Define interface for chart data
interface TowerEarningsData {
    cities: string[];
    earnings: number[];
    colors: string[];
}

const TowerEarningsChart: React.FC = () => {
    // Tower earnings data
    const chartData: TowerEarningsData = {
        cities: [
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
        ],
        earnings: [5000, 15000, 12000, 4000, 18000, 10000, 8000, 9000, 6000, 7000],
        colors: [
            "#FFD700", // Orlando - Gold
            "#87CEFA", // Las Vegas - Light Blue
            "#556B2F", // New York City - Olive
            "#9370DB", // Los Angeles - Purple
            "#4169E1", // Chicago - Royal Blue
            "#32CD32", // Miami - Lime Green
            "#A9A9A9", // San Francisco - Gray
            "#8A2BE2", // Washington - Blue Violet
            "#00CED1", // San Diego - Dark Turquoise
            "#FF69B4", // New Orleans - Hot Pink
        ],
    };

    useEffect(() => {
        const chartDom = document.getElementById("towerEarningsChart") as HTMLElement;
        const myChart = echarts.init(chartDom);

        const option = {
            title: {
                text: "Tower-Specific Earnings",
                left: "center",
                textStyle: {
                    fontWeight: "bold",
                    fontSize: 14,
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
                data: chartData.cities,
                axisLabel: {
                    rotate: 45, // Rotates the city names for better readability
                },
            },
            yAxis: {
                type: "value",
                axisLabel: {
                    formatter: "${value}k",
                },
            },
            series: [
                {
                    name: "Earnings",
                    type: "bar",
                    data: chartData.earnings,
                    itemStyle: {
                        color: function (params: any) {
                            return chartData.colors[params.dataIndex];
                        },
                    },
                    label: {
                        show: true,
                        position: "top",
                        formatter: "${@data}k",
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

    // Dropdown menu for additional options
    const menu = (
        <Menu>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
        </Menu>
    );

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Tower-Specific Earnings</h2>
                <Dropdown overlay={menu}>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold" onClick={(e) => e.preventDefault()}>
                        Options <DownOutlined />
                    </a>
                </Dropdown>
            </div>
            <div id="towerEarningsChart" className="w-full h-80" />
        </div>
    );
};

export default TowerEarningsChart;
