import React from "react";

const CaptionStudio = () => {
  const features = [
    {
      icon: "/images/products/aicaptionstudio/idea.png",
      text: "Generate endless caption ideas for your photos, videos to showcase.",
    },
    {
      icon: "/images/products/aicaptionstudio/voice.png",
      text: "Craft compelling posts that capture your brand's unique voice and identity.",
    },
    {
      icon: "/images/products/aicaptionstudio/hashtag.png",
      text: "Discover relevant hashtags to expand your reach, visibility and engagement.",
    },
    {
      icon: "/images/products/aicaptionstudio/creative.png",
      text: "Save hours of creative work every week and focus on what you do best.",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20
 ">
      <section className="relative w-full py-16   bg-white">
        <h4 className="lg:text-3xl font-karla  min-[1570px]:text-7xl font-semibold text-[#641171] mb-4">
          What is AI Caption Studio?
        </h4>
        <p className="text-black min-[1570px]:text-[24px] text-[18px] min-[1570px]:mb-3 font-medium mb-12  font-lora ">
          Unlike basic text editors or manual brainstorming, AI Caption Studio
          is an intelligent content partner built for anyone who wants to win on
          social media.
        </p>

        {/* Features Grid */}
        <div className="grid min-[1500px]:mt-[100px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 justify-center items-center max-w-7xl mx-auto ">
          {features.map((item, index) => (
            <div
              key={index}
              className="h-full relative group flex flex-col z-20 items-center text-center rounded-full transition-all duration-500 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_8px_rgba(246,188,255,0.7)] py-16  px-6 max-w-[260px] mx-auto hover:bg-[#641171] ">
              {/* Icon Circle */}
              <div
                className="absolute min-[1570px]:h-24 min-[1570px]:w-24 bg-opacity-100 -top-7 w-18 h-18 border-6  border-white bg-[#F6BCFF] rounded-full  shadow-3xl 
                flex items-center justify-center shadow-[0_0_20px_rgba(160,80,255,0.3)] 
                group-hover:bg-[#BE6FDB] duration-500"
              >
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-8 h-8 min-[1570px]:h-12 min-[1570px]:w-12 object-contain"
                />
              </div>

              {/* Text */}
              <p
                className="mt-6 h-fit text-black text-[15px] min-[1570px]:text-[20px]  px-4 text-base leading-relaxed transition-all duration-500 group-hover:text-white font-lora font-semibold rounded-full my-[15px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaptionStudio;
