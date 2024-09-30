import { Tabs } from "antd";

export default function Towerinfotab() {
  const tabItems = [
    {
      key: "1",
      label: "Broadcast Info",
      children: <></>,
    },
    {
      key: "2",
      label: "Tower detail",
      children: <></>,
    },
  ];
  return (
    <div className="w-[100%]">
      <Tabs tabPosition={"left"} defaultActiveKey="1" items={tabItems} />
    </div>
  );
}
