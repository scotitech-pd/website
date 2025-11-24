"use client";

import { useState, useEffect } from "react";
import { Rocket } from "lucide-react";

export default function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Close modal on browser BACK button
  useEffect(() => {
    if (isModalOpen) {
      window.history.pushState({ modalOpen: true }, "");
    }

    const handlePopState = () => {
      setIsModalOpen(false);
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, [isModalOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Web3Forms integration
    const formData = new FormData();
    formData.append("access_key", "cc28a946-1d7c-46a4-aa9f-0bbaa38e5c77");
    formData.append("Email", email);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setIsModalOpen(false);
    }, 2500);
  };

  const buttons = [
    {
      title: "Access AppDeploy",
      bg: "#1C8BEA",
      icon: "/images/solution/download.png",
      type: "redirect",
      link: "https://appdeploy.scotitech.com:5173/",
      className: "hover:shadow-[0_0_10px_rgba(28,139,234,0.9)]",
    },
    {
      title: "Join Opsly Waitlist",
      bg: "#2AC07B",
      icon: "/images/solution/joine.png",
      type: "modal",
      className: "hover:shadow-[0_0_10px_rgba(42,192,123,0.9)]",
    },
    {
      title: "Try AI Caption Studio",
      bg: "#F48530",
      icon: "/images/solution/caption.png",
      type: "redirect",
      link: "https://apps.apple.com/gb/app/ai-caption-studio/id6743449367",
      className: "hover:shadow-[0_0_10px_rgba(244,133,48,0.9)]",
    },
    {
      title: "Install ClarityPath",
      bg: "#8C52FF",
      icon: "/images/solution/check.png",
      type: "redirect",
      link: "https://appdeploy.scotitech.com:5173/",
      className: "hover:shadow-[0_0_10px_rgba(140,82,255,0.9)]",
    },
  ];

  const handleClick = (btn) => {
    if (btn.type === "modal") {
      setIsModalOpen(true);
      return;
    }
    if (btn.type === "redirect" && btn.link) {
      window.open(btn.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <section
        className="relative bg-cover bg-center text-white py-10"
        style={{
          backgroundImage: "url('/images/solution/cta.png')",
        }}
      >
        <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full z-10 text-left sm:py-10">
          <div className="bg-gradient-to-r from-[#10385A] to-[#452463] rounded-[2rem] py-8 px-5 min-[500px]:p-12 relative">
            <span className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-[#10385A] to-[#452463] blur-xl opacity-60 -z-10" />

            <h2 className="text-3xl min-[390px]:text-4xl md:text-5xl font-semibold mb-3 font-karla tracking-wide">
              Let’s Simplify the Future, Together.
            </h2>

            <p className="text-lg min-[390px]:text-xl text-white/90 mb-12 font-lora">
              Choose the right ScotiTech product for your needs and start today.
            </p>

            <div className="grid min-[810px]:grid-cols-2 min-[1360px]:grid-cols-4 gap-4 font-lora">
              {buttons.map((btn, i) => (
                <button
                  key={i}
                  onClick={() => handleClick(btn)}
                  style={{ backgroundColor: btn.bg }}
                  className={`relative flex text-md items-center justify-between text-[16px] font-karla text-white font-medium mr-4 px-5 min-[1480px]:px-11 py-5 rounded-4xl shadow-lg transition-transform duration-300 ${btn.className} max-[400px]:w-full max-[810px]:w-[270px] max-[810px]:mx-auto cursor-pointer`}
                >
                  {btn.title}

                  <div className="rounded-full absolute right-3 translate-x-1/2 top-1/2 -translate-y-1/2 bg-white flex justify-center items-center size-11 shadow-md">
                    <img src={btn.icon} alt="" className="size-6" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-[90%] sm:w-[400px] relative"
            onClick={(e) => e.stopPropagation()}
          >
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
                  Enter your email to get early access updates.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-main-dark font-lora focus:outline-none focus:border-blue"
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
                <h4 className="text-lg font-semibold text-blue">You're on the list!</h4>
                <p className="text-gray-600 text-sm font-lora">
                  We'll notify you as soon as Opsly launches.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
