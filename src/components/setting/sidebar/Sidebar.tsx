"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Collapse } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import Link from "next/link";
import "./Sidebar.css";
import {
  accountMap,
  helpMap,
  staticNavItems,
  AccordionIcons,
} from "./NavItems";

const { Panel } = Collapse;

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [activePanel, setActivePanel] = useState<string>("1");
  const [activeLink, setActiveLink] = useState<string>(pathname);

  // Automatically set the active link and panel based on the pathname
  useEffect(() => {
    if (Object.values(accountMap).some((route) => pathname.endsWith(route))) {
      setActiveLink(pathname);
      setActivePanel("1"); // Account panel
    } else if (
      Object.values(helpMap).some((route) => pathname.endsWith(route))
    ) {
      setActiveLink(pathname);
      setActivePanel("2"); // Help & Support panel
    } else {
      setActivePanel(""); // Close all panels if not relevant
      setActiveLink(pathname); // Just set active link
    }
  }, [pathname]);

  const handlePanelChange = (key: string | string[]) => {
    setActivePanel(key === activePanel ? "" : (key as string)); // Toggle active panel
  };

  // Function to render links dynamically
  const renderLinks = (map: { [key: string]: string }, basePath: string) =>
    Object.keys(map).map((subItem) => (
      <div className="w-[14.3vw] h-[2.78vw]">
        <Link
          key={subItem}
          href={`${basePath}/${map[subItem]}`}
          className={`flex items-center text-[0.9722vw] pl-[2.78vw] h-[2.78vw] cursor-pointer hover:bg-blue-100 ${
            activeLink === `${basePath}/${map[subItem]}`
              ? "text-blue-500 bg-blue-100 border-r-4 border-blue-500"
              : "text-gray-700"
          }`}
          onClick={() => setActiveLink(`${basePath}/${map[subItem]}`)}
        >
          {subItem}
        </Link>
      </div>
    ));

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Account Accordion */}
      <Collapse
        bordered={false}
        expandIconPosition="end"
        className="w-full custom-collapse" // Custom background
        activeKey={activePanel === "1" ? ["1"] : []}
        onChange={() => handlePanelChange("1")}
      >
        <Panel
          key="1"
          header={
            <div className="flex items-center">
              {/* Change icon color based on active panel */}
              <AccordionIcons.UserOutlined
                style={{
                  color: activePanel === "1" ? "#1890FF" : "rgba(0,0,0,0.85)",
                }}
              />
              <span
                className={`ml-[0.7vw] text-[0.9722vw] ${
                  activePanel === "1"
                    ? "text-[#1890FF]"
                    : "text-[rgba(0,0,0,0.85)]"
                }`}
              >
                Account
              </span>
            </div>
          }
          className="custom-panel"
        >
          <div className="w-[14.3vw]">{renderLinks(accountMap, "/settings/account")}</div>
        </Panel>
      </Collapse>

      {/* Static Navigation Items */}
      {staticNavItems.map(({ name, location, icon }) => {
        const isActive = pathname === location;
        return (
          <div
            key={location}
            className={`flex h-[2.78vw] px-[1vw] items-center gap-3 hover:bg-blue-100 ${
              isActive ? "bg-blue-100 border-r-4 border-blue-500" : ""
            }`}
          >
            {/* Set the color of the icon dynamically */}
            <span
              className={`text-[0.972vw] ${
                isActive ? "text-[#1890FF]" : "text-[rgba(0,0,0,0.85)]"
              }`}
            >
              {React.cloneElement(icon, {
                style: { color: isActive ? "#1890FF" : "rgba(0,0,0,0.85)" },
              })}
            </span>
            <Link
              href={location}
              className={`block ${
                isActive
                  ? "text-[#1890FF] text-[0.972vw]"
                  : "text-[rgba(0,0,0,0.85)] text-[0.972vw]"
              }`}
              onClick={() => setActiveLink(location)}
            >
              {name}
            </Link>
          </div>
        );
      })}

      {/* Help & Support Accordion */}
      <Collapse
        bordered={false}
        expandIconPosition="end"
        className="w-full custom-collapse"
        activeKey={activePanel === "2" ? ["2"] : []}
        onChange={() => handlePanelChange("2")}
      >
        <Panel
          key="2"
          header={
            <div className="flex items-center">
              {/* Change icon color based on active panel */}
              <AccordionIcons.CustomerServiceOutlined
                style={{
                  color: activePanel === "2" ? "#1890FF" : "rgba(0,0,0,0.85)",
                }}
              />
              <span
                className={`ml-[0.7vw] text-[0.9722vw] ${
                  activePanel === "2"
                    ? "text-[#1890FF]"
                    : "text-[rgba(0,0,0,0.85)]"
                }`}
              >
                Help & Support
              </span>
            </div>
          }
          className="custom-panel"
        >
          <div>{renderLinks(helpMap, "/settings/help")}</div>
        </Panel>
      </Collapse>

      {/* Logout */}
      <div
        className={`flex cursor-pointer h-[2.78vw] px-[1.12vw] items-center gap-3 hover:bg-blue-100 ${
          activeLink === "/settings/logout"
            ? "bg-blue-100 border-r-4 border-blue-500"
            : ""
        }`}
      >
        <LogoutOutlined
          style={{
            color:
              activeLink === "/settings/logout"
                ? "#1890FF"
                : "rgba(0,0,0,0.85)",
          }}
        />
        <Link
          href="/settings/logout"
          className={`block ${
            activeLink === "/settings/logout"
              ? " text-[#1890FF] text-[0.972vw]"
              : "text-[rgba(0,0,0,0.85)] text-[0.972vw]"
          }`}
          onClick={() => setActiveLink("/settings/logout")}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
