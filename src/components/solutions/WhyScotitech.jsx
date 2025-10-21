import React from "react";

const features = [
  {
    title: "Simple to Use",
    description: "No steep learning curves. Get started in minutes.",
    icon: "/images/solution/why1.png",
  },
  {
    title: "Secure & Reliable",
    description: "Built with enterprise-grade standards.",
    icon: "/images/solution/why2.png",
  },
  {
    title: "Scalable",
    description: "From startups with 20 users to enterprises with 5,000+",
    icon: "/images/solution/why33.png",
  },
  {
    title: "Proven ROI",
    description: "Save costs, reduce complexity, and boost efficiency.",
    icon: "/images/solution/why4.png",
  },
];

const WhyScotitech = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4 text-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="font-karla font-medium text-4xl text-center my-11 relative w-full">
            <p className="text-[7rem] font-semibold text-gray-200/80 text-nowrap -z-0 w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Why Scotitech
            </p>
            <h2 className="relative z-10 font-bold">Why Scotitech</h2>
          </div>
        </div>
        <p className="mt-2 text-main-dark font-lora font-medium text-[20px] z-10 relative">
          What Makes Our Solutions Different?
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-transparent hover:border-purple-200 transition-all duration-300 p-6 flex flex-col items-center text-center drop-shadow-[0_0_10px_rgba(238,0,255,0.03)]"
            >
              <img
                src={feature.icon}
                alt={`${feature.title} Icon`}
                className="size-14 mb-4"
              />
              <h4 className="text-[20px] font-semibold font-lora text-black mb-2">
                {feature.title}
              </h4>
              <p className="text-[15px] font-lora text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyScotitech;
