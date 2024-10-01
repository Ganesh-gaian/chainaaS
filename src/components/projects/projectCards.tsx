"use client";
import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

// Define the interface for active projects data
interface ActiveProjects {
    count: number;
    fromLastQuarter: number; // percentage increase
}

// Define the interface for alliance partner data
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
        fromLastQuarter: 10, // percentage increase
    };

    const alliancePartner: AlliancePartner = {
        name: 'ARK Multicasting',
        partnershipDate: 'Jan 10, 2024',
        revenueContribution: '$50,000/month',
        duration: '8 months',
        performanceMetrics: '98% app uptime',
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="grid grid-cols-2 gap-6">
                {/* My Active Projects Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">My Active Projects</h3>
                        <a href="#" className="text-blue-500 font-medium">
                            View More
                        </a>
                    </div>
                    <div className="text-5xl font-bold mb-2">{activeProjects.count}</div>
                    <div className="text-sm text-gray-500">
                        From last quarter{' '}
                        <span className="text-green-500 font-medium">
                            ▲ {activeProjects.fromLastQuarter}%
                        </span>
                    </div>
                </div>

                {/* Alliance Partner Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Alliance Partner</h3>
                        <div className="flex space-x-2">
                            <button className="p-1 text-gray-500 hover:text-gray-800">
                                <LeftOutlined />
                            </button>
                            <button className="p-1 text-gray-500 hover:text-gray-800">
                                <RightOutlined />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <img
                            src="/images/ark-logo.png" // Placeholder logo, update as needed
                            alt="ARK Multicasting"
                            className="w-12 h-12 mr-4"
                        />
                        <div>
                            <h4 className="text-lg font-semibold">{alliancePartner.name}</h4>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h5 className="text-sm font-semibold text-gray-600">Partnership Date</h5>
                            <p className="text-sm text-gray-800">{alliancePartner.partnershipDate}</p>
                        </div>
                        <div>
                            <h5 className="text-sm font-semibold text-gray-600">Revenue Contribution</h5>
                            <p className="text-sm text-gray-800">{alliancePartner.revenueContribution}</p>
                        </div>
                        <div>
                            <h5 className="text-sm font-semibold text-gray-600">Partnership Duration</h5>
                            <p className="text-sm text-gray-800">{alliancePartner.duration}</p>
                        </div>
                        <div>
                            <h5 className="text-sm font-semibold text-gray-600">Performance Metrics</h5>
                            <p className="text-sm text-gray-800">{alliancePartner.performanceMetrics}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCards;
