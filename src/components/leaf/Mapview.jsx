import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import L from "leaflet";
import MarkerWithPieChart from "./MarkerWithPieChart";
import "leaflet/dist/leaflet.css";
import "./styles.css";

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
    polygonCoords: [
      [36.2299, -115.1898],
      [36.2299, -115.0898],
      [36.1099, -115.0898],
      [36.1099, -115.1898],
    ],
  },
  {
    name: "Location 2 - Las Vegas",
    position: [36.125, -115.3151], // Southwest Las Vegas
    appUsage: {
      labels: ["Izak", "Amplifyfund", "Hear, Here", "Museo", "Spectraguard"],
      datasets: [
        {
          data: [70, 10, 5, 10, 5],
          backgroundColor: [
            "#008080",
            "#FFD700",
            "#C71585",
            "#8B0000",
            "#4682B4",
          ],
          hoverBackgroundColor: [
            "#008080",
            "#FFD700",
            "#C71585",
            "#8B0000",
            "#4682B4",
          ],
        },
      ],
    },
    details: {
      status: "Inactive",
      tenant: "NBC",
      startDate: "January 15, 2023",
      antennaType: "Omnidirectional",
      power: "40kW",
      coverageArea: "20 miles",
      revenue: {
        day: "$400",
        monthly: "$10,000",
        yearly: "$120,000",
      },
    },
    polygonCoords: [
      [36.165, -115.3751], // North-west corner
      [36.165, -115.2751], // North-east corner
      [36.085, -115.2751], // South-east corner
      [36.085, -115.3751], // South-west corner
    ],
  },
  {
    name: "Location 3 - Las Vegas",
    position: [36.2044, -115.134], // North Las Vegas (Adjusted)
    appUsage: {
      labels: ["Izak", "Amplifyfund", "Hear, Here", "Museo", "Spectraguard"],
      datasets: [
        {
          data: [50, 15, 10, 15, 10],
          backgroundColor: [
            "#4B0082",
            "#FF8C00",
            "#FF6347",
            "#ADFF2F",
            "#1E90FF",
          ],
          hoverBackgroundColor: [
            "#4B0082",
            "#FF8C00",
            "#FF6347",
            "#ADFF2F",
            "#1E90FF",
          ],
        },
      ],
    },
    details: {
      status: "Active",
      tenant: "ABC",
      startDate: "March 12, 2023",
      antennaType: "Directional",
      power: "60kW",
      coverageArea: "30 miles",
      revenue: {
        day: "$550",
        monthly: "$12,000",
        yearly: "$130,000",
      },
    },
    polygonCoords: [
      [36.2644, -115.184], // North-west corner
      [36.2644, -115.084], // North-east corner
      [36.1444, -115.084], // South-east corner
      [36.1444, -115.184], // South-west corner
    ],
  },
  {
    name: "Location 4 - Las Vegas",
    position: [36.0456, -115.2376], // Southeast Las Vegas
    appUsage: {
      labels: ["Izak", "Amplifyfund", "Hear, Here", "Museo", "Spectraguard"],
      datasets: [
        {
          data: [80, 5, 10, 3, 2],
          backgroundColor: [
            "#00CED1",
            "#FF1493",
            "#FFD700",
            "#228B22",
            "#9400D3",
          ],
          hoverBackgroundColor: [
            "#00CED1",
            "#FF1493",
            "#FFD700",
            "#228B22",
            "#9400D3",
          ],
        },
      ],
    },
    details: {
      status: "Active",
      tenant: "FOX",
      startDate: "July 25, 2024",
      antennaType: "Omnidirectional",
      power: "70kW",
      coverageArea: "35 miles",
      revenue: {
        day: "$600",
        monthly: "$13,000",
        yearly: "$140,000",
      },
    },
    polygonCoords: [
      [36.0956, -115.2876], // North-west corner
      [36.0956, -115.1876], // North-east corner
      [35.9656, -115.1876], // South-east corner
      [35.9656, -115.2876], // South-west corner
    ],
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
    <div className="relative w-full h-full">
      <MapContainer
        center={[36.1699, -115.1398]}
        zoom={14}
        scrollWheelZoom={true}
        className="w-[94vw] h-[92vh]"
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
