"use client";

import Image from "next/image";
import person from "../../../../public/svgs/chains/person.svg";
import editlogo from "../../../../public/svgs/chains/editlogo.svg";
import dateicon from "../../../../public/svgs/chains/dateicon.svg";
import signal from "../../../../public/svgs/chains/signal.svg";
import location from "../../../../public/svgs/chains/location.svg";
import refreshicon from "../../../../public/svgs/chains/refreshicon.svg";
import { useRef, useState } from "react";
import { Collapse, Tabs } from "antd";
import "./towerinfo.css";

interface TowerinfotabProps {
  handleEditCard: (value: boolean) => void;
}

const Towerinfotab: React.FC<TowerinfotabProps> = ({ handleEditCard }) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string>("Broadcast Info");

  const tabItems = [
    {
      key: "1",
      label: <Labelheading heading="Broadcast Info" selected={selected} />,
      children: <Broadcastinfo handleEditCard={handleEditCard} />,
    },
    {
      key: "2",
      label: <Labelheading heading="Tower detail" selected={selected} />,
      children: <Towerdetails handleEditCard={handleEditCard} />,
    },
  ];

  const onChange = (key: string) => {
    const selectedTab = tabItems.find((item) => item.key === key);

    if (selectedTab) {
      setSelected(selectedTab.label.props["heading"]);
    }
    if (tabRef.current) {
      tabRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <div className="w-[100%] rounded-[0.2vw]" id="towerinfo-main" ref={tabRef}>
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={tabItems}
        onChange={onChange}
      />
    </div>
  );
};

export default Towerinfotab;

interface detailsProps {
  handleEditCard: (value: boolean) => void;
}

const Towerdetails: React.FC<detailsProps> = ({ handleEditCard }) => {
  let details = {
    "Antenna Type": "Directional",
    Elevation: "150 meters",
    Power: "50kW",
    "Call sign": "KIIO-LD",
    "Coverage area": "25 miles",
    "Broadcast Frequency": "UHF Band",
    City: "Las Vegas",
    DMA: "Los Angeles",
    Population: "3.9 million",
    Frequency: "VHF Band",
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
          <p className="fs-14 text-[#000000D9] font-[500]">Tower name</p>
          <p className="fs-12 text-[#00000073] font-[500]">unique ID</p>
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
              Tower Owner: CBS
            </p>
          </div>

          <div className="flex">
            <Image
              className="w-[1vw] aspect-square"
              src={dateicon}
              alt="dateicon"
            />
            <p className="ml-[0.3vw] fs-12 text-[#00000073] font-[500]">
              Tenancy start date: September 02, 2024
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
              Signal Strength: -70 dBm
            </p>
            <span className="fs-12 text-[#52C41A] border-[0.1389vw] border-[#B7EB8F] bg-[#F6FFED] px-[0.5vw]">
              Strong
            </span>
          </div>

          <div className="flex">
            <Image
              className="w-[1vw] aspect-square"
              src={location}
              alt="location"
            />
            <p className="ml-[0.3vw] mr-[1.5vw] fs-12 text-[#00000073] font-[500]">
              Latitude: 34.1234
            </p>
            <p className="ml-[0.3vw]  fs-12 text-[#00000073] font-[500]">
              Longitude: -118.5678
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

const Broadcastinfo: React.FC<detailsProps> = ({ handleEditCard }) => {
  const [showedit, setShowedit] = useState(false);

  const handleEdit = () => {
    setShowedit(!showedit);
  };

  const museoData = {
    name: "Museo",
    status: "Active",
    uniqueId: "unique ID",
    details: {
      tenantPartner: "CBS",
      tenancyStartDate: "September 02, 2024",
      version: "v 1.2.2",
    },
    statistics: {
      Description:
        "Unique space for artists, cultural enthusiasts, and the general public to connect and share in the rich tapestry of local heritage and creativity.",
      "Active users": 4610548,
      "Deployment Date": "November 28, 2015",
    },
    Revenue: {
      Day: "$450",
      Monthly: "$11,000",
      Weekly: "$2,800",

      Quarterly: "$32,000",
      Yearly: "$128,000",
    },
  };

  return (
    <>
      <div className="flex justify-between px-[1vw] py-[0.5vw] border-b-[0.1389vw] border-b-[#0000000F] relative">
        {showedit && (
          <div className="bg-[#FFF] absolute right-[1vw] top-[3vw] shadow-[0_3px_6px_-4px_rgba(0,0,0,0.12),_0_6px_16px_0_rgba(0,0,0,0.08),_0_9px_28px_8px_rgba(0,0,0,0.05)] cursor-pointer">
            <div
              id="broadcast-edit"
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

        <div className="flex items-start gap-[1.2vw]">
          <div>
            <p className="fs-14 text-[#000000D9] font-[500]">
              {museoData.name}
            </p>
            <p className="fs-12 text-[#00000073] font-[500]">
              {museoData.uniqueId}
            </p>
          </div>
          <div className="fs-11 mt-[0.2vw] text-[#52C41A] border-[0.1vw] border-[#B7EB8F] bg-[#F6FFED] px-[0.5vw]">
            {museoData.status}
          </div>
        </div>
        <div
          onClick={() => {
            handleEdit();
          }}
          id="broadcast-edit-icon"
          className="flex justify-between items-center rotate-90 cursor-pointer"
        >
          <Image className="w-[1vw] aspect-square" src={editlogo} alt="Edit" />
        </div>
      </div>

      <div className="p-[1vw] border-b-[0.1389vw] border-b-[#0000000F]">
        <div className="flex mb-[1vw]">
          <Image className="w-[1vw] aspect-square" src={person} alt="person" />
          <p className="ml-[0.4vw] fs-12 text-[#00000073] font-[500]">
            Tenant partner: {museoData.details.tenantPartner}
          </p>
        </div>

        <div className="flex mb-[1vw]">
          <Image
            className="w-[1vw] aspect-square"
            src={dateicon}
            alt="dateicon"
          />
          <p className="ml-[0.4vw] fs-12 text-[#00000073] font-[500]">
            Tenancy start date: {museoData.details.tenancyStartDate}
          </p>
        </div>

        <div className="flex">
          <Image
            className="w-[1vw] aspect-square"
            src={refreshicon}
            alt="refreshicon"
          />
          <p className="ml-[0.4vw] fs-12 text-[#00000073] font-[500]">
            Version: {museoData.details.version}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[40%_26.5%_26.5%] px-[1.2vw] py-[1.5vw] gap-x-[2vw] gap-y-[1.5vw]">
        {Object.entries({ ...museoData.statistics }).map(([key, value], i) => {
          return (
            <div key={i}>
              <p className="fs-12 text-[#000000D9] font-[500]">{key}</p>
              <p className="fs-12 text-[#00000073] font-[500]">{value}</p>
            </div>
          );
        })}
        <div className="col-span-3">
          <p className="fs-12 text-[#000000D9] font-[500] mb-[0.6vw]">
            Revenue
          </p>
          <div className="grid grid-cols-2 gap-y-[1vw]">
            {Object.entries({ ...museoData.Revenue }).map(([key, value], i) => {
              return (
                <div key={i}>
                  <span className="fs-14 text-[#000000] font-[400]">￮</span>
                  <span className="ml-[0.5vw] fs-12 text-[#00000073] font-[400]">
                    {key}:
                  </span>
                  <span className="ml-[0.2vw] fs-12 text-[#000000D9] font-[400]">
                    {value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

interface HeadingProps {
  heading: string;
  selected: string;
}

function Labelheading({ heading, selected }: HeadingProps) {
  let mias = ["Museo", "Izak", "Spectraguard", "Hear Here", "AmplyFund"];
  let towers = ["Tower 1", "Tower 2",];
  const onChange = (key: string | string[]) => {
    console.log(key[0]);
  };
  const items = [
    {
      key: heading === "Broadcast Info" ? "1" : "2",
      label: (
        <span
          id={heading === "Broadcast Info" ? "broadcast-info" : "tower-info"}
          className={`text-left fs-14  font-[400] hover:text-[#1890FF] ${
            selected == heading ? "text-[#1890FF]" : "text-[#000000D9]"
          }`}
        >
          {heading}
        </span>
      ),
      children: (selected === "Broadcast Info" ? mias : towers).map(
        (item, index) => {
          return (
            <p
              key={index}
              className="text-left fs-12 font-[400] text-[#00000073] p-[0.5vw] hover:bg-[#FAFAFA] hover:text-[#000000D9] rounded-[0.2vw]"
            >
              {item}
            </p>
          );
        }
      ),
      showArrow: false,
    },
  ];
  return (
    <Collapse
      items={items}
      defaultActiveKey={[]}
      ghost={true}
      onChange={onChange}
      activeKey={selected === "Broadcast Info" ? ["1"] : ["2"]}
    />
  );
}
