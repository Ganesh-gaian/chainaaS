import React from "react";

interface AppInfoProps {
  logoSrc: string;
  altText: string;
  appName: string;
  appProvider: string;
}

const AppInfo: React.FC<AppInfoProps> = ({
  logoSrc,
  altText,
  appName,
  appProvider,
}) => {
  return (
    <div className="w-full flex gap-[0.56vw]">
      <div className="flex items-center justify-center h-full">
        <img src={logoSrc} alt={altText} className="w-[2.22vw] h-[2.22vw]" />
      </div>
      <div className="flex flex-col">
        <div className="text-[#323E4F] fs-12">{appName}</div>
        <div className="text-[#8F97A2] fs-12">{appProvider}</div>
      </div>
    </div>
  );
};

export default AppInfo;
