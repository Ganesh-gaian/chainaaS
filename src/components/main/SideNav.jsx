// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./SideNav.css";

// import impressio from "../../assets/impressio.svg";
// import Home from "../../assets/Home.svg";
// import Deploy from "../../assets/Deploy.svg";
// import Content from "../../assets/Content.svg";
// import Schedule from "../../assets/Schedule.svg";
// import profileIcon from "../../assets/profile.svg";
// import mobius from "../../assets/powered_by_mobius.svg";

// let nav_items = [
//   {
//     page: "Home",
//     location: "/",
//     nav_icon: Home,
//   },
//   {
//     page: "Deploy",
//     location: "/deploy",
//     nav_icon: Deploy,
//   },
//   {
//     page: "Content",
//     location: "/content",
//     nav_icon: Content,
//   },
//   {
//     page: "Schedule",
//     location: "/schedule",
//     nav_icon: Schedule,
//   },
// ];

// const SideNav = () => {
//   return (
//     <nav className="w-[5vw] h-full flex flex-col items-center bg-[#EBF1F8]">
//       {/* Logo sits here */}
//       <div className="logo w-full h-[7vw] pt-[2vw] flex flex-col items-center">
//         <img src={impressio} alt="app-logo" className="w-[1.95vw]" />
//       </div>
//       {/* Nav items go here */}
//       <div className="w-full flex-grow flex flex-col items-center justify-between">
//         <div className="w-full pt-[0.35vw] flex flex-col items-center gap-[1.2vw]">
//           {nav_items.map((item, index) => {
//             return (
//               <NavLink
//                 to={item.location}
//                 key={index}
//                 className={({ isActive }) =>
//                   `nav-item w-[3vw] h-[3vw] flex justify-center items-center rounded-[0.35vw] relative transition-all duration-300 ${
//                     isActive ? "bg-white" : ""
//                   } ${isActive ? "show-active-tab" : ""}`
//                 }
//               >
//                 <img src={item.nav_icon} alt={`${item.page}-icon`} />
//                 <div className="active-item-blue-bar w-[3vw] h-[3vw] bg-[#244E81] rounded-[0.35vw] absolute top-0 right-[3.6vw]"></div>
//               </NavLink>
//             );
//           })}
//           <div className="book-end w-[3vw] mt-[1.15vw] border-t-2 border-[#336EB5] opacity-20"></div>
//         </div>
//         {/* Profile entry point */}
//         <div className="w-full pb-[1.1vw] flex flex-col items-center">
//           <img src={profileIcon} alt="profile-picture" className="w-[2.8vw]" />
//           <div className="book-end w-[3vw] mt-[2vw] border-t-2 border-[#336EB5] opacity-20"></div>
//           <img
//             src={mobius}
//             alt="powered-by-mobius-image"
//             className="w-[3.35vw] mt-[1.1vw]"
//           />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default SideNav;
