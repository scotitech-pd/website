"use client";

import React from "react";
import { useModal } from "@/components/ModalContext"; // ✅ Global modal context import

const GlobalD = () => {
  const { setShowModal } = useModal(); // ✅ modal context function

  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat py-9"
      style={{
        backgroundImage: "url('/images/aboutus/lead-bg.png')",
      }}
    >
      <div className="text-center px-4 sm:px-8 md:px-16 min-[1670px]:w-7xl min-[1670px]:mx-auto lg:px-[180px] flex justify-center items-center mt-[4px] h-auto py-8 lg:py-0 overflow-hidden">
        <div className="relative">
          {/* Heading */}
          <h3 className="text-2xl relative font-karla mb-5 lg:text-[35px] min-[1670px]:py-[20px] font-semibold text-white 2xl:text-[45px]">
            Global Delivery. Local Trust
            <div className="absolute hidden lg:block left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-0">
              <p className="text-5xl sm:text-6xl tracking-wider font-karla md:text-5xl lg:text-7xl font-bold text-gray-300/20 leading-none whitespace-nowrap">
                Global Delivery. Local Trust
              </p>
            </div>
          </h3>

          {/* Description */}
          <p className="text-white font-lora lg:text-[15px] text-xs leading-5.5 min-[1670px]:py-[20px]">
            ScotiTech operates with strategic leadership from London and a
            remote-first engineering network spanning multiple regions. This
            hybrid model allows us to blend British innovation, global
            collaboration, and technical agility — delivering exceptional
            products and enterprise solutions worldwide.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setShowModal(true)} // ✅ Opens global Request Quote modal
            className="cursor-pointer relative w-[250px] mx-auto mt-5 border border-white/20 shadow-xl rounded-4xl overflow-hidden group"
          >
            <img
              src="/images/aboutus/globalbutton.png"
              alt="Talk to Us Button Background"
              className="w-full h-full object-cover"
            />
            <p className="absolute inset-0 flex items-center justify-center text-black font-semibold text-[18px] lg:text-[20px] min-[1670px]:text-[25px] group-hover:text-[#5E0B7B] transition">
              Talk to Us!
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GlobalD;
