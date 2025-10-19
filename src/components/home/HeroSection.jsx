import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-[93vh] flex justify-center flex-col px-10 md:px-20 bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/home/herobg.png')", // replace with your image path
      }}
    >
      <p className="bg-main-dark font-semibold border-white border-[1px] text-white font-lora  p-2 rounded-lg w-fit my-7">
        ScotiTech Solution
      </p>

      <div className="text-[50px] font-karla font-bold mb-5 leading-[57px]">
        <h2>Building Technology That</h2>
        <h2>Emplowers People</h2>
      </div>

      <p className="text-lg mb-5">
        Building the technology that transforms what you can do into what you
        will do
      </p>
      <div className="p-1.5 border border-white w-fit rounded-lg mb-8">
        <button className="bg-white text-black w-fit px-6 py-2 rounded-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
