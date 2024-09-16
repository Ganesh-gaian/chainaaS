import React from "react";
import LeftNav from "../navBar/LeftNav/LeftNav";
import TopNav from "../navBar/TopNav/TopNav";
import RightNav from "../navBar/RightNav/RightNav";

export default function Home() {
  return (
    <div>
      <LeftNav />
      <section>
        <TopNav />
      </section>
      <RightNav />
    </div>
  );
}
