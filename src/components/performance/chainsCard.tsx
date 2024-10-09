import Image from "next/image";
import { FC } from "react";

import mapImage from "../../../public/images/map.png";
import Link from "next/link";
import MapWithPieChartsLasVegas from "../leaf/Mapview";

interface ChainData {
  name: string;
  percentage: number;
}

const ChainsBarChart: FC = () => {
  // Correctly defining the data as an array of ChainData objects from API
  const data: ChainData[] = [
    { name: "Queens", percentage: 34 },
    { name: "Brooklyn", percentage: 22 },
    { name: "Harlem", percentage: 18 },
    { name: "Long Island", percentage: 6 },
    { name: "Lower East Side", percentage: 28 },
    { name: "Manhattan", percentage: 21 },
    { name: "Queens", percentage: 34 },
    { name: "Brooklyn", percentage: 22 },
    { name: "Harlem", percentage: 18 },
    { name: "Long Island", percentage: 6 },
    { name: "Lower East Side", percentage: 28 },
    { name: "Manhattan", percentage: 21 },
  ];

  return (
    <div className="h-full w-full p-[1vw] bg-white rounded-sm">
      <div className="flex justify-between items-center">
        <p className="font-semibold">Chains as per location</p>
        <Link href={""} className=" text-[12px] underline ">
          View More
        </Link>
      </div>
      <div className="my-[1vw]">
        <Image className="w-full h-full" src={mapImage} alt="Map Image" />
        {/* <MapWithPieChartsLasVegas/> */}
      </div>
      <h3 className="font-semibold text-[14px] my-[1vw]">Chains</h3>
      <div className="w-full h-[40vh] overflow-y-auto">
        {data.map((chain, index) => (
          <div key={index} className="mb-5">
            <div className="flex justify-between items-center mb-1 text-[12px]">
              <span>{chain.name}</span>
              <span>{chain.percentage}%</span>
            </div>
            <div className="bg-gray-200 h-[1vh] rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-full"
                style={{ width: `${chain.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChainsBarChart;
