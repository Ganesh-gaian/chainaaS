"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Collapse } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import Link from "next/link";
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
      <Link
        key={subItem}
        href={`${basePath}/${map[subItem]}`}
        className={`py-2 px-4 block cursor-pointer hover:bg-blue-100 ${
          activeLink === `${basePath}/${map[subItem]}`
            ? "text-blue-500 bg-blue-100 border-r-4 border-blue-500"
            : "text-gray-700"
        }`}
        onClick={() => setActiveLink(`${basePath}/${map[subItem]}`)}
      >
        {subItem}
      </Link>
    ));

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Account Accordion */}
      <Collapse
        bordered={false}
        expandIconPosition="end"
        className="w-full"
        activeKey={activePanel === "1" ? ["1"] : []}
        onChange={() => handlePanelChange("1")}
      >
        <Panel
          key="1"
          header={
            <div className="flex items-center">
              <AccordionIcons.UserOutlined />
              <span className="ml-[0.7vw]">Account</span>
            </div>
          }
        >
          <div>{renderLinks(accountMap, "/settings/account")}</div>
        </Panel>
      </Collapse>

      {/* Static Navigation Items */}
      {staticNavItems.map(({ name, location, icon }) => (
        <div
          key={location}
          className={`flex h-[2.78vw] px-[1vw] items-center gap-3 hover:bg-blue-100 ${
            pathname === location
              ? "bg-blue-100 border-r-4 border-blue-500"
              : ""
          }`}
        >
          {icon}
          <Link
            href={location}
            className={`block ${
              pathname === location
                ? "font-bold text-blue-500"
                : "text-gray-700"
            }`}
            onClick={() => setActiveLink(location)}
          >
            {name}
          </Link>
        </div>
      ))}

      {/* Help & Support Accordion */}
      <Collapse
        bordered={false}
        expandIconPosition="end"
        className="w-full"
        activeKey={activePanel === "2" ? ["2"] : []}
        onChange={() => handlePanelChange("2")}
      >
        <Panel
          key="2"
          header={
            <div className="flex items-center">
              <AccordionIcons.QuestionCircleOutlined />
              <span className="ml-[0.7vw]">Help & Support</span>
            </div>
          }
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
        <LogoutOutlined />
        <Link
          href="/settings/logout"
          className={`block ${
            activeLink === "/settings/logout"
              ? "font-bold text-blue-500"
              : "text-gray-700"
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
