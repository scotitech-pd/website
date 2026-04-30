"use client";
import React, { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("access_key", "cc28a946-1d7c-46a4-aa9f-0bbaa38e5c77"); // <-- Put your key here
    formData.append("Email", email);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    if (result.success) {
      setStatus("Thanks for subscribing!");
      setEmail("");
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="rounded-3xl border border-slate-600/70 mx-auto bg-[#0F172A]/88 px-3 min-[630px]:px-8 xl:px-12 py-8 min-[630px]:py-10 md:py-14 text-white grid min-[1270px]:grid-cols-2 items-center gap-5 shadow-[0_20px_50px_rgba(2,6,23,0.30)]">
          <div>
            <h2 className="text-4xl min-[1550px]:text-5xl font-semibold font-karla mb-4 text-white">
              Stay Updated With ScotiTech
            </h2>
            <p className="text-lg font-lora min-[500px]:text-xl text-slate-200 sm:w-[90%] min-[1550px]:w-[70%] max-[650px]:leading-[22px]">
              Get product updates, company news, and selected insights
              delivered to your inbox.
            </p>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-3 md:gap-4 w-full max-[500px]:mt-1"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 rounded-md text-black w-full font-lora bg-white max-w-[600px]"
              />

              <div className="flex w-full justify-end md:w-auto md:justify-normal">
                <button
                  type="submit"
                  className="bg-white text-main-dark px-6 py-2 rounded-md font-semibold font-karla hover:bg-slate-100 transition text-[17px] md:text-xl"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {status && <p className="mt-4 text-sm text-slate-200">{status}</p>}

            <p className="text-sm min-[500px]:text-[15px] mt-4 text-slate-200 pl-3 font-lora">
              We respect your privacy. No spam, ever. Read our{" "}
              <a
                href="/privacy-policy"
                className="font-bold underline text-white font-lora"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
