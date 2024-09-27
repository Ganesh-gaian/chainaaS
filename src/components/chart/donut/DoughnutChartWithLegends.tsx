"use client";
import DoughnutChart from "./DoughnutChart";

const DoughnutChartWithLegends = ({
    title = "",
    data = [
        { value: 15, name: "iZak", itemStyle: { color: "#9A9AFF" } },
        { value: 20, name: "Amplyfund", itemStyle: { color: "#94D0FF" } },
        { value: 15, name: "Hear, Here", itemStyle: { color: "#F1AE9D" } },
        { value: 10, name: "C-Links", itemStyle: { color: "#E3E1DE" } },
        { value: 25, name: "Museo", itemStyle: { color: "#FBC96C" } },
        { value: 10, name: "Spectra-Gaurd", itemStyle: { color: "#A6AF88" } },
        { value: 5, name: "Revee", itemStyle: { color: "#CBC3EE" } },
    ],
    showTitle = "App distribution cross chain",
    isTitle = true,
}) => {
    return (
        <div className="w-[28vw] bg-white p-[1.2vw]">
            <p className="text-gray-900 font-semibold text-lg pb-4">
                {title}
            </p>
            <div className="grid grid-cols-[250px_auto] items-center h-full justify-start">
                <DoughnutChart data={data} showTitle={showTitle} isTitle={isTitle} />
                <div className="flex flex-col items-start justify-center gap-3">
                    {data.map((d, index) => (
                        <div
                            className="flex items-center gap-2 p-1 bg-gray-200 rounded"
                            key={index}
                        >
                            <div
                                className="w-3 h-3 rounded-sm"
                                style={{ background: d.itemStyle.color }}
                            ></div>
                            <span className="font-bold">{d.value}%</span>
                            <span className="font-light">{d.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoughnutChartWithLegends;
