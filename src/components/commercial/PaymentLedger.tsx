// components/PaymentLedger.tsx

import React, { useState } from "react";
import { Table, Pagination, Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";

// Define interface for payment data
interface PaymentData {
    key: string;
    paymentId: string;
    timestamp: string;
    amount: string;
    status: string;
    method: string;
    account: string;
    paymentType: string;
}

const PaymentLedger: React.FC = () => {
    // Define payment data
    const initialData: PaymentData[] = [
        {
            key: "1",
            paymentId: "PAY12346",
            timestamp: "2024-09-15, 14:30:00",
            amount: "$2,368",
            status: "Paid",
            method: "Wallet",
            account: "Spectrum Solutions Inc.",
            paymentType: "Mobit",
        },
        {
            key: "2",
            paymentId: "PAY12345",
            timestamp: "2024-09-16, 10:15:00",
            amount: "$5,000",
            status: "Pending",
            method: "Bank Transfer",
            account: "ARK Multicasting",
            paymentType: "Dollar",
        },
        {
            key: "3",
            paymentId: "PAY12348",
            timestamp: "2024-09-17, 09:00:00",
            amount: "$13,000",
            status: "Paid",
            method: "PayPal",
            account: "ARK Multicasting",
            paymentType: "Dollar",
        },
        {
            key: "4",
            paymentId: "PAY12323",
            timestamp: "2024-09-18, 16:45:00",
            amount: "$2,390",
            status: "Paid",
            method: "Bank Transfer",
            account: "ARK Multicasting",
            paymentType: "Dollar",
        },
        {
            key: "5",
            paymentId: "PAY12316",
            timestamp: "2024-09-19, 09:20:00",
            amount: "$3,200",
            status: "Paid",
            method: "Credit Card",
            account: "ARK Multicasting",
            paymentType: "Dollar",
        },
    ];

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    // Define columns for the table
    const columns = [
        {
            title: "Payment ID",
            dataIndex: "paymentId",
            key: "paymentId",
        },
        {
            title: "Time stamp",
            dataIndex: "timestamp",
            key: "timestamp",
        },
        {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
        },
        {
            title: "Payment Status",
            dataIndex: "status",
            key: "status",
            render: (status: string) => (
                <span
                    className={status === "Pending" ? "text-red-500" : "text-green-500"}
                >
                    {status}
                </span>
            ),
        },
        {
            title: "Payment Method",
            dataIndex: "method",
            key: "method",
        },
        {
            title: "Account",
            dataIndex: "account",
            key: "account",
        },
        {
            title: "Payment Type",
            dataIndex: "paymentType",
            key: "paymentType",
        },
    ];

    // Dropdown menu for sorting/filtering options
    const menu = (
        <Menu>
            <Menu.Item key="1">Recent</Menu.Item>
            <Menu.Item key="2">Oldest</Menu.Item>
            <Menu.Item key="3">Pending</Menu.Item>
            <Menu.Item key="4">Paid</Menu.Item>
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
                <h2 className="text-lg font-semibold">Payment Ledger</h2>
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
                    total={50} // Assuming there are more data
                    onChange={onPageChange}
                    showSizeChanger
                    pageSizeOptions={["5", "10", "20"]}
                    showQuickJumper
                />
            </div>
        </div>
    );
};

export default PaymentLedger;
