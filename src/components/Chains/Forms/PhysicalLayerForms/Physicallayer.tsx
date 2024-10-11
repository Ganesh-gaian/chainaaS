import React from "react";
import "./physicallayer.css";
import { Input, Select, Form, Switch } from "antd";

const { Option } = Select;

const Physicallayer: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
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

        {/* Guard Interval */}
        <Form.Item label="Guard Interval (GI)" name="GuardInterval">
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

        {/* Pilot Pattern */}
        <Form.Item label="Pilot Pattern" name="PilotPattern">
          <Select>
            <Option value="PP3">PP3</Option>
            <Option value="PP4">PP4</Option>
          </Select>
        </Form.Item>

        {/* Time Interleaving Length */}
        <Form.Item
          label="Time Interleaving Length"
          name="TimeInterleavingLength"
        >
          <Select>
            <Option value="8 symbols">8 symbols</Option>
            <Option value="16 symbols">16 symbols</Option>
          </Select>
        </Form.Item>

        {/* Bitrate */}

        <Form.Item label="Bitrate" name="Bitrate" className="w-full">
          <div className="flex gap-[0.5vw]">
            <Form.Item name="bitrate" noStyle>
              <Input
                style={{
                  width: "75%",
                  borderRadius: "0px",
                  fontSize: "0.9722vw",
                }}
              />
            </Form.Item>
            <Form.Item name="bitrateunit" noStyle>
              <Select style={{ width: "25%", fontSize: "0.9722vw" }}>
                <Option value="mbps">mbps</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        {/* PLP ID */}
        <Form.Item label="PLP ID" name="PLPID">
          <Input
            style={{ width: "100%", borderRadius: "0px", fontSize: "0.9722vw" }}
          />
        </Form.Item>

        {/* Service Mode */}
        <Form.Item label="Service Mode" name="ServiceMode">
          <Select>
            <Option value="Fixed HD (TV)">Fixed HD (TV)</Option>
            <Option value="Mobile HD">Mobile HD</Option>
          </Select>
        </Form.Item>

        {/* PLP Input Mode */}
        <Form.Item label="PLP Input Mode" name="PLPInputMode">
          <Select>
            <Option value="TS (Transport Stream)">TS (Transport Stream)</Option>
            <Option value="GSE">GSE</Option>
          </Select>
        </Form.Item>

        {/* Service Mode */}
        <Form.Item label="Service Mode" name="ServiceMode">
          <Select>
            <Option value="Fixed HD (TV)">Fixed HD (TV)</Option>
            <Option value="Mobile HD">Mobile HD</Option>
          </Select>
        </Form.Item>

        {/* Layering Scheme */}
        <Form.Item label="Layering Scheme" name="LayeringScheme">
          <Select>
            <Option value="Base Layer">Base Layer</Option>
            <Option value="Enhanced Layer">Enhanced Layer</Option>
          </Select>
        </Form.Item>

        {/* Channel Bandwidth */}

        <Form.Item
          label="Channel Bandwidth"
          name="Channel Bandwidth"
          className="w-full"
        >
          <div className="flex gap-[0.5vw]">
            <Form.Item name="ChannelBandwidth" noStyle>
              <Input
                style={{
                  width: "75%",
                  borderRadius: "0px",
                  fontSize: "0.9722vw",
                }}
              />
            </Form.Item>
            <Form.Item name="bwunit" noStyle>
              <Select style={{ width: "25%", fontSize: "0.9722vw" }}>
                <Option value="MHz">MHz</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        {/* FEC Type */}
        <Form.Item label="FEC Type" name="FECType">
          <Select>
            <Option value="LDPC (Low-Density Parity-Check)">
              LDPC (Low-Density Parity-Check)
            </Option>
          </Select>
        </Form.Item>

        {/* Center Frequency */}

        <Form.Item
          label="Center Frequency"
          name="Center Frequency"
          className="w-full"
        >
          <div className="flex gap-[0.5vw]">
            <Form.Item name="CenterFrequency" noStyle>
              <Input
                style={{
                  width: "75%",
                  borderRadius: "0px",
                  fontSize: "0.9722vw",
                }}
              />
            </Form.Item>
            <Form.Item name="centerfqunit" noStyle>
              <Select style={{ width: "25%", fontSize: "0.9722vw" }}>
                <Option value="MHz">MHz</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        <div className="col-span-1 toggle-btns-phy">
          {/* Null Packet Deletion */}
          <Form.Item
            label="Null Packet Deletion"
            name="NullPacketDeletion"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          {/* PLP Scrambling */}
          <Form.Item
            label="PLP Scrambling"
            name="PLPScrambling"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default Physicallayer;
