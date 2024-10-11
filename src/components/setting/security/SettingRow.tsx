import { Radio } from "antd";
import "./SettingRow.css";

interface SettingRowProps<T extends string> {
  title: string;
  description: string;
  options: { label: string; value: T }[];
  value: T;
  onChange: (value: T) => void;
}

const SettingRow = <T extends string>({
  title,
  description,
  options,
  value,
  onChange,
}: SettingRowProps<T>) => {
  return (
    <div className="flex gap-[1.12vw] justify-between items-center h-[7.634vw] px-[1.12vw] pt-[1.12vw] bg-[#fff]">
      <div className="flex flex-col w-[27.56vw] pb-[1.12vw] gap-[0.28vw]">
        <span className="h-[2.083vw] pb-[0.56vw] text-[#262626] font-medium">
          {title}
        </span>
        <p className="text-[#323E4F]">{description}</p>
      </div>
      <div className="flex flex-1 h-[5.274vw]">
        <Radio.Group
          onChange={(e) => onChange(e.target.value as T)} // Ensure the type matches with T
          value={value}
          style={{ display: "flex", flexDirection: "column", gap: "1.12vw" }}
        >
          {options.map((option) => (
            <Radio
              key={option.value}
              value={option.value}
              className="custom-radio"
              style={{
                fontSize: "0.9722vw",
                color: "rgba(0,0,0,0.85)",
                display: "flex",
                gap: "0.56vw",
              }}
            >
              {option.label}
            </Radio>
          ))}
        </Radio.Group>
      </div>
    </div>
  );
};

export default SettingRow;
