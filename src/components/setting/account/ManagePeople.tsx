"use client"
import { Table, Tag, Space, Button, Input } from 'antd';
import { EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import CustomSelect from '../reuseableComponent/CustomSelect';
import CustomButton from '../reuseableComponent/CustomButton';

// Data source for the table
const dataSource = [
    {
        key: '1',
        name: 'Nguyen Shane',
        email: 'felicia.reid@example.com',
        role: 'Admin',
        lastUpdated: 'May 12, 2019',
    },
    {
        key: '2',
        name: 'Henry Arthur',
        email: 'tanya.hill@example.com',
        role: 'Read',
        lastUpdated: 'October 31, 2017',
    },
    {
        key: '3',
        name: 'Henry Arthur',
        email: 'nevaeh.simmons@example.co',
        role: 'Write',
        lastUpdated: 'July 14, 2015',
    },
    {
        key: '4',
        name: 'Miles Esther',
        email: 'michael.mitc@example.com',
        role: 'Write',
        lastUpdated: 'May 31, 2015',
    },
    {
        key: '5',
        name: 'Black Marvin',
        email: 'willie.jennings@example.com',
        role: 'Read',
        lastUpdated: 'August 24, 2013',
    },
    {
        key: '6',
        name: 'Flores Juanita',
        email: 'michelle.rivera@example.com',
        role: 'Read',
        lastUpdated: 'December 2, 2018',
    },
    {
        key: '7',
        name: 'Miles Esther',
        email: 'jessica.hanson@example.com',
        role: 'Read',
        lastUpdated: 'November 7, 2017',
    },
    {
        key: '8',
        name: 'Flores Juanita',
        email: 'bill.sanders@example.com',
        role: 'Read',
        lastUpdated: 'August 7, 2017',
    },
    {
        key: '9',
        name: 'Miles Esther',
        email: 'nathan.roberts@example.com',
        role: 'Read',
        lastUpdated: 'December 29, 2012',
    },
    {
        key: '10',
        name: 'Cooper Kristin',
        email: 'debbie.baker@example.com',
        role: 'Write',
        lastUpdated: 'May 9, 2014',
    },
];

// Main Component
const ManagePeople: React.FC = () => {
    // State for filtering email and role
    const [searchEmail, setSearchEmail] = useState('');
    const [searchRole, setSearchRole] = useState('');
    const [status, setStatus] = useState('All Status');

    const handleMenuClick = (e: any) => {
        setStatus(e.key);  // Update the status based on the dropdown selection
    };

    const menu = [
        {
            label: "All Status",
            value: "All Status",
        },
        {
            label: "Active",
            value: "Active",
        },
        {
            label: "Inactive",
            value: "Inactive",
        },
    ]

    // Table Columns with filters and sorting functionality
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            className: "fs-14 p-16",
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a: any, b: any) => a.email.localeCompare(b.email),
            className: "fs-14 p-16",
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            render: (role: string) => {
                let color = '';
                let fontSize = "0.9722vw";
                if (role === 'Admin') color = 'blue';
                if (role === 'Read') color = 'orange';
                if (role === 'Write') color = 'green';
                return <Tag style={{ fontSize }} color={color}>{role}</Tag>;
            },
            filters: [
                { text: 'Admin', value: 'Admin' },
                { text: 'Read', value: 'Read' },
                { text: 'Write', value: 'Write' },
            ],
            onFilter: (value: any, record: any) => record.role.includes(value),
            className: "fs-14 p-16",
        },
        {
            title: 'Last Updated',
            dataIndex: 'lastUpdated',
            key: 'lastUpdated',
            className: "fs-14 p-16",
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: any) => (
                <Space size="middle" style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
                    <Button
                        icon={<EditOutlined />}
                        type="text"
                        className='managePeople'
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        type="text"
                        className='managePeople'
                    />
                </Space>
            ),
            className: "fs-14 p-16",
        },
    ];

    // Function to handle filtered data
    const filteredData = dataSource.filter(
        (item) =>
            item.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
            item.role.toLowerCase().includes(searchRole.toLowerCase())
    );

    return (
        <div className="w-[96%] h-full bg-white rounded-sm p-[1vw]">
            <div>
                <div className='flex justify-between items-center'>
                    <p className="fs-16 font-medium">Manage People</p>
                    <div className="flex items-center gap-[1vw]">
                        {/* Dropdown for status */}
                        <div className='w-[9vw] *:rounded-[0.8vw]'>
                            <CustomSelect
                                options={menu}
                                selectedValue={status}
                                onSelect={setStatus}
                            />
                        </div>

                        {/* Search input with search icon */}
                        <Input
                            className="w-1/2"
                            placeholder="input search text"
                            suffix={<SearchOutlined />}
                            style={{
                                borderRadius: "0.4vw",
                                width: "16.8vw",
                                height: "2.22vw",
                                fontSize: "0.9722vw",
                                paddingLeft: "0.833vw",
                            }}
                        />
                    </div>
                </div>
                <div className="flex justify-between my-[1vw]">
                    <div className="w-1/3">
                        <Input
                            placeholder="Search by Email"
                            value={searchEmail}
                            onChange={(e) => setSearchEmail(e.target.value)}
                            style={{
                                borderRadius: "0.4vw",
                                width: "16.8vw",
                                height: "2.22vw",
                                fontSize: "0.9722vw",
                                paddingLeft: "0.833vw",
                            }}
                        />
                    </div>
                    {/* <div className="w-1/3">
                        <Input
                            placeholder="Search by Role"
                            value={searchRole}
                            onChange={(e) => setSearchRole(e.target.value)}
                            className="border rounded-lg p-2 w-full"
                        />
                    </div> */}

                    <CustomButton
                        text="Invite"
                        type="primary"
                        width="8vw"
                        height="2.22vw"
                        fontSize="0.9722vw"
                        borderRadius="0.4vw"
                        color="#ffffff"
                    />

                </div>
            </div>
            <div className='h-[52vh] overflow-auto scrollBar'>
                <Table
                    columns={columns}
                    dataSource={filteredData}
                    pagination={{ pageSize: 10, total: filteredData.length }}
                    rowClassName={"fs-14 text-[#323E4F]"}
                />
            </div>

        </div>
    );
};

export default ManagePeople;
