"use client";
import { Quote } from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials1 = [
  {
    id: 1,
    img: "https://i.pravatar.cc/150?img=12",
    text: "Opsly showed us $10,000/year in wasted SaaS spend.",
    name: "CFO, Startup",
  },
  {
    id: 2,
    img: "https://i.pravatar.cc/150?img=32",
    text: "AppDeploy cut our app deployment costs by 75%.",
    name: "CTO, SaaS Company",
  },
  {
    id: 3,
    img: "https://i.pravatar.cc/150?img=47",
    text: "AI Caption Studio saved my team 10 hours/week in caption writing.",
    name: "Social Media Manager",
  },
  {
    id: 4,
    img: "https://i.pravatar.cc/150?img=47",
    text: "AI Caption Studio saved my team 10 hours/week in caption writing.",
    name: "Social Media Manager",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="bg-[linear-gradient(to_bottom,#FFFFFF_0%,#E0F0F2_29%,#368F99_100%)] py-24 text-center relative overflow-hidden">
      <div className="max-w-8xl mx-auto">
        <div className="font-karla font-medium text-4xl text-center my-10 relative w-full">
          <p className="text-[7rem] font-medium text-gray-500/10 text-nowrap -z-0 w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Testimonials
          </p>
          <h2 className="relative text-black z-10 font-bold">Testimonials</h2>
        </div>
        <p className="text-xl text-main-dark font-medium mb-5 font-lora">
          Hear From Our Customers
        </p>
      </div>

      <div className="relative z-0 max-w-7xl mx-auto">
        <div>
          <Carousel
            className="w-full relative px-6 sm:px-10"
            opts={{ loop: true }}
          >
            <CarouselContent>
              {testimonials1.map((t, i) => (
                <CarouselItem
                  key={i}
                  className="basic-full lg:basis-1/3 pt-14 pb-5"
                >
                  <div
                    key={t.id}
                    className={`bg-white rounded-2xl shadow-lg px-7 py-12 mx-5 relative transition-all duration-500 ${
                      i === index ? "scale-110" : "scale-100 opacity-90"
                    }`}
                  >
                    {/* Avatar */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-20 h-20 rounded-full border-4 border-main-dark object-cover"
                      />
                    </div>

                    {/* Quote Icon */}
                    <Quote className="absolute top-8 left-8 text-gray-200 w-12 h-12" />

                    {/* Text */}
                    <p className="text-main-dark mt-10 text-lg leading-relaxed font-medium">
                      “{t.text}”
                    </p>
                    <p className="text-grey mt-6 text-lg italic">– {t.name}</p>

                    {/* Closing quote */}
                    <Quote className="absolute bottom-8 right-8 text-gray-200 w-12 h-12 rotate-180" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-main hover:bg-purple-50  left-0 cursor-pointer z-10"/>
            <CarouselNext className="text-main hover:bg-purple-50 right-0 cursor-pointer z-10 "/>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
