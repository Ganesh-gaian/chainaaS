import Image from "next/image";

// Images import
import Icon from "../../../../public/svgs/topNav/LogoChart.svg";
import leftArrow from "../../../../public/svgs/topNav/leftArrow.svg";
import lineSeparator from "../../../../public/svgs/topNav/separatorLine.svg";
import background from "../../../../public/images/background.png";

export default function TopNav() {
  const navItems = [
    {
      name: "Marketplace Level",
      tabCount: "2",
    },
    {
      name: "Marketplace Level",
      tabCount: "3",
    },
    {
      name: "Marketplace Level",
      tabCount: "1",
    },
    {
      name: "Current Level",
      tabCount: "4",
    },
  ];

  return (
    <div className="w-full h-[6vh] pl-[1vw] flex items-center gap-[0.4vw] border-b border-[#EAEAEA] bg-white">
      <div>
        <Image className="w-[4vw]" src={Icon} alt="Logo" />
      </div>
      <div>
        <Image className="w-[1.8vw]" src={leftArrow} alt="LeftArrow" />
      </div>
      <div className="flex items-center justify-center gap-[1vw] ">
        {/* Loop of the levels in HCY - MP */}
        {navItems.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-2 *:flex *:justify-center items-center"
            >
              <div>
                <Image
                  className="w-[0.4vw]"
                  src={lineSeparator}
                  alt="lineSeparator"
                />
              </div>
              <div>{item.name}</div>
              <div
                className="w-[1.4vw]"
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {item.tabCount}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
