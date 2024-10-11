interface ContentType {
  title: string;
  description: string;
  listItems: string[];
}

interface ModalContentProps {
  currentStep: number;
}

const ModalContent: React.FC<ModalContentProps> = ({ currentStep }) => {
  // Explicitly define the content type as an object with keys being numbers (1, 2, 3)
  const content: { [key: number]: ContentType } = {
    1: {
      title: "Welcome to ChainaaS!",
      description:
        "Seamless route to deploy, manage, and monetize your apps through tower broadcasting.",
      listItems: [
        "Deploy apps seamlessly",
        "Manage tower operations",
        "Maximize revenue through smart insights",
      ],
    },
    2: {
      title: "Welcome to ChainaaS!",
      description:
        "Monitor and manage all of your apps and towers from one centralized dashboard.",
      listItems: [
        "Real-time app performance",
        "Optimize tower resources",
        "Resolve incidents instantly",
      ],
    },
    3: {
      title: "Welcome to ChainaaS!",
      description:
        "Use smart insights and advanced analytics to maximize your app monetization and grow revenue.",
      listItems: [
        "Track revenue streams",
        "Maximize app engagement",
        "Manage subscription plans for clients",
      ],
    },
  };

  return (
    <div className="flex flex-col gap-[1.12vw] p-[1.12vw] h-[18.74vw]">
      <div className="flex items-center h-[3.192vw]">
        <span className="text-[rgba(0,0,0,0.85)] fs-38 font-medium">
          {content[currentStep].title}
        </span>
      </div>
      <div className="flex flex-col gap-[1.12vw] h-[12.214vw]">
        <div className="flex items-center">
          <span className="text-[rgba(0,0,0,0.85)] fs-24">
            {content[currentStep].description}
          </span>
        </div>

        {/* List Items */}
        <ul className="list-disc fs-20 ml-[2vw] text-[rgba(0,0,0,0.45)]">
          {content[currentStep].listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModalContent;
