"use client";

import React from "react";

export default function AboutSection() {
  return (
    <section
      className="relative flex items-center py-40 justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/products/claritypath/aboutclarity1.png')",
      }}
    >
      {/* Overlay for dim effect */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Glassmorphism card */}
      <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-[#98F9FF]/70 via-[#EABFFF]/70 to-main-light/90 shadow-lg">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 bg-black/60 text-center rounded-2xl border border-white/20 backdrop-blur-3xl shadow-2xl">
          <h2 className="text-3xl md:text-[45px] font-semibold font-karla text-white mb-6">
            About <span className="text-[#EABFFF]">ScotiTech</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-50 leading-relaxed font-lora">
            At <span className="text-[#EABFFF] font-semibold">ScotiTech</span>{" "}
            Ltd, we create innovative digital products that empower individuals
            and organizations. From productivity platforms to decision-support
            tools, our mission is to combine AI intelligence with human growth
            to unlock potential.
          </p>
        </div>
      </div>
    </section>
  );
}
