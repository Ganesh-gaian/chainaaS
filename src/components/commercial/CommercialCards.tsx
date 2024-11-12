"use client";
import React from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

// Monthly earnings data for each month
const monthlyEarnings = [
  { month: "January", earnings: 5000 },
  { month: "February", earnings: 6000 },
  { month: "March", earnings: 7852 },
  { month: "April", earnings: 6589 },
  { month: "May", earnings: 9000 },
  { month: "June", earnings: 10000 },
  { month: "July", earnings: 11000 },
  { month: "August", earnings: 12000 },
  { month: "September", earnings: 13000 },
  { month: "October", earnings: 14256 },
  { month: "November", earnings: 11605 },
  { month: "December", earnings: 12548 },
];

// Calculate earnings for the last month, last quarter, and last year
const getLastMonthEarnings = () =>
  monthlyEarnings[monthlyEarnings.length - 1].earnings;
const getQuarterlyEarnings = () => {
  const lastThreeMonths = monthlyEarnings.slice(-3);
  return lastThreeMonths.reduce((acc, month) => acc + month.earnings, 0);
};
const getYearlyEarnings = () => {
  return monthlyEarnings.reduce((acc, month) => acc + month.earnings, 0);
};

// Growth percentage (example calculation)
const growthPercentage = 70.5;

interface WalletData {
  balance: number;
  points: number;
}

const CommercialCards: React.FC = () => {
  // Earnings calculations
  const lastMonthEarnings = getLastMonthEarnings();
  const quarterlyEarnings = getQuarterlyEarnings();
  const yearlyEarnings = getYearlyEarnings();

  const wallet: WalletData = {
    balance: 5000,
    points: 368,
  };

  // Dropdown menu for the Application dropdown
  const menu = (
    <Menu>
      <Menu.Item key="1">Application</Menu.Item>
      <Menu.Item key="2">Application</Menu.Item>
      <Menu.Item key="3">Application</Menu.Item>
    </Menu>
  );

  return (
    <div className="w-full flex gap-[1vw]">
      {/* Earnings Section */}
      <div className="w-[60%] flex flex-col gap-[1vw] bg-white p-[1vw] rounded-sm">
        <div className="flex justify-between">
          <p className="font-semibold fs-16">Earnings</p>
          <Dropdown overlay={menu}>
            <a
              className="p-[0.6vw] rounded-sm fs-14 border shadow-sm"
              onClick={(e) => e.preventDefault()}
            >
              Application <DownOutlined />
            </a>
          </Dropdown>
        </div>

        <div className="grid grid-cols-3 gap-[1.4vw] *:flex *:flex-col *:justify-center *:items-center *:gap-[0.1vw] *:border *:p-[1vw] *:rounded-[0.4vw]">
          <div className="">
            <p className="fs-24 font-bold">
              ${lastMonthEarnings.toLocaleString()}
            </p>
            <p className="fs-14 font-bold text-[#8F97A2]">Last Month</p>
            <p className="fs-14 font-semibold text-[#92C521]">
              ▲ {growthPercentage}%
            </p>
          </div>
          <div className="">
            <p className="fs-24 font-semibold">
              ${quarterlyEarnings.toLocaleString()}
            </p>
            <p className="fs-14 font-bold text-[#8F97A2]">Quarterly</p>
            <p className="fs-14 font-semibold text-[#92C521]">
              ▲ {growthPercentage}%
            </p>
          </div>
          <div className="">
            <p className="fs-24 font-semibold">
              ${yearlyEarnings.toLocaleString()}
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
