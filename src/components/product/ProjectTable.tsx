"use client";
import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";

// Define the interface for the table data
interface Project {
    key: string;
    name: string;
    description: string;
    version: string;
    broadcastTower: string;
    healthIndicator: string;
    deploymentDate: string;
    region: string;
    connectionStatus: string;
}

// Define the props interface
interface ProjectTableProps {
    sortConnectionStatus: "ascend" | "descend";
    filterHealthIndicator: string[];
}

// Sample data
const projectData: Project[] = [
    {
        key: "1",
        name: "Izak",
        description: "Lorem ipsum dolor sit",
        version: "v1.2.3",
        broadcastTower: "LAX-A1, ATL-5G",
        healthIndicator: "Operational",
        deploymentDate: "November 28, 2015",
        region: "Saint Barthélemy",
        connectionStatus: "Active",
    },
    {
        key: "2",
        name: "Impress IO",
        description: "Lorem ipsum dolor sit",
        version: "v1.2.2",
        broadcastTower: "DEN-HIGH, ATL-5G",
        healthIndicator: "Caution",
        deploymentDate: "February 11, 2014",
        region: "Sao Tome and Principe",
        connectionStatus: "Inactive",
    },
    {
        key: "3",
        name: "Museo",
        description: "Lorem ipsum dolor sit",
        version: "v2.1",
        broadcastTower: "DEN-HIGH, ATL-5G",
        healthIndicator: "Critical",
        deploymentDate: "March 13, 2014",
        region: "Poland",
        connectionStatus: "Active",
    },
    // Add more data as per your example
];

// Define the Table Columns
const columns: ColumnsType<Project> = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
    },
    {
        title: "Version",
        dataIndex: "version",
        key: "version",
    },
    {
        title: "Broadcast Tower",
        dataIndex: "broadcastTower",
        key: "broadcastTower",
    },
    {
        title: "Health Indicator",
        dataIndex: "healthIndicator",
        key: "healthIndicator",
        render: (health: string) => {
            let color = "green";
            if (health === "Caution") color = "orange";
            if (health === "Critical") color = "red";
            return <Tag color={color}>{health}</Tag>;
        },
    },
    {
        title: "Deployment Date",
        dataIndex: "deploymentDate",
        key: "deploymentDate",
    },
    {
        title: "Region",
        dataIndex: "region",
        key: "region",
    },
    {
        title: "Connection Status",
        dataIndex: "connectionStatus",
        key: "connectionStatus",
        render: (status: string) => {
            let color = status === "Active" ? "green" : "red";
            return <Tag color={color}>{status}</Tag>;
        },
    },
];

// Main component
const ProjectTable: React.FC<ProjectTableProps> = ({
    sortConnectionStatus,
    filterHealthIndicator,
}) => {
    const [filteredData, setFilteredData] = useState<Project[]>(projectData);

    // Apply the sorting and filtering whenever the props change
    useEffect(() => {
        let updatedData = [...projectData];

        // Apply sorting based on connection status
        if (sortConnectionStatus) {
            updatedData.sort((a, b) =>
                sortConnectionStatus === "ascend"
                    ? a.connectionStatus.localeCompare(b.connectionStatus)
                    : b.connectionStatus.localeCompare(a.connectionStatus)
            );
        }

        // Apply filtering based on health indicator
        if (filterHealthIndicator.length > 0) {
            updatedData = updatedData.filter((item) =>
                filterHealthIndicator.includes(item.healthIndicator)
            );
        }

        setFilteredData(updatedData);
    }, [sortConnectionStatus, filterHealthIndicator]);

    return (
        <div className="container mx-auto p-4">
            <Table columns={columns} dataSource={filteredData} pagination={{ pageSize: 10 }} />
        </div>
    );
};

export default ProjectTable;
