import AllianceGrowthChart from '@/components/projects/AllianceGrowthChart'
import DeploymentFrequencyChart from '@/components/projects/DeploymentFrequencyChart'
import LiveAppsUptimeChart from '@/components/projects/LiveAppsUptimeChart'
import ProjectCards from '@/components/projects/projectCards'
import RFPChart from '@/components/projects/RFPChart'
import UserEngagementChart from '@/components/projects/UserEngagementChart'

export default function Project() {
  return (
    <div className='w-full h-full  p-[1.0vw] flex flex-col gap-[1vw] bg-[#F5F6F7] overflow-y-auto'>
      <div>
        <ProjectCards />
      </div>
      <div className='grid grid-cols-2 gap-[1vw]'>
        <AllianceGrowthChart />
        <DeploymentFrequencyChart />
      </div>
      <div className='grid grid-cols-3 gap-[1vw]'>
        <RFPChart />
        <UserEngagementChart />
      </div>
      <div className='w-full mb-[7vw]'>
        <LiveAppsUptimeChart />
      </div>
    </div>
  )
}
