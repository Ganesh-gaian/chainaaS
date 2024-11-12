import AllianceGrowthChart from "@/components/projects/AllianceGrowthChart";
import DeploymentFrequencyChart from "@/components/projects/DeploymentFrequencyChart";
import LiveAppsUptimeChart from "@/components/projects/LiveAppsUptimeChart";
import ProjectCards from "@/components/projects/projectCards";
import RFPChart from "@/components/projects/RFPChart";
import UserEngagementChart from "@/components/projects/UserEngagementChart";

export default async function Project() {
  let data = await fetch(`${process.env.NEXT_PUBLIC_JSON_SERVER}/chainaas_projects`);
  let projects= await data.json();

  return (
    <div
      id="project_insights"
      className="w-full h-full p-[1.0vw] flex flex-col gap-[1vw] bg-[#F5F6F7] overflow-y-auto scrollBar"
    >
      <div>
        <ProjectCards />
      </div>
      <div className="grid grid-cols-2 gap-[1vw]">
        <AllianceGrowthChart
          AllianceGrowthdata={projects["AllianceGrowth"]}
        />
        <DeploymentFrequencyChart
          DepFrequencydata={projects["deployment_freq"]}
        />
      </div>
      <div className="grid grid-cols-3 gap-[1vw]">
        <RFPChart
          RequestforProposals={projects["RequestforProposals"]}
        />
        <UserEngagementChart
          user_engagements={projects["user_engagements"]}
        />
      </div>
      <div className="w-full mb-[2vw]">
        <LiveAppsUptimeChart
          Live_apps_uptime={projects["Live_apps_uptime"]}
        />
      </div>
    </div>
  );
}
