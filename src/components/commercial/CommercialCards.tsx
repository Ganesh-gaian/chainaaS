// components/CommercialCards.tsx

import React from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";

// Define interface for the data
interface EarningsData {
    lastMonth: number;
    quarterly: number;
    yearly: number;
    growthPercentage: number;
}

interface WalletData {
    balance: number;
    points: number;
}

const CommercialCards: React.FC = () => {
    // Earnings and Wallet data
    const earnings: EarningsData = {
        lastMonth: 2368,
        quarterly: 42368,
        yearly: 237368,
        growthPercentage: 70.5,
    };

    const wallet: WalletData = {
        balance: 5000,
        points: 368,
    };

    // Dropdown menu for the Application dropdown
    const menu = (
        <Menu>
            <Menu.Item key="1">Application 1</Menu.Item>
            <Menu.Item key="2">Application 2</Menu.Item>
            <Menu.Item key="3">Application 3</Menu.Item>
        </Menu>
    );

    return (
        <div className="flex justify-between items-start p-6 bg-white rounded-lg shadow-md">
            {/* Earnings Section */}
            <div className="flex flex-col space-y-6">
                <Dropdown overlay={menu}>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold" onClick={(e) => e.preventDefault()}>
                        Application <DownOutlined />
                    </a>
                </Dropdown>

                <div className="grid grid-cols-3 gap-6">
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <p className="text-xl font-semibold">${earnings.lastMonth.toLocaleString()}</p>
                        <p className="text-sm text-gray-500">Last Month</p>
                        <p className="text-sm text-green-500">▲ {earnings.growthPercentage}%</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <p className="text-xl font-semibold">${earnings.quarterly.toLocaleString()}</p>
                        <p className="text-sm text-gray-500">Quarterly</p>
                        <p className="text-sm text-green-500">▲ {earnings.growthPercentage}%</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <p className="text-xl font-semibold">${earnings.yearly.toLocaleString()}</p>
                        <p className="text-sm text-gray-500">Yearly</p>
                        <p className="text-sm text-green-500">▲ {earnings.growthPercentage}%</p>
                    </div>
                </div>
            </div>

            {/* Wallet Section */}
            <div className="flex flex-col space-y-6">
                <div className="p-4 bg-gray-100 rounded-lg">
                    <p className="text-xl font-semibold">${wallet.balance.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Available Balance</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                    <p className="text-xl font-semibold">{wallet.points}</p>
                    <p className="text-sm text-gray-500">Mobit Points</p>
                </div>
            </div>
        </div>
    );
};

export default CommercialCards;
