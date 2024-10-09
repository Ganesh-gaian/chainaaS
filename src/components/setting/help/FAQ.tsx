"use client";
import React from "react";
import { Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const FAQ: React.FC = () => {
  return (
    <div className="w-[58.296vw] flex flex-col gap-[1.12vw]">
      <Collapse
        defaultActiveKey={["1", "2", "3"]} // All panels open by default
        expandIcon={({ isActive }) => (
          <DownOutlined rotate={isActive ? 180 : 270} />
        )}
        bordered={false}
        expandIconPosition="right" // Arrow will be on the right
        className="site-collapse-custom-collapse"
      >
        {/* First Question */}
        <Panel
          header={
            <span className="fs-16 text-[#323E4F] font-semibold">
              What is ChainaaS
            </span>
          }
          key="1"
          className="bg-white rounded-[0.14vw] px-[0.56vw] mb-[1.12vw]" // Gap of 1.12vw between panels
        >
          <p>
            ChainaaS stands for Chain as a Service, a platform designed to help
            broadcasters, spectrum operators, and tower operators efficiently
            deploy and manage apps or services over a broadcast network
            infrastructure, typically leveraging TV towers and broadcast
            spectrum.
          </p>
        </Panel>

        {/* Second Question */}
        <Panel
          header={
            <span className="fs-16 text-[#323E4F] font-semibold">
              How do I deploy an app to a new tower?
            </span>
          }
          key="2"
          className="bg-white rounded-[0.14vw] px-[0.56vw] mb-[1.12vw]" // Gap of 1.12vw between panels
        >
          <p>
            To deploy an app, go to the "App Management" section, click "Deploy
            New App," select the tower, and allocate bandwidth. Confirm your
            settings to complete the process.
          </p>
        </Panel>

        {/* Third Question */}
        <Panel
          header={
            <span className="fs-16 text-[#323E4F] font-semibold">
              How do I upgrade my subscription plan?
            </span>
          }
          key="3"
          className="w-full bg-white rounded-[0.14vw] px-[0.56vw]" // No margin for the last panel
        >
          <p>
            To upgrade your subscription, navigate to the "Account Settings"
            tab, click on "Subscription Plan," and select the plan you wish to
            upgrade to. Confirm payment details to finalize the upgrade.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default FAQ;
