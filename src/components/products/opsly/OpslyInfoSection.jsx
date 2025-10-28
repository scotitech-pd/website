"use client";
import { Eye, FileText, HandCoins, ShieldCheck } from "lucide-react";

export default function OpslyInfoSection() {
  const features = [
    {
      icon: "/images/products/opsly/clear.png",
      title: "Gain a Clear View",
      desc: "Discover every subscription and see exactly who is using what.",
    },
    {
      icon: "/images/products/opsly/optimize.png",
      title: "Optimize Licensing",
      desc: "Automatically identify underused, unused, and redundant licenses to eliminate waste.",
    },
    {
      icon: "/images/products/opsly/control.png",
      title: "Control Your Spending",
      desc: "Manage renewals, negotiate better contracts, and forecast future software costs with precision.",
    },
    {
      icon: "/images/products/opsly/ssecurity.png",
      title: "Strengthen Security",
      desc: "Monitor app permissions and ensure compliance with industry standards.",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-white ">
      <div className="max-w-[1250px] mx-auto px-6 min-[1190px]:px-0">
        <h2 className="text-[40px] font-semibold text-main-dark mb-6 drop-shadow-2xl font-karla">
          What is Opsly app?
        </h2>
        <p className="text-black font-lora text-xl mb-16 pr-20">
          Opsly is a SaaS Management Platform built for finance, IT, and
          operations teams struggling with software sprawl. In today's digital
          workplace, unmanaged subscriptions lead to wasted budget, security
          risks, and operational blind spots.
        </p>
      </div>

      <div className="relative bg-yellow-200">
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-r from-[#407691] to-[#3D2779] top-0"></div>

        <div className="max-w-[1250px] mb-10 mx-auto grid md:grid-cols-[24%_76%] gap-2 mt-20 items-start font-lora px-6 min-[1190px]:px-0">
          <div className="bg-transparent text-white z-10">
            <p className="text-lg leading-relaxed font-medium my-5">
              Opsly solves this by providing a unified view of your entire
              software ecosystem. We empower your organization to:
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-0 right-0 grid grid-cols-4 justify-center gap-9 z-10 text-black w-full">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="bg-white relative shadow-[0_0_15px_rgba(128,128,128,0.6)] group hover:shadow-[0_0_20px_rgba(140,82,255,0.9)] hover:scale-101  duration-300 py-10 px-5 text-left transition-all -mt-8"
                >
                  <div className="absolute bg-white flex justify-center items-center shadow-[0_0_15px_rgba(128,128,128,0.6)] group-hover:shadow-[0_0_15px_rgba(140,82,255,0.9)] group-hover:scale-110 duration-300 -top-3 -left-3 size-14 transition-all">
                    <img src={item.icon} alt="" className="size-8" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 mt-7 font-karla leading-5">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
