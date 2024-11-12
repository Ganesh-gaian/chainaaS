import React, { useState } from "react";
import Image from "next/image";
import person from "../../../../public/svgs/chains/person.svg";
import editlogo from "../../../../public/svgs/chains/editlogo.svg";
import dateicon from "../../../../public/svgs/chains/dateicon.svg";
import signal from "../../../../public/svgs/chains/signal.svg";
import location from "../../../../public/svgs/chains/location.svg";

interface TowerInfo {
  towerName: string;
  uniqueID: string;
  owner: string;
  tenancyStartDate: string;
  signalStrength: string;
  signalQuality: string;
  location: Location;
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

interface Location {
  latitude: number;
  longitude: number;
}

interface towerdetailsProps {
  handleEditCard: (value: boolean) => void;
  towerinfo: any;
}

const Towerdetails: React.FC<towerdetailsProps> = ({
  handleEditCard,
  towerinfo,
}) => {
  let details = {
    "Antenna Type": towerinfo.antennaType,
    Elevation: towerinfo.elevation,
    Power: towerinfo.power,
    "Call sign": towerinfo.callSign,
    "Coverage area": towerinfo.coverageArea,
    "Broadcast Frequency": towerinfo.broadcastFrequency,
    City: towerinfo.city,
    DMA: towerinfo.dma,
    Population: towerinfo.population,
    Frequency: towerinfo.frequency,
  };

  const [showedit, setShowedit] = useState(false);

  const handleEdit = () => {
    setShowedit(!showedit);
  };

  return (
    <>
      <div className="flex justify-between px-[1vw] py-[0.5vw] border-b-[0.1389vw] border-b-[#0000000F] relative">
        {showedit && (
          <div className="bg-[#FFF] absolute right-[1vw] top-[3vw] shadow-[0_3px_6px_-4px_rgba(0,0,0,0.12),_0_6px_16px_0_rgba(0,0,0,0.08),_0_9px_28px_8px_rgba(0,0,0,0.05)] cursor-pointer">
            <div
              onClick={() => {
                handleEdit();
                handleEditCard(true);
              }}
              className="fs-14 text-[#000000D9] font-[500] px-[0.8vw] py-[0.3vw] bg-[#E6F7FF]"
            >
              Edit
            </div>
            <div
              onClick={() => handleEdit()}
              className="fs-14 text-[#000000D9] font-[500] px-[0.8vw] py-[0.3vw]"
            >
              Remove
            </div>
          </div>
        )}
        <div>
          <p className="fs-14 text-[#000000D9] font-[500]">
            {towerinfo.towerName}
          </p>
          <p className="fs-12 text-[#00000073] font-[500]">
            {towerinfo.uniqueID}
          </p>
        </div>
        <div
          onClick={() => handleEdit()}
          className="flex justify-between items-center rotate-90 cursor-pointer"
        >
          <Image className="w-[1vw] aspect-square" src={editlogo} alt="Edit" />
        </div>
      </div>

      <div className="flex gap-[6vw] px-[1vw] py-[1vw] border-b-[0.1389vw] border-b-[#0000000F]">
        <div>
          <div className="flex mb-[1vw]">
            <Image
              className="w-[1vw] aspect-square"
              src={person}
              alt="person"
            />
            <p className="ml-[0.3vw] fs-12 text-[#00000073] font-[500]">
              Tower Owner: {towerinfo.owner}
            </p>
          </div>

          <div className="flex">
            <Image
              className="w-[1vw] aspect-square"
              src={dateicon}
              alt="dateicon"
            />
            <p className="ml-[0.3vw] fs-12 text-[#00000073] font-[500]">
              Tenancy start date: {towerinfo.tenancyStartDate}
            </p>
          </div>
        </div>
        <div>
          <div className="flex mb-[0.8vw]">
            <Image
              className="w-[1vw] aspect-square"
              src={signal}
              alt="signal"
            />
            <p className="ml-[0.3vw] mr-[3vw] fs-12 text-[#00000073] font-[500]">
              Signal Strength: {towerinfo.signalStrength}
            </p>
            <span className="fs-12 text-[#52C41A] border-[0.1389vw] border-[#B7EB8F] bg-[#F6FFED] px-[0.5vw]">
              {towerinfo.signalQuality}
            </span>
          </div>

          <div className="flex">
            <Image
              className="w-[1vw] aspect-square"
              src={location}
              alt="location"
            />
            <p className="ml-[0.3vw] mr-[1.5vw] fs-12 text-[#00000073] font-[500]">
              Latitude: {towerinfo.location.latitude}
            </p>
            <p className="ml-[0.3vw]  fs-12 text-[#00000073] font-[500]">
              Longitude: {towerinfo.location.longitude}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 px-[1.2vw] py-[1.5vw] gap-[1.2vw]">
        {Object.entries(details).map(([key, value], i) => {
          return (
            <div key={i}>
              <p className="fs-12 text-[#000000D9] font-[500]">{key}</p>
              <p className="fs-12 text-[#00000073] font-[500]">{value}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Towerdetails;
