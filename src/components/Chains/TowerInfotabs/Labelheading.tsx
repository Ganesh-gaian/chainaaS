import { Collapse } from "antd";
import { useEffect, useState } from "react";

interface LabelItem {
  name?: string;
  towerName?: string;
}

interface HeadingProps {
  heading: string;
  selected: string;
  handleInfo: (type: string, value: object) => void;
  labelitems: LabelItem[];
}

export default function Labelheading({
  heading,
  selected,
  handleInfo,
  labelitems,
}: HeadingProps) {
  const [selecteditem, setSelectedItem] = useState(
    labelitems[0].name || labelitems[0].towerName
  );

  useEffect(() => {
    setSelectedItem(labelitems[0].name || labelitems[0].towerName);
  }, [labelitems[0]]);

  const onChange = (key: string | string[]) => {
    console.log(key[0]);
  };
  const items = [
    {
      key: heading === "Broadcast Info" ? "1" : "2",
      label: (
        <span
          id={heading === "Broadcast Info" ? "broadcast-info" : "tower-info"}
          className={`text-left fs-14  font-[400] hover:text-[#1890FF] ${
            selected == heading ? "text-[#1890FF]" : "text-[#000000D9]"
          }`}
        >
          {heading}
        </span>
      ),
      children: labelitems.map((item: LabelItem, index: number) => {
        return (
          <p
            key={index}
            className="text-left fs-12 font-[400] text-[#00000073] p-[0.5vw] hover:bg-[#FAFAFA] hover:text-[#000000D9] rounded-[0.2vw] mb-[0.5vw]"
            onClick={() => {
              handleInfo(
                selected === "Broadcast Info" ? "Broadcast" : "",
                item
              );
              setSelectedItem(item.name || item.towerName);
            }}
            style={
              selecteditem === (item.name || item.towerName)
                ? { backgroundColor: "#FAFAFA", color: "#000000D9" }
                : {}
            }
          >
            {item.name || item.towerName}
          </p>
        );
      }),
      showArrow: false,
    },
  ];
  return (
    <Collapse
      items={items}
      defaultActiveKey={[]}
      ghost={true}
      onChange={onChange}
      activeKey={selected === "Broadcast Info" ? ["1"] : ["2"]}
    />
  );
}
