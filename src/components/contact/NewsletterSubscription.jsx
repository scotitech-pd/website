"use client";
import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // 'success', 'error', or ''

  const handleSubmit = () => {
    if (!email) {
      setStatus("error");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    // Simulate subscription
    console.log("Subscribing email:", email);
    setStatus("success");
    setEmail("");

    // Reset status after 3 seconds
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <section className="relative bg-black py-12 px-4 lg:py-8 lg:px-5">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="bg-white rounded-xl p-8 lg:px-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <h2 className="text-2xl font-lora lg:text-md font-bold text-teal-600 mb-4">
                Stay updated with scotitech
              </h2>
              <p className="text-sm lg:text-[12px] font-karla text-gray-600 leading-relaxed">
                Stay ahead of the curve and ensure you're always up-to-date with
                emerging technology by consistently following scotitech for all
                our newest announcements and breakthroughs.
              </p>
            </div>

            {/* Right Side - Email Form */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your Email Address"
                  className={`flex-1 px-6 py-3 lg:py-4 rounded-full bg-[#C3FFFA] border-2 ${
                    status === "error" ? "border-red-400" : "border-teal-100"
                  } focus:border-[#C3FFFA] focus:outline-none text-gray-700 placeholder-gray-500 text-sm lg:text-base transition-colors`}
                />
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 lg:py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm lg:text-base transition-colors shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Submit Now
                </button>
              </div>

              {/* Status Messages */}
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
