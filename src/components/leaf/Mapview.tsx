"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import ReactDOMServer from "react-dom/server";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./styles.css";
import { useSelector } from "react-redux";
import L from "leaflet";
import Customicon from "./Customicon";
import MarkerWithPieChart from "./MarkerWithPieChart";

interface AppUsageData {
  labels: string[];
  datasets: Array<{
    data: number[];
    backgroundColor: string[];
    hoverBackgroundColor: string[];
  }>;
}

interface Revenue {
  day: string;
  monthly: string;
  yearly: string;
}

interface Details {
  status: string;
  tenant: string;
  startDate: string;
  antennaType: string;
  power: string;
  coverageArea: string;
  revenue: Revenue;
}

interface LocationData {
  name: string;
  position: [number, number];
  appUsage: AppUsageData;
  details: Details;
  polygonCoords: [number, number][];
}

interface TowerData {
  towerName: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

interface MapProps {
  height: string;
  type: "chains" | "dashboard";
  zoom: number;
  center: [number, number];
}

interface Revenue {
  day: string;
  monthly: string;
  yearly: string;
}

interface MIA {
  uniqueID: string;
  name: string;
  status: string;
  tenantPartner: string;
  tenancyStartDate: string;
  version: string;
  description: string;
  activeUsers: number;
  deploymentDate: string;
  revenue: Revenue;
}

interface TowerLocation {
  latitude: number;
  longitude: number;
}

interface Tower {
  towerName: string;
  uniqueID: string;
  owner: string;
  tenancyStartDate: string;
  signalStrength: string;
  signalQuality: string;
  location: TowerLocation;
  antennaType: string;
  elevation: string;
  power: string;
  callSign: string;
  coverageArea: string;
  broadcastFrequency: string;
  city: string;
  dma: string;
  population: string;
  frequency: string;
}

interface ChainData {
  chain_id: number;
  name: string;
  latitude: number;
  longitude: number;
  region: string;
  MIAS: MIA[];
  Towers: Tower[];
}

const lasVegasData: LocationData[] = [
  {
    name: "Location 1 - Las Vegas",
    position: [36.1699, -115.1398],
    appUsage: {
      labels: ["Izak", "Amplifyfund", "Hear, Here", "Museo", "Spectraguard"],
      datasets: [
        {
          data: [64, 8, 11, 17, 12],
          backgroundColor: [
            "#990099",
            "#109618",
            "#FF9900",
            "#DC3912",
            "#3366CC",
          ],
          hoverBackgroundColor: [
            "#990099",
            "#109618",
            "#FF9900",
            "#DC3912",
            "#3366CC",
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
      [36.390269707248926, -115.22311018568644],
      [36.285245545827365, -115.33293760375135],
      [36.17952597908133, -115.35353024463852],
      [36.14138345944671, -115.17837519806172],
      [36.169088452497, -115.0705419937929],
      [36.25823199810497, -115.00185842419498],
      [36.35821391630667, -114.95609227551617],
    ],
  },
];

const flyToLocation = (Map: L.Map | null, location: [number, number]) => {
  if (Map) {
    Map.flyTo(location, 11, {
      duration: 4,
    });
  }
};

const createMarker = (towerdata: TowerData) => {
  return L.divIcon({
    html: ReactDOMServer.renderToString(
      <Customicon towername={towerdata.towerName} />
    ),
  });
};

const Mapview: React.FC<MapProps> = ({ height, type, zoom, center }) => {
  const Map = useRef<L.Map | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(14);
  const [chains, setChains] = useState<ChainData[]>([]);

  // Uncomment the following lines if you plan to use Redux state for chain selection
  const selectedchain = useSelector((state: any) => state.chains.selectedChain);

  useMemo(() => {
    if (Object.keys(selectedchain).length > 0 && Map) {
      flyToLocation(Map.current, [
        selectedchain.latitude,
        selectedchain.longitude,
      ]);
    }
  }, [selectedchain]);

  useEffect(() => {
    const fetchTowerData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_JSON_SERVER}/chainaas_chains`);
        const data = await response.json();
        setChains(data);
      } catch (error) {
        console.error("Failed to fetch tower data", error);
      }
    };

    fetchTowerData();
  }, []);

  function Mapmove() {
    const map = useMapEvents({
      move: (e) => {
        let center = Map.current?.getCenter();
        console.log(center?.lat, center?.lng);
      },
    });
    return null;
  }

  return (
    <div className={`relative w-full h-[${height}]`}>
      <MapContainer
        center={
          type === "chains"
            ? [selectedchain.latitude, selectedchain.longitude]
            : center
        }
        zoom={zoom}
        scrollWheelZoom={true}
        className="w-[100%] h-[100%]"
        ref={(ref) => {
          Map.current = ref;
        }}
      >
        {/* <Mapmove /> */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {type === "chains" &&
          lasVegasData.map((location, idx) => (
            <MarkerWithPieChart
              key={idx}
              position={location.position}
              state={location}
              polygonCoords={location.polygonCoords}
              mapRef={Map}
              zoomLevel={zoomLevel}
            />
          ))}

        {type == "dashboard" &&
          chains
            .flatMap((data) => {
              return data["Towers"];
            })
            .map((towerdata, idx) => (
              <Marker
                key={idx}
                position={[
                  towerdata["location"]["latitude"],
                  towerdata["location"]["longitude"],
                ]}
                icon={createMarker(towerdata)}
              />
            ))}
      </MapContainer>
    </div>
  );
};

export default Mapview;
