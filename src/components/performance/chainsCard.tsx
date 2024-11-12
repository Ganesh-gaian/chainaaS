import { FC } from "react";
import Link from "next/link";

import dynamic from "next/dynamic";

const MainMapview = dynamic(() => import("../leaf/Mapview"), { ssr: false });
interface chainsProp {
  chains: any
}

const ChainsBarChart: FC<chainsProp> = ({ chains }) => {

  return (
    <div className="h-full w-full p-[1vw] bg-white rounded-sm">
      <div className="flex justify-between items-center">
        <p className="font-medium fs-16">Chains as per location</p>
        <Link href={"/chains"} className="fs-14 underline ">
          View More
        </Link>
      </div>
      <div className="h-[35vh] my-[1vw]">
        <MainMapview
          height={"35vh"}
          type={"dashboard"}
          zoom={9}
          center={[34, -118.2437]}
        />
      </div>
      <h3 className="font-semibold fs-14 my-[1vw]">Chains</h3>
      <div className="w-full h-[50vh] overflow-y-auto scrollBar">
        {chains?.map((chain: any, index: any) => (
          <div key={index} className="mb-[1vw] w-[98%]">
            <div className="flex justify-between items-center mb-[0.4vw] fs-12">
              <span>{chain?.name}</span>
              <span>{chain?.performance}%</span>
            </div>
            <div className="bg-gray-200 h-[1vh] rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-full fs-12"
                style={{ width: `${chain?.performance}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChainsBarChart;
