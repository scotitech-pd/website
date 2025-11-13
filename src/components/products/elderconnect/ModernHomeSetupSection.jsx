"use client";

export default function ModernHomeSetupSection() {
  const features = [
    {
      title: "Daily Living Support:",
      text: "Get help with household chores, meal preparation, and shopping to make everyday life simpler and easier.",
    },
    {
      title: "Reliable Transportation:",
      text: "We provide safe and dependable rides for medical appointments, errands, and social activities.",
    },
    {
      title: "Wellness & Health:",
      text: "Routine check-ins ensure you’re taking medications correctly and maintaining your overall well-being.",
    },
  ];

  const features2 = [
    {
      title: "Home Safety Assurance:",
      text: "Simple assessments to keep your living space hazard-free and provide a sense of security.",
    },
    {
      title: "Pet Companion Care:",
      text: "Support your furry friends with feeding, walking, and general care, keeping them happy and healthy.",
    },
    {
      title: "Tech Assistance:",
      text: "Fix technical issues, and ensure your online security is up-to-date.",
    },
  ];

  return (
    <section
      className="relative lg:py-14 pb-14  overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/products/elder/bgmgf.png')",
      }}
    >
      {/* 💡 Custom grid that breaks only below 1260px */}
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 grid min-[1260px]:grid-cols-[55%_41%] grid-cols-1 gap-14 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-4 font-lora w-full">
          <div className="font-karla text-white font-medium text-center mt-8 mb-8 relative w-full">
            <p className="text-[4.9rem] hidden lg:block font-semibold opacity-10 text-nowrap -z-0 w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Key Features
            </p>
            <h2 className="relative z-10 font-bold text-[44px]">Key Features</h2>
          </div>

          {/* Top box */}
          <div
            className="backdrop-blur-sm rounded-3xl py-5 px-5 shadow-xl relative bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: "url('/images/products/elder/security.png')",
            }}
          >
            <div className="absolute bg-black/89 h-full w-full inset-0 -z-10"></div>
            <h3 className="text-white text-xl mb-6 font-karla">
              Supporting a life lived on your own terms.
            </h3>

            <div className="grid min-[1260px]:grid-cols-3 grid-cols-1 gap-3.5">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#8C52FF] rounded-2xl pt-3 pb-1.5 pl-2 text-white"
                >
                  <h4 className="font-medium text-white/90 leading-[19px] font-karla text-[15px] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs font-lora text-white/80 leading-snug pr-2">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom box */}
          <div
            className="backdrop-blur-sm rounded-3xl p-8 shadow-xl relative bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: "url('/images/products/elder/support.png')",
            }}
          >
            <div className="absolute bg-black/89 h-full w-full inset-0 -z-10"></div>
            <div className="grid min-[1260px]:grid-cols-3 grid-cols-1 gap-3.5">
              {features2.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#8C52FF] rounded-2xl pt-3 pb-1.5 pl-2 text-white"
                >
                  <h4 className="font-medium text-white/90 leading-[19px] font-karla text-[15px] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/80 font-lora leading-snug pr-2">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
       {/* RIGHT SIDE */}
<div className="relative h-fit flex justify-center min-[1260px]:block">
  <div className="relative w-full max-w-[600px] min-[1260px]:max-w-none">
    {/* Colored background perfectly fixed behind */}
    <div className="absolute inset-0 translate-x-[8%] translate-y-[8%] bg-[#4D0858] rounded-3xl rounded-br-none z-0"></div>

    {/* Image box */}
    <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10">
      <img
        src="/images/products/elder/home.png"
        alt="Smart Home Dashboard"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-10 flex flex-col justify-end">
        <h3 className="text-3xl md:text-4xl text-white font-karla mb-4">
          Modern Home Setup:
        </h3>
        <p className="text-gray-200 text-base md:text-lg leading-[22px] font-lora mb-5">
          Effortless installation of smart devices for enhanced living and peace
          of mind. <br />
          Setting up technology that provides enhanced safety and convenience.
        </p>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
