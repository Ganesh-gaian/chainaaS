"use client"
import React, { useState, useEffect } from "react";
import { Table, Pagination, Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

interface IncidentData {
    key: string;
    incidentId: string;
    timestamp: string;
    severity: string;
    appAffected: string;
    description: string;
    status: string;
    team: string;
    tags: string;
    note: string;
    actionTaken: string;
}

const IncidentLog: React.FC = () => {
    // Initial Incident Data
    const initialData: IncidentData[] = [
        {
            key: "1",
            incidentId: "INC12345",
            timestamp: "2024-09-15, 14:30:00",
            severity: "Critical",
            appAffected: "Izak",
            description: "Server outage during deployment",
            status: "Open",
            team: "DevOps Team",
            tags: "Infrastructure",
            note: "View",
            actionTaken: "Restarted server, investigated logs",
        },
        {
            key: "2",
            incidentId: "INC12346",
            timestamp: "2024-09-16, 10:15:00",
            severity: "Critical",
            appAffected: "Museo",
            description: "Data processing slowdown",
            status: "Open",
            team: "Data Team",
            tags: "Performance",
            note: "View",
            actionTaken: "Checked database queries, optimized",
        },
        {
            key: "3",
            incidentId: "INC12347",
            timestamp: "2024-09-17, 09:00:00",
            severity: "Critical",
            appAffected: "Amplyfund",
            description: "UI glitch on login screen",
            status: "Open",
            team: "Frontend Team",
            tags: "UI/UX",
            note: "View",
            actionTaken: "Cleared browser cache, CSS fix",
        },
        {
            key: "4",
            incidentId: "INC12348",
            timestamp: "2024-09-18, 16:45:00",
            severity: "Minor",
            appAffected: "Hear, Here",
            description: "Database connection error",
            status: "Open",
            team: "Backend Team",
            tags: "Connectivity",
            note: "View",
            actionTaken: "Checked logs, restarted service",
        },
        {
            key: "5",
            incidentId: "INC12349",
            timestamp: "2024-09-19, 09:20:00",
            severity: "Minor",
            appAffected: "Hear, Here",
            description: "Security, Vulnerability",
            status: "Open",
            team: "Security Team",
            tags: "Security",
            note: "View",
            actionTaken: "Isolated affected module, applied patch",
        },
    ];

    // State for current data, sort/filter option, and pagination
    const [filteredData, setFilteredData] = useState<IncidentData[]>(initialData);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [sortOption, setSortOption] = useState("Recent");

    // Dropdown menu for sorting/filtering options
    const menu = (
        <Menu
            onClick={(e) => setSortOption(e.key)}
            selectedKeys={[sortOption]}
        >
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

    // Effect to filter and sort data based on the dropdown selection
    useEffect(() => {
        let updatedData = [...initialData]; // Start with the initial data

        if (sortOption === "Critical") {
            updatedData = updatedData.filter(item => item.severity === "Critical");
        } else if (sortOption === "Minor") {
            updatedData = updatedData.filter(item => item.severity === "Minor");
        } else if (sortOption === "Recent") {
            updatedData = updatedData.sort(
                (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
            );
        } else if (sortOption === "Oldest") {
            updatedData = updatedData.sort(
                (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
            );
        }

        setFilteredData(updatedData);
    }, [sortOption]); // Trigger this effect when the sortOption changes

    // Define columns for the table
    const columns = [
        {
            title: "Incident ID",
            dataIndex: "incidentId",
            key: "incidentId",
        },
        {
            title: "Time stamp",
            dataIndex: "timestamp",
            key: "timestamp",
        },
        {
            title: "Severity",
            dataIndex: "severity",
            key: "severity",
            render: (severity: string) => (
                <span
                    className={
                        severity === "Critical"
                            ? "text-red-500 font-bold"
                            : "text-yellow-500 font-bold"
                    }
                >
                    {severity === "Critical" ? "● Critical" : "● Minor"}
                </span>
            ),
        },
        {
            title: "App Affected",
            dataIndex: "appAffected",
            key: "appAffected",
            render: (appAffected: string) => (
                <a className="text-blue-500 underline">{appAffected}</a>
            ),
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Assigned Team",
            dataIndex: "team",
            key: "team",
        },
        {
            title: "Tags",
            dataIndex: "tags",
            key: "tags",
        },
        {
            title: "Note",
            dataIndex: "note",
            key: "note",
            render: (note: string) => <a className="text-blue-500 underline">{note}</a>,
        },
        {
            title: "Action Taken",
            dataIndex: "actionTaken",
            key: "actionTaken",
        },
    ];

    return (
        <div className="p-[1vw] bg-white rounded-sm">
            <div className="flex justify-between items-center mb-[1vw]">
                <h2 className="text-lg font-semibold">Incident Log</h2>
                <Dropdown overlay={menu}>
                    <Button>
                        {sortOption} <DownOutlined />
                    </Button>
                </Dropdown>
            </div>
            <Table
                columns={columns}
                dataSource={filteredData}
                pagination={false} // We will use custom pagination
                rowClassName={(record, index) =>
                    index % 2 === 0 ? "bg-gray-50" : "" // Alternate row colors
                }
            />
            <div className="mt-4 flex justify-end">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={filteredData.length} // Update pagination based on filtered data
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
