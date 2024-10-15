'use client';

import React from "react";
import "./LeftNav.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';

// LeftNav assets
import Separator from "../../../../public/svgs/leftNav/Separator.svg";
import Home from "../../../../public/svgs/leftNav/ellipse.svg";
import Dashboard from "../../../../public/svgs/leftNav/group.svg";
import Settings from "../../../../public/svgs/leftNav/Setting.svg";
import Chains from "../../../../public/svgs/leftNav/tower.svg";
import Products from "../../../../public/svgs/leftNav/product.svg";
import chats from "../../../../public/svgs/leftNav/Comment.svg";
import copy from "../../../../public/svgs/leftNav/copy.svg";
import profileIcon from "../../../../public/svgs/leftNav/logo.svg";
import mobius from "../../../../public/svgs/leftNav/mobius.svg";

let nav_items = [
  {
    page: "Home",
    location: "/dashboard/performance",
    nav_icon: Home,
  },
  {
    page: "Dashboard",
    location: "/dashboard", // Base path for Dashboard
    nav_icon: Dashboard,
    defaultSubPath: "/dashboard/performance", // Default sub-path for Dashboard
  },
  {
    page: "My Chains",
    location: "/chains", // Base path for chains
    nav_icon: Chains,
  },
  {
    page: "My Products",
    location: "/product", // Base path for products
    nav_icon: Products,
  },
  {
    page: "Settings",
    location: "/settings", // Base path for Settings
    nav_icon: Settings,
    defaultSubPath: "/settings/account/profile", // Default sub-path for Settings
  },
];

const LeftNav = () => {
  const pathname = usePathname();
  const router = useRouter(); // Next.js router for programmatic navigation

  const handleNavClick = (item) => {
    // If the nav item has a default sub-path (like settings or dashboard), redirect to that default sub-path
    if (item.defaultSubPath) {
      router.push(item.defaultSubPath);
    } else {
      router.push(item.location);
    }
  };

  return (
    <nav className="w-[4vw] h-full flex flex-col items-center justify-between bg-[#222536]">
      {/* LeftNav Top */}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col justify-center items-center gap-[1vw] first:mt-[1.4vw]">
          {nav_items.map((item, index) => {
            // Active state logic: checks if the pathname starts with the item's location
            const isActive = pathname.startsWith(item.location);

            return (
              <div
                key={index}
                className="w-full flex gap-[0.6vw] items-center cursor-pointer"
                onClick={() => handleNavClick(item)} // Call handleNavClick on nav item click
              >
                {/* Indicator for active nav item */}
                <div className={`h-full rounded-r-[8vw] w-[0.2vw] ${isActive && index !== 0 ? "bg-purple-400" : ""}`}></div>
                {/* Icon background */}
                <div className={`p-[0.5vw] rounded-md ${isActive && index !== 0 ? "bg-[#393B49]" : ""} ${index === 0 ? "bg-[#f5f6f700]" : ""}`}>
                  <Image
                    className={index === 0 ? "w-[3vw]" : "w-[1.4vw]"}
                    src={item.nav_icon}
                    alt={item.page}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <Image
            className="w-[3vw] aspect-square"
            src={Separator}
            alt="Separator"
          />
        </div>
      </div>
      {/* LeftNav Bottom */}
      <div className="w-full">
        <div className="flex flex-col items-center gap-[1vw] *:w-[3vw] *:rounded-3xl *:bg-[#393B49] ">
          <Image className="p-[0.7vw]" src={copy} alt="Copy Icon" />
          <Image className="p-[0.7vw]" src={chats} alt="Chats Icon" />
          <Image className="p-[0px]" src={profileIcon} alt="Profile Icon" />
        </div>
        <div className="w-full flex justify-center ">
          <Image
            className="w-[3vw] aspect-square"
            src={Separator}
            alt="Separator"
          />
        </div>
        <div className="flex flex-col items-center gap-[0.8vw]">
          <div className="text-white text-[0.5vw]">Powered by</div>
          <div className="mb-[1vw]">
            <Image className="w-[2.4vw]" src={mobius} alt="Mobius Logo" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LeftNav;
