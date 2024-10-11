import { Modal, Timeline } from "antd";
import React from "react";
import "./timeline.css";
import Image from "next/image";
import darrow from "../../../../public/svgs/utilis/arrowdown.svg";
import Closeicon from "./Closeicon";

interface TimelineProps {
  showtimeline: boolean;
  handleTimeline: (value: boolean) => void;
}

interface LogData {
  time: string;
  log: string;
  changes_made: boolean;
}

const Log1: LogData[] = [
  {
    time: "09:52:22 AM",
    log: "The optimized data was exported and uploaded into the report.",
    changes_made: false,
  },
  {
    time: "09:30:24 AM",
    log: "Logged into the platform and opened the performance dashboard.",
    changes_made: false,
  },
  {
    time: "09:32:22 AM",
    log: "Created a snapshot of today’s operational logs for review.",
    changes_made: false,
  },
  {
    time: "09:35:22 AM",
    log: "Details of resources accessed, time spent on nodes, and configuration settings modified during the session.",
    changes_made: false,
  },
  {
    time: "09:39:22 AM",
    log: "PI Capture: Changes made to broadcast frequencies and transmission modes. Spectrum nodes and relevant edges were logged for review.",
    changes_made: true,
  },
  {
    time: "09:45:45 AM",
    log: `User navigated to the "Transmission Config" section and selected the Museo application for broadcast testing.`,
    changes_made: false,
  },
  {
    time: "09:50:22 AM",
    log: "Tower T0011 was selected for spectrum configuration adjustments.",
    changes_made: false,
  },
];

const Log2: LogData[] = [
  {
    time: "09:30:21 AM",
    log: "Spectrum allocation for Izak was adjusted to 64% of the total bandwidth.",
    changes_made: false,
  },
  {
    time: "09:30:24 AM",
    log: "Exported historical data from the last 24 hours of tower activity for audit purposes.",
    changes_made: false,
  },
  {
    time: "09:32:22 AM",
    log: "A bandwidth usage report was generated for tenant applications currently broadcasting from Tower T0011.",
    changes_made: false,
  },
  {
    time: "09:35:22 AM",
    log: "Transmission data for Hear, Here and Amplyfund was exported for performance analysis.",
    changes_made: false,
  },
];

function TimelineModal({ showtimeline, handleTimeline }: TimelineProps) {
  return (
    <Modal
      title={<p className="fs-20">Log History</p>}
      width={"25vw"}
      open={showtimeline}
      style={{ left: "33vw" }}
      footer={null}
      closeIcon={<Closeicon/>}
      onCancel={() => handleTimeline(false)}
    >
      <div className="timeline-main flex justify-center items-start">
        <div className="bg-white rounded-lg mt-[1vw]">
          <div className="flex justify-between mb-[2vw]">
            <div className="flex items-center">
              <p className="fs-15 text-[#1890FF] mr-[0.4vw]">
                01 September 2023
              </p>
              <Image
                className="w-[0.7vw] aspect-square mt-[0.2vw]"
                src={darrow}
                alt="darrow"
              />
            </div>
            <div className="fs-15 px-[1vw] py-[0.2vw] border-[0.1vw] border-[#D9D9D9] cursor-pointer">
              Go to Today
            </div>
          </div>

          <Timeline
            items={Log1.map((data) => {
              return {
                children: <Timelinedata data={data} />,
                color: data.changes_made ? "#007AD1" : "#828282",
              };
            })}
          />

          <div className="flex justify-between mb-[2vw]">
            <div className="flex items-center">
              <p className="fs-15 text-[#2C2C2C] mr-[0.4vw] font-[600]">
                02 September 2023
              </p>
            </div>
          </div>
          <Timeline
            items={Log2.map((data) => {
              return {
                children: <Timelinedata data={data} />,
                color: data.changes_made ? "#007AD1" : "#828282",
              };
            })}
          />
        </div>
      </div>
    </Modal>
  );
}

export default TimelineModal;

interface TimelineDataProps {
  data: LogData;
}

function Timelinedata({ data }: TimelineDataProps) {
  return (
    <>
      {!data.changes_made ? (
        <>
          {" "}
          <p className="fs-12 text-[#2C2C2C] font-[400] opacity-[0.7]">
            {data.time}
          </p>
          <p className="fs-13">{data.log}</p>
        </>
      ) : (
        <div className="w-[112%] py-[1vw] px-[1.6vw] pb-[2vw] pl-[2vw] bg-[#007AD1] text-[#fff] relative right-[2.2vw] bottom-[0.7vw] rounded-[0.5vw]">
          <div className="flex justify-between mb-[0.5vw]">
            <p className="fs-10 text-[#fff]">{data.time}</p>
            <p className="fs-10 text-[#fff]">Version 2.1.1</p>
          </div>

          <p className="fs-13">{data.log}</p>
          {/* <div id="custom-dot"></div> */}
        </div>
      )}
    </>
  );
}
