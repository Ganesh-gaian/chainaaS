"use client";
import React from "react";
import AlliancePartner from "../setting/help/AlliancePartnerCard";

interface ActiveProjects {
  count: number;
  fromLastQuarter: number;
}

interface AlliancePartner {
  name: string;
  partnershipDate: string;
  revenueContribution: string;
  duration: string;
  performanceMetrics: string;
}

const ProjectCards: React.FC = () => {
  const activeProjects: ActiveProjects = {
    count: 4,
    fromLastQuarter: 10,
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-[1vw]">
        <div className="grid col-start-1 col-end-2 bg-white px-[1vw] py-[0.5vw] rounded-sm">
          <div className="flex justify-between items-center mb-[0.4vw]">
            <h3 className="fs-16 font-medium ">My Active Projects</h3>
            <a href="#" className="text-blue-500 fs-14">
              View More
            </a>
          </div>
          <div className="fs-30 font-medium mb-[0.2vw]">
            {activeProjects.count}
          </div>
          <div className="fs-12">
            From last quarter{" "}
            <span className="text-green-500 fs-12">
              ▲ {activeProjects.fromLastQuarter}%
            </span>
          </div>
        </div>
        <div className="grid col-start-2 col-end-6 bg-white rounded-sm">
          <AlliancePartner />
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
