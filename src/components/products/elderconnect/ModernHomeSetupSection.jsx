"use client";

import Image from "next/image";

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
      className="relative py-14 overflow-hidden bg-cover bg- "
      style={{
        backgroundImage: "url('/images/products/elder/bgmgf.png')", // replace with your image
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-0 grid md:grid-cols-[55%_41%] gap-14 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-8 font-lora w-full">
          <div className="font-karla text-white font-medium text-center mt-8 relative w-full">
            <p className="text-[4.9rem] font-semibold opacity-10 text-nowrap -z-0 w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Key Features
            </p>
            <h2 className="relative z-10 font-bold  text-[44px] ">
              Key Features
            </h2>
          </div>
          {/* Top box */}
          <div
            className="backdrop-blur-sm rounded-3xl py-5 px-5 shadow-xl relative bg-cover bg-center  overflow-hidden"
            style={{
              backgroundImage: "url('/images/products/elder/security.png')", // replace with your image
            }}
          >
            <div className="absolute bg-black/89 h-full w-full inset-0 -z-10"></div>
            <h3 className="text-white text-xl mb-6">
              Supporting a life lived on your own terms.
            </h3>

            <div className="grid md:grid-cols-3 gap-3.5">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#8C52FF] rounded-2xl pt-3 pb-1.5 pl-2 text-white"
                >
                  <h4 className="font-medium text-white/90 leading-[19px]  text-[15px]s mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/80 leading-snug pr-2">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom box */}
          <div
            className="backdrop-blur-sm rounded-3xl p-8 shadow-xlrelative bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: "url('/images/products/elder/support.png')", // replace with your image
            }}
          >
            <div className="absolute bg-black/89 h-full w-full inset-0 -z-10"></div>
             <div className="grid md:grid-cols-3 gap-3.5">
              {features2.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#8C52FF] rounded-2xl pt-3 pb-1.5 pl-2 text-white"
                >
                  <h4 className="font-medium text-white/90 leading-[19px]  text-[15px]s mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/80 leading-snug pr-2">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative h-fit">
          <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <img
              src="/images/products/elder/home.png"
              alt="Smart Home Dashboard"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-3xl md:text-4xl text-white font-lora mb-4">
                Modern Home Setup:
              </h3>
              <p className="text-gray-200 text-base md:text-lg max-w-lg leading-[22px] font-lora mb-5">
                Effortless installation of smart devices for enhanced living and
                peace of mind.
                <br /> Setting up technology that provides enhanced safety and
                convenience.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 w-[75%] h-[75%] bg-[#4D0858] rounded-br-none rounded-bl-3xl z-0"></div>
        </div>
      </div>
    </section>
  );
}
