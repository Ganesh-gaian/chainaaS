import Image from "next/image";
import mapimage from "../../../../public/images/map-image.png";
import Towerinfotab from "../TowerInfotabs/Towerinfotab";

export default function Towerinfo() {
  return (
    <div className="w-[100%] h-[100%] flex flex-col gap-[1vw]">
      <div className="flex justify-between">
        <div>
          <div className="text-[0.9rem] text-[#000000D9] font-[500]">
            Tower : T001I
          </div>
          <div className="flex justify-center items-center gap-[0.6vw] border-[0.15vw] rounded-[2px] border-[#D9D9D9] pl-[0.8vw] pr-[1vw]">
            <div className="w-[0.5vw] h-[0.5vw]  rounded-[50%] bg-[#52C41A]">
              {""}
            </div>
            <span className="text-[0.75rem] text-[#000000D9] font-[400]">
              Broadcasting
            </span>
          </div>
        </div>

        <div className="flex mr-[1vw]">
          <div className="flex justify-center items-center">
            <span className="mr-[0.5vw]">Latitude:</span>
            <span className="px-[0.8vw] border-[0.1vw] rounded-[2px] border-[#D9D9D9] bg-[#fff]">
              34.12345
            </span>
          </div>
          <div className="flex justify-center items-center ml-[1vw]">
            <span className="mr-[0.5vw]">Longitude:</span>
            <span className="px-[0.8vw] border-[0.1vw] rounded-[2px] border-[#D9D9D9] bg-[#fff]">
              118.25
            </span>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[60vh]">
        <Image className="h-[100%] aspect-[1]" src={mapimage} alt="mapimage" />
      </div>
      <div className="w-[100%]">
        {/* <Towerinfotab/> */}
      </div>
    </div>
  );
}
