import CloudFailureChart from '@/components/incident/CloudFailureChart'
import ConnectivityFailureChart from '@/components/incident/ConnectivityFailureChart'
import FailureFrequencyChart from '@/components/incident/FailureFrequencyChart'
import IncidentLog from '@/components/incident/IncidentLog'
import IncidentResolutionTimeChart from '@/components/incident/IncidentResolutionTimeChart'
import WorkflowFailureChart from '@/components/incident/WorkflowFailureChart'

export default function Incident() {
  return (
    <div className='w-full h-full  p-[1.0vw] flex flex-col gap-[1vw] bg-[#F5F6F7] overflow-y-auto scrollBar'>
      <div className='grid grid-cols-2 gap-[1vw]'>
        <WorkflowFailureChart />
        <FailureFrequencyChart />
      </div>
      <div className='grid grid-cols-3 gap-[1vw]'>
        <CloudFailureChart />
        <ConnectivityFailureChart />
      </div>
      <div className=''>
        <IncidentResolutionTimeChart />
      </div>
      <div className='w-full mb-[7vw]'>
        <IncidentLog />
      </div>
    </div>
  )
}
