import DoughnutChart from "./DoughnutChart";
interface ChartData {
    value: number;
    name: string;
    itemStyle: {
        color: string;
    };
}

const DoughnutChartWithLegends: React.FC = () => {
    // Data is now defined inside this component
    const data: ChartData[] = [
        { value: 15, name: "iZak", itemStyle: { color: "#9A9AFF" } },
        { value: 20, name: "Amplyfund", itemStyle: { color: "#94D0FF" } },
        { value: 15, name: "Hear, Here", itemStyle: { color: "#F1AE9D" } },
        { value: 10, name: "C-Links", itemStyle: { color: "#E3E1DE" } },
        { value: 25, name: "Museo", itemStyle: { color: "#FBC96C" } },
        { value: 10, name: "Spectra-Gaurd", itemStyle: { color: "#A6AF88" } },
        { value: 5, name: "Revee", itemStyle: { color: "#CBC3EE" } },
    ];

    return (
        <div className="bg-white p-[1vw] rounded-sm">
            <p className="font-medium mb-[0.8vw] fs-16">
                App distribution cross chain
            </p>
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                {/* Donut chart component */}
                <DoughnutChart data={data} />

                {/* Legends next to the chart */}
                <div className="flex flex-col gap-[1vw] ">
                    {data.map((d, index) => (
                        <div
                            className="w-fit flex items-center gap-[0.4vw] px-[0.4vw] py-[0.2vw] bg-[#F5F6F7] rounded-md"
                            key={index}
                        >
                            <div
                                className="w-[1.1vw] aspect-square rounded-[0.4vw]"
                                style={{ backgroundColor: d.itemStyle.color }}
                            ></div>
                            <span className="font-bold text-[#242F3E] fs-12">{d.value}%</span>
                            <span className="text-[#242F3E] fs-12">{d.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoughnutChartWithLegends;
