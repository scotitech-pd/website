import React from "react";

function Hero() {
  return (
    <div className="relative w-full h-[600px] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center overflow-hidden bg-[url('/images/contact/herobg-m.png')]">
      
      {/* Background Image for Mobile */}
      <img
        src="/images/contact/herobrain.png"
        alt="Contact Hero Background"
        className="absolute lg:hidden opacity-30 w-[350px] sm:w-[400px] max-w-full top-[100px] right-0 left-0 mx-auto"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 flex flex-col lg:flex-row justify-between items-center lg:items-center">
        
        {/* Left Text Section */}
        <div className="flex flex-col justify-center w-full items-center lg:items-start text-center min-[501px]:text-center max-[500px]:text-left">
          <h2 className="text-white text-4xl font-bold font-karla lg:text-6xl max-[1040px]:text-5xl min-[501px]:text-center max-[500px]:text-left max-[540px]:w-full">
            Contact Us
          </h2>
          <p className="text-white text-lg font-lora mt-5 leading-7.5 lg:w-[450px] max-[1040px]:text-2xl  md:text-left" >
            Precision data, proven success. Together, we'll redefine what's possible.
          </p>
        </div>

        {/* Right Image Section for Desktop */}
        <div className="hidden lg:flex relative justify-end">
          <img
            src="/images/contact/herobrain.png"
            alt="Contact Hero"
            className="max-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
