"use client";

export default function OpslyInfoSection() {
 const features = [
  {
    icon: "/images/products/opsly/clear.png",
    title: "One login",
    desc: "Access all apps with a single secure login without switching platforms.",
  },
  {
    icon: "/images/products/opsly/optimize.png",
    title: "All your apps in one place",
    desc: "Get full visibility of every tool, user, and license in a single dashboard.",
  },
  {
    icon: "/images/products/opsly/control.png",
    title: "AI built in",
    desc: "Use AI to highlight risks, forecast spends, and recommend cost-saving actions automatically.",
  },
  {
    icon: "/images/products/opsly/ssecurity.png",
    title: "Your data stays private",
    desc: "Data is safeguarded with enterprise-grade privacy and never shared or stored externally.",
  },
];


  return (
    <>
      {/* -------------------- ORIGINAL (LG AND ABOVE) -------------------- */}
      <section className="relative w-full py-16  hidden lg:block mb-3 ">
        <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
          <h2 className="text-[40px] font-semibold text-main-dark mb-6 drop-shadow-2xl font-karla">
           Opsly — Your All-in-One Private Cloud Workspace
          </h2>
          <p className="text-black font-lora text-xl mb-16 pr-20">          
Opsly gives you a secure, private, self-hosted digital workspace with powerful AI assistance — all connected through Private Smart WorkSpace, your personal cloud hub running on your own premises.
          </p>
        </div>

        <div className="relative bg-yellow-200">
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-r from-[#407691] to-[#3D2779] top-0"></div>

          <div className="max-w-[1250px] mb-10 mx-auto grid md:grid-cols-[24%_76%] gap-2 mt-20 items-start font-lora px-6 min-[1190px]:px-0">
            <div className="bg-transparent text-white z-10">
              <p className="text-lg leading-relaxed font-medium my-5">
                Integrate your tools. Protect your data. Run your work your way. <br /> <br />

              </p>
            </div>
            <div className="relative">
              <div className="absolute left-0 right-0 grid grid-cols-4 justify-center gap-9 z-10 text-black w-full">
                {features.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white relative shadow-[0_0_15px_rgba(128,128,128,0.6)] group hover:shadow-[0_0_20px_rgba(140,82,255,0.9)] hover:scale-101 duration-300 py-10 px-5 text-left transition-all -mt-8"
                  >
                    <div className="absolute bg-white flex justify-center items-center shadow-[0_0_15px_rgba(128,128,128,0.6)] group-hover:shadow-[0_0_15px_rgba(140,82,255,0.9)] group-hover:scale-110 duration-300 -top-3 -left-3 size-14 transition-all">
                      <img src={item.icon} alt="" className="size-8" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2 mt-7 font-karla leading-5">
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-4.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- NEW RESPONSIVE VERSION (BELOW LG) -------------------- */}
      <section className="relative w-full py-16 bg-white lg:hidden block">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-[32px] font-semibold text-main-dark mb-4 drop-shadow-2xl font-karla">
            Opsly — Your All-in-One Private Cloud Workspace
          </h2>
          <p className="text-[#2B2B2B] font-lora text-base md:text-lg mb-10 leading-relaxed">          
Opsly gives you a secure, private, self-hosted digital workspace with powerful AI assistance — all connected through Private Smart WorkSpace, your personal cloud hub running on your own premises.
          </p>
        </div>

        <div className="relative bg-gradient-to-r from-[#407691] to-[#3D2779] py-14">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <p className="text-base md:text-lg mb-10 font-lora text-center">
          Integrate your tools. Protect your data. Run your work your way.

            </p>

            <div className="grid sm:grid-cols-2 gap-6 justify-center items-center ">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="bg-white text-black rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.3)] py-8 px-5 flex flex-col items-center text-center transition-all hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(140,82,255,0.8)] duration-300"
                >
                  <div className="flex items-center justify-center bg-[#F1E6FF] shadow-[0_0_10px_rgba(140,82,255,0.4)] size-16 rounded-full mb-4">
                    <img src={item.icon} alt={item.title} className="size-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 font-karla text-main-dark">
                    {item.title}
                  </h3>
                  <p className=" text-sm text-gray-700 font-lora leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
