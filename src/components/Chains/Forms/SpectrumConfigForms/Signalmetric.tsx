import React from "react";
import { Input, Select, Form, Switch } from "antd";
import "./spectrumconfig.css";

const { Option } = Select;

const SignalMetricForm: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {/* Center Frequency */}

        <Form.Item
          label="Center Frequency"
          name="Center Frequency"
          className="w-full"
        >
          <div className="flex gap-[0.5vw]">
            <Form.Item name="CenterFrequency" noStyle>
              <Input style={{ width: "75%", borderRadius: "0px" }} />
            </Form.Item>
            <Form.Item name="centerfunit" noStyle>
              <Select style={{ width: "25%" }}>
                <Option value="MHz">MHz</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        {/* Channel Bandwidth */}

        <Form.Item
          label="Channel Bandwidth"
          name="Channel Bandwidth"
          className="w-full"
        >
          <div className="flex gap-[0.5vw]">
            <Form.Item name="ChannelBandwidth" noStyle>
              <Input style={{ width: "75%", borderRadius: "0px" }} />
            </Form.Item>
            <Form.Item name="bwunit" noStyle>
              <Select style={{ width: "25%" }}>
                <Option value="MHz">MHz</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        {/* Occupied Bandwidth */}

        <Form.Item
          label="Occupied Bandwidth"
          name="Occupied Bandwidth"
          className="w-full"
        >
          <div className="flex gap-[0.5vw]">
            <Form.Item name="OccupiedBandwidth" noStyle>
              <Input style={{ width: "75%", borderRadius: "0px" }} />
            </Form.Item>
            <Form.Item name="occunit" noStyle>
              <Select style={{ width: "25%" }}>
                <Option value="MHz">MHz</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        {/* Guard Band */}
        <Form.Item label="Guard Band" name="GuardBand">
          <Select>
            <Option value="0.31 MHz (155 kHz on each side)">
              0.31 MHz (155 kHz on each side)
            </Option>
          </Select>
        </Form.Item>

        {/* Frequency Offset */}
        <Form.Item label="Frequency Offset" name="FrequencyOffset">
          <Input style={{ width: "100%", borderRadius: "0px" }} />
        </Form.Item>

        {/* Spectrum Mask */}
        <Form.Item label="Spectrum Mask" name="SpectrumMask">
          <Select>
            <Option value="Non-Critical Mask">Non-Critical Mask</Option>
          </Select>
        </Form.Item>

        {/* Transmission Mode */}
        <Form.Item label="Transmission Mode" name="TransmissionMode">
          <Select>
            <Option value="SFN (Single Frequency Network)">
              SFN (Single Frequency Network)
            </Option>
          </Select>
        </Form.Item>

        {/* Network Type */}
        <Form.Item label="Network Type" name="NetworkType">
          <Select>
            <Option value="Terrestrial (Broadcast)">
              Terrestrial (Broadcast)
            </Option>
          </Select>
        </Form.Item>

        {/* Adjacent Channel Protection */}

        <Form.Item
          label="Adjacent Channel Protection"
          name="Adjacent Channel Protection"
          className="w-full"
        >
          <div className="flex gap-[0.5vw]">
            <Form.Item name="AdjacentChannelProtection" noStyle>
              <Input style={{ width: "75%", borderRadius: "0px" }} />
            </Form.Item>
            <Form.Item name="channelunit" noStyle>
              <Select style={{ width: "25%" }}>
                <Option value="dB">dB</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        {/* Guard Interval */}
        <Form.Item label="Guard Interval" name="GuardInterval">
          <Select>
            <Option value="1/16">1/16</Option>
          </Select>
        </Form.Item>

        {/* FFT Size */}
        <Form.Item label="FFT Size" name="FFTSize">
          <Select>
            <Option value="16K">16K</Option>
          </Select>
        </Form.Item>

        {/* Modulation */}
        <Form.Item label="Modulation" name="Modulation">
          <Select>
            <Option value="64-QAM">64-QAM</Option>
          </Select>
        </Form.Item>

        {/* Pilot Pattern */}
        <Form.Item label="Pilot Pattern" name="PilotPattern">
          <Select>
            <Option value="PP3">PP3</Option>
          </Select>
        </Form.Item>

        {/* Transmitter Power Output (TPO) */}
        <Form.Item
          label="Transmitter Power Output (TPO)"
          name="TransmitterPowerOutput"
        >
          <Input suffix="kW" />
        </Form.Item>

        {/* Effective Radiated Power (ERP) */}
        <Form.Item
          label="Effective Radiated Power (ERP)"
          name="EffectiveRadiatedPower"
        >
          <Select>
            <Option value="30kW">30kW</Option>
          </Select>
        </Form.Item>

        {/* Antenna Gain */}
        <Form.Item label="Antenna Gain" name="AntennaGain">
          <Select>
            <Option value="50dB">50dB</Option>
          </Select>
        </Form.Item>

        {/* Polarization */}
        <Form.Item label="Polarization" name="Polarization">
          <Select>
            <Option value="Horizontal">Horizontal</Option>
          </Select>
        </Form.Item>

        {/* Emission Designation */}
        <Form.Item label="Emission Designation" name="EmissionDesignation">
          <Select>
            <Option value="SMaRT/9R">SMaRT/9R</Option>
          </Select>
        </Form.Item>

        {/* SFN Delay */}
        <Form.Item label="SFN Delay" name="SFNDelay">
          <Select>
            <Option value="50ms">50ms</Option>
          </Select>
        </Form.Item>

        {/* SFN Synchronization Method */}
        <Form.Item
          label="SFN Synchronization Method"
          name="SFNSynchronizationMethod"
        >
          <Select>
            <Option value="GPS-Based Synchronization">
              GPS-Based Synchronization
            </Option>
          </Select>
        </Form.Item>

        {/* Spectral Efficiency */}
        <Form.Item label="Spectral Efficiency" name="SpectralEfficiency">
          <Input style={{ width: "100%", borderRadius: "0px" }} />
        </Form.Item>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-[1vw] toggle-btns-spec">
        {/* Peak-to-Average Power Ratio (PAPR) */}
        <Form.Item
          label="Peak-to-Average Power Ratio (PAPR)"
          name="PeakToAveragePowerRatio"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        {/* Null Packet Insertion */}
        <Form.Item
          label="Null Packet Insertion"
          name="NullPacketInsertion"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
      </div>
    </div>
  );
};

export default SignalMetricForm;
