// components/FeaturesCarousel.jsx
"use client";
import React, { useRef, useState } from "react";

// Import Swiper React components and modules
// In your project, install: npm install swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";

const FeaturesCarousel = () => {
  const swiperRef = useRef(null);



  const features = [
    {
      title: "Instant AI Caption Generation",
      icon: "/images/products/aicaptionstudio/instant.png",
      description:
        "Upload an image or describe a topic, and our AI generates a variety of engaging captions tailored to your needs—from witty to professional.",
      gradient: "from-[#E9A74E] to-[#835E2C]",
      showButtons: true,
    },
    {
      title: "Content Scheduler Integration (Premium)",
      icon: "/images/products/aicaptionstudio/integration.png",
      description:
        "Plan and schedule your posts directly from the app, creating a seamless workflow from idea to publication.",
      gradient: "from-[#F58356] to-[#8F4C32]",
      showButtons: true,
    },
    {
      title: "Smart Hashtag Recommendations",
      icon: "/images/products/aicaptionstudio/smart.png",
      description:
        "Get suggestions for trending, relevant, and niche hashtags to ensure your content reaches the right audience and maximizes engagement.",
      gradient: "from-[#F58356] to-[#8F4C32]",
      showButtons: false,
    },
    {
      title: "Content Repurposing Tools",
      icon: "/images/products/aicaptionstudio/content.png",
      description:
        "Turn blog posts, video scripts, or key points into perfectly sized, platform-optimized social media updates.",
      gradient: "from-[#EB4F5B] to-[#852D33]",
      showButtons: false,
    },
    {
      title: "Tone & Style Customization",
      icon: "/images/products/aicaptionstudio/tone.png",
      description:
        "Select from tones like 'Inspirational', 'Humorous', 'Professional', or 'Casual' to maintain perfect brand consistency.",
      gradient: "from-[#548BC3] to-[#28425D]",
      showButtons: false,
    },
  ];

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
    <div className="w-full bg-gray-50 py-16 overflow-hidden my-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}

        <div className="relative  mb-12 px-16">
          <div className=" absolute  -top-6  left-14 min-w-[650px]  pointer-events-none">
            <p className="text-8xl lg:text-[70px] font-karla font-bold -tracking-tighter  text-gray-900/10 opacity-50">
              Key Features
            </p>
          </div>
          <h2 className="text-4xl font-bold -tracking-tighter text-[#641171]">
            Key Features
          </h2>
        </div>

        {/* Carousel Container with left margin, right edge hugging */}
        <div className="relative h-[490px] pt-10 pl-0 md:pl-8 lg:pl-5">
          <div className="absolute w-[100%]  left-[350px]">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Autoplay, Keyboard]}
              loop={true}
              slidesPerGroup={1} // ✅ Move 1 card per slide
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={false}
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
              {features.map((feature, index) => (
                <SwiperSlide
                  key={index}
                  className="!h-auto flex justify-start w-[250px]"
                >
                  <div
                    className={`relative bg-gradient-to-r ${feature.gradient}  rounded-xl p-1 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col mx-auto`}
                  >
                    {/* Heading Card - Absolute positioned at top */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-xl px-2 py-3 shadow-lg z-20 min-w-[95%]">
                      <h3 className="lg:text-[16px] font-karla font-bold text-center text-black leading-tight">
                        {feature.title}
                      </h3>
                    </div>

                    {/* Icon Circle - Centered vertically in upper portion */}
                    <div className="absolute top-30 left-1/2 transform -translate-x-1/2 bg-white rounded-xl w-15 h-15 flex items-center justify-center shadow-lg z-10">
                      <img
                        src={feature.icon}
                        alt=""
                        className="w-6 h-6 object-contain"
                      />
                    </div>

                    {/* Main Description Card - Takes remaining space */}
                    <div className="mt-[50px] bg-white  px-2 pt-34 pb-10 shadow-lg flex-grow flex flex-col justify-center">
                      <p className="text-base font-lora text-black text-center leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
            {/* Navigation Buttons - Centered below carousel */}
            <div className=" absolute bottom-0 left-0 flex justify-start gap-2 mt-8">
              <button
                onClick={handlePrevClick}
                type="button"
                className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 active:scale-95"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNextClick}
                type="button"
                className="w-12 h-12 rounded-full bg-purple-700 hover:bg-purple-800 flex items-center justify-center transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 active:scale-95"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCarousel;
