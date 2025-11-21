"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // ⬅️ Added for animations

const products = [
  {
    name: "AppDeploy",
    tagline: "Effortless iOS App Distribution",
    logo: "/images/home/appdeploy.png",
    link: "/appdeploy",
  },
  {
    name: "Opsly",
    tagline: "All-in-One Operations Platform",
    logo: "/images/home/opsly.png",
    link: "/opsly",
    button: "Coming Soon!",
  },
  {
    name: "AI Caption Studio",
    tagline: "Smarter Content Creation",
    logo: "/images/home/ai.png",
    link: "/aicaptionstudio",
  },
  {
    name: "ClarityPath",
    tagline: "Private Decision-Support App",
    logo: "/images/home/claritypath.png",
    link: "/claritypath",
  },
];

export default function OurProducts() {
  return (
    <section className="pt-5 pb-20 text-center relative w-[100%] overflow-hidden">
      <div className="absolute bottom-0 w-screen -left-0.5">
        <img
          src="/images/home/bgjoint.png"
          alt="background"
          className="object-cover w-screen"
        />
      </div>
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full">
        {/* Section Text Animation */}
        <motion.h2
          className="text-main font-karla text-4xl sm:text-5xl font-semibold mb-2 sm:mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Products
        </motion.h2>

        <motion.h3
          className="text-xl sm:text-3xl min-[1170px]:text-4xl lg:text-2xl font-semibold font-karla text-gray-900 mb-3"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Products Designed to Simplify, Empower, and Scale
        </motion.h3>

        <motion.p
          className="text-black max-w-4xl mx-auto mb-12 min-[500]:text-xl font-lora tracking-wider"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          From app distribution to operations and content creation, our tools
          cut complexity and deliver real-world value.
        </motion.p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 min-[590px]:grid-cols-2 min-[1060px]:grid-cols-4 gap-8 mb-10">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -80 : 80,
                y: 40,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
              className="bg-white relative rounded-2xl hover:shadow-[0_0_25px_rgba(128,128,128,0.9)] transition shadow-[0_0_25px_rgba(128,128,128,0.6)] max-w-[320px] mx-auto"
            >
              <div className="flex justify-center items-center rounded-t-2xl overflow-hidden">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="py-8 px-1.5 text-black">
                <h4 className="text-xl font-semibold font-karla tracking-wide">
                  {p.name}
                </h4>
                <p className="text-black/70 mt-2 font-lora font-semibold">
                  {p.tagline}
                </p>
              </div>
              {p.button ? (
                <div className="bg-main font-karla tracking-wider font-semibold text-white text-nowrap px-6 py-2 rounded-full text-sm absolute bottom-0 transform translate-y-1/2 left-1/2 -translate-x-1/2 cursor-none select-none">
                  {p.button}
                </div>
              ) : (
                <Link
                  href={`/products${p.link}`}
                  className="bg-main font-karla tracking-wider font-semibold text-white text-nowrap px-6 py-2 rounded-full text-sm hover:bg-main/90 absolute bottom-0 transform translate-y-1/2 left-1/2 -translate-x-1/2"
                >
                  Read more
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
