"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AppDeployProfileSection() {
  return (
    <section className="relative bg-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F6F2FF] via-white to-[#E9F3F7]" />

      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 py-10 lg:py-16">
        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[#3D297A] text-white rounded-2xl px-6 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 shadow-[0_12px_30px_rgba(61,41,122,0.35)]">
            <div className="text-center sm:text-left">
              <p className="font-karla text-base sm:text-lg font-semibold">
                Book a discovery call
              </p>
              <p className="font-lora text-xs sm:text-sm text-white/80 mt-1 max-w-md">
                Talk to the ScotiTech team about private distribution, ABM
                setup, and how AppDeploy can fit your deployment strategy.
              </p>
            </div>

            <Link
              href="https://calendly.com/pradeepdahiya2411/30min"
              target="_blank"
              className="inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-[#3D297A] font-karla font-semibold px-6 sm:px-8 py-2.5 rounded-full text-sm sm:text-base shadow-md cursor-pointer hover:bg-[#F2ECFF] transition"
              >
                Book a discovery call
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
