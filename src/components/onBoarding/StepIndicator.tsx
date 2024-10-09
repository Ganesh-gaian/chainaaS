interface StepIndicatorProps {
  currentStep: number;
  steps: { step: number; label: string }[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  steps,
}) => {
  return (
    <div className="flex items-center gap-[1.12vw] pl-[1.12vw] w-full h-[3.194vw]">
      {steps.map(({ step, label }) => (
        <div key={step} className="flex gap-[0.56vw]">
          <div
            className={`flex items-center justify-center h-[1.67vw] w-[1.67vw] fs-14 rounded-full ${
              currentStep === step
                ? "bg-[#1890FF] text-[#fff]"
                : "border-[0.1vw] border-[rgba(0,0,0,0.25)] text-[rgba(0,0,0,0.25)]"
            }`}
          >
            {step}
          </div>
          <span
            className={`fs-14 ${
              currentStep === step
                ? "text-[rgba(0,0,0,0.85)]"
                : "text-[rgba(0,0,0,0.45)]"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
