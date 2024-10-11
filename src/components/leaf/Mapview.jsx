"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import L from "leaflet";
import MarkerWithPieChart from "./MarkerWithPieChart";
import "leaflet/dist/leaflet.css";
import "./styles.css";

// Import amCharts modules
// import {am4core} from "@amcharts/amcharts4/core";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// am4core.useTheme(am4themes_animated);

// Example State Data for Las Vegas Locations with Usage and Details
const lasVegasData = [
  {
    name: "Location 1 - Las Vegas",
    position: [36.1699, -115.1398], // Central Las Vegas
    appUsage: {
      labels: ["Izak", "Amplifyfund", "Hear, Here", "Museo", "Spectraguard"],
      datasets: [
        {
          data: [64, 8, 11, 17, 12],
          backgroundColor: [
            "#800080",
            "#00FF00",
            "#FF4500",
            "#FF0000",
            "#0000FF",
          ],
          hoverBackgroundColor: [
            "#800080",
            "#00FF00",
            "#FF4500",
            "#FF0000",
            "#0000FF",
          ],
        },
      ],
    },
    details: {
      status: "Active",
      tenant: "CBS",
      startDate: "September 02, 2024",
      antennaType: "Directional",
      power: "50kW",
      coverageArea: "25 miles",
      revenue: {
        day: "$450",
        monthly: "$11,000",
        yearly: "$128,000",
      },
    },
    polygonCoords: [],
  },
];

const MapWithPieChartsLasVegas = () => {
  const mapRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(14);

  useEffect(() => {
    if (mapRef.current) {
      const handleZoomEnd = () => {
        setZoomLevel(mapRef.current.getZoom());
      };
      mapRef.current.on("zoomend", handleZoomEnd);

      return () => {
        mapRef.current.off("zoomend", handleZoomEnd);
      };
    }
  }, [mapRef, zoomLevel]);

  return (
    <div className="relative w-full h-[60vh]">
      <MapContainer
        center={[36.1699, -115.1398]}
        zoom={11}
        scrollWheelZoom={true}
        className="w-[100%] h-[100%]"
        whenCreated={(mapInstance) => {
          mapRef.current = mapInstance;
          const bounds = L.latLngBounds(lasVegasData.map((d) => d.position));
          mapInstance.fitBounds(bounds);
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {lasVegasData.map((location, idx) => (
          <MarkerWithPieChart
            key={idx}
            position={location.position}
            state={location}
            polygonCoords={location.polygonCoords}
            mapRef={mapRef}
            zoomLevel={zoomLevel}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default MapWithPieChartsLasVegas;
