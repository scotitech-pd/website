export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: "/images/solution/picon.png",
      p1: 0.5,
      p2: 0.5,
      title: "Upload Your App",
      desc: "Add your .IPL file of the AppDeploy dashboard",
    },
    {
      id: 2,
      p1: 0.4,
      p2: 0.6,
      icon: "/images/solution/picon2.png",
      title: "Assign Redemption Links",
      desc: "Generate ABM-based Links for your employees.",
    },
    {
      id: 3,
      p1: 0.1,
      p2: 0.9,
      icon: "/images/solution/picon3.png",
      title: "One-Click Install",
      desc: "Employees download the App instantly",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white text-center text-black overflow-hidden relative z-0">
      <img
        src="/images/contact/pattern-bg.png"
        alt=""
        className="max-[1175px]:hidden absolute w-[80%] z-0 opacity-40 top-0 -left-34 rotate-50"
      />
      <img
        src="/images/contact/pattern-bg.png"
        alt=""
        className="max-[1175px]:hidden absolute w-[80%] z-0 opacity-40 bottom-0 -right-120 rotate-90 -scale-95"
      />
      <div className=" max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full z-20 ">
        <div className="font-karla font-medium text-4xl text-center my-3 md:my-7 relative w-full">
          <p className="hidden md:flex text-[5rem] font-semibold text-black opacity-5 text-nowrap -z-0 w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            How It Works
          </p>
          <h2 className="relative z-10 font-bold">How It Works</h2>
        </div>
        <p className=" text-main-dark font-lora font-medium text-[17px] min-[390px]:text-[20px] z-10 relative">
          How AppDeploy works in 3 Simple Steps
        </p>

        <div className="min-[1050px]:grid grid-cols-3 hidden gap-6 md:gap-12 mt-10 max-w-6xl mx-auto z-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center "
            >
              {/* Icon Circle */}
              <CircularProgress
                p1={step.p1} // 70%
                p2={step.p2} // 40%
                icon={step.icon}
              />

              {/* Step Label */}
              <div className="bg-main-dark text-white px-6 py-1 rounded-md text-lg font-medium mb-3 font-karla">
                Step {step.id}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-karla">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-base max-w-xs font-lora">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="min-[1050px]:hidden grid min-[800px]:grid-cols-3 gap-9 min-[500px]:gap-5 md:gap-12 mt-7 sm:mt-10  max-w-6xl mx-auto z-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex min-[800px]:flex-col items-center mx-auto gap-2 min-[404px]:gap-5 font-karla"
            >
              {/* Icon Circle */}
              <CircularProgress1
                p1={step.p1} // 70%
                p2={step.p2} // 40%
                icon={step.icon}
              />
              {/* Step Label */}
              <div className="relative text-left min-[800px]:text-center max-w-[250px] max-[800px]:shadow-[0_0_25px_rgba(128,128,128,0.4)] max-[400px]:p-2 max-[800px]:p-3 rounded-2xl max-[400px]:pt-4 max-[800px]:pt-5">
                
                <div className=" min-[800px]:hidden font-karla -top-3 absolute bg-main-dark w-fit min-[800px]:mx-auto text-white px-2.5 py-0.5 rounded-md min-[800px]:text-lg mb-2">
                  Step {step.id}
                </div>

                <div className=" max-[800px]:hidden font-karla bg-main-dark w-fit min-[800px]:mx-auto  px-2.5 py-0.5 rounded-md text-lg font-medium mb-2">
                  Step {step.id}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 font-karla min-[800px]:text-nowrap">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-[15px] max-w-xs font-lora leading-[18px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CircularProgress = ({ p1, p2, icon }) => {
  const radius = 45;
  const stroke = 2; // Slightly thicker stroke
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const strokeDashoffset1 = circumference * (1 - p1);
  const strokeDashoffset2 = circumference * (1 - p2);

  return (
    <div className="relative w-52 h-52 mb-5 bg-[#641171]/10 rounded-full z-10">
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 120 120"
        className="transform -rotate-90"
      >
        {/* Background Circle */}
        <circle
          stroke="#641171"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="60"
          cy="60"
        />

        {/* Second Progress (e.g. 40%) */}
        <circle
          stroke="#641171"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset2}
          r={normalizedRadius}
          cx="60"
          cy="60"
          className="transition-all duration-500"
        />

        {/* First Progress (e.g. 70%) */}
        <circle
          stroke="#f3e8ff"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset1}
          r={normalizedRadius}
          cx="60"
          cy="60"
          className="transition-all duration-500"
        />
      </svg>

      {/* Center Icon/Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={icon} // Replace with your actual image path
          alt="icon"
          className="w-20 h-20"
        />
      </div>
    </div>
  );
};

const CircularProgress1 = ({ p1, p2, icon }) => {
  const radius = 50;
  const stroke = 2; // Slightly thicker stroke
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const strokeDashoffset1 = circumference * (1 - p1);
  const strokeDashoffset2 = circumference * (1 - p2);

  return (
    <div className="relative size-20 min-[418]:size-28 min-[435px]:size-32 shrink-0 bg-[#641171]/10 rounded-full z-10">
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 120 120"
        className="transform -rotate-90"
      >
        {/* Background Circle */}
        <circle
          stroke="#641171"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="60"
          cy="60"
        />

        {/* Second Progress (e.g. 40%) */}
        <circle
          stroke="#641171"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset2}
          r={normalizedRadius}
          cx="60"
          cy="60"
          className="transition-all duration-500"
        />

        {/* First Progress (e.g. 70%) */}
        <circle
          stroke="#f3e8ff"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset1}
          r={normalizedRadius}
          cx="60"
          cy="60"
          className="transition-all duration-500"
        />
      </svg>

      {/* Center Icon/Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={icon} // Replace with your actual image path
          alt="icon"
          className="size-9 min-[412px]:size-12"
        />
      </div>
    </div>
  );
};
