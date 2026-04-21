"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AppDeployProfileSection() {
  return (
    <section className="relative bg-white">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#F8FAFC_0%,#EEF2FF_48%,#E0F2FE_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.06),transparent_24%)]" />

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
                Talk to the ScotiTech team about Apple Business based internal
                distribution, rollout planning, and how AppDeploy can fit your
                deployment model.
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
