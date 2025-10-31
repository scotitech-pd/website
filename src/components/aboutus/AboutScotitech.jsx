"use client";
import React, { useState } from "react";

const AboutScotiTech = () => {
  const [hoveredCard, setHoveredCard] = useState(1); // Default to middle card (50+ Countries)

  return (
    <section className="relative  flex justify-center min-h-[90vh] bg-white py-12 px-4 lg:py-20 lg:px-[120px] overflow-hidden">
      {/* Decorative Background Pattern - Top Right */}
      <div className="absolute top-0 -right-20 w-64 h-64 lg:w-96 lg:h-96  z-0">
        <img
          src="/images/aboutus/pattern-lines.png"
          alt="Pattern lines behind the photo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ">
          {/* LEFT SIDE */}
          <div className="relative">
            {/* Left Side - Content */}
            <div className="absolute top-8 lg:-top-4 left-4 lg:-left-0 pointer-events-none z-0">
              <h2 className="text-6xl  font-karla sm:text-7xl md:text-8xl lg:text-6xl font-bold text-gray-200/60 leading-none whitespace-nowrap">
                About ScotiTech
              </h2>
            </div>
            <div className="space-y-8 lg:space-y-12">
              {/* Header */}
              <div className="relative z-20">
                <h2 className="text-4xl font-karla lg:text-[45px] 2xl:text-6xl font-bold text-black mb-6 lg:mb-8">
                  About ScotiTech
                </h2>
                <h2 className="text-xl lg:text-[20px] pr-9 font-karla 2xl:text-3xl font-bold text-black mb-4 lg:mb-6">
                  ScotiTech: Pioneering Technology Solutions for Global Business
                </h2>
                <p className="text-base lg:text-[15px] font-lora  text-black leading-relaxed">
                  We're a UK-based technology company with a global vision,
                  transforming how businesses leverage technology through
                  innovative products and solutions.
                </p>
              </div>

              {/* Stats Cards */}
             <div className="relative">
                {/* Background Container with Light Cyan */}
                <div className="bg-cyan-50/60 rounded-3xl p-4 lg:p-2">
                  <div className="grid grid-cols-3 gap-0">
                    {/* Card 1 - 50+ Team Members */}
                    <div
                      onMouseEnter={() => setHoveredCard(0)}
                      className="relative cursor-pointer transition-all duration-500"
                    >
                      <div
                        className={`
                      relative z-10 flex flex-col items-center justify-center p-4 lg:p-4 rounded-2xl transition-all duration-500
                      ${
                        hoveredCard === 0
                          ? "bg-gradient-to-br from-teal-500 to-teal-600 text-white scale-105 shadow-2xl"
                          : "bg-white text-gray-900"
                      }
                    `}
                      >
                        <div
                          className={`
                        w-10 h-12 lg:w-[26px] lg:h-[15px] rounded-full flex items-center justify-center mb-3 lg:mb-4 transition-colors duration-500
                        ${hoveredCard === 0 ? "bg-white/20" : "bg-teal-50"}
                      `}
                        >
                          {hoveredCard === 0 ? (
                            <img
                              src="/images/aboutus/team-icon-white.png"
                              alt="Team"
                              className="w-6 h-6 lg:w-8 lg:h-8 transition-opacity duration-500"
                            />
                          ) : (
                            <img
                              src="/images/aboutus/team-icon.png"
                              alt="Team"
                              className="w-6 h-6 lg:w-8 lg:h-8 transition-opacity duration-500"
                            />
                          )}
                        </div>
                        <h3 className="text-base lg:text-[15px] font-bold mb-1 lg:mb-2 text-center">
                          50+ Team Members
                        </h3>
                        <p
                          className={`text-xs lg:text-[13px] text-center transition-colors duration-500 ${
                            hoveredCard === 0
                              ? "text-white/90"
                              : "text-gray-600"
                          }`}
                        >
                          Talented professionals across UK and Indian
                        </p>
                      </div>
                    </div>

                    {/* Card 2 - 50+ Countries (Default Active) */}
                    <div
                      onMouseEnter={() => setHoveredCard(1)}
                      className="relative cursor-pointer transition-all duration-500"
                    >
                      <div
                        className={`
                      relative z-10 flex flex-col items-center justify-center p-4 lg:p-8 rounded-2xl transition-all duration-500
                      ${
                        hoveredCard === 1
                          ? "bg-gradient-to-br from-teal-500 to-teal-600 text-white scale-105 shadow-2xl"
                          : "bg-white text-gray-900"
                      }
                    `}
                      >
                        <div
                          className={`
                        w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-3 lg:mb-4 transition-colors duration-500
                        ${hoveredCard === 1 ? "bg-white/20" : "bg-teal-50"}
                      `}
                        >
                          {hoveredCard === 1 ? (
                            <img
                              src="/images/aboutus/globe-icon-white.png"
                              alt="Countries"
                              className="w-6 h-6 lg:w-8 lg:h-8 transition-opacity duration-500"
                            />
                          ) : (
                            <img
                              src="/images/aboutus/globe-icon.png"
                              alt="Countries"
                              className="w-6 h-6 lg:w-8 lg:h-8 transition-opacity duration-500"
                            />
                          )}
                        </div>
                        <h3 className="text-base lg:text-[15px] font-bold mb-1 lg:mb-2 text-center">
                          50+ Countries
                        </h3>
                        <p
                          className={`text-xs lg:text-[13px] text-center transition-colors duration-500 ${
                            hoveredCard === 1
                              ? "text-white/90"
                              : "text-gray-600"
                          }`}
                        >
                          serving clients and users worldwide
                        </p>
                      </div>
                    </div>

                    {/* Card 3 - 10,000+ Users */}
                    <div
                      onMouseEnter={() => setHoveredCard(2)}
                      className="relative cursor-pointer transition-all duration-500"
                    >
                      <div
                        className={`
                      relative z-10 flex flex-col items-center justify-center p-4 lg:p-8 rounded-2xl transition-all duration-500
                      ${
                        hoveredCard === 2
                          ? "bg-gradient-to-br from-teal-500 to-teal-600 text-white scale-105 shadow-2xl"
                          : "bg-white text-gray-900"
                      }
                    `}
                      >
                        <div
                          className={`
                        w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-3 lg:mb-4 transition-colors duration-500
                        ${hoveredCard === 2 ? "bg-white/20" : "bg-teal-50"}
                      `}
                        >
                          {hoveredCard === 2 ? (
                            <img
                              src="/images/aboutus/users-icon-white.png"
                              alt="Users"
                              className="w-6 h-6 lg:w-8 lg:h-8 transition-opacity duration-500"
                            />
                          ) : (
                            <img
                              src="/images/aboutus/users-icon.png"
                              alt="Users"
                              className="w-6 h-6 lg:w-8 lg:h-8 transition-opacity duration-500"
                            />
                          )}
                        </div>
                        <h3 className="text-base lg:text-[15px] font-bold mb-1 lg:mb-2 text-center">
                          10,000+ Users
                        </h3>
                        <p
                          className={`text-xs lg:text-[13px] text-center transition-colors duration-500 ${
                            hoveredCard === 2
                              ? "text-white/90"
                              : "text-gray-600"
                          }`}
                        >
                          Trusted by businesses of all sizes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="absolute -bottom-[15px]  flex justify-center items-center flex-col left-1/2 transform -translate-x-1/2 shadow-[0_10px_25px_rgba(94,11,123,0.6)] bg-white rounded-2xl h-[90px] w-[200px] border-1 border-[#7E1A8E] z-2">
              <h2 className="text-[#9638E5] font-karla font-bold lg:text-[20px]">
                ScotiTech
              </h2>
              <p className="text-[#641171] font-karla text-center  font-semibold px-5 lg:text-[13px]">
                Global Reach, Pioneering Solutions
              </p>
            </div>
            <div className="absolute top-0 `">
              <img src="/images/aboutus/hero-tech.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutScotiTech;
