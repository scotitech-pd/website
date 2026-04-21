"use client";
import React, { useState, useEffect } from "react";

const AboutScotiTech = () => {
  const [hoveredCard, setHoveredCard] = useState(1);
  const [activeIndex, setActiveIndex] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
// Card data
  const cards = [
    {
      img1: "/images/aboutus/team-icon-white.png",
      img2: "/images/aboutus/team-icon.png",
      title: "Focused Team",
      subtitle: "A product-led team working across the UK and India.",
    },
    {
      img1: "/images/aboutus/globe-icon-white.png",
      img2: "/images/aboutus/globe-icon.png",
      title: "Cross-Region Delivery",
      subtitle: "Products shaped for teams, markets, and deployment models beyond one location.",
    },
    {
      img1: "/images/aboutus/users-icon-white.png",
      img2: "/images/aboutus/users-icon.png",
      title: "Real Product Direction",
      subtitle: "The company is being built around defined products, real rollout paths, and clearer commercial focus.",
    },
  ];

  // Auto slide for carousel (below 1300px)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cards.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ---------------- 1300PX AND ABOVE (ORIGINAL DESIGN) ---------------- */}
      <section className="relative justify-center bg-white py-12 lg:py-14 overflow-hidden min-[1300px]:flex hidden">
        <img
          src="/images/aboutus/pattern-lines.png"
          alt="Pattern lines behind the photo"
          className="absolute top-0 right-0 hidden min-[1300px]:flex w-[20vw] min-[1650px]:hidden"
        />

        <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 relative z-10">
          <div className="grid grid-cols-1 min-[1300px]:grid-cols-[55%_40%] gap-8 lg:gap-16 items-center">
            {/* LEFT SIDE */}
            <div className="relative max-w-[600px]">
              <div className="space-y-8 lg:space-y-0">
                {/* Header */}
                <div className="relative z-20 text-black">
                  <div className="font-karla font-medium text-4xl my-7 relative w-fit">
                    <p className="text-[4.5rem] font-karla   font-semibold text-nowrap text-black opacity-5 absolute -left-5 top-1/2 -translate-y-1/2">
                      About ScotiTech
                    </p>
                    <h2 className="relative z-10 font-bold text-4xl">About ScotiTech</h2>
                  </div>
                  <h2 className="text-xl lg:text-[18px] pr-9 font-karla 2xl:text-[25px] font-bold text-black mb-4 lg:mb-6">
                    ScotiTech Solutions Limited is a UK-based software company building practical, privacy-conscious digital products.
                  </h2>
                  <p className="text-base lg:text-[15px] font-lora text-black leading-relaxed">
                    Founded in Scotland, we build software that helps
                    organisations improve internal app distribution, bring core
                    daily tools into more controlled environments, and adopt
                    more trusted digital infrastructure through products like
                    AppDeploy, AXOS, and ClarityPath.
                  </p>
                </div>

                {/* Stats Cards */}
               <div className="relative lg:mt-10">
                {/* Background Container with Light Cyan */}
                <div className="rounded-3xl p-4 lg:p-2">
                  {/* Cards */}
                  <div
                    className="relative flex flex-col md:flex-row gap-7 justify-center w-[608px] min-[1500px]:w-[700px] -ml-10"
                    onMouseLeave={() => setActiveIndex(1)} // return to middle on leave
                  >
                    <div className="absolute bg-[#D2FAFF] h-[90%] w-[110%] rounded-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
                    {/* Moving highlight background */}
                    <div
                      className={`absolute min-[1500px]:hidden left-0 w-[184px] h-[110%] top-1/2 -translate-y-1/2 rounded-2xl transition-transform duration-500 ease-in-out`}
                      style={{
                        transform: `translateX(${activeIndex * (184 + 28)}px)`, // 224 = width (w-56), 20 = gap-5 (1.25rem * 16)
                        background: "#34939B",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                      }}
                    ></div>
                    <div
                      className={`hidden min-[1500px]:flex absolute  left-0 w-[214px] h-[110%] top-1/2 -translate-y-1/2 rounded-2xl transition-transform duration-500 ease-in-out`}
                      style={{
                        transform: `translateX(${activeIndex * (214 + 28)}px)`, // 224 = width (w-56), 20 = gap-5 (1.25rem * 16)
                        background: "#34939B",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                      }}
                    ></div>

                    {cards.map((card, index) => (
                      <div
                        key={index}
                        onMouseEnter={() => setActiveIndex(index)}
                        className="relative z-10 flex flex-col font-lora items-center text-center rounded-2xl py-6 px-3 w-56 cursor-pointer transition-all duration-700 min-[1500px]:w-[230px]"
                      >
                        {/* IMAGE CONTAINER */}
                        <div
                          className={`relative mb-3 w-[55%] aspect-square rounded-xl overflow-hidden transition-all duration-700 ${
                            activeIndex === index
                              ? "bg-[#15676E]"
                              : "bg-transparent"
                          }`}
                        >
                          {/* Default (inactive) image */}
                          <img
                            src={card.img2}
                            alt=""
                            className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[80%] h-[80%} object-contain transition-opacity duration-700 ease-in-out ${
                              activeIndex === index
                                ? "opacity-0 scale-95"
                                : "opacity-100 scale-100"
                            }`}
                          />

                          {/* Active (hovered) image */}
                          <img
                            src={card.img1}
                            alt=""
                            className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[80%] h-[80%} object-contain transition-opacity duration-700 ease-in-out ${
                              activeIndex === index
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95"
                            }`}
                          />
                        </div>

                        <h4 
                        className={`text-[16px] font-semibold font-karla  ${
                            activeIndex === index
                              ? "text-white"
                              : "text-[#3B3B3B]"
                          } transition-colors duration-700`}>

                          {card.title}
                        </h4>

                        <p
                          className={`text-[12px] leading-[17px] mt-1 ${
                            activeIndex === index
                              ? "text-white"
                              : "text-[#3B3B3B]"
                          } transition-colors duration-700`}
                        >
                          {card.subtitle}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </div>
            </div>

        
            <div className="relative h-[100%] hidden min-[1300px]:flex">
              <div className="h-fit">
                <img src="/images/aboutus/hero-tech.png" alt="" />
                <div className="absolute bottom-[40px] flex justify-center items-center flex-col left-1/2 transform -translate-x-1/2 shadow-[0_18px_40px_rgba(15,23,42,0.14)] bg-white rounded-2xl h-[90px] w-[200px] border border-slate-200">
                  <h2 className="text-[#0F172A] font-karla font-bold lg:text-[20px]">
                    ScotiTech
                  </h2>
                  <p className="text-[#15676E] font-karla text-center font-semibold px-5 lg:text-[13px]">
                    Practical software with clearer product focus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- BELOW 1300PX AUTO CAROUSEL ---------------- */}
      <section className="block min-[1300px]:hidden bg-white py-10 text-center relative overflow-hidden">
        <div className="px-5 mb-6">
          <h2 className="text-3xl font-karla font-bold text-main-dark mb-2">
            About ScotiTech
          </h2>
          <h3 className="text-lg font-karla font-semibold text-black mb-2">
            Practical software products with a clear operational focus
          </h3>
          <p className="text-[15px] text-gray-800 font-lora leading-relaxed mb-8">
            We are a UK-based software company building focused products for
            modern teams, with a clearer product story around internal
            distribution, private operational tooling, and supporting workflow
            software.
          </p>
        </div>

        {/* Auto Carousel */}
        <div className="relative flex justify-center items-center h-[260px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`absolute w-[80%] bg-[#D2FAFF] rounded-3xl shadow-xl p-8 text-center flex flex-col items-center transition-all duration-10 ease-in-out ${
                currentSlide === index
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-10 scale-95"
              }`}
            >
              <div className="bg-[#15676E] size-20 rounded-full flex items-center justify-center mb-4 shadow-md">
                <img
                  src={card.img1}
                  alt={card.title}
                  className="size-10 object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-black font-karla mb-1">
                {card.title}
              </h4>
              <p className="text-[14px] text-gray-700 font-lora leading-snug">
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`size-3 rounded-full transition-all ${
                currentSlide === index ? "bg-[#15676E]" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutScotiTech;
