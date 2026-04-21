"use client";
import { BarChart3, Target, TrendingUp, LineChart } from "lucide-react";

const cardData = [
  [
    {
      id: 1,
      icon: "/images/products/claritypath/gaindaily.png",
      text: "Gain daily clarity for focus and decision-making through AI insights.",
    },
    {
      id: 3,
      icon: "/images/products/claritypath/plancareer.png",
      text: "Plan career, finance, and personal goals with confidence using AI recommendations.",
    },
  ],
  [
    {
      id: 2,
      icon: "/images/products/claritypath/growth.png",
      text: "Reflect on past milestones as AI identifies your growth patterns and key strengths.",
    },
    {
      icon: "/images/products/claritypath/premium.png",
      id: 4,
      text: "Access premium AI reports for relocation, property planning, career breakthroughs, and financial growth.",
    },
  ],
];

export default function WhatIsClarityPath() {
  return (
    <section className="relative overflow-hidden bg-white lg:py-16 py-10">
      {/* Background Design */}
      <img
        src="/images/products/claritypath/design.png"
        alt=""
        className="absolute top-0 w-full"
      />

      {/* Main Content */}
      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 z-10 flex flex-col min-[1250px]:flex-row justify-center items-center gap-14">
        {/* === Left Content === */}
        <div className="w-full min-[1250px]:w-[50%] text-center min-[1250px]:text-left">
          <div className="relative w-fit py-5 lg:py-10 mx-auto min-[1250px]:mx-0 ">
            <p className="hidden lg:block absolute text-[4.5rem] font-semibold text-black font-karla opacity-5 left-3/4 -translate-x-1/2 top-1/2 -translate-y-1/2 text-nowrap select-none">
              What is ClarityPath?
            </p>
            <h2 className="lg:text-5xl text-3xl font-bold text-black font-karla">
              What is ClarityPath?
            </h2>
          </div>

          <p className="text-[18px] sm:text-[20px] md:text-[21px] text-black mb-4 lg:mb-6 font-karla leading-[22px]">
          {" "}
            <span className="text-main-dark font-semibold">ClarityPath</span> is an{" "}
            <span className="text-main-dark font-semibold">AI-supported application</span>{" "}
            built for{" "}
            <span className="text-main-dark font-semibold">
              professionals, students, and organizations
            </span>{" "}
            who want a more structured way to think through decisions, plans,
            and priorities.
          </p>

          <p className="text-gray-900 w-full min-[1250px]:w-[90%] leading-6 text-[14px] lg:text-[17px] font-lora mx-auto min-[1250px]:mx-0">
            ClarityPath uses AI to help users reflect more clearly on goals,
            patterns, and direction. It is designed to support self-awareness,
            more deliberate planning, and better continuity around what matters
            most to the individual or team using it.
          </p>
        </div>

        {/* === Right Cards Section === */}
        <div className="w-full min-[1250px]:w-[50%] ml-auto">
          <div className="mt-2 flex-col min-[1250px]:flex gap-8 justify-end items-center">
            
            {/* Desktop View (1250px and above) */}
            <div className="hidden min-[1250px]:flex gap-8 justify-end">
              {cardData.map((column, colIndex) => (
                <div key={colIndex} className="grid grid-cols-1 gap-15">
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
                        <p className="text-black font-karla">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Below 1250px (Responsive Version) */}
            <div className="flex flex-wrap justify-center gap-14 min-[900px]:gap-20 max-[1249px]:flex max-[1249px]:justify-center min-[1250px]:hidden">
              {cardData.flat().map(({ id, icon, text }) => (
                <div
                  key={id}
                  className="
                    bg-white py-4 px-4 rounded-2xl shadow-[0_0_15px_rgba(128,128,128,0.6)] 
                    relative max-w-[220px] w-full min-[601px]:w-[45%] 
                    group hover:shadow-[0_0_15px_rgba(140,82,255,0.9)] 
                    hover:scale-102 duration-300 text-center transition-all
                  "
                >
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-white rounded-full w-20 h-20 flex justify-center items-center shadow-[0_0_10px_rgba(128,128,128,0.5)] group-hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] duration-300 transition-all">
                    <img
                      src={icon}
                      alt={`icon-${id}`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="mt-10">
                    <p className="text-black font-karla text-[15px] leading-[22px]">
                      {text}
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
