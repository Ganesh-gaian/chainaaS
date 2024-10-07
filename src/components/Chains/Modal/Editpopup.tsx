"use client";

import { Modal, Collapse } from "antd";
import React from "react";
import "./editpopup.css";
import viewdetails from "../../../../public/svgs/chains/arrow.svg";
import dateicon from "../../../../public/svgs/chains/dateicon.svg";
import refreshicon from "../../../../public/svgs/chains/refreshicon.svg";
import info from "../../../../public/svgs/chains/info.svg";

import Image from "next/image";

type DropdownType = "settings" | "alliance" | "AR";

interface EditpopupProps {
  showeditcard: boolean;
  handleEditCard: (value: boolean) => void;
  handleFormVisible: (value: boolean) => void;
}

const Editpopup: React.FC<EditpopupProps> = ({
  showeditcard,
  handleEditCard,
  handleFormVisible,
}) => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: <Labelheading heading={"Settings & Configuration"} />,
      children: (
        <Dropdown
          type={"settings"}
          handleEditCard={handleEditCard}
          handleFormVisible={handleFormVisible}
        />
      ),
    },
    {
      key: "2",
      label: <Labelheading heading={"Alliance & RC"} />,
      children: (
        <Dropdown
          type={"alliance"}
          handleEditCard={handleEditCard}
          handleFormVisible={handleFormVisible}
        />
      ),
    },
    {
      key: "3",
      label: <Labelheading heading={"AR/AP"} />,
      children: (
        <Dropdown
          type={"AR"}
          handleEditCard={handleEditCard}
          handleFormVisible={handleFormVisible}
        />
      ),
    },
  ];

  return (
    <Modal
      title="Edit Tower"
      width={"25vw"}
      open={showeditcard}
      style={{ left: "33vw" }}
      footer={null}
      onCancel={() => handleEditCard(false)}
    >
      <div className="edit-modal-content">
        <Collapse
          items={items}
          defaultActiveKey={["1"]}
          onChange={onChange}
          expandIconPosition={"end"}
          bordered={false}
        />
      </div>
    </Modal>
  );
};

export default Editpopup;

interface DropdownProps {
  type: DropdownType;
  handleEditCard: (value: boolean) => void;
  handleFormVisible: (value: boolean) => void;
}

function Dropdown({ type, handleEditCard, handleFormVisible }: DropdownProps) {
  return (
    <div>
      <div className="bg-[#FAFAFA] px-[0.5vw] py-[0.5vw] mb-[0.7vw]">
        <p className="fs-12 text-[#00000073] font-[400] mb-[0.3vw]">
          Coverage Area
        </p>
        <p className="fs-12 text-[#000000D9] font-[500]">50 miles</p>
      </div>
      <div className="flex gap-[1vw] mb-[0.7vw]">
        <div className="w-[50%] bg-[#FAFAFA] px-[0.5vw] py-[0.5vw]">
          <p className="fs-12 text-[#00000073] font-[400] mb-[0.3vw]">
            Signal strength
          </p>
          <p className="fs-12 text-[#000000D9] font-[500]">75 dBm</p>
        </div>

        <div className="w-[50%] bg-[#FAFAFA] px-[0.5vw] py-[0.5vw]">
          <p className="fs-12 text-[#00000073] font-[400] mb-[0.3vw]">
            Broadcast frequency
          </p>
          <p className="fs-12 text-[#000000D9] font-[500]">450 MHz</p>
        </div>
      </div>
      {type != "settings" && (
        <div className="w-[50%] bg-[#FAFAFA] px-[0.5vw] py-[0.5vw] mb-[0.7vw]">
          <p className="fs-12 text-[#00000073] font-[400] mb-[0.3vw]">
            Revenue Contribution
          </p>
          <p className="fs-12 text-[#000000D9] font-[500]">$45,000/month</p>
        </div>
      )}
      <div className="bg-[#FAFAFA] px-[0.5vw] py-[0.5vw] mb-[0.7vw]">
        <p className="fs-12 text-[#00000073] font-[400] mb-[0.3vw]">
          Last updated
        </p>
        <div className="flex gap-[0.5vw] fs-12 text-[#000000D9] font-[400] cursor-pointer">
          <Image
            className="w-[0.9vw] aspect-square"
            src={dateicon}
            alt="dateicon"
          />
          <span>20 July 2023 at 17:41</span>
        </div>
      </div>
      <div className="bg-[#FAFAFA] px-[0.5vw] py-[0.5vw] mb-[0.7vw]">
        <p className="fs-12 text-[#00000073] font-[400] mb-[0.3vw]">
          Update schedule
        </p>
        <div className="flex gap-[0.5vw] fs-12 text-[#000000D9] font-[400] cursor-pointer">
          <Image
            className="w-[0.8vw] aspect-square"
            src={refreshicon}
            alt="refreshicon"
          />
          <span>06 June 2025 at 17:41</span>
        </div>
      </div>

      <div
        onClick={() => {
          handleEditCard(false);
          handleFormVisible(true);
        }}
        className="w-fit	 flex bg-[#1890FF] px-[0.5vw] py-[0.6vw] cursor-pointer"
      >
        <Image
          className="w-[1vw] aspect-square"
          src={viewdetails}
          alt="viewdetails"
        />
        <span className="fs-12 text-[#FFFFFF] font-[400] ml-[0.6vw]">
          View details
        </span>
      </div>
    </div>
  );
}

interface HeadingProps {
  heading: String;
}

function Labelheading({ heading }: HeadingProps) {
  return (
    <div className="flex items-center">
      <span className="mr-[0.4vw]">{heading}</span>
      <Image className="w-[0.8vw] aspect-square" src={info} alt="info-icon" />
    </div>
  );
}
