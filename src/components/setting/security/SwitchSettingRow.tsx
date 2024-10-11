import { Switch } from "antd";

interface SwitchSettingRowProps {
  title: string;
  description: string;
  isToggled: boolean;
  onToggle: (checked: boolean) => void;
}

const SwitchSettingRow: React.FC<SwitchSettingRowProps> = ({ title, description, isToggled, onToggle }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-[0.56vw] h-[5.55vw] px-[1.67vw] bg-[#fff]">
      <div className="w-full pt-[1.12vw] flex justify-between items-center">
        <span className="text-[#323E4F]">{title}</span>
        <Switch checked={isToggled} onChange={onToggle} />
      </div>
      <p className="w-full pb-[1vw] text-[#697483]">{description}</p>
    </div>
  );
};

export default SwitchSettingRow;
