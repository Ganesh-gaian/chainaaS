import React from "react";
import { Select, Form } from "antd";

const { Option } = Select;

function Towerinfoform() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-[1.4vw]">
        <Form.Item label="Number of Towers" name="NumberofTowers">
          <Select>
            <Option value="3/4">3/4</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Tower Locations" name="TowerLocations">
          <Select>
            <Option value="3/4">3/4</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Modulation" name="Modulation">
          <Select>
            <Option value="OFDM">OFDM</Option>
          </Select>
        </Form.Item>
      </div>
    </div>
  );
}

export default Towerinfoform;
