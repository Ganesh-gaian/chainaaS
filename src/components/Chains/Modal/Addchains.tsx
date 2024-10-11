"use client";

import { Button, Modal } from "antd";
import React from "react";
import Closeicon from "./Closeicon";

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

  const button_styles = {fontSize:"0.9722vw",padding:"1vw",borderRadius:"0.2vw",marginLeft:"0.5vw"}

  return (
    <Modal
      title={<p className="fs-20">Add Chain</p>}
      width={"40vw"}
      open={showmodal}
      onCancel={() => handleModal(false)}
      closeIcon={<Closeicon/>}
      footer={[
        <Button key="cancel" onClick={() => handleModal(false)} style={button_styles}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" style={button_styles}>
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
                <input type="checkbox" className="w-[1vw] h-[2vw] mr-[0.5vw]" />
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
                <input type="checkbox" className="w-[1vw] h-[2vw] mr-[0.5vw]" />
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
