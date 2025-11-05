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
                <div className="absolute hidden lg:block -top-8 -right-50 lg:-left-5 min-w-[650px] pointer-events-none">
                  <p className="text-8xl lg:text-[70px] font-karla font-bold -tracking-tighter text-gray-400/60 opacity-50">
                    Our Mission
                  </p>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-[20px] font-lora text-[#5E0B7B]">
                Empowering Your Business Through Technology.
              </h3>

              <p className="text-black text-sm sm:text-[15px] leading-5 font-lora">
                Our mission is to empower businesses every day. We achieve this by
                designing and developing custom-built technology solutions that
                are inherently scalable and secure. Our focus is not just on
                delivering a product, but on creating a partnership that drives
                efficiency, fuels growth, and ensures a tangible return on your
                investment.
              </p>

              <p className="text-black text-sm sm:text-[15px] leading-5 font-lora">
                To empower businesses with custom-built, scalable, and secure
                technology solutions that drive efficiency, growth, and a tangible
                return on investment.
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
              <div className="hidden lg:block absolute -top-8 -left-5 min-w-[650px] pointer-events-none">
                <p className="text-8xl lg:text-[70px] font-karla font-bold -tracking-tighter text-gray-400/60 opacity-50">
                  Our Vision
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-karla lg:text-[30px] font-semibold text-black">
                Our Vision
              </h2>

              <h3 className="text-lg sm:text-xl lg:text-[20px] font-lora text-[#5E0B7B]">
                Beyond Innovation, We Build the Trust
              </h3>

              <p className="text-black text-sm sm:text-[15px] leading-5 font-lora">
                Our vision is to create a future where our technology seamlessly
                enables the full potential of your people.
              </p>

              <p className="text-black text-sm sm:text-[15px] leading-5 font-lora">
                To be the most trusted technology partner for forward-thinking
                companies, creating a future where technology seamlessly enables
                human potential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;