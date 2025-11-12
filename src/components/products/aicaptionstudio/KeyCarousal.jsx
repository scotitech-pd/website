// components/FeaturesCarousel.jsx
"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";

const FeaturesCarousel = () => {
  const swiperRef = useRef(null);
  const [visible, setVisible] = useState(0);

  const competitors = [
    {
      name: "AppDeploy (Scotitech)",
      img: "/images/products/appdeploy/logo.png",
      tagline:
        "Secure, ABM-ready app deployment without MDM complexity. Perfect for startups and SMEs.",
      highlight: "Simple • Secure • Scalable",
    },
    {
      name: "Applivery",
      img: "/images/products/appdeploy/applivery.png",
      tagline:
        "Enterprise-grade MDM platform requiring complex setup and dedicated IT teams.",
      highlight: "Powerful but complex",
    },
    {
      name: "AppCenter (Microsoft)",
      img: "/images/products/appdeploy/appcenter.png",
      tagline:
        "Ideal for DevOps CI/CD testing and beta releases, but limited for private deployments.",
      highlight: "Built for testing, not distribution",
    },
    {
      name: "Diawi",
      img: "/images/products/appdeploy/diawi.png",
      tagline:
        "Fast public app-sharing tool for developers. Quick, but lacks security and compliance.",
      highlight: "Great for testing, not for teams",
    },
  ];

  const handlePrevClick = (e) => {
    e.preventDefault();
    if (swiperRef.current?.swiper) {
      setVisible(0);
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    if (swiperRef.current?.swiper) {
      setVisible((p) => p + 1);
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="relative w-full py-20 overflow-hidden font-karla">
      {/* background image from Unsplash */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093588401-22e8d9ac3d29?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center brightness-[0.8]"></div>
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <div className="relative mb-12 px-10">
          <div className="absolute -top-6 left-10 min-w-[650px] pointer-events-none">
            <p className="hidden lg:flex text-[70px] font-karla font-bold -tracking-tighter text-gray-900/10 opacity-40">
              Competitors
            </p>
          </div>
          <h2 className="text-4xl font-bold -tracking-tighter text-[#3D297A]">
            Competitor Analysis
          </h2>
        </div>

        {/* Swiper Container */}
        <div className="relative h-[480px] pt-10 pl-0 md:pl-10">
          <div className={`absolute w-full left-10 ${visible !== 0 && "md:left-[360px]"}`}>
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Autoplay, Keyboard]}
              loop={true}
              slidesPerGroup={1}
              spaceBetween={25}
              slidesPerView={1.2}
              centeredSlides={false}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              keyboard={{ enabled: true, onlyInViewport: true }}
              speed={800}
              className="!overflow-visible"
              breakpoints={{
                320: { slidesPerView: 1.2, spaceBetween: 20 },
                480: { slidesPerView: 2.2, spaceBetween: 25 },
                768: { slidesPerView: 3, spaceBetween: 30 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
              }}
            >
              {competitors.map((comp, index) => (
                <SwiperSlide key={index} className="!h-auto flex justify-start">
                  <div className="relative bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col mx-auto">
                    {/* Logo */}
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                        <img
                          src={comp.img}
                          alt={comp.name}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold text-[#3D297A] text-center mb-2">
                      {comp.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-gray-700 text-sm text-center mb-3 font-lora leading-snug">
                      {comp.tagline}
                    </p>

                    {/* Highlight */}
                    <div className="mt-auto">
                      <p className="text-center text-sm font-semibold text-[#7E1A8E] italic">
                        “{comp.highlight}”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-0 left-10 flex justify-start gap-3 mt-10">
            <button
              onClick={handlePrevClick}
              className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 active:scale-95"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNextClick}
              className="w-12 h-12 rounded-full bg-purple-700 hover:bg-purple-800 flex items-center justify-center transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 active:scale-95"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCarousel;
