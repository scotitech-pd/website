import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-[84vh] sm:h-auto py-20 sm:py-52 flex justify-center flex-col bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/home/herobg.png')", // replace with your image path
      }}
    >
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full">
        <p className="bg-main-dark font-semibold border-white border-[1px] text-white font-lora  px-3  py-2 rounded-lg w-fit my-5 min-[1200px]:my-7">
          ScotiTech Solution
        </p>

        <div className="text-4xl min-[1200px]:text-[55px] font-karla font-bold mb-5 min-[1200px]:leading-[57px]">
          <h2>Building Technology That</h2>
          <h2>Empowers People</h2>
        </div>

        <p className="text-xl mb-5 font-lora">
          Building the technology that transforms what you can do into what you
          will do
        </p>

        <div className="p-1.5 border border-white w-fit rounded-lg mb-8">
          <Link
            href="/contact"
            className="bg-white text-black cursor-pointer w-fit px-10 py-2 rounded-lg text-lg inline-block"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
