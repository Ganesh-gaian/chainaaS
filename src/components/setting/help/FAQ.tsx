"use client";
import React, { useState } from "react";
import { Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./FAQ.css";

const { Panel } = Collapse;

// Define types for FAQ data
interface FAQItem {
  key: string;
  question: string;
  answer: string;
}

// FAQ data
const faqData: FAQItem[] = [
  {
    key: "1",
    question: "What is ChainaaS",
    answer:
      "ChainaaS stands for Chain as a Service, a platform designed to help broadcasters, spectrum operators, and tower operators efficiently deploy and manage apps or services over a broadcast network infrastructure, typically leveraging TV towers and broadcast spectrum.",
  },
  {
    key: "2",
    question: "How do I deploy an app to a new tower?",
    answer:
      'To deploy an app, go to the "App Management" section, click "Deploy New App," select the tower, and allocate bandwidth. Confirm your settings to complete the process.',
  },
  {
    key: "3",
    question: "How do I upgrade my subscription plan?",
    answer:
      'To upgrade your subscription, navigate to the "Account Settings" tab, click on "Subscription Plan," and select the plan you wish to upgrade to. Confirm payment details to finalize the upgrade.',
  },
];

// Custom icon component that accepts onClick handler and rotation state
const CustomDownIcon = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <DownOutlined
    style={{
      fontSize: "1.2vw",
      transition: "transform 0.3s ease",
      marginLeft: "auto",
      cursor: "pointer",
      transform: isOpen ? "rotate(180deg)" : "rotate(270deg)",
    }}
    onClick={onClick}
  />
);

const FAQ: React.FC = () => {
  const [openKeys, setOpenKeys] = useState<string[]>(["1", "2", "3"]);

  // Toggle function for each panel
  const handleToggle = (key: string) => {
    setOpenKeys((prevKeys) =>
      prevKeys.includes(key)
        ? prevKeys.filter((k) => k !== key)
        : [...prevKeys, key]
    );
  };

  return (
    <div className="w-[58.296vw]">
      <Collapse
        bordered={false}
        expandIcon={() => null}
        className="faq-custom-collapse"
        activeKey={openKeys}
      >
        {faqData.map(({ key, question, answer }) => (
          <Panel
            key={key}
            header={
              <div className="flex items-center justify-between">
                {/* Question text */}
                <span className="text-[#323E4F] font-medium text-[1.12vw]">
                  {question}
                </span>
                {/* Custom Arrow icon with onClick */}
                <CustomDownIcon
                  isOpen={openKeys.includes(key)}
                  onClick={() => handleToggle(key)}
                />
              </div>
            }
            className="bg-white rounded-[0.14vw] px-[0.56vw] mt-[1.12vw]"
          >
            <p className="text-[#697483] text-[0.9722vw]">{answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQ;
