"use client";

import { Smartphone, Cog, Video, Users } from "lucide-react";

export default function TechnologySection() {
  const problems = [
    {
      icon: "/images/solution/ii1.png",
      text: "Internal iOS apps rejected on the App Store or burdened by costly MDM",
    },
    {
      icon: "/images/solution/ii2.png",
      text: "SaaS subscriptions draining budgets with little visibility.",
    },
    {
      icon: "/images/solution/ii3.png",
      text: "Creators struggling to keep content fresh and engaging.",
    },
    {
      icon: "/images/solution/ii4.png",
      text: "Lifestyle apps offering generic experiences, not personalized insights.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#2b1f6e] to-[#3c99e5] text-white py-20 px-6 md:px-16 lg:px-20">
      <img
        src="/images/solution/tabimg.png" // replace this with your actual image path
        alt="Tech Devices"
        className=" absolute left-0 w-[40%] top-0"
      />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left image */}
        <div className="w-[20%]"></div>

        {/* Right content */}
        <div className="text-center lg:text-left">
          <p className="text-teal-300 font-lora font-medium text-base mb-3">
            How Scotitech Solves These
          </p>

          <h2 className="text-5xl font-karla font-medium">
            Technology <span className="text-pink-300">moves fast.</span>
            <span className="block mt-0.5">
              Problems keep <span className="text-pink-300">piling up</span>
            </span>
          </h2>

          <p className="text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0 font-lora my-4">
            Businesses, creators, and individuals are stuck between complexity
            and cost.
          </p>

          <button className="bg-white/10 border border-white text-black font-lora font-medium text-sm px-6 py-1 rounded-full">
            Contact Sales
          </button>
        </div>
      </div>

      {/* Problem cards */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto">
        {problems.map((item, index) => (
          <div
            key={index}
            className="relative p-6 pl-16 bg-transparent border-[#5a64b8] border-2 rounded-2xl flex flex-col group items-center justify-center text-center transition"
          >
            <div className="absolute left-0 top-1/2 bg-[#640D5F] size-20 flex justify-center items-center rounded-full border-4 border-[#a879db] group-hover:border-white transition duration-200 group-hover:scale-110 text-pink-100 transform -translate-x-1/2 -translate-y-1/2">
              <img src={item.icon} alt={item.text} className="h-12 w-10"/>
            </div>
            <p className="text-[13px] text-gray-200 font-lora text-left leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
