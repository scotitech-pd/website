import Link from "next/link";

export default function WhyThisMatters() {
  const benefits = [
    {
      title: "Follow-the-Sun Productivity",
      description:
        "Development never sleeps; our global teams keep momentum 24/7.",
      iconSrc: "/images/aboutus/sun-productivity.png",
    },
    {
      title: "Faster Iterations",
      description: "Product releases in weeks, not months.",
      iconSrc: "/images/aboutus/faster-iterations.png",
    },
    {
      title: "Closer Partnerships",
      description:
        "UK-based relationship management ensures accountability and trust.",
      iconSrc: "/images/aboutus/partnerships.png",
    },
    {
      title: "Clear Communication",
      description:
        "Dedicated project leads and transparent reporting structures.",
      iconSrc: "/images/aboutus/communication.png",
    },
    {
      title: "Scalable Expertise",
      description:
        "Access to engineers, designers, and product strategists on-demand.",
      iconSrc: "/images/aboutus/expertise.png",
    },
  ];

  return (
    <div className=" bg-white py-12 overflow-hidden">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* Left Side - Map */}
          <div className="flex flex-col items-center lg:items-center w-full">
            <div className="relative">
              <img
                src="/images/aboutus/world-map.png"
                alt="Global presence map"
                className="w-full h-auto object-contain opacity-90"
              />
            </div>

            <div className="mt-10 flex justify-center">
              <Link href="/contact">
              <button className="px-12 py-2 font-lora cursor-pointer bg-white border rounded-xl border-gray-300   text-gray-900 font-medium hover:bg-gray-50 transition-colors text-base shadow-[0_0_15px_3px_rgba(139,42,214,0.3)] hover:shadow-[0_0_25px_6px_rgba(139,42,214,0.5)]">
                Book a 15-Min Consultation
              </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Content */}

          <div className="lg:pt-0 relative">
            <h3 className="text-4xl lg:text-5xl font-bold font-karla text-center text-gray-900 mb-12">
              Why This Matters
            </h3>
            <div className="absolute hidden lg:block -top-[10px] -left-[50px]   min-w-[650px]     text-center pointer-events-none">
              <p className="text-8xl lg:text-[70px] font-karla font-bold  text-gray-500/30 opacity-50">
                Why This Matters
              </p>
            </div>
            {/* Benefits List */}
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  {/* Icon */}
                  <div className=" hidden lg:block flex-shrink-0 w-10 h-10">
                    <img src={benefit.iconSrc} alt="" className="w-6 h-6 " />
                  </div>
                  <div className="lg:hidden flex-shrink-0 w-10 h-10 bg-[#7E1A8E]/50 rounded-full flex items-center justify-center">
                    <img src={benefit.iconSrc} alt="" className="w-6 h-6 " />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-700 font-karla mb-[1px]">
                      {benefit.title}
                    </h3>
                    <p className="text-purple-600 text-base leading-relaxed font-lora">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
