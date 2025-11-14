"use client";
import Link from "next/link";
import { useModal } from "@/components/ModalContext";

const HeroScotitech = () => {
  const { setShowModal } = useModal();

  return (
    <section className="h-[84vh] lg:h-[88vh] 2xl:h-auto  relative flex justify-center flex-col text-white bg-gradient-to-r from-[#641171]/50 via-[#641171]/10  to-white  overflow-hidden">
      <div className="absolute left-0 h-full bg-gradient-to-r from-white/60 flex items-center">
        <img src="/images/solution/bgfront.png" alt="" className="h-[80%]" />
      </div>
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full z-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center w-full ">
          {/* Left column: text content */}
          <div className="lg:col-span-7 min-[1370px]:py-24 py-7 2xl:py-52">
            <div className="">
              <h1 className="text-4xl min-[1200px]:text-[50px] font-karla font-bold mb-5 min-[1200px]:leading-[57px] text-[#265469] z-50">
                Innovative Solutions for the
                <br /> Modern World
              </h1>

              <p className="mt-6 text-black font-lora max-w-3xl text-lg leading-6.5">
                At{" "}
                <span className="font-semibold text-purple-700">ScotiTech</span>
                , we solve real-world challenges with software that is simple,
                scalable, and impactful. Whether you’re distributing internal
                iOS apps, reducing SaaS costs, creating engaging content, or
                exploring astrology insights — Scotitech has a solution for you.
              </p>

              <div className="mt-10 flex flex-wrap gap-3 sm:gap-7 font-karla text-black z-10">
                <Link
                  href="/products/appdeploy"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-white  shadow-sm text-sm hover:bg-[#F4ADFF] duration-300 font-medium hover:shadow-lg transition-shadow"
                >
                  Explore Our Products
                </Link>
               
                  <button
                    onClick={() => setShowModal(true)}
                    className="inline-flex items-center justify-center cursor-pointer px-5 py-2 rounded-lg bg-white shadow-sm text-sm hover:bg-[#F4ADFF] duration-300 font-medium hover:shadow-lg transition-shadow"
                  >
                    Request a Call
                  </button>
            
              </div>
              <div className="relative h-[157px] lg:hidden max-[390px]:hidden">
                <img
                  src="/images/solution/imgs.png"
                  alt=""
                  className="max-w-[280px] py-5 ml-auto absolute -top-30 right-2 -z-10 opacity-20"
                />
              </div>
            </div>
          </div>

          {/* Right column: image */}
          <div className="hidden lg:flex col-span-5 justify-center w-full h-[350px] min-[1124px]:h-[400px] min-[1230px]:h-[450px] min-[1350px]:h-full max-h-[500px] relative z-0 mt-20">
            <img
              src="/images/solution/imgs.png"
              alt=""
              className="absolute top-1/2 -translate-y-1/2 right-0 w-[75%] max-w-[450px]"
            />
            <img
              src="/images/solution/imgs2.png"
              alt=""
              className="absolute top-[38%] left-0 w-[42%] z-40 hover:scale-105 duration-300"
            />
            <img
              src="/images/solution/imgs3.png"
              alt=""
              className="absolute top-[13%] left-[9%] w-[30%] z-30 hover:scale-105 duration-300"
            />
            <img
              src="/images/solution/imgs4.png"
              alt=""
              className="absolute top-0 left-[27%] w-[20%] z-20 hover:scale-105 duration-300"
            />

            <img
              src="/images/solution/imgs5.png"
              alt=""
              className="absolute -top-4 left-[42%] w-[15%] z-10 hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroScotitech;
