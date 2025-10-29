export default function Timeline() {
  const timelineData = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started as a boutique IT services company in London",
      side: "left"
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Opened development center in Mumbai, India",
      side: "right"
    },
    {
      year: "2021",
      title: "First Product Launch",
      description: "Launched AppDeploy for iOS distribution",
      side: "left"
    },
    {
      year: "2022",
      title: "Product Suite Growth",
      description: "Added Opsly and AI Caption Studio to our portfolio",
      side: "right"
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Serving 10,000+ users across 50+ countries",
      side: "left"
    },
    {
      year: "2024",
      title: "",
      description: "",
      side: "right"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
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
                <span className="text-white text-3xl font-bold">{item.year}</span>
              </div>

              {/* Content card */}
              {item.title && (
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-black text-sm leading-relaxed">{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {timelineData.map((item, index) => {
            const isLeft = item.side === "left";
            const nextItem = timelineData[index + 1];
            const hasNext = nextItem !== undefined;

            return (
              <div key={index} className="relative" style={{ marginBottom: index < timelineData.length - 1 ? '100px' : '0' }}>
                {isLeft ? (
                  // LEFT SIDE LAYOUT
                  <div className="relative">
                    <div className="flex items-start">
                      {/* Year Circle */}
                      <div className="w-20 h-20 bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-2xl font-bold">{item.year}</span>
                      </div>
                      
                      {/* Content Card */}
                      <div className="ml-8 bg-purple-50 rounded-2xl p-8 max-w-md">
                        <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                        <p className="text-black text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Connector Line to Right */}
                    {hasNext && nextItem.side === "right" && (
                      <div className="absolute left-1/2 top-10">
                        <div className="relative">
                          {/* Horizontal line going right */}
                          <div className="absolute left-0 top-0 h-0.5 bg-teal-500" style={{ width: '280px' }}></div>
                          {/* Dot at the end */}
                          <div className="absolute bg-teal-500 rounded-full" style={{ width: '10px', height: '10px', left: '275px', top: '-4px' }}></div>
                          {/* Vertical line going down */}
                          <div className="absolute w-0.5 bg-teal-500" style={{ left: '280px', top: '5px', height: '110px' }}></div>
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
                        <span className="text-white text-2xl font-bold">{item.year}</span>
                      </div>
                      
                      {/* Content Card */}
                      {item.title && (
                        <div className="mr-8 bg-purple-50 rounded-2xl p-8 max-w-md">
                          <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                          <p className="text-black text-sm leading-relaxed">{item.description}</p>
                        </div>
                      )}
                    </div>

                    {/* Connector Line to Left */}
                    {hasNext && nextItem.side === "left" && (
                      <div className="absolute right-1/2 top-10">
                        <div className="relative">
                          {/* Horizontal line going left */}
                          <div className="absolute right-0 top-0 h-0.5 bg-teal-500" style={{ width: '280px' }}></div>
                          {/* Dot at the end */}
                          <div className="absolute bg-teal-500 rounded-full" style={{ width: '10px', height: '10px', right: '275px', top: '-4px' }}></div>
                          {/* Vertical line going down */}
                          <div className="absolute w-0.5 bg-teal-500" style={{ right: '280px', top: '5px', height: '110px' }}></div>
                        </div>
                      </div>
                    )}

                    {/* Final dot for 2024 */}
                    {!hasNext && (
                      <div className="absolute right-1/2 top-10">
                        <div className="relative">
                          {/* Horizontal line going left */}
                          <div className="absolute right-0 top-0 h-0.5 bg-teal-500" style={{ width: '280px' }}></div>
                          {/* Dot at the end */}
                          <div className="absolute bg-teal-500 rounded-full" style={{ width: '10px', height: '10px', right: '275px', top: '-4px' }}></div>
                          {/* Small vertical line */}
                          <div className="absolute w-0.5 bg-teal-500" style={{ right: '280px', top: '5px', height: '30px' }}></div>
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