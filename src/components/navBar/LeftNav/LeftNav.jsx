import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftNav.css";

import impressio from "../../../../public/svgs/leftNav/group.svg";
import Separator from "../../../../public/svgs/leftNav/Separator.svg";
// LeftNav topItems
import Home from "../../../../public/svgs/leftNav/ellipse.svg";
import Dashboard from "../../../../public/svgs/leftNav/group.svg";
import Settings from "../../../../public/svgs/leftNav/Setting.svg";
import Chains from "../../../../public/svgs/leftNav/tower.svg";
// LeftNav bottomItems
import chats from "../../../../public/svgs/leftNav/Comment.svg";
import copy from "../../../../public/svgs/leftNav/copy.svg";
import profileIcon from "../../../../public/svgs/leftNav/logo.svg";
import mobius from "../../../../public/svgs/leftNav/mobius.svg";

let nav_items = [
  {
    page: "Home",
    location: "/",
    nav_icon: Home,
  },
  {
    page: "Dashboard",
    location: "dashboard",
    nav_icon: Dashboard,
  },
  {
    page: "My Chains",
    location: "chains",
    nav_icon: Chains,
  },
  {
    page: "Settings",
    location: "settings",
    nav_icon: Settings,
  },
];

const LeftNav = () => {
  return (
    <nav className="w-[4vw] h-full flex flex-col items-center justify-between bg-[#222536] shadow-[0px 1px 2px 0px rgba(0, 0, 0, 0.12)]">
      {/* LeftNav Top */}
      <div className="flex flex-col *:items-center *:justify-center">
        <div className="flex flex-col justify-center items-center gap-[2.2vw] first:mt-[2vw]">
          {nav_items.map((item, index) => {
            return (
              <NavLink to={item.location} key={index} className={""}>
                <div className="hidden">
                  <img src="" alt={item.page} />
                </div>
                <div className="">
                  <img
                    className={index === 0 ? "w-[3vw]" : "w-[1.6vw]"}
                    src={item.nav_icon}
                    alt={item.page}
                  />
                </div>
              </NavLink>
            );
          })}
        </div>
        <div>
          <img
            className="w-[3vw] aspect-square"
            src={Separator}
            alt="Separator"
          />
        </div>
      </div>
      {/* LeftNav Bottom */}
      <div className="">
        <div className="flex flex-col items-center gap-[1vw] *:w-[3vw] *:rounded-3xl *:bg-[#393B49] ">
          <img className="p-[0.7vw]" src={copy} alt="Copy Icon" />
          <img className="p-[0.7vw]" src={chats} alt="chats Icon" />
          <img className="p-[0px]" src={profileIcon} alt="Profile Icon" />
        </div>
        <div className="w-full flex justify-center ">
          <img
            className="w-[3vw] aspect-square"
            src={Separator}
            alt="Separator"
          />
        </div>
        <div className="flex flex-col items-center gap-[0.8vw]">
          <div className="text-white text-[0.5vw]">Powered by</div>
          <div className="mb-[1vw]">
            <img className="w-[2.4vw]" src={mobius} alt="Mobius Logo" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LeftNav;

// <div className="logo w-full h-[7vw] pt-[2vw] flex flex-col items-center">
// <img src={impressio} alt="app-logo" className="w-[1.95vw]" />
// </div>
// {/* Nav items go here */}
// <div className="w-full flex-grow flex flex-col items-center justify-between">
// <div className="w-full pt-[0.35vw] flex flex-col items-center gap-[1.2vw]">
//   {nav_items.map((item, index) => {
//     return (
//       <NavLink
//         to={item.location}
//         key={index}
//         className={({ isActive }) =>
//           `nav-item w-[3vw] h-[3vw] flex justify-center items-center rounded-[0.35vw] relative transition-all duration-300 ${
//             isActive ? "bg-white" : ""
//           } ${isActive ? "show-active-tab" : ""}`
//         }
//       >
//         <img src={item.nav_icon} alt={`${item.page}-icon`} />
//         <div className="active-item-blue-bar w-[3vw] h-[3vw] bg-[#244E81] rounded-[0.35vw] absolute top-0 right-[3.6vw]"></div>
//       </NavLink>
//     );
//   })}
//   <div className="book-end w-[3vw] mt-[1.15vw] border-t-2 border-[#336EB5] opacity-20"></div>
// </div>
// {/* Profile entry point */}
// <div className="w-full pb-[1.1vw] flex flex-col items-center">
//   <img src={profileIcon} alt="profile-picture" className="w-[2.8vw]" />
//   <div className="book-end w-[3vw] mt-[2vw] border-t-2 border-[#336EB5] opacity-20"></div>
//   <img
//     src={mobius}
//     alt="powered-by-mobius-image"
//     className="w-[3.35vw] mt-[1.1vw]"
//   />
// </div>
// </div>
