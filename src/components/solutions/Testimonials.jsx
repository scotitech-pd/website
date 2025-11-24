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
  // {
  //   id: 1,
  //   img: "/images/solution/evan.jpg",
  //   text: "ElderConnect was easy enough that my mother figured it out on her own, which says everything.",
  //   name: "Evan",
  // },
  {
    id: 1,
    img: "/images/solution/rohit.jpeg",
    text: "AppDeploy made distributing our test app incredibly quick, and our team could install it without any technical setup.",
    name: "Rohit Ahlawat, AVISKAAR ENTERPRISES LTD",
  },
  {
    id: 2,
    img: "/images/solution/socialmedia.jpg",
    text: "AI Caption Studio saved my team 10 hours/week in caption writing and helped us to grow our engagement over social media. ",
    name: "Social Media Manager",
  },
  {
    id: 3,
    img: "/images/solution/vijay.jpeg",
    text: "ClarityPath helped me talk through decisions more clearly and gave me space to think before committing.",
    name: "Vijay Rathee, Founder - Digital Entrepreneur Bizztor",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[linear-gradient(to_bottom,#FFFFFF_0%,#E0F0F2_29%,#368F99_100%)] py-10 min-[500px]:py-15 sm:py-20 lg:py-24 text-center relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full z-10 ">
        <div className="font-karla font-medium text-4xl text-center min-[500px]:mb-5 relative w-fit mx-auto">
          <p className="absolute max-[500px]:hidden text-[4.3rem] font-semibold text-black font-karla opacity-5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-nowrap select-none">
            Testimonials
          </p>
          <h2 className="text-2xl min-[850px]:text-3xl font-medium text-black font-karla">
            Testimonials
          </h2>
        </div>
        <p className="text-xl min-[850px]:text-2xl text-main-dark font-medium mb-5 font-lora tracking-wide">
          Hear From Our Customers
        </p>
      </div>

      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full z-10 ">
        <div>
          <Carousel
            className="w-full relative px-6 sm:px-10  "
            opts={{ loop: true }}
          >
            <CarouselContent className="h-full ">
              {testimonials1.map((t, i) => (
                <CarouselItem
                  key={i}
                  className="basic-1/2 lg:basis-1/3 pt-14 pb-5 h-full"
                >
                  <div
                    key={t.id}
                    className={` bg-white rounded-2xl shadow-lg px-7 py-12 mx-5 relative transition-all duration-500 h-full ${""}`}
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
                    <Quote className="absolute top-8 left-8 text-gray-200 w-12 h-12 rotate-180" />

                    {/* Text */}
                    <p className="relative z-[60] text-main-dark mt-10 text-lg leading-relaxed font-medium font-karla">
                      “{t.text}”
                    </p>
                    <p className="relative z-[60] text-grey mt-6 text-lg italic font-lora">
                      – {t.name}
                    </p>

                    {/* Closing quote */}
                    <Quote className="absolute bottom-8 right-8 text-gray-200 w-12 h-12 " />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-main hover:bg-purple-50  left-0 cursor-pointer z-10" />
            <CarouselNext className="text-main hover:bg-purple-50 right-0 cursor-pointer z-10 " />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
