"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("access_key", "cc28a946-1d7c-46a4-aa9f-0bbaa38e5c77");
    formData.append("Email", email);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    if (result.success) {
      setStatus("Thanks for subscribing.");
      setEmail("");
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full bg-[#F7F7F5] px-4 py-16">
      <div className="mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        <Reveal className="mx-auto grid items-center gap-5 rounded-[1.15rem] border border-[#d9ded7] bg-[#0E1116] px-5 py-8 text-white shadow-[0_24px_70px_rgba(14,17,22,0.22)] min-[630px]:px-8 min-[630px]:py-10 md:py-14 xl:px-12 min-[1270px]:grid-cols-2" variant="soft">
          <div>
            <h2 className="mb-4 text-4xl font-semibold text-white min-[1550px]:text-5xl">
              Stay updated with ScotiTech
            </h2>
            <p className="font-lora text-lg text-slate-200 min-[500px]:text-xl min-[1550px]:w-[70%] sm:w-[90%]">
              Get product updates, company news, and selected briefings
              delivered to your inbox.
            </p>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-3 md:flex-row md:gap-4"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full flex-1 rounded-full bg-white px-6 py-3 font-lora text-black outline-none ring-1 ring-transparent transition focus:ring-[#B7A84D] md:max-w-[600px]"
              />

              <button
                type="submit"
                className="rounded-full bg-white px-6 py-3 text-base font-semibold text-[#0E1116] transition hover:bg-slate-100"
              >
                Subscribe
              </button>
            </form>

            {status && <p className="mt-4 text-sm text-slate-200">{status}</p>}

            <p className="mt-4 font-lora text-sm text-slate-300">
              We respect your privacy. Read our{" "}
              <a
                href="/privacy-policy"
                className="font-bold text-white underline"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default SubscribeSection;
