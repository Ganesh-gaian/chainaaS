import React, { forwardRef, useImperativeHandle } from "react";
import { Collapse, Form } from "antd";
import Towerinfoform from "../Forms/ExciterConfigForms/Towerinfoform";
import ExciterMetric from "../Forms/ExciterConfigForms/Excitermetric";
import Contentencoding from "../Forms/ExciterConfigForms/Contentencoding";

const Exciterconfig = forwardRef((props, ref) => {
  const items = [
    {
      key: "1",
      label: <Labelheading heading={"Tower information"} />,
      children: <Towerinfoform />,
    },
    {
      key: "2",
      label: <Labelheading heading={"Exciter metric"} />,
      children: <ExciterMetric />,
    },
    {
      key: "3",
      label: <Labelheading heading={"Content Encoding"} />,
      children: <Contentencoding />,
    },
  ];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    getFormValues: () => {
      const values = form.getFieldsValue();
      console.log("Tower Form Values (No Validation): ", values);
    },
  }));

  return (
    <div className="w-[100%]">
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          NumberofTowers: "3/4",
          TowerLocations: "3/4",
          Modulation: "OFDM",
          carrierFrequency: 587,
          funit: "MHz",
          outputPowerLevel: "5 kW",
          modulationType: "64QAM",
          frequency: 100,
          frequencyunit: "Hz",
          PowerLevelunit: "dBm",
          delayunit: "ms",
          symbolrate: "Msps",
          fftSize: "16K",
          frequencyOffset: 6,
          powerLevel: 0.5,
          atscModeSelection: "ATSC 3.0",
          signalDelay: 50,
          symbolRate: 6.5,
          tsOrIpInput: "TS (Transport Stream)",
          fecSettings: "LDPC 3/4",
          ipAddress: "192.168.1.100",
          gateway: "192.168.1.1 / 255.255.255.0",
          rfOutputEnable: true,
          gpsSyncEnable: true,
          onePpsSignal: true,
          timeBaseErrorCorrection: true,
          singleFrequencyNetworkMode: true,
          preDistortion: true,
          channelFiltering: true,
          notinfigma: "notinfigma",
          VideoCodec: "ABC123456",
          Synchronizationsettings: "none",
          Codingrate: "7/8",
          GuardInterval:"1/16"
        }}
        onFinish={(values) => {
          console.log(values);
        }}
      >
        <Collapse
          items={items}
          defaultActiveKey={["1","2","3"]}
          onChange={onChange}
          expandIconPosition={"end"}
          ghost={true}
        />
      </Form>
    </div>
  );
});

export default Exciterconfig;

interface HeadingProps {
  heading: String;
}

function Labelheading({ heading }: HeadingProps) {
  return (
    <div className="flex items-center">
      <span className="fs-14 font-[400] mr-[0.4vw]">{heading}</span>
    </div>
  );
}
