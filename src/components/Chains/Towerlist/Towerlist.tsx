"use client";

import Image from "next/image";
import editlogo from "../../../../public/svgs/chains/editlogo.svg";
import searchlogo from "../../../../public/svgs/chains/search.svg";
import addlogo from "../../../../public/svgs/chains/add.svg";
import backlogo from "../../../../public/svgs/chains/back-logo.svg";

interface ChainItemProps {
  item: string;
}

interface TowerlistProps {
  handleModal: (value: boolean) => void;
}

const ChainItem: React.FC<ChainItemProps> = ({ item }) => (
  <div className="flex justify-between items-center border-[0.1vw] border-[#D9D9D9] rounded-[2px] bg-[#FAFAFA] p-[0.2vw] px-[0.6vw] cursor-pointer">
    <p>{item}</p>
    <Image className="w-[1vw] aspect-square" src={editlogo} alt="Edit" />
  </div>
);

const SearchBar: React.FC = () => (
  <div className="flex justify-between items-center border-[0.1vw] border-[#D9D9D9] rounded-[2px]">
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
  const sample: string[] = Array(12).fill("NYC-23");

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
      <main className="w-[100%] h-[68vh] p-[1vw] flex flex-col gap-[1vw] overflow-y-auto no-scrollbar">
        <SearchBar />
        {sample.map((item, index) => (
          <ChainItem key={index} item={item} />
        ))}
      </main>
      <footer className="w-[100%] h-[3vw] p-[1vw] border-t-[0.1vw] border-b-[#0000000F]">
        <Image className="w-[1.2vw] aspect-square" src={backlogo} alt="Back" />
      </footer>
    </div>
  );
};

export default Towerlist;
