"use client";
import { CalendarDaysIcon } from "lucide-react";
import { Rocket } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function ComingSoon() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setIsModalOpen(false);
    }, 2500);
  };

  return (
    <section
      className="relative overflow-hidden lg:h-[100%] text-white min-[1380px]:py-25 py-18 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/products/opsly/frontbg.png')",
      }}
    >
      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-8">

        {/* TEXT SECTION */}
        <div className="lg:w-2/3 space-y-6 z-20">
          <div className="lg:text-5xl text-3xl font-semibold relative w-fit font-karla">
            Opsly Launching Soon
            <p className="absolute text-[85px] opacity-10 top-1/2 -translate-y-1/2 -left-5 text-nowrap hidden md:block">
              Opsly
            </p>
          </div>

          <h2 className="lg:text-2xl font-xl font-medium font-karla mt-7">
            Integrating Every Tool Your
            <span className="block">Team Needs, Billed Simply.</span>
          </h2>

          <p className="hidden lg:block leading-6 font-lora text-white/80 max-w-[620px]">
            Opsly centralizes your company’s SaaS stack to help you reduce waste,
            eliminate redundant tools, and ensure compliance from one powerful dashboard.
          </p>

          <p className="lg:hidden block leading-6 font-lora text-white/80 max-w-[620px]">
            Opsly centralizes all SaaS tools to help your team save cost and ensure compliance.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-gray-900 px-6 py-2.5 rounded-lg font-medium hover:bg-[#C140D5] hover:text-white hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] duration-300 transition-all font-lora"
          >
            Remind Me
            <CalendarDaysIcon className="inline-block ml-2 h-5 w-5" />
          </button>
        </div>

        {/* IMAGE SECTION */}
        <div className="lg:w-1/4 flex justify-start items-center">
          <img
            src="/images/products/opsly/frontmobile.png"
            alt="Opsly dashboard preview"
            className="hidden lg:block w-[90%]"
          />
          <img
            src="/images/products/opsly/frontmobile.png"
            alt="Opsly mobile preview"
            className="lg:hidden block absolute max-[579px]:-bottom-20 max-[620px]:-bottom-[90px] opacity-50 left-1/2 w-[200px]"
          />
        </div>
      </div>

      {/* WAITLIST MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-[90%] sm:w-[400px] relative text-left">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <div className="flex items-center gap-2 mb-3">
                  <Rocket className="text-blue animate-bounce" size={22} />
                  <h3 className="text-xl font-semibold text-blue font-karla">
                    Join the Opsly Waitlist
                  </h3>
                </div>

                <p className="text-gray-600 text-sm mb-4 font-lora">
                  Be the first to receive early access notifications as Opsly launches.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border text-main-dark font-lora border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue"
                  />

                  <button
                    type="submit"
                    className="w-full bg-blue text-white py-2 rounded-lg font-karla hover:bg-blue/90 transition"
                  >
                    Join Waitlist
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center text-center space-y-3 py-6">
                <Rocket className="text-blue animate-pulse" size={42} />
                <h4 className="text-lg font-semibold text-blue">
                  Thank you for joining
                </h4>
                <p className="text-gray-600 text-sm font-lora">
                  You will be notified once early access is available.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
