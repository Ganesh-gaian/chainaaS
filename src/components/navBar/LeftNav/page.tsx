'use client';

import React from "react";
import "./LeftNav.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

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
    location: "/dashboard/performance",
    nav_icon: Dashboard,
  },
  {
    page: "My Chains",
    location: "/chains",
    nav_icon: Chains,
  },
  {
    page: "My Products",
    location: "/product",
    nav_icon: Products,
  },
  {
    page: "Settings",
    location: "/settings",
    nav_icon: Settings,
  },
];

const LeftNav = () => {
  const pathname = usePathname();

  return (
    <nav className="w-[4vw] h-full flex flex-col items-center justify-between bg-[#222536]">
      {/* LeftNav Top */}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col justify-center items-center gap-[1vw] first:mt-[1.4vw]">
          {nav_items.map((item, index) => {
            const isActive = pathname === item.location;
            return (
              <Link href={item.location} key={index} className="w-full flex gap-[0.6vw] items-center">
                {/* Indicator for active nav item */}
                <div className={`h-full rounded-r-[8vw] w-[0.2vw] ${isActive ? "bg-purple-400" : ""} ${index === 0 ? "hidden" : "w-[0.2vw]"}`}></div>
                {/* Icon background */}
                <div className={`p-[0.5vw] rounded-md ${isActive ? "bg-[#393B49]" : ""}  ${index === 0 ? "bg-[#f5f6f700]" : ""}`}>
                  <Image
                    className={index === 0 ? "w-[3vw]" : "w-[1.4vw]"}
                    src={item.nav_icon}
                    alt={item.page}
                  />
                </div>
              </Link>
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
