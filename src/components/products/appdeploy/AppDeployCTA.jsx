"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AppDeployProfileSection() {
  return (
    <section className="relative bg-white mb-10 lg:mb-14">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F6F2FF] via-white to-[#E9F3F7]" />

      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 lg:py-0">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-karla font-bold text-[#3D297A] leading-snug">
            Need a secure way to deploy your private IOS app?
          </h2>
        </motion.div>

        {/* Main content block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 max-w-4xl mx-auto text-[15px] sm:text-[16px] font-lora text-gray-800 space-y-4 leading-relaxed"
        >
          <p>
            Whether you are shipping an internal tool, a specialist B2B product,
            or a regulated-sector app, AppDeploy gives you a clean, ABM-ready
            distribution channel without the cost and overhead of MDM.
          </p>

          <div className="bg-main-dark border font-semibold border-gray-700 flex items-center text-white w-fit px-5 py-2 rounded-full text-sm font-karla">
            <span className="size-2 bg-[#29CC6A] rounded-full inline-block mr-2 "></span>
            Designed & delivered by ScotiTech
          </div>

          <p>
            Already have an app in App Store Connect or ABM? We can plug it into
            AppDeploy and design a deployment plan that matches your user base,
            budget and compliance needs.{" "}
          </p>

          <p className="mt-3 text-[14px] sm:text-[15px]">
            <span className="font-semibold text-[#3D297A]">
              We can support your full journey from ABM setup and custom app
              submissions
            </span>{" "}
            through to live deployment via AppDeploy.
          </p>
        </motion.div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 max-w-4xl mx-auto"
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
