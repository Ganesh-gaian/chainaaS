import { ReactNode } from "react";

interface SettingProps {
  children: ReactNode;
}

const AccountPage: React.FC<SettingProps> = ({ children }) => {
  return <>{children}</>;
};

export default AccountPage;
