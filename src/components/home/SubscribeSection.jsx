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
    <div className="w-full py-16 px-4 bg-gradient-to-r from-teal-600/70 to-purple-800/70">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="rounded-3xl border border-white mx-auto bg-white/10 px-3 min-[630px]:px-8 xl:px-12 py-8 min-[630px]:py-10 md:py-14 text-white grid min-[1270px]:grid-cols-2 items-center gap-5">
          <div>
            <h2 className="text-4xl min-[1550px]:text-5xl font-semibold font-karla mb-4 text-black">
              Stay Ahead With ScotiTech
            </h2>
            <p className="text-lg font-lora min-[500px]:text-xl text-white sm:w-[90%] min-[1550px]:w-[70%] max-[650px]:leading-[22px]">
              Get the latest insights, product updates, and exclusive offers
              delivered straight to your inbox
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
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 rounded-md text-black w-full font-lora bg-white max-w-[600px]"
              />

              <div className="flex w-full justify-end md:w-auto md:justify-normal">
                <button
                  type="submit"
                  className="bg-white text-main-light px-6 py-2 rounded-md font-semibold font-karla hover:bg-purple-100 transition text-[17px] md:text-xl"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {status && <p className="mt-4 text-sm text-white">{status}</p>}

            <p className="text-sm min-[500px]:text-[15px] mt-4 text-white pl-3 font-lora">
              We respect your privacy.. No spam, ever. Read our{" "}
              <a
                href="/privacy"
                className="font-bold underline text-black font-lora"
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
