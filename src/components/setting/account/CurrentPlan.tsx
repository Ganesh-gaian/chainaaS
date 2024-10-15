import Image from "next/image";
import check from "../../../../public/svgs/utilis/Check.svg"

const CurrentPlan: React.FC = () => {

    const currentPlan = {
        name: "Enterprise",
        description: "Growth and Scale",
        price: "$210",
        features: [
            "Upto 10GB of data usage",
            "1000 API calls per month",
            "Upto 04 Users",
            "Ads always present"
        ],
    };

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
        <div className="bg-white shadow-sm rounded-sm">
            <div className="p-[1vw] border-b flex justify-between items-center">
                <h3 className="profile_value">Current Plan</h3>
            </div>
            {/* Upgrade Plan */}
            <div className="w-full flex justify-center p-[1vw]">
                <div className="px-[4vw] py-[1vw] flex flex-col gap-[0.4vw] justify-center items-center bg-[#531DAB] rounded-s-lg *:text-white">
                    <p className="font-bold text-[#FBF9FF] fs-24">Enterprise</p>
                    <p className="fs-14 text-[#C1C7D1]">Growth and Scale</p>
                    <p className="font-bold fs-30 text-[#FAFAFA]">{`$${planDetails.price}`}</p>
                    <p className="fs-12 text-[#DADCE0]">/month</p>
                </div>
                <div className="flex flex-col justify-center px-[2vw] gap-[0.4vw] *:flex *:gap-[0.4vw] bg-[#FBF9FF] rounded-r-lg">
                    <div >
                        <Image className="w-[1vw] aspect-square" src={check} alt="check" />
                        <p className="fs-12">{`Upto ${planDetails.dataUsage}gb of data usage`}</p>
                    </div>
                    <div>
                        <Image className="w-[1vw] aspect-square" src={check} alt="check" />
                        <p className="fs-12">{`${planDetails.apiCallsLimit} API calls per month`}</p>
                    </div>
                    <div>
                        <Image className="w-[1vw] aspect-square" src={check} alt="check" />
                        <p className="fs-12">{`Upto ${planDetails.usersLimit} Users`}</p>
                    </div>
                    <div>
                        <Image className="w-[1vw] aspect-square" src={check} alt="check" />
                        <p className="fs-12">{planDetails.ads ? "Ads always present" : "No Ads"}</p>
                    </div>
                </div>
            </div>
            {/* Plan Information */}
            <div className="p-[1vw] border-t flex justify-between items-center">
                <div>
                    <p className="profile_attribute">
                        Your current plan is
                    </p>
                    <p className="fs-16 font-medium">{currentPlan.name} Plan</p>
                </div>

                <button className="fs-14 border border-purple-600 text-purple-600 px-[8vw] py-[0.4vw] rounded-md hover:bg-purple-100">
                    Upgrade Plan
                </button>
            </div>
        </div>
    );
};

export default CurrentPlan;
