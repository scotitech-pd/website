import React from "react";

const features1 = [
  {
    img: "/images/home/whyrocket.png",
    title: "Start Lean, Grow Fast",
    desc: "We focus on delivering value early and iterating with user feedback, so you always get tools that evolve with your needs.",
  },
  {
    img: "/images/home/whyaccessible.png",
    title: "Accessible & Affordable",
    desc: "Pricing and features designed to include, not exclude — powerful tools without enterprise-level costs.",
  },
];

const features2 = [
  {
    img: "/images/home/whydesign.png",
    title: "Designed for Clarity",
    desc: "Clean, intuitive user experiences that reduce friction and make adoption effortless.",
  },
  {
    img: "/images/home/whyprivacy.png",
    title: "Privacy & Trust",
    desc: "Built with compliance and responsible data practices at the core, so you can work with confidence.",
  },
];

export default function WhyChooseScotiTech() {
  return (
    <section className="relative text-white bg-black">
      {/* Background overlay */}
      {/* <div className="absolute bottom-0 w-full">
        <img
          src="/images/home/whybg.png" // replace with your actual background image
          alt="background"
          className="object-cover opacity-10"
        />
      </div> */}
      <button className="bg-white font-lora text-main-dark px-8 py-2 rounded-lg text-sm hover:bg-main/90 absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
        View Products
      </button>

      <div className="relative mx-auto grid gap-16 px-6 md:px-12   items-center">
        {/* Left Content */}
        <div className="space-y-6 py-20">
          <div className="relative font-lora mt-5">
            <p className="text-[6rem] font-semibold text-gray-100/10 text-nowrap -z-0 w-fit absolute -left-4  -top-1 transform -translate-y-1/2">
              Why Choose ScotiTech
            </p>
            <h2 className="text-4xl font-lora font-semibold text-white">
              Why Choose ScotiTech
            </h2>
          </div>
          <p className="text-lg text-white/60 max-w-2xl">
            We believe technology should remove barriers, not create them.
            That’s why our products are designed to be simple, scalable, and
            affordable — empowering businesses and{" "}
            <span className="text-purple-400">creators worldwide.</span>
          </p>

          <div className="grid grid-cols-[41%_48%] gap-24 mt-10 w-[60%] text-black">
            {features1.map((f, i) => (
              <div
                key={i}
                className={`relative bg-white backdrop-blur-md rounded-2xl p-6 border hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition`}
              >
                <div className="absolute size-28 right-0 top-1/2 bg-white border-main-dark border-8 rounded-full flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                  <img src={f.img} className="size-16" />
                </div>
                <div className="w-[80%]">
                  <h3 className="text-xl font-semibold font-karla">
                    {f.title}
                  </h3>
                  <p className=" mt-2 text-[13px] leading-3.5 text-black/80">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-[51%_40%] gap-20 mt-10 w-[60%] text-black">
            {features2.map((f, i) => (
              <div
                key={i}
                className={`relative bg-white backdrop-blur-md rounded-2xl p-6 border hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition`}
              >
                <div className="absolute size-28 right-0 top-1/2 bg-white border-main-dark border-8 rounded-full flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                  <img src={f.img} className="size-16" />
                </div>
                <div className="w-[80%]">
                  <h3 className="text-xl font-semibold font-karla">
                    {f.title}
                  </h3>
                  <p className=" mt-2 text-[13px] leading-3.5 text-black/80">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        src="/images/home/pic.png" // replace with your actual right side image
        alt="AI Tech Illustration"
        className="drop-shadow-[0_0_40px_rgba(168,85,247,0.6)] animate-pulse-slow absolute bottom-0 right-0 w-[35%]"
      />
    </section>
  );
}
