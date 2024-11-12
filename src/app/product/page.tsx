"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import company from "../../../public/images/company.png";
import ProjectTable from "@/components/product/ProjectTable";
import { Dropdown, Input, Button, Space, MenuProps } from "antd";
import { SearchOutlined, FilterOutlined, CaretDownOutlined } from "@ant-design/icons";

// Define the structure of project details for TypeScript
interface Project {
  name: string;
  connectionStatus: string;
  healthIndicator: string;
}

export default function Products() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSortKey, setSelectedSortKey] = useState<string | null>(null);
  const [selectedFilterKey, setSelectedFilterKey] = useState<string[]>([]);
  const [projectDetails, setProjectDetails] = useState<Project[]>([]);
  const [filteredData, setFilteredData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_JSON_SERVER}/chainaas_projectDetails`);
        const data = await response.json();

        setProjectDetails(data);
        setFilteredData(data);

      } catch (error) {
        console.error("Failed to fetch project data", error);
      }
    };

    fetchProductDetails();
  }, []);

  // Update filtered data whenever sort, filter, or search criteria change
  useEffect(() => {
    updateFilteredData();
  }, [selectedSortKey, selectedFilterKey, searchTerm, projectDetails]);

  const sortMenuItems: MenuProps["items"] = [
    { key: "Active", label: "Active" },
    { key: "Inactive", label: "Inactive" },
  ];

  const filterMenuItems: MenuProps["items"] = [
    { key: "Operational", label: "Operational" },
    { key: "Caution", label: "Caution" },
    { key: "Critical", label: "Critical" },
  ];

  // Filter, sort, and search data
  const updateFilteredData = () => {
    let updatedData = Array.isArray(projectDetails) ? [...projectDetails] : [];

    if (selectedSortKey) {
      updatedData = updatedData.filter(
        (item) => item.connectionStatus === selectedSortKey
      );
    }

    if (selectedFilterKey.length > 0) {
      updatedData = updatedData.filter((item) =>
        selectedFilterKey.includes(item.healthIndicator)
      );
    }

    if (searchTerm) {
      updatedData = updatedData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(updatedData);
  };

  // Sort menu selection handler
  const handleSortMenuClick = (e: any) => {
    setSelectedSortKey(e.key === selectedSortKey ? null : e.key);
  };

  // Filter menu selection handler
  const handleFilterMenuClick = (e: any) => {
    const key = e.key;
    setSelectedFilterKey((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  // Search input handler
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-full h-full bg-white">
      <div className="w-full flex justify-between items-center pt-[1vw] px-[1vw]">
        <p className="font-medium fs-20">Projects</p>
        <div className="flex justify-center items-center gap-[0.4vw]">
          <Image className="w-[2vw]" src={company} alt="companyLogo" />
          <p className="font-normal fs-14">NBC</p>
        </div>
      </div>

      <div className="w-full flex justify-end items-center my-[0.4vw] px-[1vw]">
        <div className="flex justify-center gap-[1vw] items-center">
          <div className="relative">
            {searchVisible ? (
              <Input
                placeholder="Search by Name"
                className="search-input"
                onBlur={() => setSearchVisible(false)}
                onChange={handleSearch}
                autoFocus
              />
            ) : (
              <SearchOutlined
                className="cursor-pointer border p-[0.51vw] border-[#D9D9D9] opacity-45"
                onClick={() => setSearchVisible(true)}
                style={{ fontSize: "1vw" }}
              />
            )}
          </div>

          <Dropdown
            overlayClassName="custom-dropdown"
            menu={{ items: sortMenuItems, onClick: handleSortMenuClick }}
            trigger={["click"]}
          >
            <Button>
              <Space className="flex justify-center items-center opacity-45">
                <p className="fs-14"> Sort By</p>
                <CaretDownOutlined style={{ fontSize: "1vw" }} />
              </Space>
            </Button>
          </Dropdown>

          <Dropdown
            overlayClassName="custom-dropdown"
            menu={{ items: filterMenuItems, onClick: handleFilterMenuClick }}
            trigger={["click"]}
          >
            <Button>
              <Space className="flex justify-center items-center opacity-45">
                <FilterOutlined style={{ fontSize: "1vw" }} />
                <p className="fs-14"> Filters</p>
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>

      <div className="w-full h-full bg-[#F5F6F7] overflow-auto scrollBar">
        <ProjectTable data={filteredData} />
      </div>
    </div>
  );
}
