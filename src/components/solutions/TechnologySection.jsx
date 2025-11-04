export default function TechnologySection() {
  const problems = [
    {
      icon: "/images/solution/ii1.png",
      text: "Internal iOS apps rejected on the App Store or burdened by costly MDM",
    },
    {
      icon: "/images/solution/ii2.png",
      text: "SaaS subscriptions draining budgets with little visibility.",
    },
    {
      icon: "/images/solution/ii3.png",
      text: "Creators struggling to keep content fresh and engaging.",
    },
    {
      icon: "/images/solution/ii4.png",
      text: "Lifestyle apps offering generic experiences, not personalized insights.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#2b1f6e] to-[#3c99e5] text-white py-20">
      <img
        src="/images/solution/tabimg.png" // replace this with your actual image path
        alt="Tech Devices"
        className=" absolute left-0 w-[80%] lg:w-[40%]  top-30 min-[600px]:top-5 min-[1170px]:-top-5  min-[1400px]:-top-10  min-[1700px]:hidden opacity-20 lg:opacity-100"
      />
      <div className=" max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full ">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] items-center justify-between gap-0">
          {/* Left image */}
          <div className="">
            <img
              src="/images/solution/tabimg1.png" // replace this with your actual image path
              alt="Tech Devices"
              className="w-[90%] hidden min-[1700px]:flex "
            />
          </div>

          {/* Right content */}
          <div className="text-center lg:text-left">
            <p className="text-teal-300 font-lora font-medium text-base mb-3">
              How Scotitech Solves These
            </p>

            <h2 className="text-2xl min-[380px]:text-3xl min-[450px]:text-4xl min-[1060px]:text-5xl font-karla font-medium">
              Technology <span className="text-pink-300">moves fast.</span>
              <span className="block mt-0.5">
                Problems keep <span className="text-pink-300">piling up</span>
              </span>
            </h2>

            <p className="min-[380px]:text-lg text-white max-w-2xl mx-auto lg:mx-0 font-lora my-4 leading-5">
              Businesses, creators, and individuals are stuck between complexity
              and cost.
            </p>

            <button className="bg-black/20 border border-white text-white font-lora font-medium text-sm px-6 py-1 rounded-full">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Problem cards */}
        <div className="mt-10 min-[1300px]:mt-20 min-[1700px]:mt-0 grid grid-cols-1 min-[590px]:grid-cols-2 min-[1115px]:grid-cols-4 gap-4 min-[1160px]:gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="relative flex py-2.5 pr-2 ml-7 min-[1160px]:ml-10 bg-transparent border-white/50 border-2 rounded-2xl group justify-start items-center transition"
            >
              <div className="h-16 w-12 min-[1400px]:w-14 shrink-0  min-[1160px]:h-20 bg-yel low"></div>
              <div className="absolute left-0 top-1/2 bg-[#640D5F] size-16 min-[1160px]:size-20 flex justify-center items-center rounded-full border-4 border-[#a879db] group-hover:border-white transition duration-200 group-hover:scale-110 text-pink-100 transform -translate-x-1/2 -translate-y-1/2">
                <img src={item.icon} alt={item.text} className="h-8 min-[1160px]:h-11" />
              </div>
              <p className="text-[13px] text-white font-lora text-left min-[1260px]:leading-relaxed flex justify-center items-center bg-red- 400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
