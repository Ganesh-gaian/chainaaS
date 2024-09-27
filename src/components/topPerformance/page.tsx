import Image from "next/image"
import izakLogo from "../../../public/images/izakLogo.png"



export default function PerformanceCard() {

    const appDetails = {
        name: "iZak",
        logo: "",
        description: "Home Automation / IoT Solution",
        deploymentDate: "January 10, 2023",
        Users: "120,000",
        engagement: "",
        location: "New York",
        upTime: "99.8"
    }

    return (
        <div className="w-[30vw] p-[1.2vw] flex flex-col gap-[1.4vw] bg-white">
            <div className="w-full flex justify-between items-center">
                <p className="font-bold">Top Performing App</p>
                <div>
                    Dropdown
                </div>
            </div>
            <div className="flex gap-[1.2vw] my-[0.4vw]">
                <Image src={izakLogo} alt="iZakLogo" />
                <div >
                    <p className="font-bold">{appDetails.name}</p>
                    <p className="opacity-40">{appDetails.description}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 ">
                <div className="">
                    <div className="opacity-40">Deploment Date</div>
                    <div>{appDetails.deploymentDate}</div>
                </div>
                <div className="">
                    <div className="opacity-40">Daily Active Users</div>
                    <div>{`${appDetails.Users}+ users per day`}</div>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="">
                    <div className="opacity-40">Engagement Rate</div>
                    <div>{appDetails.deploymentDate}</div>
                </div>
                <div className="">
                    <div className="opacity-40">Geographic Reach</div>
                    <div>{appDetails.location}</div>
                </div>
            </div>
            <div className="flex gap-[0.4vw]">
                <div>Uptime</div>
                <div className="flex items-center gap-[0.1vw]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M8.38784 6.72827L5.1808 3.00952C5.08901 2.90308 4.91225 2.90308 4.81948 3.00952L1.61244 6.72827C1.4933 6.86694 1.60073 7.07007 1.79311 7.07007H8.20717C8.39955 7.07007 8.50698 6.86694 8.38784 6.72827Z" fill="#52C41A" />
                    </svg>
                    <p className="text-[#52C41A]">{`${appDetails.upTime}%`}</p>
                </div>
            </div>
        </div>
    )
}
