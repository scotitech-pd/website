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
        "Roadmap decisions are informed by real usage, operational feedback, and commercially relevant priorities.",
    },
    {
      icon: "/images/aboutus/compliance.png",
      title: "Privacy and Policy Alignment",
      description:
        "Product decisions are shaped with platform policy, privacy controls, and rollout governance in mind.",
    },
  ];

  return (
    <section className="relative bg-[#0F172A] py-14 md:py-20 overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute top-8 lg:top-2 left-1/2 -translate-x-1/2 pointer-events-none z-0">
        <h1 className="text-5xl sm:text-6xl font-karla md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white/5 leading-none whitespace-nowrap">
          How We Work
        </h1>
      </div>
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 relative z-10">
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-karla 2xl:text-5xl font-semibold text-white">
            How We Work
          </h2>
          <p className="text-slate-300 font-lora text-base md:text-lg leading-8 mt-4">
            We keep delivery practical: clear ownership, strong engineering
            standards, and product decisions tied to real operating conditions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-7 mb-12 lg:mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-[1.5px] bg-gradient-to-bl from-[#34D3FF]/65 via-white/60 to-[#4F74F3]/55 hover:scale-[1.01] transition-transform duration-300 shadow-lg"
            >
              {/* Card */}

              <div className="h-full bg-gradient-to-br from-[#162338] to-[#0B1220] backdrop-blur-sm rounded-2xl p-6 lg:p-6 flex flex-col justify-start">
                {/* Icon on top */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
                  <div className="w-20 h-20 border border-cyan-200 shadow-[0_18px_35px_rgba(52,211,255,0.18)] hover:shadow-[0_20px_40px_rgba(79,116,243,0.18)] lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-10 h-10 lg:w-12 lg:h-12"
                    />
                  </div>
                </div>

                {/* Card Title */}
                <h3
                  className={`text-2xl lg:text-[20px] px-[25px] md:text-3xl font-karla font-semibold mt-[40px] text-white text-center mb-4 ${card.className}`}
                >
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[14px] lg:text-[15px] md:text-[16px] font-lora text-slate-300 text-center leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center lg:mt-3">
          <Link href="/contact">
            <button className="px-8 font-karla lg:px-6 py-3 lg:py-2 lg:mt-2.5 bg-white text-black font-semibold text-base lg:text-[15px] cursor-pointer rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Start a Conversation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorks;
