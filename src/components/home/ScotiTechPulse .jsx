"use client";
import { Rocket } from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const carouselItems = [
  {
    img: "/images/home/rocket.png",
    tag: "INSIGHT",
    title: "Innovate Build Lead Succeed Grow",
    desc: "Driving next-generation growth through innovation.",
    ctaButtonText: "Contact us",
    ctaButtonLink: "/contact",
  },
  {
    img: "/images/home/award.jpg",
    tag: "RECOGNITION",
    title: "Indian Tech Society – UK",
    desc: "An inspiring evening celebrating innovation and excellence in the UK tech community.",
    ctaButtonText: "Read on LinkedIn",
    ctaButtonLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7218239558662922240/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7218239558662922240%29",
  },
  {
    img: "/images/home/forttuna.jpg",
    tag: "AWARD",
    title: "ScotiTech at Forttuna",
    desc: "ScotiTech has been nominated for the Forttuna Global Excellence Awards® 2025 (Global Edition).",
    ctaButtonText: "Read on LinkedIn",
    ctaButtonLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7313247079722541058/?updateEntityUrn=urn%3Ali:fs_feedUpdate%3A%28V2%2Curn%3Ali:activity%3A7313247079722541058%29",
  },
];

const ScotiTechPulse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Web3Forms Integration
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

  return (
    <section
      className="relative bg-[#f8fafc] py-12 md:py-16 overflow-hidden"
      style={{
        backgroundImage: "url('/images/home/pulsebg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full">
        <div className="text-left mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-karla font-semibold text-gray-900">
            The ScotiTech Pulse
          </h2>
          <p className="mt-3 text-lg md:text-2xl text-black font-lora">
            Stay connected with our latest{" "}
            <span className="text-main-dark font-medium">innovations</span>,{" "}
            <span className="text-main-dark font-medium">insights</span>, and{" "}
            <span className="text-main-dark font-medium">community events</span>.
          </p>
        </div>

        <div className="grid min-[990px]:grid-cols-[45%_53%] lg:w-[88%] mx-auto gap-6 text-black">
          {/* Carousel left box untouched */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md relative min-h-[480px] sm:min-h-[450px]">
            {carouselItems.map((item, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  current === i
                    ? "opacity-100 translate-y-0 z-10"
                    : "opacity-0 translate-y-3 z-0"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-60 sm:h-64 object-cover"
                />
                <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between h-[calc(100%-15rem)] sm:h-auto">
                  <div>
                    <span className="bg-[#BCB96A] px-4 py-1 rounded-full text-[11px] sm:text-[13px] font-karla font-semibold text-white mb-3 inline-block">
                      {item.tag}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 font-karla">
                      {item.title}
                    </h3>
                    <p className="text-black/90 text-sm sm:text-base md:text-lg mb-4 font-lora">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-full flex justify-end min-[990px]:justify-start mt-auto">
                    <a
                      href={item.ctaButtonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue flex text-white px-6 sm:px-8 py-2 font-karla cursor-pointer rounded-full text-sm sm:text-md transition items-center justify-center font-medium hover:bg-blue/90"
                    >
                      {item.ctaButtonText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Two animated cards */}
          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 14 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl drop-shadow-md shadow-md p-6"
            >
              <div className="flex justify-between items-center mb-2 text-white">
                <span className="bg-[#BCB96A] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] flex gap-1.5 sm:gap-3 items-center font-bold font-karla">
                  <img src="/images/home/eventicon.png" alt="eventicon" className="size-5 sm:size-7" />
                  Media
                </span>
                <span className="text-sm text-gray-500 font-lora">December 2025</span>
              </div>
              <h4 className="text-xl min-[650px]:text-2xl font-semibold font-karla mb-2 mt-4">
                Pradeep wins NextGen Innovator of the Year, Dubai
              </h4>
              <p className="text-gray-600 mb-4 text-md font-lora">
                ScotiTech Solutions Limited is proud to announce that its Co-Founder and Director, Pradeep Dahiya, has been honored with the NextGen Innovator of the Year award at the Fortuna Global Excellence Awards 2025, held in Dubai, UAE.
              </p>
              <div className="w-full flex justify-end">
                <Link href="/media">
                  <button className="relative overflow-hidden border border-blue cursor-pointer text-blue-700 font-lora px-5 py-2 rounded-full text-md transition-all duration-300 group">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      Read More
                    </span>
                    <span className="absolute inset-0 bg-blue scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></span>
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 14 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl drop-shadow-md shadow-md p-6"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="bg-[#FFA662] font-karla px-4 py-1.5 items-center rounded-full text-[12px] sm:text-[14px] flex gap-1.5 sm:gap-3 font-bold text-white">
                  <img src="/images/home/boxicon.png" alt="eventicon" className="size-5 sm:size-7" />
                  PRODUCT UPDATE
                </span>
                <span className="text-sm text-gray-500 font-lora">10/Dec/2025</span>
              </div>
              <h4 className="text-xl min-[650px]:text-2xl font-semibold font-karla mb-2">
                Opsly Launch — Get Early Access
              </h4>
              <p className="text-gray-600 mb-4 text-md font-lora">
                Be among the first to explore our SaaS optimization suite with exclusive early access.
              </p>
              <div className="w-full flex justify-end">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue flex text-white px-6 font-karla cursor-pointer sm:px-12 py-1.5 sm:py-2 rounded-full text-md transition items-center justify-center font-medium gap-2 group"
                >
                  <Rocket className="m-1 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  Join the Waitlist
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal untouched except API added */}
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
                  Be the first to get early access updates as soon as Opsly launches.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border text-main-dark font-lora border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue"
                  />

                  <button
                    type="submit"
                    className="w-full bg-blue cursor-pointer text-white py-2 rounded-lg font-karla hover:bg-blue/90 transition"
                  >
                    Join Waitlist
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center text-center space-y-3 py-6">
                <Rocket className="text-blue animate-pulse" size={42} />
                <h4 className="text-lg font-semibold text-blue">
                  Thank you for joining!
                </h4>
                <p className="text-gray-600 text-sm font-lora">
                  We’ll notify you as soon as Opsly early access is available.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ScotiTechPulse;
