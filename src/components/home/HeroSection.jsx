"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const HeroSection = () => {
  const slides = [
    { src: "/images/home/hero-vid.mp4" },
    { src: "/images/home/hero-vid2.mp4" },
    { src: "/images/home/hero-vid3.mp4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [videosReady, setVideosReady] = useState(false);
  const videoRefs = useRef([]);

  // Preload videos BEFORE showing HeroSection
  useEffect(() => {
    let loaded = 0;

    slides.forEach((slide) => {
      const video = document.createElement("video");
      video.src = slide.src;
      video.preload = "auto";
      video.muted = true;
      video.playsInline = true;

      video.addEventListener("loadeddata", () => {
        loaded++;
        if (loaded === slides.length) {
          setVideosReady(true);
        }
      });
    });
  }, []);

  // Auto slide after videos are ready
  useEffect(() => {
    if (!videosReady) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [videosReady]);

  // Play correct video instantly
  useEffect(() => {
    if (!videosReady) return;

    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === currentIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [currentIndex, videosReady]);

  // Loader already handles initial delay, so return nothing until videos ready
  if (!videosReady) return null;

  return (
    <>
      {/* DESKTOP VIEW */}
      <section className="relative hidden lg:flex h-[93vh] w-full overflow-hidden items-center justify-center">
        {slides.map((slide, i) => (
          <video
            key={i}
            ref={(el) => (videoRefs.current[i] = el)}
            src={slide.src}
            muted
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              currentIndex === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* BLACK OVERLAY */}
        <div className="absolute inset-0 bg-black/40 z-5" />

        <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-20 w-full text-white flex flex-col justify-center h-full">
          <p className="bg-main-dark font-semibold border border-white px-3 py-2 rounded-lg w-fit font-karla">
            ScotiTech Solutions
          </p>

          <h1 className="lg:text-[50px] text-4xl font-karla font-bold leading-[57px] mt-6">
            Building Technology That
            <br />
            Empowers People
          </h1>

          <p className="lg:text-xl text-md mt-4 mb-8 font-lora max-w-xl">
            Building Trusted Technology for a Smarter, Safer Digital Future.
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
          className="absolute inset-0 bg-cover bg-center animate-breathe-slow"
          style={{
            backgroundImage: "url('/images/home/herobg.png')",
          }}
        />

        <div className="relative z-10 flex flex-col justify-center h-full">
          <p className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg w-fit font-karla border border-white/50">
            ScotiTech Solutions
          </p>

          <h2 className="text-3xl font-karla font-bold mt-5 leading-[46px]">
            Building Technology
            <br />
            That Empowers People
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

    </>
  );
};

export default HeroSection;
