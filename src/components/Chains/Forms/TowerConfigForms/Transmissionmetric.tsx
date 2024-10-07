import React from "react";
import { Input, Select, Form } from "antd";

const { Option } = Select;

function Transmitionmetric() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-[1.4vw]">
        {/* Modulation */}
        <Form.Item label="Modulation" name="Modulation">
          <Select>
            <Option value="64QAM">64QAM</Option>
            <Option value="16QAM">16QAM</Option>
            <Option value="QPSK">QPSK</Option>
          </Select>
        </Form.Item>

        {/* Coding Rate */}
        <Form.Item label="Coding Rate" name="CodingRate">
          <Select>
            <Option value="7/8">7/8</Option>
            <Option value="5/6">5/6</Option>
            <Option value="3/4">3/4</Option>
          </Select>
        </Form.Item>

        {/* Transmission Line Length */}
        <Form.Item
          label="Transmission Line Length"
          name="TransmissionLineLength"
        >
          <Input style={{ width: "100%", borderRadius: "0px" }} />
        </Form.Item>

        {/* notinfigma */}
        <Form.Item label="notinfigma" name="notinfigma">
          <Input style={{ width: "100%", borderRadius: "0px" }} />
        </Form.Item>

        {/* notinfigma */}
        <Form.Item label="notinfigma" name="notinfigma">
          <Input style={{ width: "100%", borderRadius: "0px" }} />
        </Form.Item>

        {/* Cooling System */}
        <Form.Item label="Cooling System" name="CoolingSystem">
          <Input style={{ width: "100%", borderRadius: "0px" }} />
        </Form.Item>

        <Form.Item
          label="Antenna System Impedance"
          name="Antenna System Impedance"
          className="w-full"
        >
          <div className="flex gap-[0.5vw]">
            <Form.Item name="AntennaSystemImpedance" noStyle>
              <Input style={{ width: "75%", borderRadius: "0px" }} />
            </Form.Item>
            <Form.Item name="ASIunit" noStyle>
              <Select style={{ width: "25%" }}>
                <Option value="ohm">ohm</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        {/* Guy Wires and Support Structure */}
        <Form.Item
          label="Guy Wires and Support Structure"
          name="GuyWiresandSupportStructure"
        >
          <Select>
            <Option value="Guyed Tower">Guyed Tower</Option>
          </Select>
        </Form.Item>

        {/*Power Supply*/}

        <Form.Item label="Power Supply" name="PowerSupply">
          <Select>
            <Option value="3-phase AC, 400V">3-phase AC, 400V</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Transmitter-to-Antenna Isolation"
          name="Transmitter-to-Antenna Isolation"
          className="w-full"
        >
          <div className="flex gap-[0.5vw]">
            <Form.Item name="TransmittertoAntennaIsolation" noStyle>
              <Input style={{ width: "75%", borderRadius: "0px" }} />
            </Form.Item>
            <Form.Item name="Isolationunit" noStyle>
              <Select style={{ width: "25%" }}>
                <Option value="dB">dB</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        {/* Backup Power */}
        <Form.Item label="Backup Power" name="BackupPower">
          <Select>
            <Option value="Diesel Generator + UPS">
              Diesel Generator + UPS
            </Option>
          </Select>
        </Form.Item>

        {/*Wind Load Capacity*/}

        <Form.Item label="Wind Load Capacity" name="WindLoadCapacity">
          <Select>
            <Option value="120 mph (193 km/h)">120 mph (193 km/h)</Option>
          </Select>
        </Form.Item>
      </div>
    </div>
  );
}

export default Transmitionmetric;
