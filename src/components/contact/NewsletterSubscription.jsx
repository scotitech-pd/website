"use client";
import { ArrowRightCircle } from "lucide-react";
import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // success, error, or empty

  const handleSubmit = () => {
    if (!email) {
      setStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    console.log("Subscribing email:", email);
    setStatus("success");
    setEmail("");

    setTimeout(() => setStatus(""), 3000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <section className="relative bg-black py-12 lg:py-8 ">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="bg-white rounded-xl py-3 px-3 lg:px-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              <h2 className="text-2xl font-karla lg:text-md font-bold text-teal-600 mb-4">
                Stay updated with Scotitech
              </h2>
              <p className="text-sm lg:text-[12px] font-lora font-medium text-gray-600 leading-relaxed">
                Stay ahead of the curve and ensure you're always up-to-date with 
                emerging technology by consistently following Scotitech for all 
                our newest announcements and breakthroughs.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-3">

              {/* ✅ BELOW lg → TWO LINE LAYOUT */}
              <div className="lg:hidden flex flex-col gap-3">
                {/* Input */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your Email Address"
                  className={` px-4 font-lora font-semibold text-center
                    pl-5 py-3 rounded-full bg-[#C3FFFA] border-2
                    ${status === "error" ? "border-red-400" : "border-teal-100"} 
                    focus:border-[#C3FFFA] focus:outline-none 
                    text-gray-700 placeholder-gray-500 
                    text-sm transition-colors`}
                />

                {/* Button below input */}
                <button
                  onClick={handleSubmit}
                  className="
                    px-6 py-3 mt-1 rounded-full bg-teal-600 hover:bg-teal-700 
                    text-white font-semibold text-sm transition shadow-md hover:shadow-lg
                  "
                >
                  Submit Now <ArrowRightCircle className="w-5 h-5 inline-block ml-1" />
                </button>
              </div>

              {/* ✅ DESKTOP (lg and above) → ONE LINE INSIDE INPUT */}
              <div className="hidden lg:block relative w-full">

                {/* Email Input Desktop */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your Email Address"
                  className={`w-full font-lora font-semibold 
                    pl-6 pr-[130px] py-4 
                    rounded-full bg-[#C3FFFA] border-2
                    ${status === "error" ? "border-red-400" : "border-teal-100"} 
                    focus:border-[#C3FFFA] focus:outline-none 
                    text-gray-700 placeholder-gray-500 
                    text-base transition-colors`}
                />

                {/* Button inside input (desktop only) */}
                <button
                  onClick={handleSubmit}
                  className="
                    absolute top-1/2 right-2 -translate-y-1/2
                    px-8 py-3 rounded-full bg-teal-600 hover:bg-teal-700 
                    text-white font-semibold text-base 
                    shadow-md hover:shadow-lg transition whitespace-nowrap
                  "
                >
                  Submit Now
                </button>
              </div>

              {/* ✅ Status Messages */}
              {status === "success" && (
                <p className="text-sm text-green-600 font-medium px-2">
                  ✓ Successfully subscribed! Thank you for joining us.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 font-medium px-2">
                  ✗ Please enter a valid email address.
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
