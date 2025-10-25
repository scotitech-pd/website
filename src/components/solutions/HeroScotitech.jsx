const HeroScotitech = () => {
  return (
    <section className="relative flex justify-center flex-col px-10 text-white bg-gradient-to-r from-[#641171]/50 via-[#641171]/10  to-white  overflow-hidden">
      <div className="absolute left-0 h-full bg-gradient-to-r from-white/60 flex items-center">
        <img src="/images/solution/bgfront.png" alt="" className="h-[80%]" />
      </div>
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center w-full ">
          {/* Left column: text content */}
          <div className="lg:col-span-7">
            <div className="py-48">
              <h1 className="text-4xl md:text-[50px] font-bold font-karla leading-14 text-[#265469] z-50">
                Innovative Solutions for the
                <br /> Modern World
              </h1>

              <p className="mt-6 text-black font-lora max-w-3xl text-sm md:text-lg leading-6">
                At{" "}
                <span className="font-semibold text-purple-700">Scotitech</span>
                , we solve real-world challenges with software that is simple,
                scalable, and impactful. Whether you’re distributing internal
                iOS apps, reducing SaaS costs, creating engaging content, or
                exploring astrology insights — Scotitech has a solution for you.
              </p>

              <div className="mt-10 flex flex-wrap gap-7 font-lora text-black z-10">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-white  shadow-sm text-sm hover:bg-[#F4ADFF] duration-300 font-medium hover:shadow-lg transition-shadow"
                >
                  Explore Our Products
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-white  shadow-sm text-sm hover:bg-[#F4ADFF] duration-300 font-medium hover:shadow-lg transition-shadow"
                >
                  Request a Demo
                </a>
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
