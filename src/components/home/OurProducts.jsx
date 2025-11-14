import React from "react";
import Link from "next/link";

const products = [
  {
    name: "AppDeploy",
    tagline: "Effortless iOS App Distribution",
    logo: "/images/home/appdeploy.png",
    link: "/appdeploy",
  },
  {
    name: "Opsly",
    tagline: "All-in-One Operations Platform",
    logo: "/images/home/opsly.png",
    link: "/opsly",
    button: "Coming Soon!",
  },
  {
    name: "AI Caption Studio",
    tagline: "Smarter Content Creation",
    logo: "/images/home/ai.png",
    link: "/aicaptionstudio",
    
  },
  {
    name: "ClarityPath",
    tagline: "Private Decision-Support App",
    logo: "/images/home/claritypath.png",
    link: "/claritypath",
  },
];

export default function OurProducts() {
  return (
    <section className="pt-5 pb-20 text-center relative w-[100%] overflow-hidden">
      <div className="absolute bottom-0 w-screen -left-0.5">
        <img
          src="/images/home/bgjoint.png" // replace with your actual background image
          alt="background"
          className="object-cover w-screen"
        />
      </div>
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full">
        <h2 className="text-main font-karla text-4xl sm:text-5xl font-semibold mb-2 sm:mb-6">
          Our Products
        </h2>
        <h3 className="text-xl sm:text-3xl min-[1170px]:text-4xl lg:text-2xl font-semibold font-karla text-gray-900 mb-3">
          Products Designed to Simplify, Empower, and Scale
        </h3>
        <p className="text-black max-w-4xl mx-auto mb-12 min-[500]:text-xl font-lora tracking-wider">
          From app distribution to operations and content creation, our tools
          cut complexity and deliver real-world value.
        </p>

        <div className="grid grid-cols-1 min-[590px]:grid-cols-2  min-[1060px]:grid-cols-4 gap-8 mb-10">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white relative rounded-2xl hover:shadow-[0_0_25px_rgba(128,128,128,0.9)] transition shadow-[0_0_25px_rgba(128,128,128,0.6)] max-w-[320px] mx-auto"
            >
              <div
                className={`flex justify-center items-center rounded-t-2xl overflow-hidden`}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="py-8 px-1.5  text-black">
                <h4 className="text-xl font-semibold font-karla tracking-wide">
                  {p.name}
                </h4>
                <p className="text-black/70 mt-2 font-lora font-semibold">
                  {p.tagline}
                </p>
              </div>
              {p.button ? (
                <div className="bg-main font-karla tracking-wider font-semibold text-white text-nowrap px-6 py-2 rounded-full text-sm absolute bottom-0 transform translate-y-1/2 left-1/2 -translate-x-1/2 cursor-none select-none">
                  {p.button}
                </div>
              ) : (
                <Link
                  href={`/products${p.link}`}
                  className="bg-main font-karla tracking-wider font-semibold text-white text-nowrap px-6 py-2 rounded-full text-sm hover:bg-main/90 absolute bottom-0 transform translate-y-1/2 left-1/2 -translate-x-1/2"
                >
                  Read more                                  
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
