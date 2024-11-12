import { Collapse, Form } from "antd";
import { forwardRef, useImperativeHandle } from "react";
import ModCodMetricForm from "../Forms/ModcodConfigforms/ModCodMetricform";

const Modcodconfig = forwardRef((props, ref) => {
  const items = [
    {
      key: "1",
      label: <Labelheading heading={"Mod Cod metric"} />,
      children: <ModCodMetricForm />,
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
          ModulationType: "64-QAM",
          CodeRate: "3/4",
          FECType: "LDPC (Low-Density Parity Check)",
          GuardInterval: "1/16",
          FFTSize: "16K",
          ModulationEfficiency: "6 bits/symbol",
          PilotPattern: "PP3",
          Bitrate: "15 Mbps",
          BandwidthEfficiency: "2.5",
          bwunit: "bps/Hz",
          PLPType: "Base Layer",
          ServiceType: "Fixed HD (Television)",
          NoiseTolerance: "20 dB",
          ConstellationDiagram: "64-QAM",
          SpectralEfficiency: "2.5 bps/Hz",
          TimeInterleavingDepth: "8 symbols",
        }}
        onFinish={(values) => {
          console.log(values);
        }}
      >
        <Collapse
          items={items}
          defaultActiveKey={["1"]}
          onChange={onChange}
          expandIconPosition={"end"}
          bordered={false}
        />
      </Form>
    </div>
  );
});

export default Modcodconfig;

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
