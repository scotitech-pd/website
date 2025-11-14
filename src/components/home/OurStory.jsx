import React from "react";

const OurStory = () => {
  return (
    <section className="relative bg-white text-black overflow-hidden py-15 sm:py-20">
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
            <h2 className="text-4xl font-bold mb-8 font-karla tracking-wider ">Our Story</h2>
            <h3 className="text-3xl font-semibold font-lora mb-3 sm:mb-6 tracking-wider">
              From a Solo Vision to <span className="text-main">Global</span>{" "}
              Impact
            </h3>
            <p className="text-lg leading-6.5 font-lora min-[1160px]:w-[80%] mx-auto text-justify sm:text-center">
              At <span className="text-main-dark font-semibold">ScotiTech</span>
              , the journey began with a vision and a simple belief:
              technology, should empower, not overwhelm. What started as a
              self-sponsored idea has grown into products that help teams and
              creators worldwide.
            </p>
          </div>

          {/* Right image */}
          <div className="relative font-lora ">
            <img
              src="/images/home/story.png"
              alt="Global Tech"
              className="rounded-xl shadow-lg min-[1186px]:max-w-full  min-[880px]:max-w-[780px]  mx-auto"
            />
            <div className="hidden min-[1225px]:flex absolute -top-10 left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-xl px-6 py-4 w-[90%] md:w-[80%] text-center border border-purple-100">
              <p className="text-black text-[15px] leading-6 tracking-wide">
                ScotiTech was built to cut through complexity, creating lean,
                simple tools that flip the script: people drive the technology,
                the technology doesn't drive them.
              </p>
            </div>
            <div className="min-[1186px]:hidden mt-3 flex shadow-[0_0_25px_rgba(128,128,128,0.9)] bg-white rounded-xl px-2 sm:px-6 py-4 max-w-[780px]  mx-auto text-center border border-purple-100">
              <p className="text-black text-lg leading-6">
                ScotiTech was built to cut through complexity, creating lean,
                simple tools that flip the script: people drive the technology,
                the technology doesn't drive them.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid min-[570px]:grid-cols-2 min-[1085px]:grid-cols-4  gap-6 min-[1333px]:gap-20 md:px-10 mt-8 min-[1570px]:w-[90%] mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-main-dark text-white/80 rounded-2xl shadow-lg mt-6 pt-4 pb-3 px-4 relative max-w-[500px] mx-auto"
            >
              <div className="absolute top-0 left-1/2  max-[1333px]:-translate-y-1/2 max-[1333px]:-translate-x-1/2 min-[1333px]:top-4 min-[1333px]:left-10  w-[90%] min-[1333px]:w-[100%] text-nowrap text-center bg-white text-main font-semibold rounded-full min-[1310px]:px-5 py-2 shadow-[0_0_25px_rgba(128,128,128,0.9)]">
                {card.title}
              </div>
              <p className="mt-4 min-[1333px]:mt-12 text-[14px] lg:py-2 text-center text-white font-lora leading-relaxed">
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
    title: "A Founder's Vision",
    text: "Our journey started with a vision to create tools that are intuitive and empowering, cutting through complexity to deliver real value.",
  },
  {
    title: "Empowering Future",
    text: "ScotiTech is dedicated to continuously innovating and developing technology that anticipates future challenges and empowers creators and leaders.",
  },
  {
    title: "Product Launches",
    text: "We are thrilled to announce our first product launch—an inaugural step toward delivering solutions that will shape the future of our industry.",
  },
  {
    title: "Going Global",
    text: "Our vision was always universal, and now our reach is too. We are delivering world-class solutions that transcend borders and empower communities everywhere.",
  },
];

export default OurStory;
