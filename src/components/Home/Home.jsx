import React from "react";
import LeftNav from "../navBar/LeftNav/LeftNav";
import TopNav from "../navBar/TopNav/TopNav";
import RightNav from "../navBar/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import MapWithPieChartsLasVegas from "../leaf/Mapview";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <LeftNav />
      <section className="w-[94vw] h-full flex flex-col">
        <TopNav />
        <div className="felx">
          {/* <Outlet /> */}
          <MapWithPieChartsLasVegas/>
        </div>
      </section>
      <RightNav />
    </div>
  );
}
