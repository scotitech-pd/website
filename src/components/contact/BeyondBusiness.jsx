"use client";
import { CloudDownload, NotepadText } from "lucide-react";
import Link from "next/link";
import React from "react";

const BeyondBusiness = () => {
  const contactCards = [
    {
      id: 1,
      bg: "bg-[#e4ebec]",
      title: "Empowering Independence",
      text: "From daily tools to digital literacy, empowers shininess to thrive.",
      icon: "/images/contact/independence-icon.png",
    },
    {
      id: 2,
      bg: "bg-[#e4ebec]",
      title: "Compassionate Companionship",
      text: "Meaningful conversations, shared moments, and emotional support.",
      icon: "/images/contact/handshake-icon.png",
    },
    {
      id: 3,
      bg: "bg-[#e4ebec]",
      title: "Community Driven Care",
      text: "Building belonging, trust and joyful interactions for elders.",
      icon: "/images/contact/heart-icon.png",
    },
  ];

  return (
    <section className="relative py-12 px-4 lg:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/contact/bb_bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left blush graphic */}
      <div className="absolute -top-20 -left-[390px] opacity-60">
        <img src="/images/contact/bb_blush.png" alt="" />
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-20 lg:px-24">
        {/* Heading */}
        <div className="text-white mb-8 lg:mb-12">
          <h1 className="text-3xl lg:text-[35px] text-[#b5ddff] font-karla font-bold mb-3">
            Beyond Business: A Heart for Every Generation
          </h1>
          <p className="text-base lg:text-[17px] font-lora max-w-4xl">
            While ScotiTech builds the future of digital experience, our
            compliment social impact shines through{" "}
            <span className="text-[#98F9FF] font-semibold">
              ElderConnect+
            </span>
          </p>
        </div>

        {/* Main grid */}
        <div className="relative mb-10 lg:mb-16 lg:grid lg:grid-cols-[80%_20%]">

          {/* ✅ MOBILE TITLE FIXED */}
         

          {/* ✅ FIXED IMAGE WITHOUT TOUCHING DESKTOP */}
          <div className="relative w-full lg:w-[120%] lg:h-auto">
            <img
              src="/images/contact/elderly-care.png"
              alt="Elderly Care"
              className="w-full h-auto object-cover rounded-2xl mx-auto"
            />
             <h3 className="lg:hidden text-center text-white  font-semibold text-lg mt-4 font-karla">
            ElderConnect: Bridging Gaps, Building Joy.
          </h3>

            {/* ✅ DESKTOP OVERLAY BOX stays SAME */}
            <div className="hidden min-[1028px]:block absolute bottom-12 left-12 min-[1300px]:max-w-[500px] min-[1024px]:max-w-[300px]   bg-black/80 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-xl lg:text-xl font-bold text-white/80 mb-3 font-karla min-[1024px]:text-xs" >
                ElderConnect: Bridging Gaps, Building Joy.
              </h3>
              <p className="lg:text-sm min-[1024px]:text-xs text-gray-200 leading-relaxed font-lora">
                At ScotiTech we believe technology should empower everyone.
                Through our ElderConnect+ app, we build vibrant communities and
                support independent living.
              </p>
            </div>

            {/* ✅ DESKTOP CARD STACK stays SAME */}
            <div className="hidden lg:block absolute top-1/2 -right-[9%] -translate-y-1/2 w-[370px] space-y-5">
              {contactCards.map((card) => (
                <div
                  key={card.id}
                  className={`${card.bg} rounded-2xl flex items-center gap-3 shadow-xl p-2`}
                >
                  <div className="bg-white p-4 rounded-xl shrink-0">
                    <img src={card.icon} alt={card.title} className="h-10 w-10 "  />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-purple-900 mb-1 font-karla">
                      {card.title}
                    </h4>
                    <p className="text-[12px] text-gray-700 font-lora">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ MOBILE / TABLET CARD ROW FIXED */}
          <div className="lg:hidden mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-5 flex flex-col items-center text-center shadow-lg"
              >
                <div className="bg-purple-50 p-4 rounded-xl mb-3">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-10  h-10"
                  />
                </div>

                <h4 className="text-lg font-bold text-purple-900 mb-1 font-karla">
                  {card.title}
                </h4>

                <p className="text-sm text-gray-700 font-lora">{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="text-center lg:text-left w-full text-white max-w-3xl mx-auto lg:mx-0 mb-3 lg:mb-10">
          <p className="lg:text-lg text-sm leading-relaxed font-lora">
            "At ElderConnect+, we believe no one should feel left behind. Our
            goal is to help seniors live independently while staying connected
            with the world."
          </p>
        </div>

        {/* Author + CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 ">
          {/* Author */}
          <div className="flex items-center gap-4 text-white">
            <div className="lg:h-20 lg:w-20 h-15 w-15 shrink-0 !rounded-full overflow-hidden border-4 border-white/30">
              <img
                src="/images/contact/daniel-avatar.png"
                alt="Daniel Chapman"
                className="w-full h-full object-cover "
              />
            </div>
            <p className="lg:text-lg text-sm font-karla font-semibold text-[#98F9FF]">
              - Daniel Chapman, Director and Co-founder
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex  sm:flex-row gap-4">
         
            <Link href="/products/elderconnect" passHref>
              <button className="text-sm  lg:text-lg bg-white cursor-pointer hover:translate-y-[-2px] text-purple-900 px-3 lg:px-6 py-3 rounded-full font-semibold shadow-xl font-karla hover:bg-purple-50 transition">
                Learn More
              </button>
            </Link>
            <a href="https://apps.apple.com/gb/app/elderconnect/id6720757966" passHref>

            <button className="text-sm lg:text-lg cursor-pointer  bg-purple-100 text-center text-purple-900 px-3 lg:px-6 py-3 rounded-full font-semibold shadow-xl hover:bg-purple-200 transition font-karla flex items-center gap-2">
              <CloudDownload className="w-5 h-5" />
              Download App
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondBusiness;
