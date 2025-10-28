import React from "react";

function Hero() {
  return (
    <>
      <div>
        <div className="w-full h-[200px] min-[1500px]:h-[950px] lg:h-[450px] bg-center bg-cover bg-no-repeat bg-[url('/images/contact/herobg-m.png')] overflow-hidden flex flex-col lg:flex-row justify-center items-center lg:items-center min-[1500px]:mx-auto">
          {/* Left Text Section */}
          <div className="flex flex-col justify-center items-center lg:items-start lg:mx-[200px]">
            <h2 className="text-white text-3xl font-bold font-karla lg:text-6xl">
              Contact Us
            </h2>
            <p className="text-white text-lg font-karla px-4 lg:px-0 text-center lg:py-5 lg:w-[450px] lg:text-left">
              Precision data, proven success. Together, we'll redefine what's
              possible.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="hidden lg:flex justify-end lg:mr-[150px]">
            <img
              src="/images/contact/herobrain.png"
              alt="Contact Hero"
              className="max-w-[500px] min-[1500px]:max-w-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
