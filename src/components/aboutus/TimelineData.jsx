"use client";
import { motion } from "framer-motion";

export default function Timeline() {
  const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const timelineData = [
    {
      year: "2022",
      title: "The Spark",
      desc1: "Where frustration turned into innovation.",
      desc2:
        "Founders realised gaps in accessibility, app distribution, and digital care.",
      side: "left",
    },
    {
      year: "2023",
      title: "Exploration and Early Prototypes",
      desc1: "Small experiments leading to big insights.",
      desc2: "Built early prototypes and analysed real-world user problems.",
      side: "right",
    },
    {
      year: "2024",
      title: "From Ideas to Working Solutions",
      desc1: "When concepts began proving real value.",
      desc2: "Internal AppDeploy version solved key distribution challenges.",
      side: "left",
    },
    {
      year: "Nov 2024 ",
      title: "Official Incorporation",
      desc1: "A vision became a company in November 2024.",
      desc2:
        "ScotiTech Ltd registered in the UK for people-centric technology.",
      side: "right",
      style: "text-center"
    },
    {
      year: "2025",
      title: "Building the ScotiTech Ecosystem",
      desc1: "A year of execution, expansion, and product growth.",
      desc2:
        "Major development across AppDeploy, ElderConnect+, Opsly, ClarityPath and more.",
      side: "left",
    },
    {
      year: "2026+",
      title: "Looking Forward to the Future",
      desc1: "Building technology that feels human.",
      desc2: "Global expansion across secure cloud, AI automation, and digital care.",
      side: "right",
    },
    // {
    //   year: "2027",
    //   title: "Towards a Unified Platform",
    //   desc1: "Connecting innovation into one ecosystem.",
    //   desc2: "AppDeploy, AI services, and cloud began merging.",
    //   side: "left",
    // },
    // {
    //   year: "2028",
    //   title: "Scaling with Purpose",
    //   desc1: "Sustainable growth powered by trust.",
    //   desc2:
    //     "Adoption increased across industries seeking secure and smart tech.",
    //   side: "right",
    // },
    // {
    //   year: "2029+",
    //   title: "",
    //   desc1: "",
    //   desc2:
    //     "Global expansion across secure cloud, AI automation, and digital care.",
    //   side: "left",
    // },
  ];

  return (
    <div className="bg-white py-12 overflow-hidden">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        {/* Section Title */}
        <div className="relative">
          <div className="hidden lg:block absolute -top-2 left-1/2 transform -translate-x-1/2 min-w-[650px] text-center pointer-events-none">
            <p className="text-7xl lg:text-[70px] font-karla font-bold text-gray-500/60 opacity-50">
              Our Story
            </p>
          </div>
          <div className="flex justify-center items-center flex-col mb-[20px]">
            <h3 className="text-black font-karla text-[30px] min-[500px]:text-[36px] lg:text-[40px] font-semibold">
              Our Story
            </h3>
            <p className="text-black font-lora text-[12px] py-2 lg:text-center min-[500px]:text-[16px] lg:p-6 lg:px-[70px] lg:text-[15px]">
              From humble beginnings to global impact, ScotiTech evolved from a
              boutique IT services company in London to a globally recognized
              organization delivering cutting-edge, product-first solutions.
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden space-y-6">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-18">
              {/* Vertical line */}
              {index < timelineData.length - 1 && (
                <div className="absolute left-8 top-20 -bottom-15 w-1 bg-[#E38DF0]"></div>
              )}

              {/* Year badge */}
              <div className="absolute left-0 top-5 w-16 h-16 bg-[#641171] rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold font-karla text-center">
                  {item.year}
                </span>
              </div>

              {/* Content card */}
              <motion.div
                className="bg-[#FBDFFF] rounded-xl p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={item.side === "left" ? leftVariant : rightVariant}
              >
                <h3 className="text-md font-bold text-black mb-2 font-karla">
                  {item.title}
                </h3>
                <p className="text-black max-[500px]:text-sm leading-relaxed font-lora">
                  {item.desc1} <br /> {item.desc2}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {timelineData.map((item, index) => {
            const isLeft = item.side === "left";
            const nextItem = timelineData[index + 1];
            const hasNext = !!nextItem;

            return (
              <div
                key={index}
                className="relative"
                style={{
                  marginBottom:
                    index < timelineData.length - 1 ? "100px" : "0px",
                }}
              >
                {isLeft ? (
                  // LEFT SIDE LAYOUT
                  <div className="relative">
                    <div className="flex items-start relative">
                      {/* Year Circle */}
                      <div className="w-20 h-20 absolute -top-10 bg-[#641171] rounded-full flex items-center justify-center z-20">
                        <span className="text-white text-2xl font-bold font-karla">
                          {item.year}
                        </span>
                      </div>

                      {/* Content Card */}
                      <motion.div
                        className="ml-8 bg-[#FBDFFF] z-10 rounded-2xl p-8 pl-16 min-w-[400px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={leftVariant}
                      >
                        <h3 className="text-xl font-bold text-black mb-2 font-karla">
                          {item.title}
                        </h3>
                        <p className="text-black text-sm leading-relaxed font-lora font-medium">
                          {item.desc1} <br /> {item.desc2}
                        </p>
                      </motion.div>
                    </div>

                    {/* Connector to Right */}
                    {hasNext && nextItem.side === "right" && (
                      <div className="absolute left-1/2 top-10">
                        <div className="relative">
                          <div className="absolute -left-100 0 top-5 h-1 bg-[#E38DF0] w-[700px]"></div>
                          <div className="absolute bg-[#368F99] rounded-full w-[15px] h-[15px] left-[295px] top-[14px] z-2"></div>
                          <div className="absolute w-1 bg-[#E38DF0] left-[300px] top-4 h-[220px]"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  // RIGHT SIDE LAYOUT
                  <div className="relative flex justify-end">
                    <div className="flex items-start flex-row-reverse">
                      {/* Year Circle */}
                      <div className="w-20 h-20 absolute -top-10 bg-[#641171] rounded-full flex items-center justify-center z-20">
                        <span className= "text-center text-white text-2xl font-bold font-karla " >
                          {item.year} 
                        </span>
                      </div>

                      {/* Content Card */}
                      <motion.div
                        className="mr-8 bg-[#FBDFFF] rounded-2xl p-8 max-w-md z-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={rightVariant}
                      >
                        <h3 className="text-xl font-bold text-black mb-2 font-karla">
                          {item.title}
                        </h3>
                        <p className="text-black text-sm leading-relaxed font-lora font-medium">
                          {item.desc1} <br /> {item.desc2}
                        </p>
                      </motion.div>
                    </div>

                    {/* Connector to Left */}
                    {hasNext && nextItem.side === "left" && (
                      <div className="absolute right-1/2 top-10">
                        <div className="relative">
                          <div className="absolute -right-97 top-5 bg-[#E38DF0] w-[700px] h-1"></div>
                          <div className="absolute bg-[#368F99] rounded-full w-[15px] h-[15px] right-[302px] top-[15px] z-2"></div>
                          <div className="absolute w-1 bg-[#E38DF0] right-[308px] top-4 h-[220px]"></div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
