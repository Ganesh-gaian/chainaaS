"use client";

import { Button, List } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

// Images 
import paypal from "../../../../../public/svgs/wallet/paypal.png"
import visa from "../../../../../public/svgs/wallet/visaCard.jpg"
import mastercard from "../../../../../public/svgs/wallet/masterCard.png"
import upi from "../../../../../public/svgs/wallet/upi.png"

import paypalSVG from "../../../../../public/svgs/wallet/paypal.svg"
import cards from "../../../../../public/svgs/wallet/cards.svg"
import Image from "next/image";
import SettingHeader from "@/components/setting/other/SettingHeader";
interface PaymentMethod {
  id: number;
  type: string;
  details: string;
  provider: string;
  image: string; // Add image property for card type icons
}

const WalletPage: React.FC = () => {
  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      details: "**** **** **** 1234",
      expiry: "06/24",
    },
    {
      id: 2,
      type: "Mastercard",
      details: "**** **** **** 1234",
      expiry: "06/24",
    },
    {
      id: 3,
      type: "PayPal",
      details: "**** **** 1234",
      expiry: "",
    },
    {
      id: 4,
      type: "UPI",
      details: "**** **** 1234",
      provider: "Apps Gaian Solutions",
      expiry: "",
    },
  ];

  const availablePaymentMethods = [
    {
      name: "Cards",
      icon: cards
    },
    {
      name: "Paypal",
      icon: paypalSVG
    }
  ]

  function renderImage(item: string) {
    switch (item.toLocaleLowerCase()) {
      case "visa":
        return visa;
      case "paypal":
        return paypal;
      case "mastercard":
        return mastercard;
      case "upi":
        return upi
      default:
        return null;
    }
  }

  return (
    <div className="w-full h-full flex flex-col gap-[1vw]">
      <SettingHeader heading="Wallet" text="Get access to payment methods" />

      <div className="w-[96%] flex flex-col gap-[0.8vw] ">
        <div className="bg-white p-[1vw] rounded-sm shadow-sm">
          <div className="flex justify-between items-center">
            <h1 className="opacity-85 fs-16 font-medium">Wallet</h1>
            <Button type="primary">View Transactions</Button>
          </div>
          <div className="grid grid-cols-2 gap-[1vw] mt-[0.8vw] *:border *:rounded-sm *:flex *:flex-col *:justify-center *:items-center *:p-[1vw]">
            <div>
              <p className="fs-24 font-bold opacity-85">$5,000</p>
              <p className="fs-14 text-[#8F97A2]">Available Balance</p>
            </div>
            <div>
              <p className="fs-24 font-bold opacity-85">368</p>
              <p className="fs-14 text-[#8F97A2]">Mobit Points</p>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-[1vw]">
          <div className="w-[76%] flex flex-col gap-[1vw] bg-white p-[1.4vw] rounded-lg shadow-sm overflow-y-auto">
            <p className="border-none fs-16 font-medium">Payment Methods</p>
            {
              paymentMethods.map((item, index) => {
                return <div key={index} className="p-[1vw] border-[#D6DAE1] border-[0.01vw] flex justify-between gap-[1vw] tetx-[#323E4F] rounded-lg">
                  <div className="flex gap-[1vw] ">
                    <div className="w-[4vw] h-[2.8vw] p-[0.2vw] border flex justify-center items-center rounded-lg">
                      <Image className="w-[2.2vw]" src={renderImage(item.type)} alt={item.type} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="fs-14">{`${item.type} ending in ${item.details}`}</p>
                      <p className="fs-12 text-[#697483]">{item.expiry !== "" ? `Exp ${item.expiry}` : ""} </p>
                    </div>
                  </div>

                  {/* Action Icons */}
                  <div className="flex gap-[1vw]">
                    <button className="border border-gray-300 p-[0.4vw] rounded-md hover:border-gray-400 transition-colors">
                      <EditOutlined className="text-gray-500" />
                    </button>
                    <button className="border border-gray-300 p-[0.4vw] rounded-md hover:border-gray-400 transition-colors">
                      <DeleteOutlined className="text-gray-500" />
                    </button>
                  </div>
                </div>
              })
            }
          </div>

          <div className="w-[24%] bg-white p-[1.4vw] rounded-lg shadow-sm flex flex-col gap-[1vw] *:flex *:gap-[1vw] *: border-[#D6DAE1] *:border-[0.01vw] *:rounded-lg *:p-[1vw] [&_p]:p-0">
            <p className="border-none fs-16 font-medium">Add Payment Method</p>
            <div className="">
              <Image className="w-[2vw]" src={cards} alt="cardsIcon" />
              <p className="fs-14 text-[#697483]">Cards</p>
            </div>
            <div className="">
              <Image src={paypalSVG} alt="paypalSVG" />
              <p className="fs-14 text-[#697483]">Paypal</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
