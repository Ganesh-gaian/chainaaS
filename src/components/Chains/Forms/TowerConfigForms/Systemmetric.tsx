import React from "react";
import { Input, Select, Form } from "antd";

const { Option } = Select;



function Systemmetric() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-[1.4vw]">
        {/* Tower Height */}
        <Form.Item label="Tower Height" name="towerHeight" className="w-full">
          <div className="flex gap-[0.5vw]">
            <Form.Item name="towerHeight" noStyle>
              <Input style={{ width: "75%", borderRadius: "0px" }} />
            </Form.Item>
            <Form.Item name="unit" noStyle>
              <Select style={{ width: "25%" }}>
                <Option value="ft">ft</Option>
                <Option value="ms">ms</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        {/* Building Intervention */}
        <Form.Item label="Building Intervention" name="buildingIntervention">
          <Select>
            <Option value="Nearby building">Nearby building</Option>
            <Option value="Far building">Far building</Option>
          </Select>
        </Form.Item>

        {/* Redundancy Setup */}
        <Form.Item label="Redundancy Setup" name="redundancySetup">
          <Select>
            <Option value="Automatic">Automatic</Option>
            <Option value="Manual">Manual</Option>
          </Select>
        </Form.Item>

        {/* Bitrate Management */}
        <Form.Item label="Bitrate Management" className="w-full">
          <div className="flex gap-[0.5vw]">
            <Form.Item name="BitrateManagement" noStyle>
              <Input style={{ width: "75%", borderRadius: "0px" }} />
            </Form.Item>
            <Form.Item name="bitrateUnit" noStyle>
              <Select style={{ width: "25%" }}>
                <Option value="kbps">kbps</Option>
                <Option value="mbps">mbps</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        {/* Regulatory Compliance */}
        <Form.Item label="Regulatory Compliance" name="RegulatoryCompliance">
          <Select>
            <Option value="FCC Part 73 (U.S.)">FCC Part 73 (U.S.)</Option>
          </Select>
        </Form.Item>

        {/* Signal Propagation Software */}
        <Form.Item
          label="Signal Propagation Software"
          name="SignalPropagationSoftware"
        >
          <Select>
            <Option value="Radiomobile, ATDI ICS Telecom">
              Radiomobile, ATDI ICS Telecom
            </Option>
          </Select>
        </Form.Item>
      </div>
    </div>
  );
}

export default Systemmetric;
