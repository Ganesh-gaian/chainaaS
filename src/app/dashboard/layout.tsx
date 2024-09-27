
"use client"

import Image from "next/image";
import Link from "next/link";
import company from "../../../public/images/company.png";
import download from "../../../public/svgs/utilis/download.svg"


import { usePathname } from "next/navigation"


const subNavItems = [
  {
    name: "Performance",
    location: "/dashboard/performance",
  },
  {
    name: "Incident",
    location: "/dashboard/incident",
  },
  {
    name: "Projects",
    location: "/dashboard/project",
  },
  {
    name: "Commercial",
    location: "/dashboard/commercial",
  },
];


export default function Dashboard({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();

  return (
    <div className='w-full h-full bg-white px-[1.6vw] pt-[1.6vw]'>
      <div className="w-full flex justify-between items-center">
        <p className="font-bold">Broadcaster Dashboard</p>
        <div className="flex justify-center items-center gap-[0.4vw]">
          <Image src={company} alt="companyLogo" />
          <p>NBC</p>
        </div>
      </div>
      {/* SubNav */}
      <div className="w-full flex justify-between items-center my-[1vw]">
        {/* navLinks */}
        <div className="flex justify-center items-center gap-[1.2vw] ">
          {
            subNavItems.map((item, index) => {
              return <div key={index} className="flex flex-col gap-[0.4vw]">
                {/* color condition on active */}
                <Link href={item.location} className={pathname === item.location ? "text-bold text-[#1890FF]" : ""}>
                  {item.name}
                </Link>
                <div
                  className={pathname === item.location ? "w-full h-[0.2vh] bg-[#1890FF]" : "w-full h-[0.2vh] bg-transparent"}
                ></div>
              </div>
            })
          }
        </div>
        {/* ActionIcons */}
        <div className="flex gap-[1vw] *:border *:p-[0.4vw] *:cursor-pointer">
          <div>Search</div>
          <div>Drop down</div>
          <div> calender</div>
          <div className="flex gap-[0.4vw]">
            <Image src={download} alt="Download" />
            Generate report
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F5F6F7] overflow-auto"> {children}</div>
    </div>
  )
}
