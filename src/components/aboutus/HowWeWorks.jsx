import Link from "next/link";
import React from "react";

const HowWeWorks = () => {
  const cards = [
    {
      icon: "/images/aboutus/building.png",
      title: "UK-Led Product Governance",
      description:
        "Core leadership and product governance run from Scotland, with clear accountability across delivery.",
    },
    {
      icon: "/images/aboutus/global.png",
      title: "Cross-Region Delivery Team",

      description:
        "Engineering and product execution span the UK and India for faster, more resilient delivery cycles.",
    },
    {
      icon: "/images/aboutus/agile.png",
      className: "",
      title: "Iterative Product Execution",
      description:
        "Roadmap decisions are informed by customer usage, rollout feedback, and commercially relevant priorities.",
    },
    {
      icon: "/images/aboutus/compliance.png",
      title: "Privacy and Policy Alignment",
      description:
        "Product decisions are shaped with platform policy, privacy controls, and rollout governance in mind.",
    },
  ];

  return (
    <section className="relative bg-[#f7f7f5] py-14 md:py-20 overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute top-8 lg:top-2 left-1/2 -translate-x-1/2 pointer-events-none z-0">
        <h1 className="text-5xl sm:text-6xl font-karla md:text-7xl lg:text-8xl xl:text-9xl font-bold text-slate-300/35 leading-none whitespace-nowrap">
          How We Work
        </h1>
      </div>
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 relative z-10">
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-karla 2xl:text-5xl font-semibold text-[#0F172A]">
            How We Work
          </h2>
          <p className="text-slate-700 font-lora text-base md:text-lg leading-8 mt-4">
            We keep delivery practical: clear ownership, strong engineering
            standards, and product decisions tied to customer operating
            conditions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-7 mb-12 lg:mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group rounded-2xl border border-slate-200 bg-white p-6 hover:scale-[1.01] transition-transform duration-300 shadow-[0_16px_38px_rgba(15,23,42,0.06)]"
            >
              {/* Card */}

              <div className="h-full rounded-2xl flex flex-col justify-start">
                {/* Icon on top */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
                  <div className="w-20 h-20 border border-slate-200 shadow-[0_12px_30px_rgba(15,23,42,0.08)] lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-10 h-10 lg:w-12 lg:h-12"
                    />
                  </div>
                </div>

                {/* Card Title */}
                <h3
                  className={`text-2xl lg:text-[20px] px-[25px] md:text-3xl font-karla font-semibold mt-[50px] text-slate-900 text-center mb-4 ${card.className}`}
                >
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[14px] lg:text-[15px] md:text-[16px] font-lora text-slate-700 text-center leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center lg:mt-3">
          <Link href="/contact">
            <button className="px-8 font-karla lg:px-6 py-3 lg:py-2 lg:mt-2.5 bg-[#0F172A] text-white font-semibold text-base lg:text-[15px] cursor-pointer rounded-xl hover:bg-slate-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Start a Conversation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorks;
