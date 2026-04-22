"use client";
import { ArrowRightCircle } from "lucide-react";
import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // success or error

  const handleSubmit = async () => {
    if (!email) {
      setStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    // WEB3FORMS API SUBMISSION
    const fd = new FormData();
    fd.append("access_key", "cc28a946-1d7c-46a4-aa9f-0bbaa38e5c77");
    fd.append("Email", email);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: fd,
    });

    setStatus("success");
    setEmail("");

    setTimeout(() => setStatus(""), 3000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <section className="relative bg-[#f7f7f5] text-[#0F172A] py-14 md:py-20">

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 md:px-20">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.10)] p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* LEFT */}
            <div>
              <h2 className="text-3xl font-karla font-bold mb-3 text-[#0F172A]">
                Stay Updated with ScotiTech
              </h2>
              <p className="text-slate-700 font-lora text-sm md:text-base leading-relaxed max-w-md">
                Get product updates, company news, and selected insights from
                ScotiTech.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-3">
              {/* MOBILE */}
              <div className="lg:hidden flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your email address"
                  className={`px-4 py-3 rounded-full bg-white text-gray-800 font-lora font-medium text-sm text-center focus:outline-none border-2 ${
                    status === "error" ? "border-red-400" : "border-slate-300"
                  }`}
                />
                <button
                  onClick={handleSubmit}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] hover:bg-slate-900 text-white font-karla font-semibold text-sm transition shadow-md hover:shadow-lg"
                >
                  {status === "success" ? "Subscribed" : "Subscribe"}
                  <ArrowRightCircle className="w-5 h-5" />
                </button>
              </div>

              {/* DESKTOP */}
              <div className="hidden lg:block relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your email address"
                  className={`w-full py-4 pl-6 pr-[140px] rounded-full bg-white text-gray-800 font-lora font-medium text-base focus:outline-none border-2 ${
                    status === "error" ? "border-red-400" : "border-slate-300"
                  }`}
                />
                <button
                  onClick={handleSubmit}
                  className="absolute top-1/2 right-2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#0F172A] hover:bg-slate-900 text-white font-karla font-semibold text-base transition-all shadow-md hover:shadow-lg"
                >
                  {status === "success" ? "Subscribed" : "Subscribe"}
                </button>
              </div>

              {/* STATUS */}
              {status === "success" && (
                <p className="text-sm text-green-400 font-medium">
                  ✓ Subscription confirmed. You will hear from us when there is
                  something worth sharing.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400 font-medium">
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
