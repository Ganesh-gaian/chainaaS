"use client";

import React, { useState, useRef, useEffect, memo } from "react";
import Image from "next/image";
import { Popup, Polygon } from "react-leaflet";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import userIcon from "../../../public/svgs/utilis/User.svg";
import calenderIcon from "../../../public/svgs/utilis/Calendar.svg";
import { vwToPx } from "@/utils/vwToPx";
import { useSelector } from "react-redux";

am4core.useTheme(am4themes_animated);

interface AppUsageDataset {
  data: number[];
  backgroundColor: string[];
}

interface AppUsage {
  labels: string[];
  datasets: AppUsageDataset[];
}

interface State {
  appUsage: AppUsage;
  details: {
    startDate: string;
  };
}

interface MarkerWithPieChartProps {
  position: [number, number];
  state: State;
  polygonCoords: [number, number][];
  mapRef: React.RefObject<L.Map>;
  zoomLevel: number;
}

am4core.useTheme(am4themes_animated);

const MarkerWithPieChart: React.FC<MarkerWithPieChartProps> = ({
  position,
  state,
  polygonCoords,
  mapRef,
  zoomLevel,
}) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInstance = useRef<am4charts.PieChart3D | null>(null);
  const [showMetaData, setShowMetaData] = useState(false);
  const toggleMetaData = () => {
    setShowMetaData((prev) => !prev);
  };

  const initializeChart = () => {
    if (chartInstance.current) {
      chartInstance.current.dispose();
    }

    chartInstance.current = am4core.create(
      chartRef.current!,
      am4charts.PieChart3D
    );

    if (chartInstance.current.logo) {
      chartInstance.current.logo.disabled = true;
    }

    chartInstance.current.radius = am4core.percent(85);

    chartInstance.current.data = state.appUsage.labels.map((label, index) => ({
      category: label,
      value: state.appUsage.datasets[0].data[index],
      color: state.appUsage.datasets[0].backgroundColor[index],
    }));

    let series = chartInstance.current.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "value";
    series.dataFields.category = "category";
    series.slices.template.propertyFields.fill = "color";

    // series.labels.template.disabled = true;
    series.ticks.template.disabled = true;

    series.alignLabels = false;
    series.labels.template.text =
      "{category}\n{value.percent.formatNumber('#.0')}%";
    series.labels.template.textAlign = "middle";
    series.labels.template.verticalCenter = "middle";
    series.labels.template.fill = am4core.color("#ffffff");
    series.labels.template.fontSize = vwToPx(0.65);
    series.labels.template.radius = am4core.percent(-65);
    series.labels.template.relativeRotation = 90;

    series.slices.template.events.on("hit", () => {
      toggleMetaData();
    });
  };

  const labelColorMap = state.appUsage.labels.map((label, index) => ({
    label: label,
    color: state.appUsage.datasets[0].backgroundColor[index],
  }));

  const selectedchain = useSelector((state: any) => state.chains.selectedChain);

  useEffect(() => {
    if (Object.keys(selectedchain).length > 0) {
      if (mapRef.current && chartRef.current) {
        initializeChart();
      }
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.dispose();
        chartInstance.current = null;
      }
    };
  }, [selectedchain]);

  return (
    <>
      {zoomLevel >= 13 && (
        <Polygon
          positions={polygonCoords}
          color="#BFBFBF"
          fillColor="#BFBFBF"
          fillOpacity={0.3}
          weight={2}
          dashArray="4 4"
        />
      )}
      <Popup
        position={[selectedchain.latitude, selectedchain.longitude]}
        className="w-[43vw] h-[40vh]"
        closeButton={false}
        autoClose={false}
        closeOnClick={false}
      >
        <div
          className={`w-[100%] h-[100%] relative flex items-start box-border p-4  ${
            showMetaData ? "bg-white" : ""
          }`}
        >
          <div className={`${showMetaData ? "w-[50%]" : "w-[100%]"} h-[100%]`}>
            {showMetaData && (
              <div className="">
                <ul className="w-[16vw] grid grid-cols-2 whitespace-nowrap list-disc">
                  {labelColorMap.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span
                        className="mr-2 w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></span>
                      <span className="text-black">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div
              ref={chartRef}
              style={{ width: "100%", height: "100%" }}
              key={`chart-${position.join("-")}`}
            />
          </div>
          {showMetaData && (
            <div className="w-[50%] h-full flex ml-4 max-w-[20vw] overflow-y-auto no-scrollbar">
              <div className=" ">
                <div>
                  <div className="font-bold ">Tower Details</div>
                  <div className="flex gap-[0.22vw]">
                    <strong>ID:</strong>12XDe45P
                  </div>
                </div>
                <div className="*:flex *:gap-[0.7vw] my-[1vh]">
                  <div className="mb-[0.4vw]">
                    <Image src={userIcon} alt="userIcon" />
                    <div>
                      <span>Tower Owner:</span> ARK
                    </div>
                  </div>
                  <div>
                    <Image src={calenderIcon} alt="calenderIcon" />
                    <div>
                      <span>Tenanacy Start Date:</span> September 02,2024
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t">
                  <div className="whitespace-normal text-[10px] leading-tight">
                    <p className="truncate">
                      <strong>Signal Strength:</strong> -70 dBm
                    </p>
                    <p className="truncate">
                      <strong>Latitude:</strong> {position[0]}
                    </p>
                    <p className="truncate">
                      <strong>Broadcast Frequency:</strong> UHF Band
                    </p>
                    <p className="truncate">
                      <strong>Tenancy Start Date:</strong>{" "}
                      {state.details.startDate}
                    </p>
                    <p className="truncate">
                      <strong>Tower Height:</strong> 300 meters
                    </p>
                    <p className="truncate">
                      <strong>Antenna Height:</strong> 290 meters
                    </p>
                    <p className="truncate">
                      <strong>Antenna Gain:</strong> 10 dB
                    </p>
                    <p className="truncate">
                      <strong>Azimuth:</strong> 0° (Omni-directional)
                    </p>
                    <p className="truncate">
                      <strong>Elevation Beam Tilt:</strong> 0.5°
                    </p>
                  </div>

                  <div className="whitespace-normal text-[10px] leading-tight">
                    <p className="truncate">
                      <strong>Elevation:</strong> 150 meters
                    </p>
                    <p className="truncate">
                      <strong>Longitude:</strong> {position[1]}
                    </p>
                    <p className="truncate">
                      <strong>Call Sign:</strong> KIIQ-LD
                    </p>
                    <p className="truncate">
                      <strong>Polarization:</strong> Horizontal
                    </p>
                    <p className="truncate">
                      <strong>Effective Radiated Power (ERP):</strong> 30 kW
                    </p>
                    <p className="truncate">
                      <strong>Feed Line Type:</strong> Rigid Coaxial Cable
                    </p>
                    <p className="truncate">
                      <strong>Feed Line Loss:</strong> 1.5 dB
                    </p>
                    <p className="truncate">
                      <strong>Transmission Line Length:</strong> 400 meters
                    </p>
                    <p className="truncate">
                      <strong>Wind Load Capacity:</strong> 120 mph (193 km/h)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Popup>
    </>
  );
};

export default memo(MarkerWithPieChart);
