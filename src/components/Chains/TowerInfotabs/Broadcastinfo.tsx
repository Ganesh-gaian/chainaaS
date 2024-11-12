import React, { useState } from "react";
import Image from "next/image";
import person from "../../../../public/svgs/chains/person.svg";
import editlogo from "../../../../public/svgs/chains/editlogo.svg";
import dateicon from "../../../../public/svgs/chains/dateicon.svg";
import refreshicon from "../../../../public/svgs/chains/refreshicon.svg";

interface Revenue {
  Daily: string;
  Monthly: string;
  Quarterly: string;
  Weekly: string;
  Yearly: string;
}

interface miaInfo {
  uniqueID: string;
  name: string;
  status: string;
  tenantPartner: string;
  tenancyStartDate: string;
  version: string;
  description: string;
  activeUsers: number;
  deploymentDate: string;
  revenue: Revenue;
}

interface broaddetailsProps {
  handleEditCard: (value: boolean) => void;
  broadcastinfo: miaInfo;
}

const Broadcastinfo: React.FC<broaddetailsProps> = ({
  handleEditCard,
  broadcastinfo,
}) => {
  const [showedit, setShowedit] = useState(false);

  const handleEdit = () => {
    setShowedit(!showedit);
  };

  return (
    <>
      <div className="flex justify-between px-[1vw] py-[0.5vw] border-b-[0.1389vw] border-b-[#0000000F] relative">
        {showedit && (
          <div className="bg-[#FFF] absolute right-[1vw] top-[3vw] shadow-[0_3px_6px_-4px_rgba(0,0,0,0.12),_0_6px_16px_0_rgba(0,0,0,0.08),_0_9px_28px_8px_rgba(0,0,0,0.05)] cursor-pointer">
            <div
              id="broadcast-edit"
              onClick={() => {
                handleEdit();
                handleEditCard(true);
              }}
              className="fs-14 text-[#000000D9] font-[500] px-[0.8vw] py-[0.3vw] bg-[#E6F7FF]"
            >
              Edit
            </div>
            <div
              onClick={() => handleEdit()}
              className="fs-14 text-[#000000D9] font-[500] px-[0.8vw] py-[0.3vw]"
            >
              Remove
            </div>
          </div>
        )}

        <div className="flex items-start gap-[1.2vw]">
          <div>
            <p className="fs-14 text-[#000000D9] font-[500]">
              {broadcastinfo?.name}
            </p>
            <p className="fs-12 text-[#00000073] font-[500]">
              {broadcastinfo?.uniqueID}
            </p>
          </div>
          <div className="fs-11 mt-[0.2vw] text-[#52C41A] border-[0.1vw] border-[#B7EB8F] bg-[#F6FFED] px-[0.5vw]">
            {broadcastinfo?.status}
          </div>
        </div>
        <div
          onClick={() => {
            handleEdit();
          }}
          id="broadcast-edit-icon"
          className="flex justify-between items-center rotate-90 cursor-pointer"
        >
          <Image className="w-[1vw] aspect-square" src={editlogo} alt="Edit" />
        </div>
      </div>

      <div className="p-[1vw] border-b-[0.1389vw] border-b-[#0000000F]">
        <div className="flex mb-[1vw]">
          <Image className="w-[1vw] aspect-square" src={person} alt="person" />
          <p className="ml-[0.4vw] fs-12 text-[#00000073] font-[500]">
            Tenant partner: {broadcastinfo?.tenantPartner}
          </p>
        </div>

        <div className="flex mb-[1vw]">
          <Image
            className="w-[1vw] aspect-square"
            src={dateicon}
            alt="dateicon"
          />
          <p className="ml-[0.4vw] fs-12 text-[#00000073] font-[500]">
            Tenancy start date: {broadcastinfo?.tenancyStartDate}
          </p>
        </div>

        <div className="flex">
          <Image
            className="w-[1vw] aspect-square"
            src={refreshicon}
            alt="refreshicon"
          />
          <p className="ml-[0.4vw] fs-12 text-[#00000073] font-[500]">
            Version: {broadcastinfo?.version}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[40%_26.5%_26.5%] px-[1.2vw] py-[1.5vw] gap-x-[2vw] gap-y-[1.5vw]">
        {Object.entries({
          Description: broadcastinfo?.description,
          "Active users": broadcastinfo?.activeUsers,
          "Deployment date": broadcastinfo?.deploymentDate,
        }).map(([key, value], i) => {
          return (
            <div key={i}>
              <p className="fs-12 text-[#000000D9] font-[500]">{key}</p>
              <p className="fs-12 text-[#00000073] font-[500]">{value}</p>
            </div>
          );
        })}
        <div className="col-span-3">
          <p className="fs-12 text-[#000000D9] font-[500] mb-[0.6vw]">
            Revenue
          </p>
          <div className="grid grid-cols-2 gap-y-[1vw]">
            {Object.entries({ ...broadcastinfo["revenue"] }).map(
              ([key, value], i) => {
                return (
                  <div key={i}>
                    <span className="fs-14 text-[#000000] font-[400]">￮</span>
                    <span className="ml-[0.5vw] fs-12 text-[#00000073] font-[400]">
                      {key}:
                    </span>
                    <span className="ml-[0.2vw] fs-12 text-[#000000D9] font-[400]">
                      {value}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Broadcastinfo;
