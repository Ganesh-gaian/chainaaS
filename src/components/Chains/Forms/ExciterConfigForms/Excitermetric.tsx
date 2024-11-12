import React from "react";
import "./exciter.css";
import { Input, Select, Form, Switch } from "antd";

const { Option } = Select;

function ExciterMetric() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-[1.4vw]">
        <Form.Item
          label="Carrier Frequency"
          name="Carrier Frequency"
          className="w-full"
        >
          <div className="flex gap-[0.5vw]">
            <Form.Item name="carrierFrequency" noStyle>
              <Input
                style={{
                  width: "75%",
                  borderRadius: "0px",
                  fontSize: "0.9722vw",
                }}
              />
            </Form.Item>
            <Form.Item name="funit" noStyle>
              <Select style={{ width: "25%", fontSize: "0.9722vw" }}>
                <Option value="MHz">MHz</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        <Form.Item label="Output Power Level" name="outputPowerLevel">
          <Select>
            <Option value="5 kW">5 kW</Option>
            <Option value="10 kW">10 kW</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Modulation Type" name="modulationType">
          <Select>
            <Option value="64QAM">64QAM</Option>
            <Option value="16QAM">16QAM</Option>
            <Option value="QPSK">QPSK</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Frequency" name="Frequency" className="w-full">
          <div className="flex gap-[0.5vw]">
            <Form.Item name="frequency" noStyle>
              <Input
                style={{
                  width: "75%",
                  borderRadius: "0px",
                  fontSize: "0.9722vw",
                }}
              />
            </Form.Item>
            <Form.Item name="frequencyunit" noStyle>
              <Select style={{ width: "25%", fontSize: "0.9722vw" }}>
                <Option value="Hz">Hz</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        <Form.Item label="FFT Size" name="fftSize">
          <Select>
            <Option value="16K">16K</Option>
            <Option value="32K">32K</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Guard Interval" name="GuardInterval">
          <Select>
            <Option value="1/16">1/16</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Frequency Offset"
          name="Frequency Offset"
          className="w-full"
        >
          <div className="flex gap-[0.5vw]">
            <Form.Item name="frequencyOffset" noStyle>
              <Input
                style={{
                  width: "75%",
                  borderRadius: "0px",
                  fontSize: "0.9722vw",
                }}
              />
            </Form.Item>
            <Form.Item name="funit" noStyle>
              <Select style={{ width: "25%", fontSize: "0.9722vw" }}>
                <Option value="MHz">MHz</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        <Form.Item label="Power Level" name="Power Level" className="w-full">
          <div className="flex gap-[0.5vw]">
            <Form.Item name="powerLevel" noStyle>
              <Input
                style={{
                  width: "75%",
                  borderRadius: "0px",
                  fontSize: "0.9722vw",
                }}
              />
            </Form.Item>
            <Form.Item name="PowerLevelunit" noStyle>
              <Select style={{ width: "25%", fontSize: "0.9722vw" }}>
                <Option value="dBm">dBm</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        <Form.Item label="ATSC Mode Selection" name="atscModeSelection">
          <Select>
            <Option value="ATSC 3.0">ATSC 3.0</Option>
            <Option value="ATSC 1.0">ATSC 1.0</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Signal Delay (ms)"
          name="Signal Delay (ms)"
          className="w-full"
        >
          <div className="flex gap-[0.5vw]">
            <Form.Item name="signalDelay" noStyle>
              <Input
                style={{
                  width: "75%",
                  borderRadius: "0px",
                  fontSize: "0.9722vw",
                }}
              />
            </Form.Item>
            <Form.Item name="delayunit" noStyle>
              <Select style={{ width: "25%", fontSize: "0.9722vw" }}>
                <Option value="ms">ms</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        <Form.Item
          label="Symbol Rate (Msps)"
          name="Symbol Rate (Msps)"
          className="w-full"
        >
          <div className="flex gap-[0.5vw]">
            <Form.Item name="symbolRate" noStyle>
              <Input
                style={{
                  width: "75%",
                  borderRadius: "0px",
                  fontSize: "0.9722vw",
                }}
              />
            </Form.Item>
            <Form.Item name="symbolrate" noStyle>
              <Select style={{ width: "25%", fontSize: "0.9722vw" }}>
                <Option value="Msps">Msps</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        <Form.Item label="TS or IP Input Enable" name="tsOrIpInput">
          <Select>
            <Option value="TS (Transport Stream)">TS (Transport Stream)</Option>
            <Option value="IP (Internet Protocol)">
              IP (Internet Protocol)
            </Option>
          </Select>
        </Form.Item>

        <Form.Item label="FEC Settings" name="fecSettings">
          <Select>
            <Option value="LDPC 3/4">LDPC 3/4</Option>
            <Option value="LDPC 1/2">LDPC 1/2</Option>
          </Select>
        </Form.Item>

        <Form.Item label="IP Address" name="ipAddress">
          <Input
            style={{ width: "100%", borderRadius: "0px", fontSize: "0.9722vw" }}
          />
        </Form.Item>

        <Form.Item label="Gateway and Subnet Mask" name="gateway">
          <Input
            style={{ width: "100%", borderRadius: "0px", fontSize: "0.9722vw" }}
          />
        </Form.Item>
      </div>
      <div className="grid grid-cols-2 gap-[1.4vw] toggle-btns">
        <Form.Item
          label="RF Output Enable"
          name="rfOutputEnable"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          label="GPS Sync Enable"
          name="gpsSyncEnable"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          label="1PPS Signal"
          name="onePpsSignal"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          label="Time Base Error Correction"
          name="timeBaseErrorCorrection"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          label="Single Frequency Network Mode"
          name="singleFrequencyNetworkMode"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          label="Pre-distortion"
          name="preDistortion"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          label="Channel Filtering"
          name="channelFiltering"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
      </div>
    </div>
  );
}

export default ExciterMetric;

