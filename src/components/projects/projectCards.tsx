"use client";
import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import partner from "../../../public/images/partner.png"
import Image from 'next/image';

// interface for active projects data
interface ActiveProjects {
    count: number;
    fromLastQuarter: number;
}

// interface for alliance partner data
interface AlliancePartner {
    name: string;
    partnershipDate: string;
    revenueContribution: string;
    duration: string;
    performanceMetrics: string;
}

const ProjectCards: React.FC = () => {
    // Data inside the component with type safety
    const activeProjects: ActiveProjects = {
        count: 4,
        fromLastQuarter: 10,
    };

    const alliancePartner: AlliancePartner = {
        name: 'ARK Multicasting',
        partnershipDate: 'Jan 10, 2024',
        revenueContribution: '$50,000/month',
        duration: '8 months',
        performanceMetrics: '98% app uptime',
    };

    return (
        <div className="w-full">
            <div className="grid grid-cols-4 gap-[1vw]">
                {/* My Active Projects Section */}
                <div className="grid col-start-1 col-end-2 bg-white p-[1vw] rounded-sm">
                    <div className="flex justify-between items-center mb-[0.4vw]">
                        <h3 className="text-[16px] font-medium ">My Active Projects</h3>
                        <a href="#" className="text-blue-500 text-[14px]">
                            View More
                        </a>
                    </div>
                    <div className="text-[30px] font-medium mb-[0.2vw]">{activeProjects.count}</div>
                    <div className="text-[12px]">
                        From last quarter{' '}
                        <span className="text-green-500 text-[12px]">
                            ▲ {activeProjects.fromLastQuarter}%
                        </span>
                    </div>
                </div>

                {/* Alliance Partner Section */}
                <div className="grid col-start-2 col-end-6 bg-white p-[1vw] rounded-sm">
                    <div className="flex justify-between items-center mb-[0.2vw]">
                        <h3 className="text-[16px] font-medium">Alliance Partner</h3>
                        <div className="flex gap-[1vw] *:w-[2vw] *:aspect-auto *:p-[0.2vw] *:text-gray-500 *:hover:text-gray-800 *:border">
                            <button className="">
                                <LeftOutlined />
                            </button>
                            <button className="">
                                <RightOutlined />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center mb-[0.6vw]">
                        <Image
                            src={partner}
                            alt="ARK Multicasting"
                            className="w-[4vw] mr-[1vw]"
                        />
                        <div>
                            <h4 className="text-[16px] font-medium">{alliancePartner.name}</h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-[8vw] [&_h5]:text-xs [&_h5]:opacity-45 [&_p]:text-sm [&_p]:opacity-85">
                        <div>
                            <h5 className="">Partnership Date</h5>
                            <p className="">{alliancePartner.partnershipDate}</p>
                        </div>
                        <div>
                            <h5 className="">Revenue Contribution</h5>
                            <p className="">{alliancePartner.revenueContribution}</p>
                        </div>
                        <div>
                            <h5 className="">Partnership Duration</h5>
                            <p className="">{alliancePartner.duration}</p>
                        </div>
                        <div>
                            <h5 className="">Performance Metrics</h5>
                            <p className="">{alliancePartner.performanceMetrics}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCards;
