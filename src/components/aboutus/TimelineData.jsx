export default function Timeline() {
  const timelineData = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started as a boutique IT services company in London",
      side: "left",
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Opened development center in Mumbai, India",
      side: "right",
    },
    {
      year: "2021",
      title: "First Product Launch",
      description: "Launched AppDeploy for iOS distribution",
      side: "left",
    },
    {
      year: "2022",
      title: "Product Suite Growth",
      description: "Added Opsly and AI Caption Studio to our portfolio",
      side: "right",
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Serving 10,000+ users across 50+ countries",
      side: "left",
    },
    {
      year: "2024",
      title: "Innovation Continues",
      description:
        "Scotitech started growing more with their customers and innvoations",
      side: "right",
    },
  ];

  return (
  
    <div className="bg-white py-12  overflow-hidden">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        {/* Section Title */}
        <div className="relative">
          <div className="hidden lg:block absolute -top-2 left-1/2 transform -translate-x-1/2 min-w-[650px] text-center pointer-events-none">
            <p className="text-7xl lg:text-[70px]  font-karla font-bold -tracking-tighter text-gray-500/60 opacity-50">
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
              <div className="absolute left-0 top-5 lg:w-24 lg:h-24 w-16 h-16 bg-[#641171] rounded-full flex items-center justify-center">
                <span className="text-white lg:text-3xl text-xl font-bold font-karla">
                  {item.year}
                </span>
              </div>

              {/* Content card */}
              <div className="bg-[#FBDFFF] rounded-xl p-6">
                <h3 className="lg:text-xl min-[500px]:text-lg text-md font-bold text-black mb-2 font-karla">
                  {item.title}
                </h3>
                <p className="text-black  max-[500px]:text-sm leading-relaxed font-lora">
                  {item.description}
                </p>
              </div>
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
                      <div className="w-20 h-20 absolute  z-20 -top-10 bg-[#641171] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-2xl font-bold font-karla">
                          {item.year}
                        </span>
                      </div>

                      {/* Content Card */}
                      <div className="ml-8 bg-[#FBDFFF] z-10 rounded-2xl p-8 pl-16 min-w-[400px]">
                        <h3 className="text-xl font-bold text-black mb-2 font-karla">
                          {item.title}
                        </h3>
                        <p className="text-black text-sm leading-relaxed font-lora">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Connector to Right */}
                    {hasNext && nextItem.side === "right" && (
                      <div className="absolute left-1/2 top-10">
                        <div className="relative">
                          {/* Horizontal line */}
                          <div className="absolute -left-[150px] top-0 h-1 bg-[#E38DF0] min-[1400px]:-left-[400px] min-[1400px]:w-[800px] w-[450px]"></div>

                          {/* Dot */}
                          <div className="absolute z-2 bg-[#368F99] rounded-full w-[15px] h-[15px] left-[295px] min-[1400px]:left-[400px] top-[-5px]"></div>

                          {/* Vertical line */}
                          <div className="absolute w-1 bg-[#E38DF0] left-[300px] min-[1400px]:left-[405px] top-1 h-[180px]"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  // RIGHT SIDE LAYOUT
                  <div className="relative flex justify-end">
                    <div className="flex items-start flex-row-reverse">
                      {/* Year Circle */}
                      <div className="w-20 h-20  absolute  z-20 -top-10 bg-[#641171] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-2xl font-bold">
                          {item.year}
                        </span>
                      </div>

                      {/* Content Card */}
                      <div className="mr-8 bg-[#FBDFFF] rounded-2xl p-8 max-w-md  z-10">
                        <h3 className="text-xl font-bold text-black mb-2">
                          {item.title}
                        </h3>
                        <p className="text-black text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Connector to Left */}
                    {hasNext && nextItem.side === "left" && (
                      <div className="absolute right-1/2 top-10">
                        <div className="relative">
                          {/* Horizontal line */}
                          <div className="absolute -right-[240px] top-0 min-[1400px]:w-[800px] min-[1400px]:-left-[400px]  bg-[#E38DF0] w-[550px] h-1"></div>

                          {/* Dot */}
                          <div className="absolute z-2 bg-[#368F99] rounded-full w-[15px] h-[15px] right-[302px] min-[1400px]:right-[402px] top-[-5px]"></div>

                          {/* Vertical line */}
                          <div className="absolute w-1 bg-[#E38DF0] right-[308px] top-1 h-[180px] min-[1400px]:-left-[412px]"></div>
                        </div>
                      </div>
                    )}

                    {/* Final Dot for Last Item */}
                    {/* {!hasNext && (
                      <div className="absolute right-1/2 top-10">
                        <div className="relative">
                          <div className="absolute -right-4 top-5 h-1 bg-[#E38DF0] w-[300px]"></div>
                          <div className="absolute bg-[#368F99] rounded-full w-[15px] h-[15px] right-[250px] top-[15px]"></div>
                          <div className="absolute w-1 bg-[#E38DF0] right-[282px] top-5 h-[30px]"></div>
                        </div>
                      </div>
                    )} */}
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
