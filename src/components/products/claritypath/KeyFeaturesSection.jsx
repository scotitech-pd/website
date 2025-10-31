"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const cards = [
  {
    icon: "/icons/property.svg",
    title: "Property Planning",
    text: "Find clarity around property and home investments.",
  },
  {
    icon: "/icons/finance.svg",
    title: "Financial Growth",
    text: "Track opportunities for saving, investing, and expansion.",
  },
  {
    icon: "/icons/roadmap.svg",
    title: "Yearly Roadmap",
    text: "A 12-month planning overview across career, finance, relationships, and health.",
  },
  {
    icon: "/icons/career.svg",
    title: "Career Success",
    text: "Identify growth and promotion windows.",
  },
  {
    icon: "/icons/relationship.svg",
    title: "Relationship Growth",
    text: "Gain insights for harmony and emotional balance.",
  },
];

export default function KeyFeaturesSection() {
  return (
    <section className="w-full bg-white">
      <div className="grid md:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="bg-purple-800 text-white p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 text-[10rem] font-bold text-white select-none leading-none">
            Key Features
          </div>
          <div className="relative z-10 max-w-lg">
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <h2 className="text-4xl font-serif font-bold mb-6">
              Daily & Weekly Planning Signals
            </h2>
            <p className="text-lg leading-relaxed">
              Personalised daily cues and weekly overviews that guide focus,
              momentum, and decision-making.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#0e0e0e] text-white relative flex flex-col justify-center">
          <div className="absolute inset-0">
            <Image
              src="/images/bg-tech.jpg"
              alt=""
              fill
              className="object-cover opacity-30"
            />
          </div>

          <div className="relative z-10 px-10 py-12">
            <h2 className="text-3xl font-bold text-center">
              Strategic Life Reports
            </h2>
            <p className="text-center text-lg mb-10 text-gray-200">
              (Premium Modules)
            </p>

            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {cards.map((card, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2"
                  >
                    <div className="bg-white rounded-2xl p-6 text-black shadow-md text-center hover:shadow-lg transition">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                        <Image
                          src={card.icon}
                          alt={card.title}
                          width={28}
                          height={28}
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-purple-700 mb-2">
                        • {card.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-snug">
                        {card.text}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex justify-center gap-3 mt-6">
                <CarouselPrevious className="bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10" />
                <CarouselNext className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-10 h-10" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
