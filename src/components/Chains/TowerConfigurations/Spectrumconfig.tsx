import { Collapse, Form } from "antd";
import { forwardRef, useImperativeHandle } from "react";
import SignalMetricForm from "../Forms/SpectrumConfigForms/Signalmetric";
import ConfigurationMetricForm from "../Forms/SpectrumConfigForms/Configmetric";

const Spectrumconfig = forwardRef((props, ref) => {
  const items = [
    {
      key: "1",
      label:<Labelheading heading={"Signal metric"} /> ,
      children: <SignalMetricForm />,
    },
    {
      key: "2",
      label:<Labelheading heading={"Configuration metric"} /> ,
      children: <ConfigurationMetricForm />,
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
          CenterFrequency: 587,
          centerfunit: "MHz",
          ChannelBandwidth: 6,
          bwunit: "MHz",
          OccupiedBandwidth: "5.38",
          occunit: "MHz",
          GuardBand: "0.31 MHz (155 kHz on each side)",
          FrequencyOffset: "+100 Hz",
          SpectrumMask: "Non-Critical Mask",
          TransmissionMode: "SFN (Single Frequency Network)",
          NetworkType: "Terrestrial (Broadcast)",
          AdjacentChannelProtection: "60 dB",
          channelunit: "dB",
          GuardInterval: "1/16",
          FFTSize: "16K",
          Modulation: "64-QAM",
          PilotPattern: "PP3",
          TransmitterPowerOutput: "20 kW",
          EffectiveRadiatedPower: "30 kW",
          AntennaGain: "10 dB",
          Polarization: "Horizontal",
          EmissionDesignation: "SMaRT/9R",
          SFNDelay: "50 ms",
          SFNSynchronizationMethod: "GPS-Based Synchronization",
          SpectralEfficiency: "1.85 bps/Hz",
          PeakToAveragePowerRatio: true,
          NullPacketInsertion: true,
          UncertainFrequency: "06",
          UFrequencyUnit: "MHz",
          ModulationType: "OFDM",
          CodeRate: "5/6",
          ErrorCorrection: "3/4",
          CarrierFrequency: 500,
          FrequencyUnit: "MHz",
          PowerLevel: 50,
          PowerUnit: "dBm",
          SpectrumLicenseNumber: "ABC123456",
          Expirationdate: "2025-12-31",
        }}
        onFinish={(values) => {
          console.log(values);
        }}
      >
        <Collapse
          items={items}
          defaultActiveKey={["1", "2", "3"]}
          onChange={onChange}
          expandIconPosition={"end"}
          bordered={false}
        />
      </Form>
    </div>
  );
});

export default Spectrumconfig;

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