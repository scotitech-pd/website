"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const CalendlySection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-16 md:py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-karla font-bold mb-3">
          Book Your Slot with Scotitech
        </h2>
        <p className="text-gray-200 font-lora text-sm md:text-base max-w-xl mx-auto mb-6">
          Schedule a quick session to learn more about our products, plans, and pricing.
        </p>

        {/* CTA Button */}
        <a
          href="https://calendly.com/pradeepdahiya2411/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-karla font-semibold hover:bg-main-dark hover:text-white transition-all shadow-lg"
        >
          Book A Slot!
          <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default CalendlySection;
