"use client";
import React, { useEffect, useState } from "react";
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

  const [fqs, setFAQs] = useState<FAQItem[]>([]);

  // Toggle function for each panel
  const handleToggle = (key: string) => {
    setOpenKeys((prevKeys) =>
      prevKeys.includes(key)
        ? prevKeys.filter((k) => k !== key)
        : [...prevKeys, key]
    );
  };

  useEffect(() => {
    const fetchTowerData = async () => {
      try {

        const response = await fetch("/DB/db.json");
        // const response = await fetch(
        //   `${process.env.NEXT_PUBLIC_JSON_SERVER}/faqs`
        // );
        const data = await response.json();
        setFAQs(data["faqs"]);
      } catch (error) {
        console.error("Failed to fetch faqs data", error);
      }
    };

    fetchTowerData();
  }, []);

  return (
    <div className="w-[58.296vw]">
      <Collapse
        bordered={false}
        expandIcon={() => null}
        className="faq-custom-collapse"
        activeKey={openKeys}
      >
        {fqs?.map(({ key, question, answer }) => (
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
