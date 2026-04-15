"use client";
import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, ShieldCheck, Zap } from "lucide-react";

const FlowSection = () => {
  const data = [
    {
      icon: <AlertCircle className="w-8 h-8 text-[#7E1A8E]" />,
      title: "Why internal app distribution becomes difficult",
      body: "Apple supports private app distribution, but the operational workflow is often harder than it should be. Teams end up balancing compliance requirements, redemption-code spreadsheets, MDM complexity, and confusing install experiences for employees.",
      accent: "bg-[#FDE2FF]",
      border: "border-[#7E1A8E]/20"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#3D297A]" />,
      title: "Apple Business Manager solves the compliance side",
      body: "Apple Business Manager provides an approved path for private distribution through Custom Apps and managed redemption workflows. AppDeploy builds the branded, trackable experience around that workflow.",
      accent: "bg-[#F3F0FF]",
      border: "border-[#3D297A]/20"
    },
    {
      icon: <Zap className="w-8 h-8 text-[#C140D5]" />,
      title: "Where AppDeploy fits",
      body: "AppDeploy sits on top of Apple Business Manager and turns the underlying distribution workflow into a branded, usable internal experience. Admins manage releases, visibility, and tracking from one workspace. Employees get a simpler path to install the app on their device.",
      accent: "bg-[#F9F6FF]",
      border: "border-[#C140D5]/20"
    }
  ];

  return (
    <section className="relative bg-white py-14 lg:py-24 overflow-hidden">
      {/* Background Decorative Text - matching the site's pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="text-[250px] font-bold text-[#3D297A] font-karla tracking-tighter">
          DEPLOYMENT
        </span>
      </div>

      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-12 mt-12">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="bg-white text-gray-800 font-lora rounded-xl shadow-xl py-10 px-6 flex flex-col items-center text-center relative border-b-[12px] border-[#7E1A8E]/50 group hover:shadow-[0_20px_40px_rgba(61,41,122,0.15)] transition-all duration-300"
            >
              {/* Icon circle - matching the 'KeyFeatures' style */}
              <div className="absolute -top-10 bg-gray-50 w-20 h-20 flex items-center justify-center rounded-full border-[6px] border-gray-100 group-hover:border-[#7E1A8E] group-hover:shadow-[0_0_15px_rgba(126,26,142,0.5)] duration-300 shadow-md">
                {item.icon}
              </div>

              <div className="mt-6 flex flex-col h-full">
                <h3 className="text-xl lg:text-2xl font-bold text-[#3D297A] mb-4 font-karla leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed font-lora">
                  {item.body}
                </p>
                
                {/* Subtle indicator line */}
                <div className="mt-auto pt-6 opacity-20 group-hover:opacity-100 transition-opacity">
                  <div className="h-1 w-12 bg-[#7E1A8E] mx-auto rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowSection;
