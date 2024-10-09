"use client";

import { Button, List } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

// Images 
import paypal from "../../../../../public/svgs/wallet/paypal.png"
import visa from "../../../../../public/svgs/wallet/visaCard.jpg"
import masterCard from "../../../../../public/svgs/wallet/masterCard.png"

import paypalSVG from "../../../../../public/svgs/wallet/paypal.svg"
import cards from "../../../../../public/svgs/wallet/cards.svg"
import Image from "next/image";
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
      expiry: "PayPal Account",
    },
    {
      id: 4,
      type: "UPI",
      details: "**** **** 1234",
      provider: "Apps Gaian Solutions",
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

  return (
    <div className="w-full h-full flex flex-col gap-[1vw] p-[0.6vw]">
      <div className="flex flex-col gap-[0.6vw] px-[1.4vw] py-[0.8vw]">
        <h1 className="opacity-85 text-base font-medium">Wallet</h1>
        <p className="text-[#697483] text-sm">Get access to payment methods</p>
      </div>

      <div className="flex flex-col gap-[0.8vw]">
        <div className="bg-white p-[1.4vw] rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <h1 className="opacity-85 text-base font-medium">Wallet</h1>
            <Button type="primary">View Transactions</Button>
          </div>
          <div className="grid grid-cols-2 gap-[1vw] mt-[0.4vw] *:border *:rounded-sm *:flex *:flex-col *:justify-center *:items-center *:p-[1vw]">
            <div>
              <p className="text-2xl font-bold opacity-85">$5,000</p>
              <p className="text-sm text-[#8F97A2]">Available Balance</p>
            </div>
            <div>
              <p className="text-2xl font-bold opacity-85">368</p>
              <p className="text-sm text-[#8F97A2]">Mobit Points</p>
            </div>
          </div>
        </div>

        <div className="w-full flex gap-[1vw]">
          <div className="w-[76%] bg-white p-[1.4vw] rounded-lg shadow-sm overflow-y-auto">
            {
              paymentMethods.map((item, index) => {
                return <div key={index}>
                  <Image src="" alt="" />
                  <div>
                    <p>{item.details}</p>
                    <p></p>
                  </div>
                  {/* Action Icons */}
                  <div></div>
                </div>
              })
            }
          </div>

          <div className="w-[24%] bg-white p-[1.4vw] rounded-lg shadow-sm flex flex-col gap-[1vw] *:flex *:gap-[1vw] *:border *:rounded-sm *:p-[1vw] [&_p]:p-0">
            <p className="border-none">Add Payment Method</p>
            <div className="fs-16 ">
              <Image src={cards} alt="cardsIcon" />
              <p>Cards</p>
            </div>
            <div className="">
              <Image src={paypalSVG} alt="paypalSVG" />
              <p>Paypal</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
