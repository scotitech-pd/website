import React from "react";

const OurStory = () => {
  return (
    <section className="relative bg-white text-black overflow-hidden py-16 sm:py-20">
      {/* Background shape */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-gray-100 to-transparent -z-10 clip-path-polygon"></div> */}
      <img
        src="/images/home/timg.png"
        alt="bg"
        className="left-0 absolute w-[50%] top-16"
      />

      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        {/* Content wrapper */}
        <div className="grid min-[1186px]:grid-cols-2 gap-10 items-center justify-center text-center ">
          {/* Left Content */}
          <div className="">
            <h2 className="text-4xl font-bold mb-6 font-karla">Our Story</h2>
            <h3 className="text-3xl font-semibold font-lora mb-4 sm:mb-6">
              A focused software company built around real operational needs
            </h3>
            <p className="text-lg leading-7 font-lora min-[1160px]:w-[80%] mx-auto text-justify sm:text-center text-black/80">
              <span className="text-main-dark font-semibold">ScotiTech </span>
              started with a simple goal: build practical software that solves
              real problems without inflated platform claims. Today the company
              is focused on a tighter product story built around internal app
              distribution, private operational tooling, and a small set of
              supporting workflow products.
            </p>
          </div>

          {/* Right image */}
          <div className="relative font-lora ">
            <img
              src="/images/home/story.png"
              alt="Global Tech"
              className="rounded-xl shadow-lg min-[1186px]:max-w-full  min-[880px]:max-w-[780px]  mx-auto"
            />
            <div className="hidden min-[1225px]:flex absolute -top-10 left-1/2 -translate-x-1/2 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.1)] rounded-xl px-6 py-4 w-[90%] md:w-[80%] text-center border border-gray-200">
              <p className="text-black text-[15px] leading-6">
                ScotiTech is being shaped around focused products, clearer
                rollout paths, and more credible software for everyday work.
              </p>
            </div>
            <div className="min-[1186px]:hidden mt-3 flex shadow-[0_18px_40px_rgba(15,23,42,0.1)] bg-white rounded-xl px-2 sm:px-6 py-4 max-w-[780px]  mx-auto text-center border border-gray-200">
              <p className="text-black text-lg leading-6">
                ScotiTech is being shaped around focused products, clearer
                rollout paths, and more credible software for everyday work.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid min-[570px]:grid-cols-2 min-[1085px]:grid-cols-3 gap-6 min-[1333px]:gap-16 md:px-10 mt-8 min-[1570px]:w-[82%] mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-main-dark text-white/80 rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.12)] mt-6 pt-4 pb-4 px-4 relative max-w-[500px] mx-auto"
            >
              <div className="absolute top-0 left-1/2  max-[1333px]:-translate-y-1/2 max-[1333px]:-translate-x-1/2 min-[1333px]:top-4 min-[1333px]:left-10  w-[90%] min-[1333px]:w-[100%] text-nowrap text-center bg-white text-main font-semibold rounded-full min-[1310px]:px-5 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
                {card.title}
              </div>
              <p className="mt-4 min-[1333px]:mt-12 text-[14px] lg:py-2 text-center text-white/90 font-lora leading-6">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const cards = [
  {
    title: "Founder-Led Direction",
    text: "The company is still shaped closely around product focus, buyer clarity, and practical execution.",
  },
  {
    title: "Focused Product Scope",
    text: "ScotiTech is concentrating on a small set of products with clearer roles instead of trying to look like a broad platform company.",
  },
  {
    title: "Practical Rollout Thinking",
    text: "Each product is being positioned with more disciplined onboarding, delivery, and commercial expectations.",
  },
];

export default OurStory;
