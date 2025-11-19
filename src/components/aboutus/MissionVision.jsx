import React from "react";

const MissionVision = () => {
  return (
    <div>
      <section className="relative bg-white py-7 overflow-hidden lg:w-[100%]">
        <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
          {/* Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-[90px] ">
            {/* Left Content */}
            <div className="space-y-5 text-center lg:text-left lg:pl-[100px]  relative">
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl font-karla lg:text-[30px] font-semibold text-black">
                  Our Mission
                </h2>
                <div className="absolute hidden lg:block -top-8 -right-50 lg:-left-1 min-w-[650px] pointer-events-none">
                  <p className="text-8xl lg:text-[70px] font-karla font-bold -tracking-tighter text-gray-400/60 opacity-50">
                    Our Mission
                  </p>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-[20px] font-lora text-[#5E0B7B]">
                Empowering Your Business Through Technology.
              </h3>

              <p className="text-black text-sm sm:text-[15px] leading-5 font-lora">
                Empowering organisations through trusted digital innovation. We
                design products that simplify complex digital challenges — from
                secure app deployment to private cloud infrastructure. Our
                mission is to build technology that is transparent, sustainable,
                and built for long-term digital trust.
              </p>
            </div>

            {/* Right Image Section */}
            <div className="relative flex h-full justify-center lg:justify-end mt-8 lg:mt-0 px-5 sm:px-8 lg:pr-10 lg:px-0">
              {/* Main Image in Circle */}
              <div className="transition-transform duration-300 hover:scale-105">
                <img
                  src="/images/aboutus/teamphoto.png"
                  alt="Team working"
                  className="w-full max-w-[300px] sm:max-w-[400px] lg:w-[500px]"
                />
              </div>
            </div>
          </div>

          {/* vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 max-w-[100%] mx-auto mb-10">
            {/* Left Content - Image (appears second on mobile) */}
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1 px-5 sm:px-8 lg:pl-10 lg:px-0">
              {/* Main Image in Circle */}
              <div className="transition-transform duration-300 hover:scale-105">
                <img
                  src="/images/aboutus/teamphoto2.png"
                  alt="Team working"
                  className="w-full max-w-[300px] sm:max-w-[400px] lg:w-[500px]"
                />
              </div>
            </div>

            {/* Right Content - Text (appears first on mobile) */}
            <div className="space-y-5 text-center lg:text-left px-5 sm:px-8 lg:pr-[100px] lg:px-0 relative order-1 lg:order-2">
              <div className="hidden lg:block absolute -top-8 -left-1 min-w-[650px] pointer-events-none">
                <p className="text-8xl lg:text-[70px] font-karla font-bold -tracking-tighter text-gray-400/60 opacity-50">
                  Our Vision
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-karla lg:text-[30px] font-semibold text-black">
                Our Vision
              </h2>

              <h3 className="text-lg sm:text-xl lg:text-[20px] font-lora text-[#5E0B7B]">
                Beyond Innovation, We Build Trust
              </h3>

              <p className="text-black text-sm sm:text-[15px] leading-5 font-lora">
                A future where secure, ethical technology is accessible to every
                organisation. We aim to become a leading UK–India connector for
                digital innovation — helping SMEs, enterprises, and communities
                adopt reliable tools that empower growth while protecting
                privacy. .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
