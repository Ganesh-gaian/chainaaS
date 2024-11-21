"use client";
import React, { useState, useEffect } from 'react';
import CloudFailureChart from '@/components/incident/CloudFailureChart';
import ConnectivityFailureChart from '@/components/incident/ConnectivityFailureChart';
import FailureFrequencyChart from '@/components/incident/FailureFrequencyChart';
import IncidentLog from '@/components/incident/IncidentLog';
import IncidentResolutionTimeChart from '@/components/incident/IncidentResolutionTimeChart';
import WorkflowFailureChart from '@/components/incident/WorkflowFailureChart';

export default function Incident() {
  const [data, setData] = useState<null | any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [incidentData, setIncidentData] = useState<null | any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_JSON_SERVER}/chainaas_incidentlog`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const responseData = await response.json();
        setData(responseData);
      } catch (err: any) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_JSON_SERVER}/chainaas_incidentsData`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const responseData = await response.json();
        setIncidentData(responseData);
      } catch (err: any) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      id="incident_insights"
      className="w-full h-full p-[1vw] flex flex-col gap-[1vw] overflow-y-auto scrollBar"
    >
      <div className="grid grid-cols-2 gap-[1vw]">
        <WorkflowFailureChart WorkflowFailureData={data?.FailureData?.categories?.filter((item: any) => item.type === "Workflow")} />
        <FailureFrequencyChart FailureFrequency={data?.FailureData?.categories?.filter((item: any) => item.type === "Application")} />
      </div>
      <div className="grid grid-cols-3 gap-[1vw]">
        <CloudFailureChart CloudFailureData={data?.FailureData?.categories?.filter((item: any) => item.type === "Cloud")} />
        <ConnectivityFailureChart ConnectivityFailureData={data?.FailureData?.categories?.filter((item: any) => item.type === "Connectivity") } />
      </div>
      <div className="w-full">
        <IncidentResolutionTimeChart ResolutionTimeData={data?.ResolutionTimeData} />
      </div>
      <div className="w-full mb-[2vw]">
        <IncidentLog incidents={incidentData} />
      </div>
    </div>
  );
}
