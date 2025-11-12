"use client";
import { motion } from "framer-motion";

export default function CaseStudiesAppDeploy() {
  const caseStudies = [
    {
      title: "From Frustration to Breakthrough",
      subtitle: "How persistence turned a technical dead-end into a Swift Android milestone.",
      image: "/images/products/appdeploy/1.jpeg",
      content: [
        "It began with endless compiler errors and a near-impossible goal: building Swift for Android.",
        "After dozens of failed attempts, a small discovery changed everything — the official Swift SDK for Android, backed by the Swift.org Workgroup.",
        "What started as an experiment became a proof-of-concept that Swift could truly compile beyond Apple’s ecosystem.",
      ],
      quote:
        "“What started as a random experiment turned into a genuine breakthrough — Swift can now build for Android officially.”",
    },
    {
      title: "The Birth of AppDeploy",
      subtitle: "From rejection to revolutionizing private app deployment.",
      image: "/images/products/appdeploy/3.jpeg",
      content: [
        "When Apple rejected our app ClarityPath under guideline 4.3(b), we faced the same pain as thousands of teams.",
        "Instead of quitting, we built AppDeploy — a secure, Apple Business Manager-ready platform that makes private distribution simple.",
        "No costly MDMs. No complex reviews. Just a streamlined, compliant way to deliver your apps to the right users.",
      ],
      quote:
        "“We built AppDeploy because we felt the pain ourselves — endless rejections, complex reviews, and overpriced MDMs just to get a simple app out.”",
    },
  ];

  return (
    <section className="relative bg-white py-20 font-karla text-gray-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-20">
        {/* Section Heading */}
        <div className="text-center mb-14 relative">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#3D297A] relative z-10">
            Case Studies
          </h2>
          <p className="mt-3 text-gray-600 font-lora text-lg max-w-3xl mx-auto">
            Real stories behind AppDeploy’s journey — from technical breakthroughs to real-world pain solved.
          </p>
          <span className="absolute hidden lg:block text-[90px] font-bold text-gray-300/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
            Case Studies
          </span>
        </div>

        {/* Case Study Grid */}
        <div className="grid gap-10 lg:gap-14">
          {caseStudies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-10 bg-[#F9F6FF] rounded-2xl border border-gray-100 shadow-lg p-6 md:p-10"
            >
              {/* Image */}
              <div className="relative flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl object-cover w-full h-72 md:h-96 shadow-md hover:scale-[1.02] transition"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#3D297A] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#406E8F] mb-4 text-sm font-medium">
                  {item.subtitle}
                </p>
                <div className="space-y-3 text-gray-700 font-lora text-[15px] leading-relaxed">
                  {item.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <blockquote className="mt-6 border-l-4 border-[#7E1A8E] bg-white p-4 rounded-md italic text-gray-800 text-sm">
                  {item.quote}
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#F5EDFF] border-l-[8px] border-[#7E1A8E] rounded-xl shadow-md p-10 text-center font-lora"
        >
          <p className="text-gray-700 text-lg italic max-w-3xl mx-auto">
            “Every story we lived became a feature in AppDeploy — turning real challenges into tools that simplify app deployment for teams everywhere.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
