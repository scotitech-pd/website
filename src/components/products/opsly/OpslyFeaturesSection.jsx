"use client";
import { LayoutGrid, ShieldCheck, Layers } from "lucide-react";

export default function OpslyFeaturesSection() {
  const features = [
    {
      title: "Real-Time Usage Dashboard",
      description:
        "Instantly see your entire SaaS inventory in one place. Track active users, login frequency, and feature adoption to make data-driven decisions about your software stack.",
      icon: "images/products/opsly/dashboard.png",
    },
    {
      title: "Security & Compliance Monitoring",
      description:
        "Mitigate risk by tracking which employees have access to which applications. Easily conduct security audits and streamline employee on-boarding and off-boarding.",
      icon: "images/products/opsly/security.png",
    },
    {
      title: "Seamless Platform Integration",
      description:
        "Opsly connects with your existing ecosystem, including Single Sign-On (SSO), HR, and finance systems to provide a single source of truth for all your SaaS data.",
      icon: "images/products/opsly/platform.png",
    },
  ];

  const miniFeatures = [
    {
      title: "Redundancy Alerts",
      description:
        "Get notified of overlapping applications with similar functionality.",
    },
    {
      title: "Renewal Management",
      description:
        "Never miss a renewal date with automated alerts and a 90-day timeline view.",
    },
    {
      title: "Contract Intelligence",
      description:
        "Store all your contracts and payment details in a secure, centralized vault.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="px-6 text-center">
          <h2 className="text-[40px] font-semibold text-main-dark mb-1 drop-shadow-2xl font-karla">
            Key Features
          </h2>
          <p className="text-black font-lora text-xl mb-14">
            The Power to See, Control, and Optimize
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center justify-center">
          {/* Left column */}
          <div className="flex flex-col space-y-5">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start bg-white shadow-[0_0_5px_rgba(128,128,128,0.3)] rounded-2xl p-6 border border-gray-100 relative group
                     hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] hover:scale-101 transform-gpu transition-all duration-300  text-black"
              >
                <div className="absolute bg-white rounded-full flex justify-center items-center shadow-[0_0_5px_rgba(128,128,128,0.6)] group-hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] group-hover:scale-110 duration-300 top-1/2 -translate-1/2 left-0 size-12 transition-all">
                  <img src={feature.icon} alt="" className="size-6" />
                </div>
                <div className=" pl-5">
                  <h3 className="font-semibold text-xl font-karla">
                    {feature.title}
                  </h3>
                  <p className=" mt-1 text-sm font-lora">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column gradient box */}
          <div className="bg-gradient-to-bl from-[#406E8F] to-[#3D297A] text-white rounded-xl p-10 shadow-lg">
            <h3 className="font-medium text-2xl font-karla mb-2">
              Automated Cost Optimization Reports
            </h3>
            <p className="mb-6 font-lora leading-6">
              Our intelligent engine identifies immediate cost-saving
              opportunities.
            </p>

            <div className="bg-white text-gray-900 rounded-lg p-6 space-y-5 font-lora">
              {miniFeatures.map((item, i) => (
                <div key={i}>
                  <h4 className="font-bold text-[15px] text-black mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[15px] leading-[18px] text-main-dark">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
