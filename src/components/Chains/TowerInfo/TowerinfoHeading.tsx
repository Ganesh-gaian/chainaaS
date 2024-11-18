import React from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

function TowerinfoHeading() {
  const selectedchain = useSelector(
    (state: RootState) => state.chains.selectedChain
  );

  return (
    <div className="flex justify-between">
      <div>
        <div className="fs-14 text-[#000000D9] font-[500]">
          Tower : {selectedchain["name"]}
        </div>
        <div className="flex justify-center items-center gap-[0.6vw] border-[0.15vw] rounded-[2px] border-[#D9D9D9] pl-[0.8vw] pr-[1vw]">
          <div className="w-[0.5vw] h-[0.5vw]  rounded-[50%] bg-[#52C41A]">
            {""}
          </div>
          <span className="fs-12 text-[#000000D9] font-[400]">
            Broadcasting
          </span>
        </div>
      </div>

      <div className="flex mr-[1vw]">
        <div className="flex justify-center items-center">
          <span className="fs-15 mr-[0.5vw]">Latitude:</span>
          <span className="fs-15 px-[0.8vw] border-[0.1vw] rounded-[2px] border-[#D9D9D9] bg-[#fff]">
            {selectedchain["latitude"]}
          </span>
        </div>
        <div className="flex justify-center items-center ml-[1vw]">
          <span className="fs-15 mr-[0.5vw]">Longitude:</span>
          <span className="fs-15 px-[0.8vw] border-[0.1vw] rounded-[2px] border-[#D9D9D9] bg-[#fff]">
            {selectedchain["longitude"]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TowerinfoHeading;
