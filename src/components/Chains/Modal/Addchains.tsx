"use client";

import { Button, Modal } from "antd";
import React from "react";

interface AddchainsProps {
  showmodal: boolean;
  handleModal: (value: boolean) => void;
}

const Addchains: React.FC<AddchainsProps> = ({ showmodal, handleModal }) => {
  const regions: string[] = [
    "Queens",
    "Brooklyn",
    "Manhattan",
    "Long Island",
    "Park Avenue",
  ];

  const applications: string[] = [
    "Museo",
    "Izak",
    "Spectraguard",
    "Hear,Here",
    "Amplyfund",
  ];

  return (
    <Modal
      title="Add Chain"
      width={"50vw"}
      open={showmodal}
      onCancel={() => handleModal(false)}
      footer={[
        <Button key="cancel" onClick={() => handleModal(false)}>
          Cancel
        </Button>,
        <Button key="submit" type="primary">
          Create Chain
        </Button>,
      ]}
    >
      <div className="w-full flex">
        <section className="w-[50%]">
          <div className="my-[1vw] fs-14 text-[#000000D9] font-[400]">
            Select Region
          </div>
          {regions.map((data, index) => {
            return (
              <div
                key={index}
                className="flex items-center my-[0.5vw] fs-14 text-[#000000D9] font-[400]"
              >
                <input type="checkbox" className="mr-[0.5vw]" />
                <label>{data}</label>
              </div>
            );
          })}
        </section>
        <section className="w-[50%]">
          <div className="my-[1vw] fs-14 text-[#000000D9] font-[400]">
            Select Applications
          </div>
          {applications.map((data, index) => {
            return (
              <div
                key={index}
                className="flex items-center my-[0.5vw] fs-14 text-[#000000D9] font-[400]"
              >
                <input type="checkbox" className="mr-[0.5vw]" />
                <label>{data}</label>
              </div>
            );
          })}
        </section>
      </div>
    </Modal>
  );
};

export default Addchains;
