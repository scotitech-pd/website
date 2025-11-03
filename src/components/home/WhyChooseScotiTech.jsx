import React from "react";

const features1 = [
  {
    img: "/images/home/whyaccessible.png",
    title: "Accessible & Affordable",
    desc: "Pricing & features designed to include, not exclude powerful tools without enterprise-level costs.",
  },
  {
    img: "/images/home/whyrocket.png",
    title: "Start Lean, Grow Fast",
    desc: "We focus on delivering value early and iterating with user feedback, so you always get tools that evolve with your needs.",
  },
];

const features2 = [
  {
    img: "/images/home/whyprivacy.png",
    title: "Privacy & Trust",
    desc: "Built with compliance and responsible data practices at the core, so you can work with confidence.",
  },
  {
    img: "/images/home/whydesign.png",
    title: "Designed for Clarity",
    desc: "Clean, intuitive user experiences that reduce friction and make adoption effortless.",
  },
];

export default function WhyChooseScotiTech() {
  return (
    <section className="relative text-white bg-black ">
      {/* Background overlay */}
      {/* <div className="absolute bottom-0 w-full">
        <img
          src="/images/home/whybg.png" // replace with your actual background image
          alt="background"
          className="object-cover opacity-10"
        />
      </div> */}
      <button className="bg-white font-lora text-main-dark px-8 py-2 rounded-lg text-sm hover:bg-main/90 absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
        Get in touch
      </button>

      <div className="relative grid gap-16 items-center max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full">
        {/* Left Content */}
        <div className="space-y-6 py-10 sm:py-20">
          <div className="relative  mt-5">
            <p className="hidden font-karla min-[1100px]:flex text-[6rem] font-semibold text-gray-100/10 text-nowrap -z-0 w-fit absolute -left-4  -top-1 transform -translate-y-1/2">
              Why Choose ScotiTech
            </p>
            <h2 className="text-4xl font-karla font-semibold text-white">
              Why Choose ScotiTech
            </h2>
          </div>
          <p className="text-lg text-white max-w-2xl font-lora" >
            We believe technology should remove barriers, not create them.
            That’s why our products are designed to be simple, scalable, and
            affordable — empowering businesses and{" "}
            <span className="text-purple-400">creators worldwide.</span>
          </p>

          <div className="grid grid-cols-1 min-[600px]:grid-cols-[41%_48%] mt-5 sm:mt-10 gap-8 min-[900px]:gap-20 w-[100%] min-[900px]:w-[90%] min-[1080px]:w-[60%] text-black">
            {features1.map((f, i) => (
              <div
                key={i}
                className={`relative bg-white backdrop-blur-md rounded-2xl p-6 border hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition`}
              >
                <div className="flex min-[900px]:hidden mb-2 size-20 bg-white border-main-dark border-8 rounded-full items-center justify-center">
                  <img src={f.img} className="size-12" />
                </div>
                <div className="hidden min-[900px]:flex absolute size-28 right-0 top-1/2 bg-white border-main-dark border-8 rounded-full items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                  <img src={f.img} className="size-16" />
                </div>
                <div className="min-[900px]:w-[90%]">
                  <h3 className="text-[22px] font-semibold font-karla">
                    {f.title}
                  </h3>
                  <p className=" mt-2 text-[16px] font-lora leading-4.5 text-black pr-2">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 min-[600px]:grid-cols-[48%_41%] mt-8 gap-8 min-[900px]:gap-20 w-[100%] min-[900px]:w-[90%] min-[1080px]:w-[60%] text-black">
            {features2.map((f, i) => (
              <div
                key={i}
                className={`relative bg-white backdrop-blur-md rounded-2xl p-6 border hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition`}
              >
                <div className="flex min-[900px]:hidden mb-2 size-20 bg-white border-main-dark border-8 rounded-full items-center justify-center">
                  <img src={f.img} className="size-12" />
                </div>
                <div className="hidden min-[900px]:flex absolute size-28 right-0 top-1/2 bg-white border-main-dark border-8 rounded-full items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                  <img src={f.img} className="size-16" />
                </div>
                <div className="min-[900px]:w-[90%]">
                  <h3 className="text-[22px] font-semibold font-karla">
                    {f.title}
                  </h3>
                  <p className=" mt-2 text-[16px] font-lora leading-4.5 text-black  pr-2">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto relative">
        <img
          src="/images/home/pic.png" // replace with your actual right side image
          alt="AI Tech Illustration"
          className="hidden min-[1080]:flex drop-shadow-[0_0_40px_rgba(168,85,247,0.6)] animate-pulse-slow absolute bottom-0 right-0 w-[35%] max-w-[700px]"
        />
      </div>
    </section>
  );
}
