import React from "react";
import { Input, Select, Form } from "antd";

const { Option } = Select;

function Contentencoding() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-[1.4vw]">
        <Form.Item label="Video Codec" name="VideoCodec">
          <Input
            style={{ width: "100%", borderRadius: "0px", fontSize: "0.9722vw" }}
          />
        </Form.Item>

        <Form.Item
          label="Synchronization settings"
          name="Synchronizationsettings"
        >
          <Select>
            <Option value="none">none</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Coding rate" name="Codingrate">
          <Select>
            <Option value="7/8">7/8</Option>
            <Option value="5/6">5/6</Option>
            <Option value="3/4">3/4</Option>
          </Select>
        </Form.Item>
      </div>
    </div>
  );
}

export default Contentencoding;
