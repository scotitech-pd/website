"use client";
import { BarChart3, Target, TrendingUp, LineChart } from "lucide-react";

const cardData = [
  [
    {
      id: 1,
      icon: "/images/products/claritypath/gaindaily.png",
      text: "Gain daily clarity for focus and decision-making.",
    },
    {
      id: 3,
      icon: "/images/products/claritypath/plancareer.png",
      text: "Plan career, finance, and personal goals with confidence.",
    },
  ],
  [
    {
      id: 2,
      icon: "/images/products/claritypath/growth.png",
      text: "Reflect on past milestones to understand growth patterns.",
    },
    {
      icon: "/images/products/claritypath/premium.png",
      id: 4,
      text: "Access premium reports for relocation, property planning, career breakthroughs, and financial growth.",
    },
  ],
];

export default function WhatIsClarityPath() {
  return (
    <section className="relative overflow-hidden bg-white">
      <img
        src="/images/products/claritypath/design.png"
        alt=""
        className=" absolute top-0 w-full"
      />
      <div className="relative max-w-7xl mx-auto px-6 py-12 min-[1500px]:px-0 z-10 flex justify-center items-center">
        {/* Section Heading */}
        <div className="w-[50%]">
          <div className="relative w-fit py-10">
            <p className="absolute text-[4.5rem]  font-semibold text-black font-karla opacity-5 left-3/4 -translate-x-1/2 top-1/2 -translate-y-1/2 text-nowrap select-none">
              What is Clarity Path?
            </p>
            <h2 className="text-[38px] font-bold text-black font-karla">
              What is Clarity Path?
            </h2>
          </div>

          <p className="text-[21px] text-black mb-6 font-lora leading-[27px]">
            Unlike traditional “horoscope” apps, Clarity Path is built for{" "}
            <span className="text-main-dark font-semibold">
              professionals, students, and organizations
            </span>{" "}
            who want to:
          </p>
          <p className="text-gray-900 w-[90%] leading-5 font-lo">
            We provide the tools to foster self-awareness, set meaningful
            objectives, and build consistent momentum toward what matters most
            to you and your organization.
          </p>
        </div>

        {/* Grid of Feature Cards */}
        <div className="w-[50%] ml-auto">
          <div className=" mt-14 flex gap-8 justify-end">
            {cardData.map((column, colIndex) => (
              <div key={colIndex} className="grid grid-cols-1 gap-20">
                {/* Inner map → individual cards */}
                {column.map(({ id, icon, text }) => (
                  <div
                    key={id}
                    className="bg-white py-8 px-4 rounded-2xl shadow-[0_0_15px_rgba(128,128,128,0.6)] relative max-w-[220px] group hover:shadow-[0_0_15px_rgba(140,82,255,0.9)] hover:scale-102 duration-300 text-left transition-all"
                  >
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-white rounded-full w-24 h-24 flex justify-center items-center shadow-[0_0_15px_rgba(128,128,128,0.6)] group-hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] group-hover:scale-105 duration-300 transition-all">
                      <img
                        src={icon}
                        alt={`icon-${id}`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div className="mt-8 text-center">
                      <p className="text-black font-lora">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
