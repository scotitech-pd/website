import React from "react";
import Link from "next/link";
const features = [
  {
    img: "/images/home/whyaccessible.png",
    title: "Practical by Design",
    desc: "We focus on products that solve clear operational problems without adding unnecessary complexity.",
  },
  {
    img: "/images/home/whyrocket.png",
    title: "Start Lean, Grow Clearly",
    desc: "We ship focused products, learn from real usage, and improve them with a clearer long-term direction.",
  },
  {
    img: "/images/home/whyprivacy.png",
    title: "Privacy and Control",
    desc: "Products are shaped with practical privacy, responsible data handling, and stronger deployment control in mind.",
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
      <div className="cursor-pointer ">
        <Link
          href="/contact"
          className="bg-white font-karla  font-semibold text-main-dark px-8 py-2 rounded-lg text-sm hover:text-white hover:bg-main/90 absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2"
        >
          Get in touch
        </Link>
      </div>
      <div className="relative grid gap-16 items-center max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full">
        {/* Left Content */}
        <div className="space-y-6 py-10 sm:py-20">
          <div className="relative  mt-5">
            <p className="hidden font-karla min-[1100px]:flex text-[6rem] font-semibold text-gray-100/8 text-nowrap -z-0 w-fit absolute -left-4  -top-1 transform -translate-y-1/2">
              Why Choose ScotiTech
            </p>
            <h2 className="lg:text-5xl text-3xl font-karla font-semibold text-white">
              Why Choose ScotiTech
            </h2>
          </div>
          <p className="lg:text-lg text-md text-white max-w-2xl font-lora">
            We build products that are easier to understand, easier to trust,
            and better aligned with real operational needs.
          </p>

          <div className="grid grid-cols-1 min-[600px]:grid-cols-[48%_41%] mt-5 sm:mt-10 gap-8 min-[900px]:gap-20 w-[100%] min-[900px]:w-[90%] min-[1080px]:w-[72%] text-black">
            {features.map((f, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300`}
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
                  <p className=" mt-2 text-[16px] font-lora leading-6 text-black/80  pr-2">
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
          className="hidden min-[1080px]:flex drop-shadow-[0_18px_36px_rgba(15,23,42,0.16)] absolute bottom-0 right-0 w-[35%] max-w-[700px]"
        />
      </div>
    </section>
  );
}
