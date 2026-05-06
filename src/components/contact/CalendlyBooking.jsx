"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { meetingLinks } from "@/lib/scheduling";

const CalendlySection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-16 md:py-20"
      style={{
        backgroundImage:
          "url('/images/contact/product-strategy-session.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-karla font-bold mb-3">
          Speak with Our Team
        </h2>
        <p className="text-gray-200 font-lora text-sm md:text-base max-w-xl mx-auto mb-6">
          Book a focused session for AppDeploy or AXOS and get a clear product-fit conversation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={meetingLinks.appdeploy}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-karla font-semibold hover:bg-main-dark hover:text-white transition-all shadow-lg"
          >
            Book AppDeploy session
            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={meetingLinks.axos}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 border border-white/60 bg-transparent text-white px-6 py-3 rounded-lg font-karla font-semibold hover:bg-white hover:text-black transition-all"
          >
            Book AXOS session
            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
