import Image from "next/image";
import NBCLogo from "../../../../public/svgs/chains/NBC.svg";

export default function Topnav() {
  return (
    <div className="w-[100%] h-[100%] px-[2vw] pt-[0.8vw] pb-[0.2vw] bg-[#FFF] flex justify-between">
      <div className="fs-16 text-[#000000D9] font-[500] flex items-center">Chains</div>
      <div className="flex">
        <Image className="w-[2vw] aspect-square" src={NBCLogo} alt="NBCLogo" />
        <div className="fs-14 text-[#000000D9] font-[400] flex items-center ml-[0.5vw]">NBC</div>
      </div>
    </div>
  );
}
