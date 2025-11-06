import Link from "next/link";

export default function WhoUsesAppDeploy() {
  const businessSolutions = [
    {
      bg: "bg-[#CEEAFF]",
      icon: "/images/solution/smes.png",
      title: "SMEs",
      titleColor: "text-blue",
      desc: "Affordable internal app distribution.",
    },
    {
      bg: "bg-[#DBFFE6]",
      icon: "/images/solution/enter.png",
      title: "Enterprises",
      titleColor: "text-[#35BA54]",
      desc: "Secure, scalable deployment across thousands of devices.",
    },
    {
      bg: "bg-[#FFE8D9]",
      icon: "/images/solution/startup.png",
      title: "Startups",
      titleColor: "text-[#D39964]",
      desc: "Fast, compliant delivery without Apple delays.",
    },
    {
      bg: "bg-[#F9D5FF]",
      icon: "/images/solution/agencies.png",
      title: "Agencies",
      titleColor: "text-[#B954CE]",
      desc: "Simplify app deployment for clients & partners.",
    },
  ];
  return (
    <section className="bg-[#FAFAFA] py-10 sm:py-20 overflow-hidden">
      {/* Heading */}
      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full z-10 ">
        <div className="flex  justify-between items-center">
          <div>
            <div className="relative mb-4">
              <p className="absolute max-[450px]:hidden text-[4.3rem] font-semibold text-black font-karla opacity-5 -left-3 top-1/2 -translate-y-1/2 text-nowrap select-none">
                Who It’s For
              </p>
              <p className="text-2xl min-[850px]:text-3xl font-medium text-black font-karla">
                Who It’s For
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-medium mt-2 text-gray-900">
              Who Uses <span className="text-blue">AppDeploy</span>?
            </h2>
          </div>
          {/* Button */}
          <div className="mt-6 max-[950px]:hidden">
            <Link
              href="/contact"
              className="cursor-pointer font-karla bg-gradient-to-r from-[#3D2C72] to-[#3D758C] text-white font-medium px-6 py-3 rounded-md shadow-md hover:shadow-[0_0_12px_rgba(61,44,114,0.9)] duration-300 transition"
            >
              Get Started Now
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 min-[430px]:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20 mt-10 lg:mt-16">
          {businessSolutions.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-2xl px-3 pt-5 pb-3.5 min-[1300px]:p-8 shadow-md hover:shadow-xl transition text-left`}
            >
              <div className="bg-white p-3 rounded-full inline-block shadow-sm">
                <img src={item.icon} alt={item.title} className="size-12" />
              </div>

              <h3
                className={`mt-3.5 min-[1300px]:mt-6 text-xl font-semibold ${item.titleColor} font-karla`}
              >
                {item.title}
              </h3>

              <p className="min-[1300px]:mt-3 text-black font-lora leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 min-[950px]:hidden mx-auto w-fit">
            <Link
              href="/contact"
              className="cursor-pointer font-karla bg-gradient-to-r from-[#3D2C72] to-[#3D758C] text-white font-medium px-6 py-3 rounded-md shadow-md hover:shadow-[0_0_12px_rgba(61,44,114,0.9)] duration-300 transition"
            >
              Get Started Now
            </Link>
          </div>
      </div>
    </section>
  );
}
