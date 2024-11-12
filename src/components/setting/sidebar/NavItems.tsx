import {
  LockOutlined,
  SettingOutlined,
  GlobalOutlined,
  ClockCircleOutlined,
  UserOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

// Account section routes
export const accountMap: { [key: string]: string } = {
  Profile: "profile",
  "Roles & Permissions": "roles",
  Wallet: "wallet",
};

export const account_ids = [
  "account_profile",
  "account_roles",
  "account_wallet"
];

// Help & Support section routes
export const helpMap: { [key: string]: string } = {
  FAQ: "faq",
  "Privacy Policy": "privacy",
  Support: "support",
  "Alliance Partner": "alliance",
};

export const help_ids = [
  "help_faq",
  "help_privacy",
  "help_support",
  "help_alliance",
];

//Icon for both dropdown
export const AccordionIcons = {
  UserOutlined,
  CustomerServiceOutlined,
};

// Static navigation items for Security, Theme, etc.
export const staticNavItems = [
  {
    name: "Security",
    location: "/settings/security",
    icon: <LockOutlined />,
    id: "settings_security",
  },
  {
    name: "Theme Setting",
    location: "/settings/theme",
    icon: <SettingOutlined />,
    id: "settings_theme",
  },
  {
    name: "Language and Region",
    location: "/settings/language",
    icon: <GlobalOutlined />,
    id: "settings_lang",
  },
  {
    name: "Time & Date Format",
    location: "/settings/time",
    icon: <ClockCircleOutlined />,
    id: "settings_time",
  },
];
