import Image from "next/image";
import mapimage from "../../../../public/images/map-image.png";
import Towerinfotab from "../TowerInfotabs/Towerinfotab";
import { useCallback, useState } from "react";
import Editpopup from "../Modal/Editpopup";
import ConfigModal from "../Modal/Configure";

export default function Towerinfo() {
  const [showeditcard, setEditCard] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false);

  const handleEditCard = useCallback((value: boolean) => {
    setEditCard(value);
  }, []);

  const handleFormVisible = useCallback((value: boolean) => {
    setFormVisible(value);
  }, []);

  return (
    <div className="w-[100%] h-[85vh] flex flex-col gap-[1vw] overflow-y-scroll no-scrollbar relative">
      <div className="flex justify-between">
        <div>
          <div className="fs-14 text-[#000000D9] font-[500]">
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
        <Image className="w-[100%] h-[100%]" src={mapimage} alt="mapimage" />
      </div>
      <div className="w-[100%] bg-[#fff]">
        <Towerinfotab handleEditCard={handleEditCard} />
      </div>

      <Editpopup
        showeditcard={showeditcard}
        handleEditCard={handleEditCard}
        handleFormVisible={handleFormVisible}
      />
      <ConfigModal
        isFormVisible={isFormVisible}
        handleFormVisible={handleFormVisible}
      />
    </div>
  );
}
