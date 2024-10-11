import {
    LockOutlined,
    SettingOutlined,
    GlobalOutlined,
    ClockCircleOutlined,
    UserOutlined,
    CustomerServiceOutlined
  } from "@ant-design/icons";
  
  // Account section routes
  export const accountMap: { [key: string]: string } = {
    Profile: "profile",
    "Roles & Permissions": "roles",
    Wallet: "wallet",
  };
  
  // Help & Support section routes
  export const helpMap: { [key: string]: string } = {
    FAQ: "faq",
    "Privacy Policy": "privacy",
    Support: "support",
    "Alliance Partner": "alliance",
  };

  //Icon for both dropdown 
  export const AccordionIcons = {
    UserOutlined,
    CustomerServiceOutlined    
};
  
  // Static navigation items for Security, Theme, etc.
  export const staticNavItems = [
    {
      name: "Security",
      location: "/settings/security",
      icon: <LockOutlined />,
    },
    {
      name: "Theme Setting",
      location: "/settings/theme",
      icon: <SettingOutlined />,
    },
    {
      name: "Language and Region",
      location: "/settings/language",
      icon: <GlobalOutlined />,
    },
    {
      name: "Time & Date Format",
      location: "/settings/time",
      icon: <ClockCircleOutlined />,
    },
  ];
  