import React from "react";
import { Input, Select, Form } from "antd";

const { Option } = Select;


function Signalmetric() {
  

  return (
    <div>
        <div className="grid grid-cols-3 gap-[1.4vw]">
          {/* Debouce value */}
          <Form.Item label="Debounce value" name="Debouce" className="w-full">
            <div className="flex gap-[0.5vw]">
              <Form.Item name="Deboucevalue" noStyle>
                 <Input style={{ width: "75%",borderRadius:"0px" }} />
              </Form.Item>
              <Form.Item name="debunit" noStyle>
                <Select style={{ width: "25%" }}>
                  <Option value="ms">ms</Option>
                </Select>
              </Form.Item>
            </div>
          </Form.Item>

          {/* Antenna Type */}
          <Form.Item label="Antenna Type" name="AntennaType">
            <Select>
              <Option value="Yagi">Yagi</Option>
              <Option value="Parabolic">Parabolic</Option>
              <Option value="Omni-directional">Omni-directional</Option>
            </Select>
          </Form.Item>

          {/* Interference Management */}
          <Form.Item
            label="Interference Management"
            name="InterferenceManagement"
          >
            <Input style={{ width: "100%",borderRadius:"0px" }} />
          </Form.Item>

          {/* Antenna Height */}
          <Form.Item label="Antenna Height" name="AntennaHeight">
           <Input style={{ width: "100%",borderRadius:"0px" }} />
          </Form.Item>

          {/* Polarization */}
          <Form.Item label="Polarization" name="Polarization">
            <Select>
              <Option value="Polarization">Polarization</Option>
            </Select>
          </Form.Item>

          {/* Effective Radiated Power (ERP) */}
          <Form.Item
            label="Effective Radiated Power (ERP)"
            name="EffectiveRadiatedPower"
          >
           <Input style={{ width: "100%",borderRadius:"0px" }} />
          </Form.Item>

          <Form.Item
            label="Antenna gain"
            name="Antenna Gain"
            className="w-full"
          >
            <div className="flex gap-[0.5vw]">
              <Form.Item name="Antennagain" noStyle>
                 <Input style={{ width: "75%",borderRadius:"0px" }} />
              </Form.Item>
              <Form.Item name="gainunit" noStyle>
                <Select style={{ width: "25%" }}>
                  <Option value="dB">dB</Option>
                </Select>
              </Form.Item>
            </div>
          </Form.Item>

          {/* Antenna Type */}
          <Form.Item label="Azimuth" name="Azimuth">
            <Select>
              <Option value="0° (Omni-directional)">
                0° (Omni-directional)
              </Option>
            </Select>
          </Form.Item>

          {/*Elevation Beam Tilt*/}

          <Form.Item label="Elevation Beam Tilt" name="ElevationBeamTilt">
            <Select>
              <Option value="0.5°">0.5°</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Feed Line Loss"
            name="Feed Line Loss"
            className="w-full"
          >
            <div className="flex gap-[0.5vw]">
              <Form.Item name="FeedLineLoss" noStyle>
                 <Input style={{ width: "75%",borderRadius:"0px" }} />
              </Form.Item>
              <Form.Item name="lossunit" noStyle>
                <Select style={{ width: "25%" }}>
                  <Option value="dB">dB</Option>
                </Select>
              </Form.Item>
            </div>
          </Form.Item>

          {/* Antenna Beamwidth */}
          <Form.Item label="Antenna Beamwidth" name="AntennaBeamwidth">
            <Select>
              <Option value="360° (Omni-directional)">
                360° (Omni-directional)
              </Option>
            </Select>
          </Form.Item>

          {/*Feed Line Type*/}

          <Form.Item label="Feed Line Type" name="FeedLineType">
            <Select>
              <Option value="Rigid Coaxial Cable">Rigid Coaxial Cable</Option>
            </Select>
          </Form.Item>
        </div>
    </div>
  );
}

export default Signalmetric;
