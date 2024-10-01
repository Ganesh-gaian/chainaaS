"use client";

import Image from "next/image";
import Link from "next/link";
import company from "../../../public/images/company.png";
import { usePathname } from "next/navigation";
import { Dropdown, MenuProps, Input, DatePicker, Button, Space } from "antd";
import { useState } from "react";
import { SearchOutlined, DownloadOutlined, DownOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

// Dropdown menu items
const menuItems: MenuProps['items'] = [
  {
    key: "1",
    label: "Active",
  },
  {
    key: "2",
    label: "Work in Progress",
  },
  {
    key: "3",
    label: "Proposed",
  },
];

// Sub-navigation items
const subNavItems = [
  {
    name: "Performance",
    location: "/dashboard/performance",
  },
  {
    name: "Incident",
    location: "/dashboard/incident",
  },
  {
    name: "Projects",
    location: "/dashboard/project",
  },
  {
    name: "Commercial",
    location: "/dashboard/commercial",
  },
];

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // State for search visibility
  const [searchVisible, setSearchVisible] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1"); // Default selected key for dropdown
  const [selectedYear, setSelectedYear] = useState(dayjs()); // Set current date object as default

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setSelectedKey(e.key); // Set the selected key on dropdown option click
  };

  // Custom date picker for selecting year only
  const handleYearChange = (date: any) => {
    if (date) {
      setSelectedYear(date); // Set selected year when user changes it
    } else {
      setSelectedYear(dayjs()); // If the year is cleared, fallback to the current year
    }
  };

  // Disable future years in the date picker
  const disableFutureDates = (current: dayjs.Dayjs) => {
    return current && current.year() > dayjs().year(); // Disable all years greater than the current year
  };

  return (
    <div className='w-full h-full bg-white '>
      <div className="w-full flex justify-between items-center pt-[1vw] px-[1vw]">
        <p className="font-bold">Broadcaster Dashboard</p>
        <div className="flex justify-center items-center gap-[0.4vw]">
          <Image src={company} alt="companyLogo" />
          <p>NBC</p>
        </div>
      </div>

      {/* SubNav */}
      <div className="w-full flex justify-between items-center my-[0.4vw] px-[1vw]">
        {/* navLinks */}
        <div className="flex justify-center items-center gap-[1.2vw] ">
          {subNavItems.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-[0.4vw]">
                {/* color condition on active */}
                <Link
                  href={item.location}
                  className={
                    pathname === item.location ? "text-bold text-[#1890FF] text-[16px]" : "text-[16px]"
                  }
                >
                  {item.name}
                </Link>
                <div
                  className={
                    pathname === item.location
                      ? "w-full h-[0.2vh] bg-[#1890FF]"
                      : "w-full h-[0.2vh] bg-transparent"
                  }
                ></div>
              </div>
            );
          })}
        </div>

        {/* Action Icons */}
        <div className="flex gap-[1vw] items-center">
          {/* Search */}
          <div className="relative">
            {searchVisible ? (
              <Input
                placeholder="Search"
                className="search-input"
                onBlur={() => setSearchVisible(false)} // Close the search input when it loses focus
                autoFocus
              />
            ) : (
              <SearchOutlined
                className="cursor-pointer"
                onClick={() => setSearchVisible(true)}
                style={{ fontSize: '16px' }}
              />
            )}
          </div>

          {/* Dropdown with Down Arrow Icon */}
          <Dropdown
            overlayClassName="custom-dropdown"
            menu={{ items: menuItems, onClick: handleMenuClick }}
            trigger={['click']}
          >
            <Button>
              <Space>
                {menuItems.find(item => item?.key === selectedKey)?.label}
                <DownOutlined /> {/* Adding the down arrow icon here */}
              </Space>
            </Button>
          </Dropdown>

          {/* Year Picker (using DatePicker with year selection only) */}
          <DatePicker
            picker="year"
            onChange={handleYearChange}
            value={selectedYear} // Show the selected year or current year
            defaultValue={dayjs()} // Set the current year as the default
            disabledDate={disableFutureDates} // Disable future years
          />

          {/* Download Button */}
          <Button
            icon={<DownloadOutlined />}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            Generate Report
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="w-full h-full bg-[#F5F6F7] overflow-hidden">{children}</div>
    </div>
  );
}
