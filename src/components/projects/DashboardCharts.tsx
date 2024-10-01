"use client";
import React from 'react';
import AllianceGrowthChart from './AllianceGrowthChart';
import DeploymentFrequencyChart from './DeploymentFrequencyChart';
import RFPChart from './RFPChart';
import UserEngagementChart from './UserEngagementChart';
import LiveAppsUptimeChart from './LiveAppsUptimeChart';

const DashboardCharts: React.FC = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="grid grid-cols-2 gap-6">
                {/* Alliance Growth Chart */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Alliance Growth Over Time</h3>
                    <AllianceGrowthChart />
                </div>

                {/* Deployment Frequency Chart */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Deployment frequency</h3>
                        <p className="text-2xl font-bold text-gray-800">
                            2,328 <span className="text-red-500 text-sm font-medium">▲ 4.8%</span>
                        </p>
                    </div>
                    <DeploymentFrequencyChart />
                </div>
                {/* RFP chart */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">Requests for proposals</h3>
                    <p className="text-sm text-gray-500">
                        Total RFPs Issued this quarter: <span className="font-bold">12</span>
                    </p>
                    <RFPChart />
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center">
                            <span className="w-3 h-3 mr-2 rounded-full bg-red-300"></span>
                            <span className="text-sm text-gray-600">Declined</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-3 h-3 mr-2 rounded-full bg-yellow-300"></span>
                            <span className="text-sm text-gray-600">Pending</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-3 h-3 mr-2 rounded-full bg-blue-300"></span>
                            <span className="text-sm text-gray-600">Accepted</span>
                        </div>
                    </div>
                </div>
                {/* UserEngagementChart  */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">User Engagement for Live Apps</h3>
                    <UserEngagementChart />
                    <div className="flex justify-center space-x-4 mt-4">
                        <div className="flex items-center">
                            <span className="w-3 h-3 mr-2 rounded-full bg-[#CBC3EE]"></span>
                            <span className="text-sm text-gray-600">Izak</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-3 h-3 mr-2 rounded-full bg-[#A6AF88]"></span>
                            <span className="text-sm text-gray-600">Amplyfund</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-3 h-3 mr-2 rounded-full bg-[#94D0FF]"></span>
                            <span className="text-sm text-gray-600">Hear, Here</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-3 h-3 mr-2 rounded-full bg-[#F1AE9D]"></span>
                            <span className="text-sm text-gray-600">C-Link</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-3 h-3 mr-2 rounded-full bg-[#FBC96C]"></span>
                            <span className="text-sm text-gray-600">Museo</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-3 h-3 mr-2 rounded-full bg-[#E3E1DE]"></span>
                            <span className="text-sm text-gray-600">Spectra-Guard</span>
                        </div>
                    </div>
                </div>
                {/* LiveAppsUptimeChart */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Live Apps Uptime</h3>
                    <LiveAppsUptimeChart />
                </div>
            </div>
        </div>
    );
};

export default DashboardCharts;
