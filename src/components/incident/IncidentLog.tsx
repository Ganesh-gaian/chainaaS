"use client";
import React, { useState, useEffect } from "react";
import { Table, Pagination, Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

interface incidentsProps {
  incidents: any
}

const IncidentLog: React.FC<incidentsProps> = ({ incidents }) => {
  const [filteredData, setFilteredData] = useState<[] | any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [sortOption, setSortOption] = useState("Recent");

  // Dropdown menu for sort/filter options
  const menu = (
    <Menu onClick={(e) => setSortOption(e.key)} selectedKeys={[sortOption]}>
      <Menu.Item key="Recent">Recent</Menu.Item>
      <Menu.Item key="Oldest">Oldest</Menu.Item>
      <Menu.Item key="Critical">Critical</Menu.Item>
      <Menu.Item key="Minor">Minor</Menu.Item>
    </Menu>
  );

  // Handle pagination change
  const onPageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  // Update filtered data based on sort and filter options
  useEffect(() => {
    if (!incidents) return;

    let updatedData = [...incidents];

    // Sorting and filtering logic
    if (sortOption === "Critical") {
      updatedData = updatedData.filter((item) => item.severity === "Critical");
    } else if (sortOption === "Minor") {
      updatedData = updatedData.filter((item) => item.severity === "Minor");
    } else {
      updatedData = updatedData.sort((a, b) => {
        return sortOption === "Recent"
          ? new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          : new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
      });
    }

    setFilteredData(updatedData);
  }, [sortOption, incidents]);

  // Define columns for the table
  const columns = [
    {
      title: "Incident ID",
      dataIndex: "incidentId",
      key: "incidentId",
      className: "fs-14 p-16",
    },
    {
      title: "Time stamp",
      dataIndex: "timestamp",
      key: "timestamp",
      className: "fs-14 p-16",
    },
    {
      title: "Severity",
      dataIndex: "severity",
      key: "severity",
      className: "fs-14 p-16",
      render: (severity: string) => (
        <>
          <span
            className={`font-bold mr-[0.2vw] ${severity === "Critical" ? "text-red-500" : "text-yellow-500"
              }`}
          >
            ●
          </span>
          {severity}
        </>
      ),
    },
    {
      title: "App Affected",
      dataIndex: "appAffected",
      key: "appAffected",
      className: "fs-14 p-16",
      render: (appAffected: string) => (
        <a className="text-blue-500 underline">{appAffected}</a>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      className: "fs-14 p-16",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      className: "fs-14 p-16",
    },
    {
      title: "Assigned Team",
      dataIndex: "team",
      key: "team",
      className: "fs-14 p-16",
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      className: "fs-14 p-16",
    },
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
      className: "fs-14 p-16",
      render: (note: string) => (
        <a className="text-blue-500 underline">{note}</a>
      ),
    },
    {
      title: "Action Taken",
      dataIndex: "actionTaken",
      key: "actionTaken",
      className: "fs-14 p-16",
    },
  ];

  const buttonStyles = {
    fontSize: "0.9722vw",
    padding: "1vw",
    borderRadius: "0.2vw",
    marginLeft: "0.5vw",
  };

  return (
    <div className="p-[1vw] bg-white rounded-sm">
      <div className="flex justify-between items-center mb-[1vw]">
        <h2 className="fs-16 font-medium">Incident Log</h2>
        <Dropdown overlay={menu}>
          <Button style={buttonStyles}>
            {sortOption} <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={false}
        rowKey="key"
      />
      <div className="mt-4 flex justify-end">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          onChange={onPageChange}
          showSizeChanger
          pageSizeOptions={["5", "10", "20"]}
          showQuickJumper
        />
      </div>
    </div>
  );
};

export default IncidentLog;
