// components/IncidentLog.tsx

import React, { useState } from "react";
import { Table, Pagination, Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";

// Define interface for incident data
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
    // Incident data
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

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

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
                        severity === "Critical" ? "text-red-500 font-bold" : "text-yellow-500 font-bold"
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

    // Dropdown menu for sorting/filtering options
    const menu = (
        <Menu>
            <Menu.Item key="1">Recent</Menu.Item>
            <Menu.Item key="2">Oldest</Menu.Item>
            <Menu.Item key="3">Critical</Menu.Item>
            <Menu.Item key="4">Minor</Menu.Item>
        </Menu>
    );

    // Handle pagination change
    const onPageChange = (page: number, pageSize: number) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Incident Log</h2>
                <Dropdown overlay={menu}>
                    <Button>
                        Recent <DownOutlined />
                    </Button>
                </Dropdown>
            </div>
            <Table
                columns={columns}
                dataSource={initialData}
                pagination={false} // We will use custom pagination
            />
            <div className="mt-4 flex justify-end">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={50} // Assuming there are more data entries
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
