"use client";

import Image from "next/image";
import Link from "next/link";
import company from "../../../public/images/company.png";
import { usePathname } from "next/navigation";
import { Dropdown, Input, DatePicker, Button, Space } from "antd";
import { useState } from "react";
import {
  SearchOutlined,
  DownloadOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

// Dropdown menu items
const menuItems = [
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
    id: "nav_performance",
    location: "/dashboard/performance",
  },
  {
    name: "Incident",
    id: "nav_incident",
    location: "/dashboard/incident",
  },
  {
    name: "Projects",
    id: "nav_projects",
    location: "/dashboard/project",
  },
  {
    name: "Commercial",
    id: "nav_commercial",
    location: "/dashboard/commercial",
  },
];

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // State for search visibility
  const [searchVisible, setSearchVisible] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  const [selectedYear, setSelectedYear] = useState(dayjs());

  const handleMenuClick = (e: any) => {
    setSelectedKey(e.key);
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
  const selectedItem = menuItems?.find((item) => item?.key === selectedKey);
  return (
    <div className="w-full h-full bg-white ">
      <div className="w-full h-[7%] flex justify-between items-center pt-[1vw] px-[1vw]">
        <p className="font-medium fs-20">Broadcaster Dashboard</p>
        <div className="flex justify-center items-center gap-[0.4vw]">
          <Image className="w-[2vw]" src={company} alt="companyLogo" />
          <p className="font-normal fs-14">NBC</p>
        </div>
      </div>
      <div className="w-full h-[5%] flex justify-between items-center my-[0.4vw] px-[1vw]">
        {/* navLinks */}
        <div className="flex justify-center items-center gap-[1.2vw] ">
          {subNavItems.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-[0.4vw]">
                {/* color condition on active */}
                <Link
                  href={item.location}
                  id={item.id}
                  className={
                    pathname === item.location
                      ? "text-bold text-[#1890FF] fs-16"
                      : " fs-16"
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
                onBlur={() => setSearchVisible(false)}
                autoFocus
                style={{
                  borderRadius: "0.14vw",
                  width: "16vw",
                  // height: "2vw",
                  fontSize: "0.9722vw",
                  paddingLeft: "0.833vw",
                }}
              />
            ) : (
              <SearchOutlined
                className="cursor-pointer border p-[0.51vw] border-[#D9D9D9] opacity-45"
                onClick={() => setSearchVisible(true)}
                style={{ fontSize: "1.1111vw" }}
              />
            )}
          </div>

          {/* Dropdown with Down Arrow Icon */}
          <Dropdown
            overlayClassName="custom-dropdown"
            menu={{ items: menuItems, onClick: handleMenuClick }}
            trigger={["click"]}
          >
            <Button>
              <Space>
                {selectedItem?.label}
                <CaretDownOutlined style={{ fontSize: "1vw",opacity:"0.45" }} />
              </Space>
            </Button>
          </Dropdown>


          <DatePicker
            picker="year"
            onChange={handleYearChange}
            value={selectedYear}
            defaultValue={dayjs()}
            disabledDate={disableFutureDates}
            style={{
              width: "11vw",
              fontSize: "0.9722vw",
            }}
          />

          {/* Download Button */}
          <Button
            icon={<DownloadOutlined />}
            style={{
              display: "flex",
              alignItems: "center",
              width: "11vw",
              fontSize: "0.9722vw",
            }}
          >
            Generate Report
          </Button>
        </div>
      </div>
      <div className="w-full h-[88%] overflow-hidden bg-[#F5F6F7]">
        {" "}
        {children}
      </div>
    </div>
  );
}
