import React from "react";
import { Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";

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

interface ProjectTableProps {
  data: Project[] | any;
}

const columns: ColumnsType<Project> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    className: "fs-14 p-16",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    className: "fs-14 p-16",
  },
  {
    title: "Version",
    dataIndex: "version",
    key: "version",
    className: "fs-14 p-16",
  },
  {
    title: "Broadcast Tower",
    dataIndex: "broadcastTower",
    key: "broadcastTower",
    className: "fs-14 p-16",
  },
  {
    title: "Health Indicator",
    dataIndex: "healthIndicator",
    key: "healthIndicator",
    render: (health: string) => {
      let color = "green";
      let fontSize = "0.9722vw";
      if (health === "Caution") color = "orange";
      if (health === "Critical") color = "red";
      return (
        <Tag style={{ fontSize }} color={color}>
          {health}
        </Tag>
      );
    },
    className: "fs-14 p-16",
  },
  {
    title: "Deployment Date",
    dataIndex: "deploymentDate",
    key: "deploymentDate",
    className: "fs-14 p-16",
  },
  {
    title: "Region",
    dataIndex: "region",
    key: "region",
    className: "fs-14 p-16",
  },
  {
    title: "Connection Status",
    dataIndex: "connectionStatus",
    key: "connectionStatus",
    render: (status: string) => {
      let fontSize = "0.9722vw";
      let color = status === "Active" ? "green" : "red";
      return (
        <Tag style={{ fontSize }} color={color}>
          {status}
        </Tag>
      );
    },
    className: "fs-14 p-16",
  },
];

const ProjectTable: React.FC<ProjectTableProps> = ({ data }) => {
  return (
    <div className="w-full h-full p-[1vw]">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default ProjectTable;
