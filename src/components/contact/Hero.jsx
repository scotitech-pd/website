import { ArrowRight } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <div className="relative w-full h-[400px] lg:h-[600px] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center overflow-hidden bg-[url('/images/contact/herobg-m.png')]">
      {/* Background Image for Mobile */}
      <img
        src="/images/contact/herobrain.png"
        alt="Contact Hero Background"
        className="absolute lg:hidden opacity-30 w-[350px] sm:w-[400px] max-w-full top-[100px] right-0 left-0 mx-auto"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 flex flex-col lg:flex-row justify-between items-center lg:items-center">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center w-full items-start text-left lg:items-start lg:text-left">
          <h2 className="text-white text-2xl font-bold font-karla lg:text-4xl max-[1040px]:text-3xl">
            Talk to ScotiTech
          </h2>

          <p className="text-white hidden lg:block text-lg font-lora mt-5 leading-7.5 max-[1040px]:text-2xl md:text-left">
            Whether you are exploring internal app distribution, private
            operational tooling, or a broader product fit conversation, our
            team can help you evaluate the right next step.
          </p>

          <p className="text-white lg:hidden text-sm font-lora mt-5 leading-6 max-[1040px]:text-base">
            Speak with our team about the product, rollout path, or commercial
            fit that best matches your needs.
          </p>

          {/* Button */}
          <a
            href="https://calendly.com/pradeepdahiya2411/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center lg:gap-2 gap-1 bg-white text-black lg:px-5 px-3 py-2.5 rounded-lg font-karla lg:text-[16px] font-semibold hover:bg-main-dark hover:text-white transition-all shadow-lg mt-6 sm:mt-8 w-fit text-[12px]"
          >
            Schedule a Call
            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
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
