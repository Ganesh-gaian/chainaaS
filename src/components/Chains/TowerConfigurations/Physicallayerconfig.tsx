import { Collapse, Form } from "antd";
import { forwardRef, useImperativeHandle } from "react";
import Physicallayer from "../Forms/PhysicalLayerForms/Physicallayer";

const Physicallayerconfig = forwardRef((props, ref) => {
  const items = [
    {
      key: "1",
      label:<Labelheading heading={"Physical Layer Pipe metric"} />,
      children: <Physicallayer />,
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
          GuardInterval: "1/16",
          FFTSize: "16K",
          PilotPattern: "PP3",
          TimeInterleavingLength: "8 symbols",
          bitrate: 10,
          bitrateunit: "mbps",
          PLPID: "0x01",
          ServiceMode: "Fixed HD (TV)",
          PLPInputMode: "TS (Transport Stream)",
          LayeringScheme: "Base Layer",
          ChannelBandwidth: 6,
          bwunit: "MHz",
          CenterFrequency: 587,
          centerfqunit: "MHz",
          FECType: "LDPC (Low-Density Parity-Check)",
          NullPacketDeletion: true,
          PLPScrambling: true,
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

export default Physicallayerconfig;


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
