"use client";
import { Lock, FileText, Lightbulb, Users } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      icon: "/images/products/claritypath/privatedistribution.png",
      title: "Private Distribution",
      text: "Available only via Apple Business Manager for select organizations.",
    },
    {
      icon: "/images/products/claritypath/uniqueapproach.png",
      title: "Unique Approach",
      text: "Positioned as a planning and growth tool, not a generic horoscope app.",
    },
    {
      icon: "/images/products/claritypath/professional.png",
      title: "Professional-Grade Reports",
      text: "Designed for clarity, focus, and better decision-making.",
    },
    {
      icon: "/images/products/claritypath/expertise.png",
      title: "ScotiTech Expertise",
      text: "Developed by ScotiTech Ltd, a UK-based innovation company focused on AI, productivity, and future-ready tools.",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-12 min-[1500px]:px-0 flex flex-col lg:flex-row items-center justify-between gap-20 font-lora overflow-hidden">
      {/* LEFT SIDE */}
      <div className="flex-1">
        <h2 className="text-4xl lg:text-[46px] font-medium mb-10 text-gray-900">
          Why Choose Clarity<span className="text-[#198CAC]">Path</span>?
        </h2>

        <div className="space-y-5">
          {features.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-gradient-to-r to-[#3D327C]/60 from-[#406D8E]/60 rounded-full pl-2 pr-6 py-3 shadow-sm hover:shadow-md transition"
            >
              <div className="bg-white rounded-full shadow-sm grid place-items-center size-15 shrink-0">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="size-9 "
                />
              </div>
              <div className="">
                <h4 className="font-semibold text-black font-karla text-lg">{item.title}</h4>
                <p className="text-white text-[13px] leading-4">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex-1 flex justify-center relative">

        {/* Main Image */}
        <div className="relative z-10">
          <img
            src="/images/products/claritypath/picture.png"
            alt="ClarityPath user demo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
