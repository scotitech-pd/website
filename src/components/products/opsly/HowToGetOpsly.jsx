"use client";
import { Calendar, Settings, Rocket } from "lucide-react";

export default function HowToGetOpsly() {
  const steps = [
    {
      icon: "/images/products/opsly/schedule.png",
      title: "Schedule a Demo",
      description:
        "Book a personalized walkthrough with our product experts to see how Opsly can address your specific challenges.",
    },
    {
      icon: "/images/products/opsly/onboarding.png",
      title: "Customized Onboarding",
      description:
        "Our dedicated support team will guide you through a seamless setup and integration process with your existing systems.",
    },
    {
      icon: "/images/products/opsly/deploy.png",
      title: "Deploy & Discover",
      description:
        "Connect your data sources and watch as Opsly automatically maps your SaaS environment and begins identifying savings opportunities in minutes.",
    },
  ];
  return (
    <section className="relative bg-white py-20 px-6 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/images/products/opsly/getopslybg.png')] bg-cover bg-center pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto ">
        <h2 className="text-[40px] font-semibold text-main-dark mb-1 drop-shadow-2xl font-karla">
          How to Get Opsly app?
        </h2>
        <p className="text-black font-lora text-xl mb-16 pr-20">
          Simple Steps to Smarter SaaS Management{" "}
        </p>

        <div className="grid grid-cols-2 items-center justify-between gap-12">
          {/* Left: App mockup */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative">
              <img
                src="/images/products/opsly/opslyapp.png"
                alt="Opsly Logo"
                className="rounded-xl shadow-2xl "
              />
              <div className="absolute z-20 top-2/3 translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#98F9FF]/80 via-[#8726B7]/50 to-[#EABFFF]/80 p-[1px] rounded-full  cursor-pointer shadow-lg text-center  backdrop-blur-md  hover:scale-105 duration-300 hover:backdrop-blur-sm">
                <p className="text-lg font-medium text-white bg-[#23627a]/80 px-6 py-2 rounded-full">
                  Download Now
                </p>
              </div>
              <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-[85%] flex justify-between">
                <img src="/images/products/opsly/button2.png" alt=""  className="w-[40%] h-auto cursor-pointer"/>
                <img src="/images/products/opsly/button1.png" alt="" className="w-[40%] h-auto cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Right: Info card */}
          <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(37,150,190,0.4)] w-full h-full p-6  relative">
            <div className="absolute bg-purple-100 text-2xl text-main-dark font-karla font-semibold px-6 py-4 rounded-l-2xl rounded-tr-2xl rounded-br-2xl border-b border-gray-100 w-[100%] leading-7">
              Getting started with Opsly is a straightforward process designed
              for busy teams
              {/* Folded corner */}
              {/* <div className="absolute top-0 right-3 w-4 h-4 bg-purple-100 rotate-45 translate-x-1/2 -translate-y-1/2 z-0"></div> */}
            </div>
            <div className=" pt-32 space-y-8 text-black">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-4 relative">
                  <div className="absolute bg-white rounded-full flex justify-center items-center shadow-[0_0_10px_rgba(140,82,255,0.7)] top-1/2 -translate-1/2 left-7 size-12">
                    <img src={step.icon} alt="" className="size-6" />
                  </div>
                  <div className="pl-17 font-lora">
                    <h4 className="font-semibold text-lg">{step.title}</h4>
                    <p className="text-grey text-[15px] leading-5 mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
