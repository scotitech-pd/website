// components/FeaturesCarousel.jsx
"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: "/images/products/claritypath/careersuccess.png",
    title: "Career Success",
    text: "Identify growth and promotion windows.",
  },
  {
    icon: "/images/products/claritypath/relocation.png",
    title: "Relocation Planning",
    text: "Plan for moving abroad or migration opportunities",
  },
  {
    icon: "/images/products/claritypath/property.png",
    title: "Property Planning",
    text: "Find clarity around property and home investments.",
  },
  {
    icon: "/images/products/claritypath/financial.png",
    title: "Financial Growth",
    text: "Track opportunities for saving, investing, and expansion.",
  },
  {
    icon: "/images/products/claritypath/yearly.png",
    title: "Yearly Roadmap",
    text: "A 12-month planning overview across career, finance, relationships, and health.",
  },
  {
    icon: "/images/products/claritypath/careersuccess.png",
    title: "Career Success",
    text: "Identify growth and promotion windows.",
  },
  {
    icon: "/images/products/claritypath/relocation.png",
    title: "Relocation Planning",
    text: "Plan for moving abroad or migration opportunities",
  },
  {
    icon: "/images/products/claritypath/property.png",
    title: "Property Planning",
    text: "Find clarity around property and home investments.",
  },
  {
    icon: "/images/products/claritypath/financial.png",
    title: "Financial Growth",
    text: "Track opportunities for saving, investing, and expansion.",
  },
  {
    icon: "/images/products/claritypath/yearly.png",
    title: "Yearly Roadmap",
    text: "A 12-month planning overview across career, finance, relationships, and health.",
  },
  {
    icon: "/images/products/claritypath/careersuccess.png",
    title: "Career Success",
    text: "Identify growth and promotion windows.",
  },
  {
    icon: "/images/products/claritypath/relocation.png",
    title: "Relocation Planning",
    text: "Plan for moving abroad or migration opportunities",
  },
  {
    icon: "/images/products/claritypath/property.png",
    title: "Property Planning",
    text: "Find clarity around property and home investments.",
  },
  {
    icon: "/images/products/claritypath/financial.png",
    title: "Financial Growth",
    text: "Track opportunities for saving, investing, and expansion.",
  },
  {
    icon: "/images/products/claritypath/yearly.png",
    title: "Yearly Roadmap",
    text: "A 12-month planning overview across career, finance, relationships, and health.",
  },
  {
    icon: "/images/products/claritypath/careersuccess.png",
    title: "Career Success",
    text: "Identify growth and promotion windows.",
  },
  {
    icon: "/images/products/claritypath/relocation.png",
    title: "Relocation Planning",
    text: "Plan for moving abroad or migration opportunities",
  },
  {
    icon: "/images/products/claritypath/property.png",
    title: "Property Planning",
    text: "Find clarity around property and home investments.",
  },
  {
    icon: "/images/products/claritypath/financial.png",
    title: "Financial Growth",
    text: "Track opportunities for saving, investing, and expansion.",
  },
  {
    icon: "/images/products/claritypath/yearly.png",
    title: "Yearly Roadmap",
    text: "A 12-month planning overview across career, finance, relationships, and health.",
  },
];

export default function KeyFeaturesSection() {
  const swiperRef = useRef(null);

  const handlePrevClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return ( 
    <section className="w-full  overflow-hidden ">
      <div className="grid md:grid-cols-[45%_55%] z-0">
        {/* LEFT SIDE */}
        <div className="text-white p-12 bg-[#641171]/95 relative overflow-hidden flex lg:items-end z-0">
          <img
            src="/images/products/claritypath/left.png"
            alt="back"
            className="absolute left-0 h-[80%] hidden lg:block"
          />
          <div className="relative z-10 lg:max-w-[620px] max-w-full lg:ml-auto lg:h-fit ">
            <h3 className="text-3xl font-semibold mb-2 lg:mb-5 font-karla">
              Key Features
            </h3>
            <h2 className="lg:text-[42px] text-2xl text-black/80 font-semibold mb-2 lg:mb-6 font-karla lg:leading-11">
              Daily & Weekly Planning Signals
            </h2>
            <p className="lg:text-xl text-[15px] leading-6 font-lora lg:mb-10  max-w-[500px]">
              Personalised daily cues and weekly overviews that guide focus,
              momentum, and decision-making.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#0e0e0e] text-white relative z-0 flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/products/claritypath/right.png"
              alt="right"
              className="object-cover opacity-30"
            />
          </div>

          <div className="relative z-10 lg:px-10 lg:py-12 py-4 ">
            <h2 className="lg:text-[45px] text-[28px] font-medium text-center font-karla mb-2 ">
              Strategic Life Reports
            </h2>
            <p className="text-center lg:text-3xl text-md text-white/80 font-karla -mt-2.5">
              (Premium Modules)
            </p>
          </div>

          <div className="relative pl-5 pb-2.5">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Autoplay, Keyboard]}
              loop={true}
              slidesPerGroup={1} // ✅ Move 1 card per slide
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={false}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              keyboard={{
                enabled: true,
                onlyInViewport: true,
              }}
              speed={800}
              className="!overflow-visible"
              breakpoints={{
                300: { slidesPerView: 1.2, spaceBetween: 20 },
                460: { slidesPerView: 2.2, spaceBetween: 25 },
                640: { slidesPerView: 3, spaceBetween: 25 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1058: { slidesPerView: 2.6, spaceBetween: 30 },
                1160: { slidesPerView: 3, spaceBetween: 30 },
                1550: { slidesPerView: 4, spaceBetween: 30 },
              }}
            >
              {cards.map((feature, index) => (
                <SwiperSlide key={index} className="!h-auto flex justify-start !w-[200px] ">
                  <div className="bg-white mx-auto h-full flex flex-col justify-start items-start rounded-xl p-4 shadow-2xl">
                    <img
                      src={feature.icon}
                      className="size-8 object-contain"
                      alt=""
                    />
                    <h3 className="text-[14px] mt-5 text-main-dark font-karla font-semibold leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-[13px] font-lora text-[#474646] leading-[18px] mt-5">
                      {feature.text}
                    </p>+
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex justify-start gap-4 mt-5 bg-white w-fit rounded-3xl p-1 md:mx-0 mx-auto">
              <button
                onClick={handlePrevClick}
                type="button"
                className="size-8 rounded-full bg-[#D9D9D9] hover:bg-[#D9D9D9]/90 flex items-center justify-center transition-all shadow-md focus:outline-none cursor-pointer"
                aria-label="Previous slide"
              >
                <ArrowLeft className="size-5 text-[#808080]" />
              </button>
              <button
                onClick={handleNextClick}
                type="button"
                className="size-8 rounded-full bg-main-dark hover:bg-main-dark/90 flex items-center justify-center transition-all shadow-md focus:outline-none cursor-pointer"
                aria-label="Next slide"
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
