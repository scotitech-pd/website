"use client";
import Link from "next/link";
import React, { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

const products = [
  {
    id: 1,
    name: "AppDeploy",
    description:
      "Enterprise iOS distribution without App Store rejections or MDM headaches.",
    icon: "/images/solution/maskimg.png",
    img: "/images/home/appdeploy.png",
    bgColor: "bg-blue",
    textColor: "text-blue",
    buttonColor: "bg-blue",
    buttonText: "Access AppDeploy",
    link: "https://appdeploy.scotitech.com:5173/",
    details: "/products/appdeploy",
  },
  {
    id: 2,
    name: "Opsly",
    description:
      "Track and optimize SaaS usage. Cut waste, save costs, and scale smarter.",
    icon: "/images/solution/maskimg2.png",
    img: "/images/home/opsly.png",
    bgColor: "bg-green",
    textColor: "text-green",
    buttonColor: "bg-green",
    buttonText: "Join Waitlist",
    link: "#",
    details: "#",
  },
  {
    id: 3,
    name: "AI Caption Studio",
    description:
      "AI-powered captions & content tools to boost engagement in seconds.",
    icon: "/images/solution/maskimg3.png",
    img: "/images/home/ai.png",
    bgColor: "bg-main-light",
    textColor: "text-main-light",
    buttonColor: "bg-main-light",
    buttonText: "Download on App Store",
    link: "https://apps.apple.com/gb/app/ai-caption-studio/id6743449367",
    details: "/products/aicaptionstudio",
  },
  {
    id: 4,
    name: "ClarityPath",
    description:
      "ClarityPath provides organizations with a unique tool for personal planning and growth.",
    icon: "/images/solution/maskimg4.png",
    img: "/images/home/claritypath.png",
    bgColor: "bg-green-light",
    textColor: "text-green-light",
    buttonColor: "bg-green-light",
    buttonText: "Access via AppDeploy",
    link: "https://appdeploy.scotitech.com:5173/claritypath",
    details: "/products/claritypath",
  },
];

const ProductShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 2000); // Close after 2 seconds
  };

  return (
    <section className="bg-gray-100 py-20 px-4 text-center relative">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full">
        <h2 className="text-[20px] text-black font-semibold font-karla mb-2">
          Our Solutions at a Glance
        </h2>
        <h1 className="text-4xl font-bold mb-10 text-black/90 font-karla">
          One <span className="text-main-dark">Company</span>. Four{" "}
          <span className="text-main-dark">Powerful</span> Products.
        </h1>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col max-w-[390px] mx-auto"
            >
              {/* Image Section */}
              <div className="relative h-36 rounded-xl">
                <img
                  src={product.img}
                  alt="bg"
                  className="absolute inset-0 w-full h-full object-cover filter blur-xs"
                />
                <div className="absolute -bottom-6 left-6 shadow-[0_0_25px_rgba(255,255,255,0.2)] rounded-full">
                  <img
                    src={product.icon}
                    alt={`${product.name} Icon`}
                    className="size-20 object-contain"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="pt-7 sm:pt-10 pb-14 px-6 flex-1 flex flex-col items-center text-left relative">
                <h3
                  className={`text-lg font-semibold sm:mb-2 w-full font-karla ${product.textColor}`}
                >
                  {product.name}
                </h3>
                <p className="text-[13px] text-black font-lora mb-4 font-medium w-full">
                  {product.description}
                </p>

                <div className="space-y-2 left-4 w-[90%] absolute bottom-2">
                  {/* Read Details */}
                  <div className="w-full">
                    {product.name === "Opsly" ? (
                      <span className="bg-white px-3 font-medium font-karla py-0.5 rounded-lg text-[13px] text-gray-500 shadow-[0_0_25px_rgba(128,128,128,0.4)] cursor-none hover:bg-main-dark hover:text-white transition">
                        Coming Soon
                      </span>
                    ) : (
                      <Link
                        href={product.details}
                        className="bg-white px-3 font-medium font-karla py-0.5 rounded-lg text-[13px] text-blue-600 shadow-[0_0_25px_rgba(128,128,128,0.4)]"
                      >
                        Read Details
                      </Link>
                    )}
                    <br />
                  </div>

                  {/* Main CTA Button */}
                  <div className="flex justify-end w-full">
                    {product.name === "Opsly" ? (
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className={`px-3 w-fit py-[4px] cursor-pointer text-white text-sm rounded-lg flex font-karla ${product.buttonColor} shadow-[0_0_25px_rgba(128,128,128,0.4)]`}
                      >
                        {product.buttonText}
                      </button>
                    ) : (
                      <Link
                        href={product.link}
                        target="_blank"
                        className={`px-3 w-fit py-[4px] text-white text-sm rounded-lg flex font-karla ${product.buttonColor} shadow-[0_0_25px_rgba(128,128,128,0.4)]`}
                      >
                        {product.buttonText}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Opsly Waitlist */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-[90%] sm:w-[400px] relative text-left transition-all duration-300">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X className="size-5" />
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="text-xl font-semibold text-green mb-2 font-karla">
                  Join the Opsly Waitlist
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-lora">
                  Interested in Opsly? Enter your email to join our waitlist and
                  get early access updates as soon as it launches.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border text-main-dark font-lora border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-green"
                  />
                  <button
                    type="submit"
                    className="w-full bg-green cursor-pointer text-white py-2 rounded-lg font-karla hover:bg-green/90 transition"
                  >
                    Join Waitlist
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <CheckCircle2 className="text-green size-12 animate-bounce mb-3" />
                <h4 className="text-lg font-semibold text-green font-karla mb-1">
                  Thank You!
                </h4>
                <p className="text-gray-600 text-sm font-lora">
                  Thank you for your interest in Opsly! We’re working hard to
                  bring it to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductShowcase;
