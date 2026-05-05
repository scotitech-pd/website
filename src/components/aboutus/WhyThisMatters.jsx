import Link from "next/link";
import { meetingLinks } from "@/lib/scheduling";

export default function WhyThisMatters() {
  const benefits = [
    {
      title: "A clearer route for private app distribution",
      iconSrc: "/images/aboutus/sun-productivity.png",
    },
    {
      title: "More viable paths for private workspaces and self-hosted operations",
      iconSrc: "/images/aboutus/faster-iterations.png",
    },
    {
      title: "More transparent digital infrastructure and rollout thinking",
      iconSrc: "/images/aboutus/partnerships.png",
    },
    {
      title: "Evidence that some apps are better suited to approved private distribution than a public store listing",
      iconSrc: "/images/aboutus/communication.png",
    },
    {
      title: "Built for organisations that value privacy and long-term trust",
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

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={meetingLinks.appdeploy}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-2 font-karla cursor-pointer bg-white border rounded-xl border-gray-300 text-gray-900 font-medium hover:bg-gray-50 transition-colors text-base shadow-[0_0_15px_3px_rgba(139,42,214,0.3)] hover:shadow-[0_0_25px_6px_rgba(139,42,214,0.5)]"
              >
                Book AppDeploy session
              </a>
              <a
                href={meetingLinks.axos}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-2 font-karla cursor-pointer bg-[#0E1116] border rounded-xl border-[#0E1116] text-white font-medium hover:bg-[#1C2530] transition-colors text-base"
              >
                Book AXOS session
              </a>
            </div>
          </div>

          {/* Right Side - Content */}

          <div className="lg:pt-0 relative">
            <div className=" relative w-fit mx-auto text-4xl lg:text-5xl font-bold font-karla text-center text-gray-900 mb-12">
              Why This Matters
              <div className="absolute hidden lg:block  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center min-w-[650px]  pointer-events-none">
                <p className="text-8xl lg:text-[70px] font-karla font-bold  text-gray-500/30 opacity-50">
                  Why This Matters
                </p>
              </div>
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
                    <h3 className="text-lg font-semibold text-main-dark font-karla mb-[1px]">
                      {benefit.title}
                    </h3>
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
