"use client";

import Link from "next/link";
import { motion } from "framer-motion"; // <-- Motion added

export default function UnlockSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/home/unlockbg.png')",
      }}
    >
      <img
        src="/images/home/rectangle.png"
        alt="bg"
        className="absolute bottom-0 h-full right-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full grid-cols-1 min-[1000px]:grid-cols-[60%_40%] grid items-center justify-between ">
        {/* Left Content */}
        <div className="relative z-10 py-24 sm:py-28 w-full">
          <h1 className="text-4xl md:text-5xl font-semibold mb-5 font-karla">
            Work With Greater Clarity
          </h1>
          <h2 className="text-lg md:text-2xl mb-3 font-medium font-karla">
            Practical software for rollout, operations, and accessibility
          </h2>
          <p className="text-white/90 font-lora mb-4 text-lg leading-7 max-w-2xl">
            Teams work better when daily operations are clearer and technology
            feels easier to trust. ScotiTech builds focused products that help
            organisations improve internal distribution, reduce tool sprawl,
            and support more efficient digital workflows.
          </p>

          <p className="text-sm md:text-lg bg-main/90 inline-block px-2 sm:px-4 py-1 font-karla rounded-md">
            Designed for practical rollout, control, and long-term usability.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="px-6 py-2 text-lg rounded-full shadow-sm transition font-lora text-white bg-gray-800/80 border border-white/70 hover:bg-gray-800"
            >
              Speak with Our Team
            </Link>
          </div>
        </div>

        {/* Right Stats */}
        <div className=" z-10 h-full w-full min-[1122px]:block hidden relative">
          <StatCircle
            number="2"
            label="Core Platforms"
          
            className="absolute top-6 right-16 size-40 font-karla hover:scale-101 duration-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.9)]"
          />
          <StatCircle
            number="3"
            label="Active Products"
            delay={0.2}
            className="absolute top-60   right-24 size-36 font-karla hover:scale-101 duration-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.9)]"
          />
          <StatCircle
            number="2"
            label="Deployment Paths"
            delay={0.3}
            className="absolute bottom-16 right-64 size-32 font-karla hover:scale-101 duration-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.9)]"
          />
          <StatCircle
            number="UK"
            label="Operating Base"
            delay={0.4}
            className="absolute bottom-4 right-[430px] font-karla size-32 hover:scale-101 duration-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.9)]"
          />
        </div>
      </div>
    </section>
  );
}

// Motion-enhanced StatCircle – original positioning preserved
function StatCircle({ number, label, className, delay = 0 }) {
  return (
    <motion.div
      className={`bg-white text-main rounded-full flex flex-col items-center justify-center absolute shadow-[0_18px_40px_rgba(15,23,42,0.12)] ${className}`}
      initial={{ y: -100, opacity: 0 }} // Lowered start so it stays visible on load
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 1,
        bounce: 0.35,
        delay: delay,
      }}
      viewport={{ once: true, amount: 0.4 }} // Trigger when 40% visible
    >
      <span className="text-3xl font-bold">{number}</span>
      <span className="text-sm font-semibold text-center px-2">{label}</span>
    </motion.div>
  );
}
