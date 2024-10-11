"use client";

import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

// Define the Partner interface for TypeScript
interface Partner {
  id: number;
  name: string;
  logo: string;
  partnershipDate: string;
  revenueContribution: string;
  partnershipDuration: string;
  performanceMetrics: string;
}

// Array of Alliance Partners with correct typing
const partners: Partner[] = [
  {
    id: 1,
    name: "ARK Multicasting",
    logo: "/images/Alliance.png",
    partnershipDate: "Jan 10, 2024",
    revenueContribution: "$50,000/month",
    partnershipDuration: "8 months",
    performanceMetrics: "98% app uptime",
  },
  {
    id: 2,
    name: "Broadcast Network",
    logo: "/images/Alliance.png",
    partnershipDate: "Feb 15, 2023",
    revenueContribution: "$40,000/month",
    partnershipDuration: "6 months",
    performanceMetrics: "99% app uptime",
  },
  {
    id: 3,
    name: "Spectrum Corp",
    logo: "/images/Alliance.png",
    partnershipDate: "Mar 20, 2023",
    revenueContribution: "$60,000/month",
    partnershipDuration: "10 months",
    performanceMetrics: "97% app uptime",
  },
];

const AlliancePartner: React.FC = () => {
  // Track the current partner index with correct typing
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Handle the right arrow click (next)
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === partners.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle the left arrow click (previous)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? partners.length - 1 : prevIndex - 1
    );
  };

  // Current partner object based on index
  const currentPartner: Partner = partners[currentIndex];

  return (
    <div className="w-[65.75vw] h-[13.33vw] flex flex-col border-[0.1vw] border-[#F0F0F0] rounded-[0.14vw] bg-white">
      {/* First Row: Title and Arrows */}
      <div className="flex w-full h-[3.89vw] justify-between items-center pl-[1.67vw] py-[0.83vw] pr-[0.83vw] ">
        <span className="text-[rgba(0,0,0,0.85)] fs-16 font-semibold">
          Alliance Partner
        </span>
        <div className="flex gap-[0.56vw] items-center">
          <button
            onClick={handlePrev}
            className="w-[2.22vw] h-[2.22vw] border-[0.1vw] border-[rgba(0,0,0,0.06)]"
          >
            <LeftOutlined className="fs-16" />
          </button>
          <button
            onClick={handleNext}
            className="w-[2.22vw] h-[2.22vw] border-[0.1vw] border-[rgba(0,0,0,0.06)]"
          >
            <RightOutlined className="fs-16" />
          </button>
        </div>
      </div>

      {/* Second Row: Logo and Partner Name */}
      <div className="flex w-full px-[1.67vw] py-[0.56vw] items-center">
        <img
          src={currentPartner.logo}
          alt={`${currentPartner.name} Logo`}
          className="h-[3vw] w-auto mr-4"
        />
        <span className="fs-16 font-medium text-[rgba(0,0,0,0.85)]">
          {currentPartner.name}
        </span>
      </div>

      {/* Third Row: Partner Details */}
      <div className="flex flex-1 px-[1.67vw] pt-[0.56vw] pr-[1.67vw] justify-between">
        {/* Partnership Date */}
        <div className="flex flex-col w-[14.72vw] gap-[0.14vw]">
          <span className="text-[rgba(0,0,0,0.45)] fs-12">
            Partnership Date
          </span>
          <span className="text-[rgba(0,0,0,0.85)] fs-14">
            {currentPartner.partnershipDate}
          </span>
        </div>

        {/* Revenue Contribution */}
        <div className="flex flex-col w-[14.72vw] gap-[0.14vw]">
          <span className="text-[rgba(0,0,0,0.45)] fs-12">
            Revenue Contribution
          </span>
          <span className="text-[rgba(0,0,0,0.85)] fs-14">
            {currentPartner.revenueContribution}
          </span>
        </div>

        {/* Partnership Duration */}
        <div className="flex flex-col w-[14.72vw] gap-[0.14vw]">
          <span className="text-[rgba(0,0,0,0.45)] fs-12">
            Partnership Duration
          </span>
          <span className="text-[rgba(0,0,0,0.85)] fs-14">
            {currentPartner.partnershipDuration}
          </span>
        </div>

        {/* Performance Metrics */}
        <div className="flex flex-col w-[14.72vw] gap-[0.14vw]">
          <span className="text-[rgba(0,0,0,0.45)] fs-12">
            Performance Metrics
          </span>
          <span className="text-[rgba(0,0,0,0.85)] fs-14">
            {currentPartner.performanceMetrics}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AlliancePartner;
