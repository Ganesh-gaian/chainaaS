"use client";

import React, { useState } from "react";
import Image from "next/image";
import company from "../../../public/images/company.png";
import ProjectTable from "@/components/product/ProjectTable";
import { Dropdown, Input, Button, Space, MenuProps } from "antd";
import { SearchOutlined, DownOutlined, FilterOutlined, SortAscendingOutlined } from "@ant-design/icons";

export default function Products() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [selectedSortKey, setSelectedSortKey] = useState<string | null>("ascend");
  const [selectedFilterKey, setSelectedFilterKey] = useState<string[]>(["Operational"]); // Defaults to "Operational"

  // Sorting menu items
  const sortMenuItems: MenuProps['items'] = [
    {
      key: "Active",
      label: "Active",
    },
    {
      key: "Inactive",
      label: "Inactive",
    },
  ];

  // Filtering menu items
  const filterMenuItems: MenuProps['items'] = [
    {
      key: "Operational",
      label: "Operational",
    },
    {
      key: "Caution",
      label: "Caution",
    },
    {
      key: "Critical",
      label: "Critical",
    },
  ];

  // Handle sorting menu selection
  const handleSortMenuClick = (e: any) => {
    setSelectedSortKey(e.key);
    console.log("Selected sort option: ", e.key);
  };

  // Handle filter menu selection
  const handleFilterMenuClick = (e: any) => {
    const key = e.key;
    setSelectedFilterKey(prev => prev.includes(key) ? prev.filter(item => item !== key) : [...prev, key]);
    console.log("Selected filter option: ", selectedFilterKey);
  };

  return (
    <div className="w-full h-full bg-white">
      {/* Top Bar with Title and Company Logo */}
      <div className="w-full flex justify-between items-center pt-[1vw] px-[1vw]">
        <p className="font-bold text-lg">Projects</p>
        <div className="flex justify-center items-center gap-[0.4vw]">
          <Image src={company} alt="companyLogo" width={30} height={30} />
          <p className="font-medium text-base">NBC</p>
        </div>
      </div>

      {/* Action Icons Section */}
      <div className="w-full flex justify-end items-center my-[0.4vw] px-[1vw]">
        <div className="flex justify-center gap-[1vw] items-center">
          {/* Search Input */}
          <div className="relative">
            {searchVisible ? (
              <Input
                placeholder="Search"
                className="search-input"
                onBlur={() => setSearchVisible(false)}
                autoFocus
              />
            ) : (
              <SearchOutlined
                className="cursor-pointer"
                onClick={() => setSearchVisible(true)}
                style={{ fontSize: "18px" }}
              />
            )}
          </div>

          {/* Sort Dropdown */}
          <Dropdown
            overlayClassName="custom-dropdown"
            menu={{ items: sortMenuItems, onClick: handleSortMenuClick }}
            trigger={["click"]}
          >
            <Button>
              <Space>
                Sort By
                <SortAscendingOutlined style={{ fontSize: "18px" }} />
              </Space>
            </Button>
          </Dropdown>

          {/* Filter Dropdown */}
          <Dropdown
            overlayClassName="custom-dropdown"
            menu={{ items: filterMenuItems, onClick: handleFilterMenuClick }}
            trigger={["click"]}
          >
            <Button>
              <Space>
                Filters
                <FilterOutlined style={{ fontSize: "18px" }} />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-full h-full bg-[#F5F6F7] overflow-hidden">
        <ProjectTable
          sortConnectionStatus={selectedSortKey as "ascend" | "descend"}
          filterHealthIndicator={selectedFilterKey}
        />
      </div>
    </div>
  );
}
