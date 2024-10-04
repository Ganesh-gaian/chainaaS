import { ReactNode } from "react";

interface SettingProps {
  children: ReactNode;
}

const HelpAndSupport: React.FC<SettingProps> = ({ children }) => {
  return <>{children}</>;
};

export default HelpAndSupport;
