"use client"
import { useState } from "react";
import Image from "next/image"
import izakLogo from "../../../public/images/izakLogo.png"

// Ant design components:
import { Space, Select } from "antd"
import { DownOutlined } from '@ant-design/icons';

export default function PerformanceCard() {

    const appDetails = {
        name: "iZak",
        logo: "",
        description: "Home Automation / IoT Solution",
        deploymentDate: "January 10, 2023",
        users: "120,000",
        engagement: "",
        location: "New York",
        upTime: "99.8"
    }

    // Ant design 
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];

    // Get the current month index (0 - January, 11 - December)
    const currentMonthIndex = new Date().getMonth();

    // State to manage the selected month
    const [selectedMonth, setSelectedMonth] = useState(currentMonthIndex);

    // Handle when a user selects a different month
    const handleChange = (value: number) => {
        setSelectedMonth(value);
    };

    return (
        <div className="p-[1.2vw] flex flex-col gap-[1.4vw] bg-white rounded-sm">
            <div className="w-full flex justify-between items-center">
                <p className="font-medium text-[16px] ">Top Performing App</p>
                <Space>
                    <Select
                        value={selectedMonth} // Set the default selected month
                        onChange={handleChange} // Handle month change
                        style={{ width: 120 }} // Set the width of the dropdown
                        suffixIcon={<DownOutlined />} // Add down arrow icon
                    >
                        {months.map((month, index) => (
                            <Select.Option key={index} value={index}>
                                {month}
                            </Select.Option>
                        ))}
                    </Select>
                </Space>
            </div>
            <div className="flex gap-[1.2vw] my-[0.4vw]">
                <Image src={izakLogo} alt="iZakLogo" />
                <div >
                    <p className="font-medium text-[16px]">{appDetails.name}</p>
                    <p className="opacity-40 text-[12px]">{appDetails.description}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 ">
                <div className="">
                    <div className="opacity-40 text-[12px]">Deploment Date</div>
                    <div className="text-[14px]">{appDetails.deploymentDate}</div>
                </div>
                <div className="">
                    <div className="opacity-40 text-[12px]">Daily Active Users</div>
                    <div className="text-[14px]">{`${appDetails.users}+ users per day`}</div>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="">
                    <div className="opacity-40 text-[12px]">Engagement Rate</div>
                    <div className="text-[14px]">{appDetails.deploymentDate}</div>
                </div>
                <div className="">
                    <div className="opacity-40 text-[12px]">Geographic Reach</div>
                    <div className="text-[14px]">{appDetails.location}</div>
                </div>
            </div>
            <div className="flex gap-[0.4vw] *:text-[12px]">
                <div>Uptime</div>
                <div className="flex items-center gap-[0.1vw]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M8.38784 6.72827L5.1808 3.00952C5.08901 2.90308 4.91225 2.90308 4.81948 3.00952L1.61244 6.72827C1.4933 6.86694 1.60073 7.07007 1.79311 7.07007H8.20717C8.39955 7.07007 8.50698 6.86694 8.38784 6.72827Z" fill="#52C41A" />
                    </svg>
                    <p className="text-[#52C41A]">{`${appDetails.upTime}%`}</p>
                </div>
            </div>
        </div>
    )
}
