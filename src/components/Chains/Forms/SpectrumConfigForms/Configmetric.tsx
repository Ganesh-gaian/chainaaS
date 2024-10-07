import React from "react";
import { Input, Select, Form } from "antd";

const { Option } = Select;

const ConfigurationMetricForm: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {/* Modulation Type */}
        <Form.Item label="Modulation type" name="ModulationType">
          <Select>
            <Option value="OFDM">OFDM</Option>
            <Option value="QAM">QAM</Option>
          </Select>
        </Form.Item>

        {/* Code Rate */}
        <Form.Item label="Code Rate" name="CodeRate">
          <Select>
            <Option value="5/6">5/6</Option>
            <Option value="3/4">3/4</Option>
            <Option value="2/3">2/3</Option>
          </Select>
        </Form.Item>

        {/* Error Correction */}
        <Form.Item label="Error correction" name="ErrorCorrection">
          <Select>
            <Option value="3/4">3/4</Option>
            <Option value="1/2">1/2</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Uncertain Frequency"
          name="Uncertain Frequency"
          className="w-full"
        >
          <div className="flex gap-[0.5vw]">
            <Form.Item name="UncertainFrequency" noStyle>
              <Input style={{ width: "75%", borderRadius: "0px" }} />
            </Form.Item>
            <Form.Item name="UFrequencyUnit" noStyle>
              <Select style={{ width: "25%" }}>
                <Option value="MHz">MHz</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        {/* Carrier Frequency */}

        <Form.Item
          label="Carrier Frequency"
          name="Carrier Frequency"
          className="w-full"
        >
          <div className="flex gap-[0.5vw]">
            <Form.Item name="CarrierFrequency" noStyle>
              <Input style={{ width: "75%", borderRadius: "0px" }} />
            </Form.Item>
            <Form.Item name="FrequencyUnit" noStyle>
              <Select style={{ width: "25%" }}>
                <Option value="MHz">MHz</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>

        {/* Power Level */}

        <Form.Item label="Power level" name="Power level" className="w-full">
          <div className="flex gap-[0.5vw]">
            <Form.Item name="PowerLevel" noStyle>
              <Input style={{ width: "75%", borderRadius: "0px" }} />
            </Form.Item>
            <Form.Item name="PowerUnit" noStyle>
              <Select style={{ width: "25%" }}>
                <Option value="dB">dB</Option>
              </Select>
            </Form.Item>
          </div>
        </Form.Item>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Spectrum License Number */}
        <div>
          <Form.Item
            label="Spectrum License number"
            name="SpectrumLicenseNumber"
          >
            <Input style={{ width: "100%", borderRadius: "0px" }} />
          </Form.Item>
        </div>
        {/* Expiration date */}
        <div>
          <Form.Item label="Expiration date" name="Expirationdate">
            <Input style={{ width: "100%", borderRadius: "0px" }} />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationMetricForm;
