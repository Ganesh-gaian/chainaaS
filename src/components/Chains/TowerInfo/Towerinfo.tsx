import Towerinfotab from "../TowerInfotabs/Towerinfotab";
import { useCallback, useState } from "react";
import Editpopup from "../Modal/Editpopup";
import ConfigModal from "../Modal/Configure";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import dynamic from "next/dynamic";

const MainMapview = dynamic(() => import("../../leaf/Mapview"), { ssr: false });

export default function Towerinfo() {
  const [showeditcard, setEditCard] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false);

  const handleEditCard = useCallback((value: boolean) => {
    setEditCard(value);
  }, []);

  const handleFormVisible = useCallback((value: boolean) => {
    setFormVisible(value);
  }, []);

  const selectedchain = useSelector(
    (state: RootState) => state.chains.selectedChain
  );

  return (
    <div
      id="chains-info-section"
      className="w-[100%] h-[84.5vh] flex flex-col gap-[1vw] overflow-y-auto no-scrollbar relative"
    >
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
      <div className="w-[100%] h-[60vh]">
        <MainMapview
          height={"60vh"}
          type={"chains"}
          zoom={11}
          center={[36.1699, -115.1398]}
        />
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
