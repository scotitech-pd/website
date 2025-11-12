"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function PainPointStory() {
  const story = [
    {
      title: "Rejected for Guideline 4.3(b)",
      text: "When our app ClarityPath was rejected under Apple’s 'Design – Spam' guideline, we realized how hard private app distribution had become for developers and small teams.",
      img: "/images/products/appdeploy/1.jpeg",
    },
    {
      title: "From Rejection to Release",
      text: "Instead of giving up, we learned the system inside out. That rejection became our biggest motivation — to help others avoid the same pain. It was the spark that led to AppDeploy.",
      img: "/images/products/appdeploy/5.jpeg",
    },
    {
      title: "Finally Approved",
      text: "Months later, after continuous iteration, ClarityPath was officially approved. That moment of success taught us the importance of compliance, persistence, and smarter deployment systems.",
      img: "/images/products/appdeploy/4.jpeg",
    },
    {
      title: "Introducing AppDeploy",
      text: "AppDeploy was built from that experience — a secure, ABM-ready app deployment platform designed to simplify private app releases for iOS and Android without expensive MDM setups.",
      img: "/images/products/appdeploy/3.jpeg",
    },
    {
      title: "One Mission — Simplify Distribution, Empower Innovation",
      text: "Today, AppDeploy helps developers, schools, and organizations distribute apps faster, safer, and smarter. Our mission is simple — make deployment easy so innovation never slows down.",
      img: "/images/products/appdeploy/2.jpeg",
    },
  ];

  return (
    <section className="relative bg-white py-20 font-karla text-gray-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-20">
        {/* Heading */}
        <div className="text-center mb-14 relative">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#3D297A] relative z-10">
            From Rejection to Release — The Birth of AppDeploy
          </h2>
          <p className="mt-3 text-gray-600 font-lora text-lg max-w-3xl mx-auto">
            A journey that turned setbacks into solutions — built to empower
            teams facing the same struggles we did.
          </p>
          <span className="absolute hidden lg:block text-[90px] font-bold text-gray-300/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
            Our Story
          </span>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Keyboard]}
          autoplay={{ delay: 6500, disableOnInteraction: true }}
          loop={true}
          pagination={false}
          keyboard={{ enabled: true }}
          slidesPerView={1}
          spaceBetween={50}
          className="pb-12"
        >
          {story.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-center justify-center gap-10"
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center p-3">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="object-contain w-full max-h-[320px] lg:max-h-[380px] transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 text-center lg:text-left px-2">
                  <h3 className="text-2xl lg:text-3xl font-semibold text-[#3D297A] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-lora text-md leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:mt-10 mt-8 text-center max-w-3xl mx-auto bg-[#F5EDFF] border-l-[8px] border-[#7E1A8E] rounded-xl shadow-md p-10 font-lora"
        >
          <p className="text-gray-700 text-md lg:text-lg italic">
            “Every rejection hides a lesson — AppDeploy was born from ours, to
            make sure no developer has to face the same roadblock again.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
`   `;
