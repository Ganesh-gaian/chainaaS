"use client";

import Image from "next/image";
import searchlogo from "../../../../public/svgs/chains/search.svg";
import addlogo from "../../../../public/svgs/chains/add.svg";
import backlogo from "../../../../public/svgs/chains/back-logo.svg";
import Customsvg from "./Customsvg";
import { useCallback, useState } from "react";

interface TowerItem {
  towerName: string;
  latitude: number;
  longitude: number;
  connectivity: string;
  performance: string;
  capacity: string;
  status: string;
}

interface ChainItemProps {
  item: TowerItem;
  handleSelectedTower: (value: String) => void;
  selectedtower: String;
}

interface TowerlistProps {
  handleModal: (value: boolean) => void;
}

const ChainItem: React.FC<ChainItemProps> = ({
  item,
  handleSelectedTower,
  selectedtower,
}) => (
  <div
    onClick={() => {
      handleSelectedTower(item.towerName);
    }}
    className={`group flex justify-between items-center border-[0.1vw] rounded-[0.2vw] bg-[#FAFAFA] p-[0.2vw] px-[0.6vw] cursor-pointer hover:border-[#2196F3] hover:outline-[0.2vw] ${
      selectedtower == item.towerName ? "border-[#2196F3]" : "border-[#D9D9D9]"
    }`}
  >
    <p
      className={`fs-14 ${
        selectedtower == item.towerName ? "text-[#1890FF]" : "text-[#000000D9]"
      }  font-[400] pl-[0.5vw] group-hover:text-[#1890FF]`}
    >
      {item.towerName}
    </p>
    <Customsvg selected={selectedtower == item.towerName} />
  </div>
);

const SearchBar: React.FC = () => (
  <div className="flex justify-between items-center border-[0.1vw] border-[#D9D9D9] rounded-[0.2vw] mx-[1vw]">
    <div className="w-[85%]">
      <input
        className="px-[12px] py-[5px] outline-none"
        placeholder="Search by chain or tower"
        type="text"
      />
    </div>
    <div className="w-[15%] h-[100%] flex justify-center items-center border-l-[0.1389vw] border-b-[#0000000F]">
      <Image className="w-[50%]" src={searchlogo} alt="Search" />
    </div>
  </div>
);

const Towerlist: React.FC<TowerlistProps> = ({ handleModal }) => {
  const sample = [
    {
      towerName: "NYC-23",
      latitude: 40.7128,
      longitude: -74.006,
      connectivity: "5G",
      performance: "Excellent",
      capacity: "High",
      status: "Active",
    },
    {
      towerName: "Tower : T001I",
      latitude: 34.0522,
      longitude: -118.2437,
      connectivity: "4G",
      performance: "Good",
      capacity: "Moderate",
      status: "Active",
    },
    {
      towerName: "LAX-A1",
      latitude: 33.9416,
      longitude: -118.4085,
      connectivity: "5G",
      performance: "Excellent",
      capacity: "High",
      status: "Active",
    },
    {
      towerName: "SFO-MAIN",
      latitude: 37.7749,
      longitude: -122.4194,
      connectivity: "5G",
      performance: "Excellent",
      capacity: "High",
      status: "Active",
    },
    {
      towerName: "CHI-MAIN",
      latitude: 41.8781,
      longitude: -87.6298,
      connectivity: "4G",
      performance: "Good",
      capacity: "Moderate",
      status: "Under Maintenance",
    },
    {
      towerName: "ATL-5G",
      latitude: 33.749,
      longitude: -84.388,
      connectivity: "5G",
      performance: "Excellent",
      capacity: "High",
      status: "Active",
    },
    {
      towerName: "SEA-ROOF",
      latitude: 47.6062,
      longitude: -122.3321,
      connectivity: "4G",
      performance: "Moderate",
      capacity: "Low",
      status: "Active",
    },
    {
      towerName: "MIA-BEACH",
      latitude: 25.7617,
      longitude: -80.1918,
      connectivity: "5G",
      performance: "Good",
      capacity: "Moderate",
      status: "Active",
    },
    {
      towerName: "DEN-HIGH",
      latitude: 39.7392,
      longitude: -104.9903,
      connectivity: "5G",
      performance: "Excellent",
      capacity: "High",
      status: "Active",
    },
    {
      towerName: "HOU-22A",
      latitude: 29.7604,
      longitude: -95.3698,
      connectivity: "4G",
      performance: "Good",
      capacity: "Moderate",
      status: "Under Maintenance",
    },
    {
      towerName: "PHX-8",
      latitude: 33.4484,
      longitude: -112.074,
      connectivity: "5G",
      performance: "Excellent",
      capacity: "High",
      status: "Active",
    },
    {
      towerName: "BOS-LOG",
      latitude: 42.3601,
      longitude: -71.0589,
      connectivity: "4G",
      performance: "Moderate",
      capacity: "Low",
      status: "Active",
    },
    {
      towerName: "MSP-DELTA",
      latitude: 44.9778,
      longitude: -93.265,
      connectivity: "5G",
      performance: "Good",
      capacity: "Moderate",
      status: "Active",
    },
    {
      towerName: "MEM-INTL",
      latitude: 35.1495,
      longitude: -90.049,
      connectivity: "5G",
      performance: "Excellent",
      capacity: "High",
      status: "Active",
    },
  ];

  const [selectedtower, setSelectedtower] = useState<String>("");

  const handleSelectedTower = useCallback((value: String) => {
    setSelectedtower(value);
  }, []);

  return (
    <div className="w-[100%] h-[100%] flex flex-col gap-[0.5vw]">
      <header className="w-[100%] flex justify-between items-center p-[0.6vw] border-b-[0.1389vw] border-b-[#0000000F]">
        <span className="fs-14 text-[#000000D9] font-[500]">Chains</span>
        <div
          className="w-[1.5vw] flex justify-center items-center border-[0.1389vw] border-b-[#0000000F] rounded-[0.2vw] aspect-[1] cursor-pointer"
          onClick={() => handleModal(true)}
        >
          <Image className="w-[0.9vw] aspect-square" src={addlogo} alt="Add" />
        </div>
      </header>
      <SearchBar />
      <main className="w-[100%] h-[68vh] p-[1vw] flex flex-col gap-[1vw] overflow-y-auto no-scrollbar">
        {sample.map((item, index) => (
          <ChainItem
            key={index}
            item={item}
            handleSelectedTower={handleSelectedTower}
            selectedtower={selectedtower}
          />
        ))}
      </main>
      <footer className="w-[100%] h-[3vw] p-[1vw] border-t-[0.1vw] border-b-[#0000000F]">
        <Image className="w-[1.2vw] aspect-square" src={backlogo} alt="Back" />
      </footer>
    </div>
  );
};

export default Towerlist;
