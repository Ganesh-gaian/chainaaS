import Towerinfotab from "../TowerInfotabs/Towerinfotab";
import { useCallback, useState } from "react";
import Editpopup from "../Modal/Editpopup";
import ConfigModal from "../Modal/Configure";
import dynamic from "next/dynamic";
import TowerinfoHeading from "./TowerinfoHeading";

const MainMapview = dynamic(() => import("../../leaf/Mapview"), {
  ssr: false,
  loading: () => (
    <p className="w-[100%] h-[100%] fs-16 text-[#000000D9] font-[400] skeleton-animate flex items-center justify-center">
      Loading Map...
    </p>
  ),
});

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
    <div
      id="chains-info-section"
      className="w-[100%] h-[84.5vh] flex flex-col gap-[1vw] overflow-y-auto no-scrollbar relative"
    >
      <TowerinfoHeading />

      <div className="w-[100%] min-h-[60vh]">
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
