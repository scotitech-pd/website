import React from "react";

const HowWeWorks = () => {
  const cards = [
    {
      icon: "/images/aboutus/building.png",
      title: "London Headquarters",
      description:
        "Strategic location allows enhanced market development in the heart of Europe's tech ecosystem. Our HQ houses product strategy, partnerships, and enterprise operations.",
    },
    {
      icon: "/images/aboutus/global.png",
      title: "Global Engineered Network",
      
      description:
        "A distributed team of developers, designers, and analysts working across time zones — providing round-the-clock development, deployment, and product support.",
    },
    {
      icon: "/images/aboutus/agile.png",
      className: "px-[50px]",
      title: "Agile Collaboration",
      description:
        "Cross-functional squads aligned with your project's goals. Whether you're in the UK, US, or Asia — we adapt to your workflow and timeline.",
    },
    {
      icon: "/images/aboutus/compliance.png",
      title: "Compliance-Ready Operations",
      description:
        "Data privacy and security come standard. Every engagement follows GDPR and industry best practices for code delivery, testing, and deployment.",
    },
  ];

  return (
    <section className="relative min-h-[85vh] bg-black py-16 px-4 lg:py-16 lg:px-8 overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute top-8 lg:top-8 left-1/2 -translate-x-1/2 pointer-events-none z-0">
        <h1 className="text-5xl sm:text-6xl font-karla md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white/5 leading-none whitespace-nowrap">
          How We Works
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-2xl font-karla xl:text-5xl font-bold text-white">
            How We Works
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {cards.map((card, index) => (
            <div key={index} className="relative group">
              {/* Icon Circle - Positioned Above Card */}

              {/* Card */}
              <div
                className="relative mt-14 
  min-h-[360px] lg:min-h-[300px]   /* 👈 Keeps all cards same height */
  bg-gradient-to-br from-slate-800/50 to-slate-900/50 
  backdrop-blur-sm border border-teal-500/30 
  rounded-2xl p-6 lg:p-6 pt-16 
  hover:border-teal-400/60 transition-all duration-300 
  hover:shadow-xl hover:shadow-teal-500/20 
  group-hover:-translate-y-2 
  flex flex-col justify-start" /* 👈 Ensures vertical consistency */
              >
                {/* Icon on top */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
                  <div className="w-20 h-20 border border-[#9c27b0]/60 shadow-[0_0_25px_3px_rgba(156,39,176,0.7)] 
hover:shadow-[0_0_35px_6px_rgba(156,39,176,0.8)]   lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center shadow-white/20 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-10 h-10 lg:w-12 lg:h-12"
                    />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className={`text-lg lg:text-[20px] px-[25px] font-karla font-bold mt-[40px] text-white text-center mb-4 ${card.className}`}>
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm lg:text-[13px] font-lora text-gray-300 text-center leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="px-8 lg:px-6 py-3 lg:py-2 bg-white text-black font-semibold text-base lg:text-[15px] font-lora  cursor-pointer rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            Request a Global Delivery Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorks;
