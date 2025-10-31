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
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      side: "right",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="relative">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 min-w-[650px] text-center pointer-events-none">
            <p className="text-8xl lg:text-[70px] font-karla font-bold -tracking-tighter text-gray-500/60 opacity-50">
              Our Story
            </p>
          </div>
          <div className="flex justify-center items-center flex-col mb-[20px]">
            <h3 className="text-black font-karla text-[40px] font-semibold">
              Our Story
            </h3>
            <p className="text-black font-lora text-center p-6 px-[70px] text-[15px]">
              From humble beginnings to global impact, ScotiTech evolved from a
              boutique IT services company in London to a globally recognized
              organization delivering cutting-edge, product-first solutions.
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden space-y-6">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-24">
              {/* Vertical line */}
              {index < timelineData.length - 1 && (
                <div className="absolute left-12 top-20 bottom-0 w-0.5 bg-teal-500"></div>
              )}

              {/* Year badge */}
              <div className="absolute left-0 top-0 w-24 h-24 bg-purple-900 rounded-full flex items-center justify-center">
                <span className="text-white text-3xl font-bold">
                  {item.year}
                </span>
              </div>

              {/* Content card */}
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-black text-sm leading-relaxed">
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
                    <div className="flex items-start">
                      {/* Year Circle */}
                      <div className="w-20 h-20 bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-2xl font-bold">
                          {item.year}
                        </span>
                      </div>

                      {/* Content Card */}
                      <div className="ml-8 bg-purple-50 rounded-2xl p-8 max-w-md">
                        <h3 className="text-xl font-bold text-black mb-2">
                          {item.title}
                        </h3>
                        <p className="text-black text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Connector to Right */}
                    {hasNext && nextItem.side === "right" && (
                      <div className="absolute left-1/2 top-10">
                        <div className="relative">
                          {/* Horizontal line */}
                          <div className="absolute left-0 top-0 h-0.5 bg-teal-500 w-[300px]"></div>

                          {/* Dot */}
                          <div className="absolute bg-teal-500 rounded-full w-[10px] h-[10px] left-[295px] top-[-5px]"></div>

                          {/* Vertical line */}
                          <div className="absolute w-0.5 bg-teal-500 left-[300px] top-0 h-[120px]"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  // RIGHT SIDE LAYOUT
                  <div className="relative flex justify-end">
                    <div className="flex items-start flex-row-reverse">
                      {/* Year Circle */}
                      <div className="w-20 h-20 bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-2xl font-bold">
                          {item.year}
                        </span>
                      </div>

                      {/* Content Card */}
                      <div className="mr-8 bg-purple-50 rounded-2xl p-8 max-w-md">
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
                          <div className="absolute right-0 top-0 h-0.5 bg-teal-500 w-[300px]"></div>

                          {/* Dot */}
                          <div className="absolute bg-teal-500 rounded-full w-[10px] h-[10px] right-[295px] top-[-5px]"></div>

                          {/* Vertical line */}
                          <div className="absolute w-0.5 bg-teal-500 right-[300px] top-0 h-[120px]"></div>
                        </div>
                      </div>
                    )}

                    {/* Final Dot for Last Item */}
                    {!hasNext && (
                      <div className="absolute right-1/2 top-10">
                        <div className="relative">
                          <div className="absolute right-0 top-0 h-0.5 bg-teal-500 w-[300px]"></div>
                          <div className="absolute bg-teal-500 rounded-full w-[10px] h-[10px] right-[295px] top-[-5px]"></div>
                          <div className="absolute w-0.5 bg-teal-500 right-[300px] top-0 h-[30px]"></div>
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
