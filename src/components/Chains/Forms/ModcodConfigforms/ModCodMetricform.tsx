import React from "react";
import { Input, Select, Form } from "antd";

const { Option } = Select;

const ModCodMetricForm: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {/* Modulation Type */}
        <Form.Item label="Modulation Type" name="ModulationType">
          <Select>
            <Option value="64-QAM">64-QAM</Option>
            <Option value="16-QAM">16-QAM</Option>
            <Option value="256-QAM">256-QAM</Option>
          </Select>
        </Form.Item>

        {/* Code Rate */}
        <Form.Item label="Code Rate" name="CodeRate">
          <Select>
            <Option value="3/4">3/4</Option>
            <Option value="1/2">1/2</Option>
            <Option value="2/3">2/3</Option>
          </Select>
        </Form.Item>

        {/* FEC Type */}
        <Form.Item label="FEC Type" name="FECType">
          <Select>
            <Option value="LDPC (Low-Density Parity Check)">
              LDPC (Low-Density Parity Check)
            </Option>
          </Select>
        </Form.Item>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Guard Interval */}
        <Form.Item label="Guard Interval" name="GuardInterval">
          <Select>
            <Option value="1/16">1/16</Option>
            <Option value="1/32">1/32</Option>
            <Option value="1/8">1/8</Option>
          </Select>
        </Form.Item>

        {/* FFT Size */}
        <Form.Item label="FFT Size" name="FFTSize">
          <Select>
            <Option value="16K">16K</Option>
            <Option value="32K">32K</Option>
          </Select>
        </Form.Item>

        {/* Modulation Efficiency */}
        <Form.Item label="Modulation Efficiency" name="ModulationEfficiency">
          <Select>
            <Option value="6 bits/symbol">6 bits/symbol</Option>
            <Option value="4 bits/symbol">4 bits/symbol</Option>
          </Select>
        </Form.Item>

        {/* Pilot Pattern */}
        <Form.Item label="Pilot Pattern" name="PilotPattern">
          <Select>
            <Option value="PP3">PP3</Option>
            <Option value="PP4">PP4</Option>
          </Select>
        </Form.Item>

        {/* Bitrate */}
        <Form.Item label="Bitrate" name="Bitrate">
          <Select>
            <Option value="15 Mbps">15 Mbps</Option>
            <Option value="10 Mbps">10 Mbps</Option>
          </Select>
        </Form.Item>

        {/* Bandwidth Efficiency */}

        <Form.Item
          label="Bandwidth Efficiency"
          name="Bandwidth Efficiency"
          className="w-full"
        >
          <div className="flex gap-[0.5vw]">
            <Form.Item name="BandwidthEfficiency" noStyle>
              <Input style={{ width: "75%", borderRadius: "0px" }} />
            </Form.Item>
            <Form.Item name="bwunit" noStyle>
              <Select style={{ width: "25%" }}>
                <Option value="bps/Hz">bps/Hz</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        {/* PLP Type */}
        <Form.Item label="PLP Type" name="PLPType">
          <Select>
            <Option value="Base Layer">Base Layer</Option>
            <Option value="Enhanced Layer">Enhanced Layer</Option>
          </Select>
        </Form.Item>

        {/* Service Type */}
        <Form.Item label="Service Type" name="ServiceType">
          <Select>
            <Option value="Fixed HD (Television)">Fixed HD (Television)</Option>
            <Option value="Mobile HD">Mobile HD</Option>
          </Select>
        </Form.Item>

        {/* Noise Tolerance (SNR) */}
        <Form.Item label="Noise Tolerance (SNR)" name="NoiseTolerance">
          <Select>
            <Option value="20 dB">20 dB</Option>
            <Option value="15 dB">15 dB</Option>
          </Select>
        </Form.Item>

        {/* Constellation Diagram */}
        <Form.Item label="Constellation Diagram" name="ConstellationDiagram">
          <Select>
            <Option value="64-QAM">64-QAM</Option>
            <Option value="16-QAM">16-QAM</Option>
            <Option value="256-QAM">256-QAM</Option>
          </Select>
        </Form.Item>

        {/* Spectral Efficiency */}
        <Form.Item label="Spectral Efficiency" name="SpectralEfficiency">
          <Select>
            <Option value="2.5 bps/Hz">2.5 bps/Hz</Option>
            <Option value="3.0 bps/Hz">3.0 bps/Hz</Option>
          </Select>
        </Form.Item>

        {/* Time Interleaving Depth */}
        <Form.Item label="Time Interleaving Depth" name="TimeInterleavingDepth">
          <Select>
            <Option value="8 symbols">8 symbols</Option>
            <Option value="16 symbols">16 symbols</Option>
          </Select>
        </Form.Item>
      </div>
    </div>
  );
};

export default ModCodMetricForm;
