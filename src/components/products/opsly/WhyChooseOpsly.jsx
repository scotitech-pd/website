"use client";
import { Eye, PiggyBank, Shield, Lightbulb } from "lucide-react";

const features = [
  {
    icon: "/images/products/opsly/visibility.png",
    className: "!size-9",
    title: "Unified SaaS Visibility",
    desc: "Where other tools only show a partial picture, Opsly provides a complete, 360-degree view of every application, user, and dollar spent.",
  },
  {
    icon: "/images/products/opsly/costcontrol.png",
    className: "",
    title: "Proactive Cost Control",
    desc: "We don't just report on spending; our platform proactively finds savings and automates the process of cutting waste, delivering measurable ROI.",
  },
  {
    icon: "/images/products/opsly/gradesecurity.png",
    className: "",
    title: "Enterprise-Grade Security",
    desc: "Your data security is our top priority. Opsly is built on a foundation of industry-leading security protocols to protect your sensitive information.",
  },
  {
    icon: "/images/products/opsly/innovation.png",
    className: "",
    title: "Backed by ScotiTech Innovation",
    desc: "Developed by ScotiTech Ltd, Opsly benefits from years of expertise in building scalable, intelligent, and user-centric enterprise solutions.",
  },
];

export default function WhyChooseOpsly() {
  return (
    <section className="relative py-20 px-6 text-center text-white overflow-hidden font-lora">
      {/* Background network effect */}
      <div className="absolute inset-0 bg-[url('/images/products/opsly/whybg.png')] bg-cover bg-center pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-[40px] font-semibold mb-3 font-karla">
          Why Choose Opsly app?
        </h2>
        <p className="text-xl mb-20">
          The Opsly Advantage: More Than Just Tracking
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {features.map((feature, index) => (
            <div
              key={index}
              /* outer wrapper: the visible gradient border */
              className="relative rounded-4xl p-[1.5px] bg-gradient-to-r from-[#98F9FF]/70 via-white/70 to-main-light/70 transition-transform duration-300"
            >
              {/* inner card: actual content with backdrop blur & semi transparent background */}
              <div className="group relative text-center bg-[#0d1941]/80 px-2 pt-5 pb-6 rounded-4xl  shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-purple-700 w-20 h-20 flex items-center justify-center rounded-full shadow-lg">
                  <img
                    src={feature.icon}
                    alt=""
                    className={`opacity-80 size-12 ${feature.className}`}
                  />
                </div>
                <h3 className="mt-12 text-lg font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className=" text-[13px] px-5 text-center">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
