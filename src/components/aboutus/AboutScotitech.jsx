"use client";
import React, { useState } from "react";

const AboutScotiTech = () => {
  const [hoveredCard, setHoveredCard] = useState(1); // Default to middle card (50+ Countries)
  const [activeIndex, setActiveIndex] = useState(1);
  const cards = [
    {
      img1: "/images/aboutus/team-icon-white.png",
      img2: "/images/aboutus/team-icon.png",
      title: "50+ Team Members",
      subtitle: "Talented professionals across UK and India",
    },
    {
      img1: "/images/aboutus/globe-icon-white.png",
      img2: "/images/aboutus/globe-icon.png",
      title: "50+ Countries",
      subtitle: "Serving clients and users worldwide",
    },
    {
      img1: "/images/aboutus/users-icon-white.png",
      img2: "/images/aboutus/users-icon.png",
      title: "10,000+ Users",
      subtitle: "Trusted by businesses of all sizes",
    },
  ];

  return (
    <section className="relative flex justify-center bg-white py-12 px-4 lg:py-24 lg:px-[120px] overflow-hidden">
      {/* Decorative Background Pattern - Top Right */}
      <img
        src="/images/aboutus/pattern-lines.png"
        alt="Pattern lines behind the photo"
        className="absolute top-0 right-0 w-[20vw] min-[1650px]:hidden"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_40%] gap-8 lg:gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="relative max-w-[600px]">
            {/* Left Side - Content */}
            
            <div className="space-y-8 lg:space-y-0">
              {/* Header */}
              <div className="relative z-20 text-black">
                <div className="font-karla font-medium text-4xl  my-7 relative w-fit">
              <p className="text-[4.5rem] font-semibold text-black opacity-5 text-nowrap -z-0 w-fit absolute top-1/2 -left-24 transform -translate-y-1/2">
                About ScotiTech
              </p>
              <h2 className="relative z-10 font-bold">About ScotiTech</h2>
            </div>
                <h2 className="text-xl lg:text-[18px] pr-9 font-karla 2xl:text-[25px] font-bold text-black mb-4 lg:mb-6">
                  ScotiTech: Pioneering Technology Solutions for Global Business
                </h2>
                <p className="text-base lg:text-[15px] font-lora  text-black leading-relaxed">
                  We're a UK-based technology company with a global vision,
                  transforming how businesses leverage technology through
                  innovative products and solutions.
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

                        <h4 className="font-semibold text-black transition-colors duration-700">
                          {card.title}
                        </h4>

                        <p
                          className={`text-[13px] leading-[17px] mt-1 ${
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

          {/* RIGHT SIDE */}
          <div className="relative h-[100%]">
            <div className="absolute -bottom-[15px]  flex justify-center items-center flex-col left-1/2 transform -translate-x-1/2 shadow-[0_10px_25px_rgba(94,11,123,0.6)] bg-white rounded-2xl h-[90px] w-[200px] border-1 border-[#7E1A8E] z-2">
              <h2 className="text-[#9638E5] font-karla font-bold lg:text-[20px]">
                ScotiTech
              </h2>
              <p className="text-[#641171] font-karla text-center  font-semibold px-5 lg:text-[13px]">
                Global Reach, Pioneering Solutions
              </p>
            </div>
            <img src="/images/aboutus/hero-tech.png" alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutScotiTech;
