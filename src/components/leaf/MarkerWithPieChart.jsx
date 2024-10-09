"use client";

import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import { Popup, Polygon } from "react-leaflet";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import userIcon from "../../../public/svgs/utilis/User.svg";
import calenderIcon from "../../../public/svgs/utilis/Calendar.svg";

am4core.useTheme(am4themes_animated);

const MarkerWithPieChart = ({
  position,
  state,
  polygonCoords,
  mapRef,
  zoomLevel,
}) => {
  const chartRef = useRef(null); // Ref for chart container div
  const chartInstance = useRef(null); // Ref for chart instance
  const [showMetaData, setShowMetaData] = useState(false);
  const [isChartReady, setIsChartReady] = useState(false); // To track chart readiness

  const toggleMetaData = () => {
    setShowMetaData((prev) => !prev);
  };

  // Cleanup old charts before creating a new one
  const initializeChart = () => {
    if (chartInstance.current) {
      chartInstance.current.dispose(); // Clean up any existing chart instance
    }

    chartInstance.current = am4core.create(
      chartRef.current,
      am4charts.PieChart3D
    );

    chartInstance.current.data = state.appUsage.labels.map((label, index) => ({
      category: label,
      value: state.appUsage.datasets[0].data[index],
    }));

    let series = chartInstance.current.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "value";
    series.dataFields.category = "category";

    series.slices.template.events.on("hit", () => {
      toggleMetaData();
    });

    chartInstance.current.events.on("ready", () => {
      chartInstance.current.invalidateRawData(); // Ensures chart is drawn correctly
      // chartInstance.current.resize();
    });
  };

  useLayoutEffect(() => {
    // Ensure chart is only initialized when the map has fully loaded
    if (isChartReady && chartRef.current) {
      initializeChart();
    }
  }, [isChartReady, state.appUsage, position]); // Dependency on isChartReady, state, and position

  useEffect(() => {
    // Set chart as ready after map has initialized
    const timeoutId = setTimeout(() => {
      setIsChartReady(true); // Delay the chart initialization until map is ready
    }, 100); // Delay for map rendering

    return () => {
      clearTimeout(timeoutId);
      if (chartInstance.current) {
        chartInstance.current.dispose();
        chartInstance.current = null;
      }
    };
  }, [position]); // Run this effect when position changes (e.g., on map refresh)

  useEffect(() => {
    if (showMetaData && mapRef.current) {
      mapRef.current.setView(position, 13, { animate: true });
    }
  }, [showMetaData, position, mapRef]);

  const labelColorMap = state.appUsage.labels.map((label, index) => ({
    label: label,
    color: state.appUsage.datasets[0].backgroundColor[index],
  }));

  return (
    <>
      {zoomLevel >= 13 && (
        <Polygon
          positions={polygonCoords}
          color="blue"
          fillColor="rgba(135, 206, 250, 0.5)"
          fillOpacity={0.3}
          weight={2}
        />
      )}
      <Popup
        position={position}
        className="max-w-lg"
        closeButton={false}
        autoClose={false}
        closeOnClick={false}
      >
        <div
          className={`w-[40vw] h-[40vh] relative flex items-start p-4 overflow-y-auto box-border ${
            showMetaData ? "bg-white" : ""
          }`}
        >
          <div className="w-[20vw]">
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
              style={{ width: "160px", height: "160px", marginTop: "2vw" }}
              key={`chart-${position.join("-")}`} // Key ensures component re-renders
            ></div>
          </div>
          {showMetaData && (
            <div className="flex ml-4 max-w-[20vw]">
              {/* <div className="bg-white shadow-lg p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  {state.name} Metadata
                </h3>
                <div className="flex">
                  <div>
                    <p className="text-sm">
                      <strong>Status:</strong> {state.details.status}
                    </p>

                    <p className="text-sm">
                      <strong>Tenant Partner:</strong> {state.details.tenant}
                    </p>
                    <p className="text-sm">
                      <strong>Start Date:</strong> {state.details.startDate}
                    </p>
                    <p className="text-sm">
                      <strong>Antenna Type:</strong> {state.details.antennaType}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">
                      <strong>Power:</strong> {state.details.power}
                    </p>
                    <p className="text-sm">
                      <strong>Coverage Area:</strong>{" "}
                      {state.details.coverageArea}
                    </p>
                    <div className="text-sm">
                      <strong>Revenue:</strong>
                      <ul className="list-disc list-inside ml-4">
                        <li>Day: {state.details.revenue.day}</li>
                        <li>Monthly: {state.details.revenue.monthly}</li>
                        <li>Yearly: {state.details.revenue.yearly}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* commented the tower details */}
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
                  {/* Column 1 */}
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

                  {/* Column 2 */}
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

export default MarkerWithPieChart;

{
  /* <div className=" bg-white shadow-lg p-2 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">
                    {state.name} Metadata
                  </h3>
                </div>
                <p>
                  <strong>Status:</strong> {state.details.status}
                </p>
                <p>
                  <strong>Tenant partner:</strong> {state.details.tenant}
                </p>
                <p>
                  <strong>Start Date:</strong> {state.details.startDate}
                </p>
                <p>
                  <strong>Antenna Type:</strong> {state.details.antennaType}
                </p>
                <p>
                  <strong>Power:</strong> {state.details.power}
                </p>
                <p>
                  <strong>Coverage Area:</strong> {state.details.coverageArea}
                </p>
                <p>
                  <strong>Revenue:</strong>
                </p>
                <ul className="list-disc list-inside">
                  <li>Day: {state.details.revenue.day}</li>
                  <li>Monthly: {state.details.revenue.monthly}</li>
                  <li>Yearly: {state.details.revenue.yearly}</li>
                </ul>
              </div> */
}
{
  /*  */
}
