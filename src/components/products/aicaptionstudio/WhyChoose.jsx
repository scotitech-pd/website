"use client";

const features = [
  {
    icon: "/images/products/aicaptionstudio/unmatched.png",
    className: "",
    title: "Unmatched Speed",
    desc: "Our AI is trained on high-performing content to create captions that stop the scroll and encourage engagement.",
  },
  {
    icon: "/images/products/aicaptionstudio/engagement.png",
    className: "!size-12",
    title: "Engagement-Focused",
    desc: "We don't just report on spending; we actively automates the process of cutting waste, delivering better ROI.",
  },
  {
    icon: "/images/products/aicaptionstudio/effortless.png",
    className: "",
    title: "Effortless Creativity",
    desc: "Overcome creative blocks forever with an endless stream of fresh, relevant content ideas at your fingertips.",
  },
  {
    icon: "/images/products/aicaptionstudio/scotitech.png",
    className: "",
    title: "ScotiTech Expertise",
    desc: "Developed by ScotiTech Ltd, an innovation company focused on AI, productivity, and future-ready tools.",
  },
];

export default function WhyChooseOpsly() {
  return (
    <section className="relative py-20 px-6 text-center text-white overflow-hidden font-lora">
      {/* Background network effect */}
      <div className="absolute inset-0 bg-[url('/images/products/opsly/whybg.png')] bg-cover bg-center pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-[40px] font-semibold mb-3 font-karla">
          Why Choose AI Caption Studio?
        </h2>
        <p className="text-xl mb-20">Smarter, Faster, Better Content</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              /* outer wrapper: the visible gradient border */
              className="relative rounded-4xl p-[1.5px] bg-gradient-to-r from-[#98F9FF]/70 via-white/70 to-main-light/70 transition-transform duration-300"
            >
              {/* inner card: actual content with backdrop blur & semi transparent background */}
              <div className="group relative h-full  bg-[#0d1941]/80 px-2  pb-7 p-4 rounded-4xl  shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <div className="absolute  top-1/4 transform -translate-x-1/2  bg-white text-purple-700 w-15 h-15  flex items-center justify-center rounded-full shadow-lg">
                  <img
                    src={feature.icon}
                    alt=" "
                    className={` p-2 size-12 ${feature.className}`}
                  />
                </div>
                <div className="pl-10">
                  <h3 className="pt-2 text-lg !text-left font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className=" text-[13px] text-left ">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
