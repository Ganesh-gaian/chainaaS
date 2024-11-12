"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Tabs } from "antd";
import "./towerinfo.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Broadcastinfo from "./Broadcastinfo";
import Towerdetails from "./Towerdetails";
import Labelheading from "./Labelheading";

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

interface miaInfo {
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

interface Revenue {
  Daily: string;
  Monthly: string;
  Quarterly: string;
  Weekly: string;
  Yearly: string;
}

const revenue = {
  Daily: "",
  Monthly: "",
  Quarterly: "",
  Weekly: "",
  Yearly: "",
};

const defaultBroadcastInfo: miaInfo = {
  uniqueID: "",
  name: "",
  status: "",
  tenantPartner: "",
  tenancyStartDate: "",
  version: "",
  description: "",
  activeUsers: 0,
  deploymentDate: "",
  revenue,
};

const defaultTowerInfo: TowerInfo = {
  towerName: "",
  uniqueID: "",
  owner: "",
  tenancyStartDate: "",
  signalStrength: "",
  signalQuality: "",
  location: {
    latitude: 0,
    longitude: 0,
  },
  antennaType: "",
  elevation: "",
  power: "",
  callSign: "",
  coverageArea: "",
  broadcastFrequency: "",
  city: "",
  dma: "",
  population: "",
  frequency: "",
};

interface TowerinfotabProps {
  handleEditCard: (value: boolean) => void;
}

const Towerinfotab: React.FC<TowerinfotabProps> = ({ handleEditCard }) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string>("Broadcast Info");
  const selectedchain = useSelector(
    (state: RootState) => state.chains.selectedChain
  );
  const [towerinfo, setTowerinfo] = useState<TowerInfo>(defaultTowerInfo);
  const [broadcastinfo, setBroadcastinfo] =
    useState<miaInfo>(defaultBroadcastInfo);

  const handleInfo = useCallback((type: string, item: any) => {
    if (type == "Broadcast") {
      setBroadcastinfo(item);
    } else {
      setTowerinfo(item);
    }
  }, []);

  useEffect(() => {
    if (Object.values(selectedchain).length > 0) {
      setTowerinfo(selectedchain?.Towers[0]);
      setBroadcastinfo({
        ...selectedchain?.MIAS[0],
        revenue: {
          Daily: selectedchain?.MIAS[0].revenue.Daily ?? "",
          Weekly: selectedchain?.MIAS[0].revenue.Weekly ?? "",
          Monthly: selectedchain?.MIAS[0].revenue.Monthly ?? "",
          Quarterly: selectedchain?.MIAS[0].revenue.Quarterly ?? "",
          Yearly: selectedchain?.MIAS[0].revenue.Yearly ?? "",
        },
      });
    }
  }, [selectedchain]);

  const tabItems = [
    {
      key: "1",
      label: (
        <Labelheading
          heading="Broadcast Info"
          selected={selected}
          handleInfo={handleInfo}
          labelitems={selectedchain["MIAS"] || []}
        />
      ),
      children: (
        <Broadcastinfo
          handleEditCard={handleEditCard}
          broadcastinfo={broadcastinfo}
        />
      ),
    },
    {
      key: "2",
      label: (
        <Labelheading
          heading="Tower detail"
          selected={selected}
          handleInfo={handleInfo}
          labelitems={selectedchain["Towers"] || []}
        />
      ),
      children: (
        <Towerdetails handleEditCard={handleEditCard} towerinfo={towerinfo} />
      ),
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
