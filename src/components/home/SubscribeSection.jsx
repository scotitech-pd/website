"use client";
import React, { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY || "YOUR_WEB3FORM_ACCESS_KEY");
    formData.append("email", email);

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
    <div
      className="w-full py-16 px-4 bg-gradient-to-r from-teal-600/70 to-purple-800/70"
    >
      <div className="w-[85%] rounded-3xl border border-white mx-auto bg-white/10  px-12 py-14 text-white grid grid-cols-2">
        <div className="">
          <h2 className="text-4xl md:text-5xl font-medium mb-4 text-black">
            Stay Ahead With ScotiTech
          </h2>
          <p className="text-xl mb-6 text-white/70 w-[70%]">
            Get the latest insights, product updates, and exclusive offers
            delivered straight to your inbox
          </p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center gap-4"
          >
            <input
              type="email"
              required
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-md text-black w-full bg-white max-w-[600px]"
            />
            <button
              type="submit"
              className="bg-white text-main-light px-6 py-2 rounded-md font-medium hover:bg-purple-100 transition text-xl"
            >
              Subscribe
            </button>
          </form>

          {status && <p className="mt-4 text-sm text-white">{status}</p>}

          <p className="text-[15px] mt-4 text-white/70 pl-3">
            We respect the privacy. No spam, ever. Read our{" "}
            <a href="/privacy" className="font-bold underline text-black">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
