"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const HeroSection = () => {
  const slides = [
    { type: "video", src: "/images/home/hero-vid.mp4" },
    { type: "video", src: "/images/home/hero-vid2.mp4" },
    { type: "video", src: "/images/home/hero-vid3.mp4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* DESKTOP VIEW */}
      <section className="relative hidden lg:flex h-[93vh] w-full overflow-hidden items-center justify-center">
        
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 duration-[1500ms] breathe ${
              currentIndex === i ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.type === "video" ? (
              <video
                key={slide.src}
                src={slide.src}
                muted
                autoPlay
                playsInline
                preload="auto"
                ref={(el) => {
                  if (currentIndex === i && el) {
                    el.currentTime = 0;
                    el.play();
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.src})` }}
              />
            )}
          </div>
        ))}

        <div className="absolute inset-0 bg-black/40 z-5" />

        <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-20 w-full text-white flex flex-col justify-center h-full">
          <p className="bg-main-dark font-semibold border border-white px-3 py-2 rounded-lg w-fit font-karla">
            ScotiTech Solution
          </p>

          <h1 className="lg:text-[50px] text-4xl font-karla font-bold leading-[57px] mt-6">
            Building Technology That<br />Empowers People
          </h1>

          <p className="lg:text-xl text-md mt-4 mb-8 font-lora max-w-xl">
            Building the technology that transforms what you can do into what you will do.
          </p>

          <div className="p-1.5 border border-main-dark w-fit rounded-lg">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-2 rounded-lg text-lg inline-flex items-center gap-2 font-karla"
            >
              Get Started →
            </Link>
          </div>
        </div>
      </section>

      {/* MOBILE VIEW */}
      <section className="relative lg:hidden h-[84vh] px-6 py-20 flex flex-col justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center breathe"
          style={{
            backgroundImage: "url('/images/home/herobg.png')",
          }}
        />

        <div className="relative z-10 flex flex-col justify-center h-full">
          <p className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg w-fit font-karla border border-white/50">
            ScotiTech Solution
          </p>

          <h2 className="text-3xl font-karla font-bold mt-5 leading-[46px]">
            Building Technology<br />That Empowers People
          </h2>

          <p className="text-md mt-4 mb-6 font-lora max-w-sm">
            Technology built to turn your ideas into action.
          </p>

          <div className="p-1.5 border border-white/60 w-fit rounded-lg">
            <Link
              href="/contact"
              className="bg-white text-black px-6 py-2 rounded-lg text-base inline-flex items-center gap-2 font-karla"
            >
              Get Started →
            </Link>
          </div>
        </div>
      </section>

      {/* Breathing Animation */}
      <style>{`
        @keyframes breathe {
          0% { transform: scale(1); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }
        .breathe {
          animation: breathe 8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
