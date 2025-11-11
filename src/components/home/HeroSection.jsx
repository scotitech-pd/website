"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const HeroSection = () => {
  // ✅ PC Carousel Slides (image + video mix)
  const slides = [
    { type: "image", src: "/images/home/herobg.png" },
    // { type: "image", src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80" },
    // { type: "image", src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80" },
     { type: "video", src: "https://www.pexels.com/download/video/4974699/" },
    // { type: "video", src: "https://www.pexels.com/download/video/7989701/" },
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto-slide for PC
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ✅ DESKTOP VIEW */}
      <section className="relative hidden lg:flex h-[80vh] w-full overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] breathe ${
              currentIndex === i ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.type === "video" ? (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
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

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 z-5" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full py-10 text-white m-10">
          <p className="bg-main-dark font-semibold border border-white px-3 py-2 rounded-lg w-fit font-karla">
            ScotiTech Solution
          </p>

          <h1 className="lg:text-[50px] text-4xl font-karla font-bold leading-[57px] mt-6">
            Building Technology That<br />Empowers People
          </h1>

          <p className="lg:text-xl text-md mt-4 mb-8 font-lora max-w-xl">
            Building the technology that transforms what you can do into what you will do.
          </p>

          <div className="p-1.5 border border-white w-fit rounded-lg">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-2 rounded-lg text-lg inline-flex items-center gap-2 font-karla"
            >
              Get Started →
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ MOBILE/TABLET VIEW */}
      <section className="relative lg:hidden h-[84vh] px-6 py-20 flex flex-col justify-center text-white overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center breathe"
          style={{
            backgroundImage: "url('/images/home/herobg.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENT */}
        <div className="relative z-10">
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

      {/* ✅ Breathing Animation */}
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
