"use client";

import { Quote } from "lucide-react";
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
    img: "/images/solution/rohit.jpeg",
    text: "AppDeploy gave our team a much clearer internal distribution flow, with a branded access path and less operational friction around releases.",
    name: "Rohit Ahlawat, AVISKAAR ENTERPRISES LTD",
  },
  {
    id: 2,
    img: "/images/solution/vijay.jpeg",
    text: "AXOS gives teams one secure place for mail, storage, coordination, and AI-assisted work, with far less dependence on disconnected tools.",
    name: "Vijay Rathee, Founder - Digital Entrepreneur Bizztor",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f7f7f5] py-16 md:py-20 text-center relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full z-10">
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.2em] text-[#4F46E5]/80 mb-3">
            Feedback
          </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold text-[#0F172A] mb-5">
            Signals from real users
          </h2>
          <p className="text-slate-700 font-lora text-lg leading-8">
            The strongest product stories come from clearer workflows and
            easier day-to-day use, not just feature lists.
          </p>
        </div>
      </div>

      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full z-10">
        <Carousel className="w-full relative px-6 sm:px-10" opts={{ loop: true }}>
          <CarouselContent className="h-full">
            {testimonials1.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/2 pt-6 pb-5 h-full">
                <div className="bg-white rounded-[1.8rem] border border-slate-200 px-7 py-10 mx-3 relative transition-all duration-500 h-full shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                  <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full border-4 border-slate-900/10">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <Quote className="absolute top-8 left-8 text-slate-200 w-10 h-10 rotate-180" />

                  <p className="relative z-10 text-slate-800 text-lg leading-8 font-medium font-karla">
                    “{t.text}”
                  </p>
                  <p className="relative z-10 text-slate-500 mt-6 text-base italic font-lora">
                    {t.name}
                  </p>

                  <Quote className="absolute bottom-8 right-8 text-slate-200 w-10 h-10" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-slate-900 hover:bg-slate-50 left-0 cursor-pointer z-10" />
          <CarouselNext className="text-slate-900 hover:bg-slate-50 right-0 cursor-pointer z-10" />
        </Carousel>
      </div>
    </section>
  );
}
