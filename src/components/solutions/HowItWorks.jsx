"use client";

import { Download, Smartphone, Network } from "lucide-react";
import CircularProgress from "./CircularProgress";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: "/images/solution/picon.png",
      p1:0.5,
      p2:0.5,
      title: "Upload Your App",
      desc: "Add your .IPL file of the AppDeploy dashboard",
    },
    {
      id: 2,
      p1:0.4,
      p2:0.6,
      icon: "/images/solution/picon2.png",
      title: "Assign Redemption Links",
      desc: "Generate ABM-based Links for your employees.",
    },
    {
      id: 3,
      p1:0.1,
      p2:0.9,
      icon: "/images/solution/picon3.png",
      title: "One-Click Install",
      desc: "Employees download the App instantly",
    },
  ];

  return (
    <section className="py-16 bg-white text-center text-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="font-karla font-medium text-4xl text-center my-10 relative w-full">
        <p className="text-[7rem] font-semibold text-gray-200/80 text-nowrap -z-0 w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          How It Works
        </p>
        <h2 className="relative z-10 font-bold">How It Works</h2>
      </div>
        <p className="text-xl text-main-dark font-medium mb-16 font-lora">
          How AppDeploy works in 3 Simple Steps
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              {/* Icon Circle */}
              <CircularProgress
                p1={step.p1} // 70%
                p2={step.p2} // 40%
                icon={step.icon}
              />

              {/* Step Label */}
              <div className="bg-main-dark text-white px-6 py-1 rounded-md text-lg font-medium mb-3">
                Step {step.id}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-karla">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-base max-w-xs font-lora">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
