import useResolution from "@/utils/useResolution";
import ChartGenerator from "@/components/Charts/ChartGenerator";
import { vwToPx } from "@/utils/vwToPx";
interface ChartData {
  value: number;
  name: string;
  itemStyle: {
    color: string;
  };
}

const DoughnutChartWithLegends: React.FC = () => {
  const data: ChartData[] = [
    { value: 15, name: "iZak", itemStyle: { color: "#9A9AFF" } },
    { value: 20, name: "Amplyfund", itemStyle: { color: "#94D0FF" } },
    { value: 15, name: "Hear, Here", itemStyle: { color: "#F1AE9D" } },
    { value: 10, name: "C-Links", itemStyle: { color: "#E3E1DE" } },
    { value: 25, name: "Museo", itemStyle: { color: "#FBC96C" } },
    { value: 10, name: "Spectra-Gaurd", itemStyle: { color: "#A6AF88" } },
    { value: 5, name: "Revee", itemStyle: { color: "#CBC3EE" } },
  ];

  const options: echarts.EChartsOption = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "App Distribution",
        type: "pie",
        radius: ["50%", "70%"], //inner and outer radius(inner "hole" and radius of pie chart)
        center: ["35%", "50%"], //horizontal and vertical position of chart
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: vwToPx(0.2778), //border radius for each slice
          borderColor: "#fff",
          borderWidth: vwToPx(0.1389),
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
    legend: {
      orient: "vertical",
      right: "0",
      top: "center",
      itemWidth: vwToPx(1.1),
      itemHeight: vwToPx(1.1),
      itemGap: vwToPx(1.3),
      textStyle: {
        fontSize: vwToPx(0.8333),
        color: "#242F3E",
        padding: [0, 0, 0, vwToPx(0.1)],
      },
    },
  };

  useResolution();

  return (
    <div className="bg-white p-[1vw] rounded-sm">
      <p className="font-medium mb-[0.8vw] ml-[0.5vw] fs-16">
        App distribution cross chain
      </p>
      <div className="h-[40vh]">
        <ChartGenerator options={options} />
      </div>
    </div>
  );
};

export default DoughnutChartWithLegends;
