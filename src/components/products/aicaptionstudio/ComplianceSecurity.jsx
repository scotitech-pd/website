"use client";
import React from "react";

const securityData = [
  {
    icon: "/images/products/aicaptionstudio/security-icon.png",
    title: "Secure Cloud Infrastructure to protect your content and data.",
  },
  {
    icon: "/images/products/aicaptionstudio/gdpr-icon.png",
    title: "GDPR-Compliant data handling and privacy standards.",
  },
  {
    icon: "/images/products/aicaptionstudio/performance-icon.png",
    title: "Reliable Performance built for creators and businesses of all sizes.",
  },
];

/* ✅ Reusable Card Component with Inner Dark Background */
const SecurityCard = ({ icon, text }) => {
  return (
    <div
      className="
        relative rounded-4xl p-[1.5px] 
        bg-gradient-to-r 
        from-[#98F9FF]/70 
        via-white/70 
        to-main-light/70
        transition-transform duration-300
        hover:-translate-y-2
      "
    >
      {/* ✅ Inner Card with dark bg like your example */}
      <div
        className="
          group relative h-full 
          bg-[#0d1941]/90
          p-7 
          rounded-4xl  
          shadow-[0_0_20px_rgba(139,92,246,0.3)]
          text-center
          backdrop-blur-sm
        "
      >
        {/* ✅ Icon bubble */}
        <div className="flex justify-center mb-6">
          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-xl">
            <img src={icon} alt="icon" className="w-10 h-10 object-contain" />
          </div>
        </div>

        {/* ✅ Text */}
        <p className="text-white text-lg font-lora">{text}</p>
      </div>
    </div>
  );
};

const ComplianceSecurity = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage:
          "url('/images/products/aicaptionstudio/compliance-bg.png')",
      }}
    >
      <div className="
        relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 
        bg-white/10 backdrop-blur-[1px]
        border border-white/30 
        rounded-4xl 
        shadow-[0_0_40px_8px_rgba(255,255,255,0.15),_inset_0_0_15px_rgba(255,255,255,0.05)]
        py-14
      ">
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white font-karla">
            Compliance & Security
          </h2>
          <p className="text-base sm:text-lg text-white/90 mt-3 font-lora">
            Security of the cloud infrastructure and compliance with standards like GDPR.
          </p>
        </div>

        {/* ✅ Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
          {securityData.map((item, index) => (
            <SecurityCard key={index} icon={item.icon} text={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSecurity;
