"use client";
import React, { useState } from "react";
import { Dropdown, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

interface Revenue {
  Daily: string;
  Monthly: string;
  Quarterly: string;
  Weekly: string;
  Yearly: string;
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

interface CommercialCardsProps {
  Mias: miaInfo[];
}

const growthPercentage = 70.5;

interface WalletData {
  balance: number;
  points: number;
}

const CommercialCards: React.FC<CommercialCardsProps> = ({ Mias }) => {
  const [selectedMia, setSelectedMia] = useState<miaInfo>(Mias[0]);

  const wallet: WalletData = {
    balance: 5000,
    points: 368,
  };

  const items: MenuProps["items"] = Mias.map((data, i) => {
    return {
      key: i,
      label: <p>{data.name}</p>,
    };
  });

  const onClick: MenuProps["onClick"] = ({ key }) => {
    setSelectedMia(Mias[parseInt(key)]);
  };

  return (
    <div className="w-full flex gap-[1vw]">
      <div className="w-[60%] flex flex-col gap-[1vw] bg-white p-[1vw] rounded-sm">
        <div className="flex justify-between">
          <p className="font-semibold fs-16">Earnings</p>
          <Dropdown menu={{ items, onClick }} autoFocus={true}>
            <a
              className="p-[0.6vw] rounded-sm fs-14 border shadow-sm"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {selectedMia?.name || "Applications"} <DownOutlined />
            </a>
          </Dropdown>
        </div>

        <div className="grid grid-cols-3 gap-[1.4vw] *:flex *:flex-col *:justify-center *:items-center *:gap-[0.1vw] *:border *:p-[1vw] *:rounded-[0.4vw]">
          <div className="">
            <p className="fs-24 font-bold">${selectedMia?.revenue?.Monthly}</p>
            <p className="fs-14 font-bold text-[#8F97A2]">Last Month</p>
            <p className="fs-14 font-semibold text-[#92C521]">
              ▲ {growthPercentage}%
            </p>
          </div>
          <div className="">
            <p className="fs-24 font-semibold">
              ${selectedMia?.revenue?.Quarterly}
            </p>
            <p className="fs-14 font-bold text-[#8F97A2]">Quarterly</p>
            <p className="fs-14 font-semibold text-[#92C521]">
              ▲ {growthPercentage}%
            </p>
          </div>
          <div className="">
            <p className="fs-24 font-semibold">
              ${selectedMia?.revenue?.Yearly}
            </p>
            <p className="fs-14 font-bold text-[#8F97A2]">Yearly</p>
            <p className="fs-14 font-semibold text-[#92C521]">
              ▲ {growthPercentage}%
            </p>
          </div>
        </div>
      </div>

      {/* Wallet Section */}
      <div className="w-[40%] flex flex-col gap-[1vw] bg-white p-[1vw] rounded-sm">
        <div className="flex justify-between items-center">
          <p className="fs-16 font-[700]">Wallet</p>
        </div>
        <div className="grid grid-cols-2 gap-[1.4vw] mt-[1vw] *:flex *:flex-col *:justify-center *:items-center *:gap-[0.1vw] *:border *:px-[1vw] *:py-[1.8vw] *:rounded-[0.4vw]">
          <div className="">
            <p className="fs-24 font-bold">
              ${wallet.balance.toLocaleString()}
            </p>
            <p className="fs-14 font-bold text-[#8F97A2]">Available Balance</p>
          </div>
          <div className="">
            <p className="fs-24 font-bold">{wallet.points}</p>
            <p className="fs-14 font-bold text-[#8F97A2]">Mobit Points</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialCards;
