import React from "react";

const BeyondBusiness = () => {
  const contactCards = [
    {
      id: 1,
      bg: "#e4ebec",
      title: "Empowering Independence",
      text: "From daily tools to digital literacy, empowers shininess to thrive.",
      icon: "/images/contact/handshake-icon.png",
    },
    {
      id: 2,
      bg: "#e4ebec",
      title: "Compassionate Companionship",
      text: "Meaningful conversations, shared moments, and emotional support for well-being.",
      icon: "/images/contact/handshake-icon.png",
    },
    {
      id: 3,
      bg: "#e4ebec",
      title: "Community Driven Care",
      text: "Bringing elders and caregivers together to build a sense of belonging and trust.",
      icon: "/images/contact/handshake-icon.png",
    },
  ];

  return (
    <section className="relative  py-12 px-4 lg:py-20 lg:px-[60px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/contact/bb_bg.png"
          alt="background image of dark blue color"
          className="w-full h-full object-cover -z-10"
        />
      </div>

      <div className="max-w-7xl mx-auto lg:px-24">
        {/* Header Section */}
        <div className="relative max-w-7xl text-white mb-8 lg:mb-12">
          <h1 className="text-3xl lg:text-[35px] text-[#b5ddff] font-karla font-bold mb-4 lg:mb-2">
            Beyond Business: A Heart for Every Generation
          </h1>
          <p className="text-base font-karla lg:text-[17px] max-w-4xl lg:mx-0 mx-auto">
            While ScotiTech build the future of digital experience, our
            compliment social impact shine brought through{" "}
            <span className="text-purple-300 font-semibold">ElderConect+</span>
          </p>
        </div>
        <div className="relative ">
          <div className="absolute -top-20 -left-[390px]   ">
            <img src="/images/contact/bb_blush.png" alt="" className=" " />
          </div>
        </div>

        {/* Main Content Card */}
        <div className="relative   mb-8 lg:mb-12">
          {/* Main Image - Full Width */}
          <div className="relative w-full h-[400px] lg:h-full ">
            <img
              src="/images/contact/elderly-care.png"
              alt="Elderly Care"
              className="w-[85%] min-[1190px]:w-[90%] min-[1330px]:w-full h-full object-contain"
            />

            {/* Overlay Text Box - Bottom Left on Desktop, Centered on Mobile */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] max-w-md lg:left-12 lg:translate-x-0 lg:bottom-12 lg:max-w-lg bg-black/50 backdrop-blur-md rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl lg:text-[18px] font-bold text-white mb-3 lg:mb-4">
                ElderConnect: Bridging Gaps, Building Joy.
              </h3>
              <p className="text-sm lg:text-[12px] text-gray-200 leading-relaxed">
                At ScotiTech we believe technology should empower everyone are
                Through our ElerConnect+ app, are revolution vibrant
                communities, can communities and ensuring live stomached,
                independent, and fulfilling lives.
              </p>
            </div>

            {/* Feature Cards - Positioned on Right Side (Desktop) / Below (Mobile) */}
            <div className="hidden  lg:block absolute top-1/2 left-[600px] min-[1150px]:left-[680px] min-[1330px]:left-[770px] min-[1454px]:left-[850px]  min-[1560px]:left-[900px]  -translate-y-1/2 w-[290px] min-[1190px]:w-[340px] min-[1260px]:w-[400px]  space-y-5">
              {contactCards.map((card) => (
                <div
                  key={card.id}
                  className={`bg-[${card.bg}] backdrop-blur-sm rounded-2xl gap-2 flex items-center shadow-xl`}
                >
                  <div className="bg-white p-2 min-[1190px]:p-5 rounded-xl flex-shrink-0 hover:shadow-2xl transition-all hover:scale-105">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="size-10"
                    />
                  </div>
                  <div className="py-1 min-[1190px]:py-2">
                    <h4 className="text-[13px] min-[1190px]:text-[15px] font-bold text-purple-900 min-[1190px]:mb-1">
                      {card.title}
                    </h4>
                    <p className="text-[11px] min-[1190px]:text-[12px] text-gray-700">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Cards - Mobile Version (Below Image) */}
          <div className="lg:hidden p-6 space-y-4">
            {/* Card 1 - Compassionate Companionship */}
            <div className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-lg">
              <div className="bg-blue-50 p-3 rounded-xl flex-shrink-0">
                <img
                  src="/images/contact/handshake-icon.png"
                  alt="Handshake"
                  className="w-10 h-10"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-purple-900 mb-2">
                  Compassionate Companionship
                </h4>
                <p className="text-sm text-gray-700">
                  More than just assistance, we bring genuine human connection.
                </p>
              </div>
            </div>

            {/* Card 2 - Empowering Independence */}
            <div className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-lg">
              <div className="bg-purple-50 p-3 rounded-xl flex-shrink-0">
                <img
                  src="/images/contact/independence-icon.png"
                  alt="Independence"
                  className="w-10 h-10"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-purple-900 mb-2">
                  Empowering Independence:
                </h4>
                <p className="text-sm text-gray-700">
                  From daily tools to digital literacy, empowering shininess to
                  thrive.
                </p>
              </div>
            </div>

            {/* Card 3 - Community Driven Care */}
            <div className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-lg">
              <div className="bg-teal-50 p-3 rounded-xl flex-shrink-0">
                <img
                  src="/images/contact/heart-icon.png"
                  alt="Heart"
                  className="w-10 h-10"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-purple-900 mb-2">
                  Community. Driven Care:
                </h4>
                <p className="text-sm text-gray-700">
                  Simple grace stirs muses, built for handful impact
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center lg:text-left text-white mb-8 lg:mb-12 max-w-3xl mx-auto lg:mx-0">
          <p className="text-lg lg:text-md leading-relaxed font-lora mb-6 lg:mb-8">
            "At ElderConnect+, we believe that no should feel left behind. Our
            Goal to empower live independent while still feeling connected the
            world around. we're just the service-community"
          </p>
        </div>

        {/* Bottom Section - Author & CTAs */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 max-w-5xl mx-auto lg:mx-0">
          {/* Author Info */}
          <div className="flex items-center gap-4 text-white">
            <div className="w-16 h-16 lg:w-20 lg:h-20  rounded-full overflow-hidden border-4 border-white/30 flex-shrink-0">
              <img
                src="/images/contact/daniel-avatar.png"
                alt="Daniel Chapman"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-md lg:text-[16px] xxl:!text-[20px] font-karla font-semibold text-[#98F9FF]">
                - Daniel Chapman, Director and Co-founder
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col  sm:flex-row gap-4 lg:ml-8 w-full lg:w-auto ">
            <button className="bg-white cursor-pointer text-purple-900 px-6 lg:px-4 py-3 rounded-full font-semibold text-sm lg:text-[13px] hover:bg-purple-50 transition-colors shadow-[0_0_15px_3px_rgba(180,100,255,1)] hover:shadow-xl whitespace-nowrap">
              Learn More About ElderConnect
            </button>
            <button className="bg-purple-100 animate-bounce cursor-pointer text-purple-900 px-6 lg:px-4 py-3 rounded-full font-semibold text-sm lg:text-[13px] hover:bg-purple-200 transition-colors shadow-[0_0_15px_3px_rgba(180,100,255,1)] hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap">
              <img
                src="/images/contact/download-icon.png"
                alt="Download"
                className="w-5 h-5"
              />
              Download the ElderConnect+ App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondBusiness;
