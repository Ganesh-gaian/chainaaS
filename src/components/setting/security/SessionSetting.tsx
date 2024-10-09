import { Select } from "antd";

const { Option } = Select;

interface SessionSettingProps {
  sessionDuration: string;
  idleTimeout: string;
  setSessionDuration: (value: string) => void;
  setIdleTimeout: (value: string) => void;
}

const SessionSetting: React.FC<SessionSettingProps> = ({
  sessionDuration,
  idleTimeout,
  setSessionDuration,
  setIdleTimeout,
}) => {
  return (
    <div className="flex flex-col justify-between h-[14.85vw] px-[1.12vw] pt-[1.12vw] bg-[#fff]">
      <div className="flex gap-[1.12vw] items-center justify-between h-[8.057vw]">
        <div className="flex flex-col w-[27.56vw] pb-[1.12vw] gap-[0.28vw]">
          <span className="text-[#262626] font-medium">Session Management</span>
          <p className="text-[#323E4F]">
            Set the session and idle timeout durations for your Workspace. Members will be prompted to log back in after
            their session expires.
          </p>
        </div>
        <div className="flex flex-col flex-1 h-[5.274vw]">
          <span className="text-[#697483]">Session Duration</span>
          <Select value={sessionDuration} onChange={setSessionDuration}>
            <Option value="Never Expires">Never Expires</Option>
            <Option value="1 hour">1 hour</Option>
            <Option value="24 hours">24 hours</Option>
          </Select>
        </div>
      </div>
      <div className="flex pb-[1.12vw] justify-end">
        <div className="flex flex-col w-[27.56vw]">
          <span className="text-[#697483] pb-[0.56vw]">Idle Timeout Duration</span>
          <Select value={idleTimeout} onChange={setIdleTimeout}>
            <Option value="Never Expires">Never Expires</Option>
            <Option value="30 minutes">30 minutes</Option>
            <Option value="1 hour">1 hour</Option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SessionSetting;
