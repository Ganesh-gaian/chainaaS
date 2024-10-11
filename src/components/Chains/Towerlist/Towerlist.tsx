"use client";

import Image from "next/image";
import searchlogo from "../../../../public/svgs/chains/search.svg";
import addlogo from "../../../../public/svgs/chains/add.svg";
import backlogo from "../../../../public/svgs/chains/back-logo.svg";
import Customsvg from "./Customsvg";
import { useCallback, useEffect, useState } from "react";

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

const SearchBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center border-[0.1vw] border-[#D9D9D9] rounded-[0.2vw] mx-[1vw]">
      <div className="w-[85%]">
        <input
          className="w-full fs-14 px-[1vw] py-[0.3vw] outline-none"
          placeholder="Search by chain or tower"
          type="text"
        />
      </div>
      <div className="w-[15%] h-[100%] flex justify-center items-center border-l-[0.1389vw] border-b-[#0000000F]">
        <Image className="w-[50%]" src={searchlogo} alt="Search" />
      </div>
    </div>
  );
};

const Towerlist: React.FC<TowerlistProps> = ({ handleModal }) => {
  const [towers, setTowers] = useState<TowerItem[]>([]);
  const [selectedtower, setSelectedtower] = useState<String>("");

  const handleSelectedTower = useCallback((value: String) => {
    setSelectedtower(value);
  }, []);

  useEffect(() => {
    const fetchTowerData = async () => {
      try {
        //const response = await fetch("/DB/db.json");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_JSON_SERVER}/towers`
        );
        const data = await response.json();
        setTowers(data);
      } catch (error) {
        console.error("Failed to fetch tower data", error);
      }
    };

    fetchTowerData();
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
        {towers?.map((item, index) => (
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
