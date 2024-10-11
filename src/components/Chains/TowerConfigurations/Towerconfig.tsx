import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Collapse } from "antd";
import { Form } from "antd";
import Systemmetric from "../Forms/TowerConfigForms/Systemmetric";
import Signalmetric from "../Forms/TowerConfigForms/Signalmetric";
import Transmitionmetric from "../Forms/TowerConfigForms/Transmissionmetric";

interface FormValues {
  towerHeight: string;
  unit: string;
  buildingIntervention: string;
  redundancySetup: string;
  BitrateManagement: string;
  bitrateUnit: string;
  RegulatoryCompliance: string;
  SignalPropagationSoftware: string;
  Deboucevalue: string;
  debunit: string;
  AntennaType: string;
  InterferenceManagement: string;
  AntennaHeight: string;
  EffectiveRadiatedPower: string;
  Polarization: string;
  Antennagain: string;
  gainunit: string;
  Azimuth: string;
  ElevationBeamTilt: string;
  FeedLineLoss: string;
  lossunit: string;
  AntennaBeamwidth: string;
  FeedLineType: string;
  Modulation: string;
  CodingRate: string;
  TransmissionLineLength: string;
  CoolingSystem: string;
  AntennaSystemImpedance: string;
  ASIunit: string;
  GuyWiresandSupportStructure: string;
  PowerSupply: string;
  TransmittertoAntennaIsolation: string;
  Isolationunit: string;
  BackupPower: string;
  WindLoadCapacity: string;
  Radome: String;
  GroundingandLightningProtection: String;
}

interface Label {
  heading: string;
}

const Towerconfig = forwardRef((props, ref) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<FormValues>({
    towerHeight: "100",
    unit: "ft",
    buildingIntervention: "Nearby building",
    redundancySetup: "Automatic",
    BitrateManagement: "100",
    bitrateUnit: "mbps",
    RegulatoryCompliance: "FCC Part 73 (U.S.)",
    SignalPropagationSoftware: "Radiomobile, ATDI ICS Telecom",
    Deboucevalue: "200",
    debunit: "ms",
    AntennaType: "Yagi",
    InterferenceManagement: "200",
    AntennaHeight: "190",
    EffectiveRadiatedPower: "30 kW",
    Polarization: "Polarization",
    Antennagain: "15",
    gainunit: "dB",
    Azimuth: "0° (Omni-directional)",
    ElevationBeamTilt: "0.5°",
    FeedLineLoss: "1.5",
    lossunit: "dB",
    AntennaBeamwidth: "360° (Omni-directional)",
    FeedLineType: "Rigid Coaxial Cable",
    Modulation: "64QAM",
    CodingRate: "7/8",
    TransmissionLineLength: "400 meters",
    CoolingSystem: "Forced-Air Cooling",
    AntennaSystemImpedance: "50",
    ASIunit: "ohm",
    GuyWiresandSupportStructure: "Guyed Tower",
    PowerSupply: "3-phase AC, 400V",
    TransmittertoAntennaIsolation: "80",
    Isolationunit: "dB",
    BackupPower: "Diesel Generator + UPS",
    WindLoadCapacity: "120 mph (193 km/h)",
    Radome: "Fiberglass Radome",
    GroundingandLightningProtection: "Ground Radial System + Lightning Rod",
  });
  useImperativeHandle(ref, () => ({
    getFormValues: () => {
      const values = form.getFieldsValue();
      console.log("Tower Form Values (No Validation): ", values);
    },
  }));

  const items = [
    {
      key: "1",
      label: <Labelheading heading="System metric" />,
      children: <Systemmetric />,
    },
    {
      key: "2",
      label: <Labelheading heading="Signal metric" />,
      children: <Signalmetric />,
    },
    {
      key: "3",
      label: <Labelheading heading="Transmission metric" />,
      children: <Transmitionmetric />,
    },
  ];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div className="w-[100%] bg-[#FFF]">
      <Form form={form} layout="vertical" initialValues={formValues}>
        <Collapse
          items={items}
          defaultActiveKey={["1", "2", "3"]}
          onChange={onChange}
          expandIconPosition={"end"}
          ghost={true}
        />
      </Form>
    </div>
  );
});

export default Towerconfig;

function Labelheading({ heading }: Label) {
  return (
    <div className="flex items-center">
      <span className="fs-14 font-[400] text-[#000000D9] mb-[0.8vw]">{heading}</span>
    </div>
  );
}
