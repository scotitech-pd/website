"use client";
import React from "react";

const ComplianceSecurity = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-8 md:px-12 lg:px-16"
      style={{
        backgroundImage:
          "url('/images/products/aicaptionstudio/compliance-bg.png')",
      }}
    >
      {/* Translucent container */}
      <div className="relative z-10 max-w-7xl mx-auto bg-white/10 backdrop-blur-[1px] border border-white/30 rounded-4xl shadow-[0_0_40px_8px_rgba(255,255,255,0.15),_inset_0_0_15px_rgba(255,255,255,0.05)] px-6 sm:px-10 md:px-12 py-14">
        {/* Heading */}
        <div className=" mb-14">
          <h2 className="text-3xl sm:text-4xl  font-semibold text-white font-karla">
            Compliance & Security
          </h2>
          <p className="text-base sm:text-lg text-white/90 mt-3 font-lora">
            Security of the cloud infrastructure and compliance with standards
            like GDPR.
          </p>
        </div>

        {/* 3 translucent cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-[1px]  rounded-2xl text-center shadow-[0_0_40px_8px_rgba(255,255,255,0.15),_inset_0_0_15px_rgba(255,255,255,0.05)] p-8 transition-all hover:-translate-y-2 hover:shadow-2xl max-w-sm w-full">
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                <img
                  src="/images/products/aicaptionstudio/security-icon.png"
                  alt="Secure Cloud"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <p className="text-white text-lg font-lora">
              Secure Cloud Infrastructure to protect your content and data.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl text-center shadow-[0_0_40px_8px_rgba(255,255,255,0.15),_inset_0_0_15px_rgba(255,255,255,0.05)] p-8 transition-all hover:-translate-y-2 hover:shadow-2xl max-w-sm w-full">
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                <img
                  src="/images/products/aicaptionstudio/gdpr-icon.png"
                  alt="GDPR"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <p className="text-white text-lg font-lora">
              GDPR-Compliant data handling and privacy standards.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl text-center shadow-[0_0_40px_8px_rgba(255,255,255,0.15),_inset_0_0_15px_rgba(255,255,255,0.05)] p-8 transition-all hover:-translate-y-2 hover:shadow-2xl max-w-sm w-full">
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                <img
                  src="/images/products/aicaptionstudio/performance-icon.png"
                  alt="Reliable Performance"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <p className="text-white text-lg font-lora">
              Reliable Performance built for creators and businesses of all
              sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSecurity;
