import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { Popup, Polygon } from "react-leaflet";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const MarkerWithPieChart = ({ position, state, polygonCoords, mapRef, zoomLevel }) => {
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

    chartInstance.current = am4core.create(chartRef.current, am4charts.PieChart3D);

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
      chartInstance.current.resize();
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

  return (
    <>
      {/* {zoomLevel >= 13 && (
        <Polygon
          positions={polygonCoords}
          color="blue"
          fillColor="rgba(135, 206, 250, 0.5)"
          fillOpacity={0.3}
          weight={2}
        />
      )} */}
      <Popup
        position={position}
        className="max-w-lg"
        closeButton={false}
        autoClose={false}
        closeOnClick={false}
      >
        <div className="relative flex items-start p-4">
          <div className="w-40 h-40">
            <div
              ref={chartRef}
              style={{ width: "160px", height: "160px" }}
              key={`chart-${position.join('-')}`} // Key ensures component re-renders
            ></div>
          </div>
          {showMetaData && (
            <div className="ml-4">
              <div className="absolute top-0 right-[-260px] bg-white shadow-lg p-4 w-64 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">{state.name} Metadata</h3>
                </div>
                <p><strong>Status:</strong> {state.details.status}</p>
                <p><strong>Tenant partner:</strong> {state.details.tenant}</p>
                <p><strong>Start Date:</strong> {state.details.startDate}</p>
                <p><strong>Antenna Type:</strong> {state.details.antennaType}</p>
                <p><strong>Power:</strong> {state.details.power}</p>
                <p><strong>Coverage Area:</strong> {state.details.coverageArea}</p>
                <p><strong>Revenue:</strong></p>
                <ul className="list-disc list-inside">
                  <li>Day: {state.details.revenue.day}</li>
                  <li>Monthly: {state.details.revenue.monthly}</li>
                  <li>Yearly: {state.details.revenue.yearly}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </Popup>
    </>
  );
};

export default MarkerWithPieChart;
