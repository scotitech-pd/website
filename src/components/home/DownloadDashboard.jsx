"use client";
import { ExternalLink, Clock } from "lucide-react";
import { motion } from "framer-motion"; // ⬅️ Added

export default function DownloadDashboard() {
  const coreProducts = [
    {
      title: "AppDeploy",
      subtitle: "Internal iOS distribution built around Apple Business workflows",
      color: "from-slate-50 to-blue-50",
      shadow: "shadow-[0_0_15px_rgba(45,100,230,0.2)]",
      titleColor: "text-blue",
      titleColor1: "bg-blue",
      items: [
        {
          name: "Access Portal",
          details: "Cloud workspace and branded distribution access",
          bg: "bg-blue-100",
          link: "https://appdeploy.scotitech.com/w/appdeploy-platform",
          live: true,
        },
        {
          name: "Request Access",
          details: "Start the Cloud or Enterprise onboarding path",
          bg: "bg-blue-100",
          link: "https://appdeploy.scotitech.com/request-access",
          live: true,
        },
      ],
    },
    {
      title: "AXOS",
      subtitle: "Private workspace with AI built directly into daily tools",
      color: "from-slate-50 to-teal-50",
      titleColor: "text-green",
      shadow: "shadow-[0_0_15px_rgba(5,147,136,0.2)]",
      titleColor1: "bg-green",
      items: [
        {
          name: "Explore AXOS",
          details: "View the product overview, module scope, and deployment direction",
          bg: "bg-teal-100",
          link: "/products/axos",
          live: true,
        },
        {
          name: "Request Access",
          details: "Start a product conversation with the ScotiTech team",
          bg: "bg-teal-100",
          link: "/contact",
          live: true,
        },
      ],
    },
  ];

  const supportingProducts = [
    {
      title: "ClarityPath",
      subtitle: "Private Decision-Support App",
      color: "from-slate-50 to-slate-100",
      titleColor: "text-yellow",
      shadow: "shadow-[0_0_15px_rgba(188,185,106,0.2)]",
      titleColor1: "bg-yellow",
      items: [
        {
          name: "Access from AppDeploy",
          details: "Available for Everyone via AppDeploy",
          bg: "bg-slate-100",
          link: "https://appdeploy.scotitech.com/w/appdeploy-platform",
          live: true,
        },
      ],
    },
  ];

  return (
    <div className="bg-white text-black py-12 overflow-hidden">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-karla font-medium text-center mt-4 min-[570px]:my-4 min-[1000px]:my-10 relative w-full"
        >
          <p className="text-[26px] min-[500px]:text-[3rem] min-[630px]:text-[4rem] font-bold text-black opacity-[0.04] text-nowrap -z-0 w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Explore Our Products
          </p>
          <h2 className="relative text-3xl min-[500px]:text-4xl sm:text-5xl z-10">
            Explore Our Products
          </h2>
          <p className="relative z-10 mt-4 max-w-3xl mx-auto text-slate-700 text-lg font-lora leading-8">
            AppDeploy and AXOS lead the main commercial story, with
            ClarityPath presented as a supporting product for a more specific
            use case.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto py-8 space-y-8">
          <div>
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500 mb-4 text-center md:text-left">
              Core Products
            </p>
            <div className="grid min-[600px]:grid-cols-2 justify-center items-start gap-4 min-[740px]:gap-8">
              {coreProducts.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -60 : 60,
                    y: 30,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 14,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className={`py-6 px-4 min-[830px]:px-6 rounded-2xl h-full border border-gray-200/80 bg-gradient-to-br ${section.color} shadow-[0_18px_40px_rgba(15,23,42,0.08)]`}
                >
                  <h2
                    className={`text-2xl sm:text-4xl font-semibold font-karla mb-3 ${section.titleColor}`}
                  >
                    {section.title}
                  </h2>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-gray-700 text-[16px] sm:text-[18px] font-lora mb-4"
                  >
                    {section.subtitle}
                  </motion.p>

                  <div className="flex flex-col gap-4">
                    {section.items.map((item, i) => {
                      const Wrapper = item.live ? "a" : "div";
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: i * 0.1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                        >
                          <Wrapper
                            href={item.live ? item.link : undefined}
                            target={item.live ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className={`flex justify-between items-center ${
                              item.bg
                            } rounded-lg px-4 py-3 border border-white/70 shadow-sm transition ${
                              item.live
                                ? "hover:shadow-md hover:bg-opacity-90 cursor-pointer"
                                : "opacity-70 cursor-not-allowed"
                            }`}
                          >
                            <div>
                              <p className="font-semibold font-karla text-gray-800">
                                {item.name}
                              </p>
                              <p className="text-xs font-lora sm:text-sm text-gray-500">
                                {item.details}
                              </p>
                            </div>
                            <div
                              className={`rounded-full p-2 shadow-sm ${
                                item.live
                                  ? `${section.titleColor1} text-white`
                                  : `${section.titleColor1} opacity-70 text-white`
                              }`}
                            >
                              {item.live ? (
                                <ExternalLink className="size-5" />
                              ) : (
                                <Clock className="size-5" />
                              )}
                            </div>
                          </Wrapper>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-gray-200/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-slate-500 mb-4">
              Supporting Product
            </p>
            {supportingProducts.map((section) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <h2
                      className={`text-2xl sm:text-3xl font-semibold font-karla mb-3 ${section.titleColor}`}
                    >
                      {section.title}
                    </h2>
                    <p className="text-gray-700 text-[16px] sm:text-[18px] font-lora">
                      {section.subtitle}
                    </p>
                  </div>

                  <div className="w-full lg:max-w-md flex flex-col gap-4">
                    {section.items.map((item, i) => (
                      <motion.a
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.35,
                          delay: i * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex justify-between items-center ${item.bg} rounded-lg px-4 py-3 border border-white/70 shadow-sm transition hover:shadow-md hover:bg-opacity-90 cursor-pointer`}
                      >
                        <div>
                          <p className="font-semibold font-karla text-gray-800">
                            {item.name}
                          </p>
                          <p className="text-xs font-lora sm:text-sm text-gray-500">
                            {item.details}
                          </p>
                        </div>
                        <div
                          className={`rounded-full p-2 shadow-sm ${section.titleColor1} text-white`}
                        >
                          <ExternalLink className="size-5" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// OLDER VERSION WITH MULTIPLE LINKS FOR FUTURE USE //

function DownloadDashboard1() {
  const data = [
    {
      title: "AppDeploy",
      subtitle: "iOS Distribution Platform",
      color: "from-blue-50 to-blue-100",
      shadow: "shadow-[0_0_15px_rgba(45,100,230,0.2)]",
      titleColor: "text-blue",
      titleColor1: "bg-blue",
      items: [
        {
          name: "macOS App",
          details: "v2.1.0 • 45 MB • macOS 11+",
          bg: "bg-blue-100",
          link: "",
        },
        {
          name: "Windows App",
          details: "v2.1.0 • 52 MB • Windows 10+",
          bg: "bg-blue-100",
          link: "",
        },
        {
          name: "CLI Tool",
          details: "v2.1.0 • 12 MB • Cross-platform",
          bg: "bg-blue-100",
          link: "",
        },
      ],
    },
    {
      title: "AXOS",
      subtitle: "SaaS Cost Optimization",
      color: "from-teal-50 to-teal-100",
      titleColor: "text-green",
      shadow: "shadow-[0_0_15px_rgba(5,147,136,0.2)]",
      titleColor1: "bg-green",
      items: [
        {
          name: "Web Dashboard",
          details: "Latest • N/A • Browser-based",
          bg: "bg-teal-100",
          link: "",
        },
        {
          name: "Desktop App",
          details: "v1.8.2 • 38 MB • Windows/macOS",
          bg: "bg-teal-100",
          link: "",
        },
        {
          name: "Browser Extension",
          details: "v1.5.1 • 2 MB • Chrome/Firefox",
          bg: "bg-teal-100",
          link: "",
        },
      ],
    },
    {
      title: "ClarityPath",
      subtitle: "Private decision-support app",
      color: "from-yellow-50 to-yellow-100",
      titleColor: "text-yellow",
      shadow: "shadow-[0_0_15px_rgba(188,185,106,0.2)]",
      titleColor1: "bg-yellow",
      items: [
        {
          name: "iOS App",
          details: "v1.4.3 • 42 MB • iOS 15+",
          bg: "bg-yellow-100",
          link: "",
        },
        {
          name: "Android App",
          details: "v1.4.2 • 38 MB • Android 9+",
          bg: "bg-yellow-100",
          link: "",
        },
      ],
    },
  ];

  return (
    <div className="bg-white text-black py-10">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full">
        <div className="font-karla font-medium text-center mt-4 min-[570px]:my-4 min-[1000px]:my-10 relative w-full">
          <p className="text-[30px] min-[500px]:text-[3.5rem] min-[630px]:text-[4.5rem] font-bold text-black opacity-5 text-nowrap -z-0 w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Product Download
          </p>
          <h2 className="relative text-3xl min-[500px]:text-4xl sm:text-5xl z-10">
            Product Download
          </h2>
        </div>

        <div className="grid min-[600px]:grid-cols-2 justify-center items-start gap-4 min-[740px]:gap-8 py-8">
          {data.map((section) => (
            <div
              key={section.title}
              className={`py-6 px-3 min-[830px]:px-6 rounded-2xl h-full ${section.shadow}`}
            >
              <h2
                className={`text-2xl sm:text-4xl font-semibold font-karla mb-3 ${section.titleColor}`}
              >
                {section.title}
              </h2>
              <p className="text-gray-900 text-[16px] sm:text-[18px] font-lora mb-2">
                {section.subtitle}
              </p>

              <div className="flex flex-col gap-4">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className={`flex min-[830px]:justify-between items-center ${item.bg}  rounded-lg px-4 min-[600px]:px-2 min-[775px]:px-4 py-3 shadow-sm`}
                  >
                    <button
                      className={`flex min-[830px]:hidden mr-3 shrink-0 rounded-full min-[830px]:p-2 p-1.5 shadow hover:bg-gray-50 transition ${section.titleColor1}`}
                    >
                      <Download alt="download" className="size-5 text-white" />
                    </button>
                    <div className="">
                      <p className="font-semibold font-karla  text-gray-800">
                        {item.name}
                      </p>
                      <p className="text-xs font-lora sm:text-sm text-gray-500">
                        {item.details}
                      </p>
                    </div>
                    <button
                      className={`cursor-pointer text-white hover:text-black hidden min-[830px]:flex rounded-full p-2 shadow hover:bg-gray-50/90 transition ${section.titleColor1}`}
                    >
                      <Download alt="download" className="size-5 " />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
