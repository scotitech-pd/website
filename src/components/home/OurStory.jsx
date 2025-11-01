import React from "react";

const OurStory = () => {
  return (
    <section className="relative bg-white text-black overflow-hidden pt-20 px-8 sm:px-0">
      {/* Background shape */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-gray-100 to-transparent -z-10 clip-path-polygon"></div> */}
        <img src="/images/home/Timg.png" alt="bg" className="left-0 absolute w-[50%] top-16"/>
      
      {/* Content wrapper */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center text-center px-10">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-8 font-lora  ">Our Story</h2>
          <h3 className="text-3xl font-semibold font-karla mb-6">
            From a Solo Vision to{" "}
            <span className="text-main">Global</span> Impact
          </h3>
          <p className="text-lg leading-6 mb-8 font-lora w-[90%] mx-auto">
            At <span className="text-main-dark font-semibold">ScotiTech</span>,
            the journey began with a single founder and a simple belief:
            technology should empower, not overwhelm. What started as a
            self-sponsored idea has grown into products that help teams and
            creators worldwide.
          </p>
        </div>

        {/* Right image */}
        <div className="relative hidden min-[610px]:flex mb-20">
          <img
            src="/images/home/story.png"
            alt="Global Tech"
            className="rounded-xl shadow-lg"
          />
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-xl px-6 py-4 w-[90%] md:w-[80%] text-center border border-purple-100">
            <p className="text-gray-800 text-lg leading-relaxed">
              ScotiTech was built to cut through complexity, creating lean,
              simple tools that flip the script: people drive the technology,
              the technology doesn't drive them.
            </p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 md:gap-20 w-[87%] mx-auto max-w-[1300px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-main-dark text-white/80 rounded-2xl shadow-lg py-6 px-4 relative"
          >
            <div className="absolute top-4 w-[100%] min-[1500px]:w-[90%] text-nowrap text-center -right-10 bg-white text-main font-semibold rounded-full min-[1310px]:px-5 py-2 shadow-[0_0_25px_rgba(128,128,128,0.9)]">
              {card.title}
            </div>
            <p className="mt-12 text-[13px] leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const cards = [
  {
    title: "A Founder's Vision",
    text: "Our journey started with a single founder's vision to create tools that are intuitive and empowering, cutting through complexity to deliver real value.",
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
