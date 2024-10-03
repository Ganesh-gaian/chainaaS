import Image from "next/image"
import corssIcon from "../../../public/svgs/utilis/extra.svg";
import infoCircle from "../../../public/svgs/utilis/InfoCircle.svg"
import check from "../../../public/svgs/utilis/Check.svg"

// Ant Components: 
import { Button } from "antd";

export default function UpgradePlan() {

    const planDetails = {
        planName: "Enterprise",
        price: "210",
        dataUsage: "10",
        apiCallsLimit: "1000",
        apiCallsDuration: "month",
        usersLimit: "4",
        ads: true
    }

    return (
        <div className="w-full h-full flex flex-col bg-white p-[1vw] rounded-sm">
            <div className="flex justify-between items-center">
                <div className="font-medium text-[16px]">Upgrade Plan</div>
                <div className="flex items-center gap-[1vw]">
                    <Image src={infoCircle} alt="infoCircle" />
                    <Image src={corssIcon} alt="corssIcon" />
                </div>
            </div>
            <div className="my-[1.4vw] border-t flex flex-col gap-[1vw] rounded-sm">
                <p className="mt-[1.2vw] text-[14px]">Your current Plan is Permium. Upgrade to avail benefits.</p>
                <div className="w-full grid grid-cols-2 gap-[2vw]">
                    <div className="p-[1vw] flex flex-col gap-[0.4vw] justify-center items-center bg-[#531DAB] rounded-sm *:text-white">
                        <p className="font-bold text-[24px]">Enterprise</p>
                        <p className="text-[14px]">Growth and Scale</p>
                        <p className="font-bold text-[30px]">{`$${planDetails.price}`}</p>
                        <p className="text-[12px]">/month</p>
                    </div>
                    <div className="flex flex-col gap-[0.4vw] *:flex *:gap-[0.4vw] [&_p]:text-[14px]">
                        <div >
                            <Image src={check} alt="check" />
                            <p>{`Upto ${planDetails.dataUsage}gb of data usage`}</p>
                        </div>
                        <div>
                            <Image src={check} alt="check" />
                            <p>{`${planDetails.apiCallsLimit} API calls per month`}</p>
                        </div>
                        <div>
                            <Image src={check} alt="check" />
                            <p>{`Upto ${planDetails.usersLimit} Users`}</p>
                        </div>
                        <div>
                            <Image src={check} alt="check" />
                            <p>{planDetails.adds ? "Ads always present" : "No Ads"}</p>
                        </div>
                        <Button className="mt-[1vw] w-[10vw]">Upgrade</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
