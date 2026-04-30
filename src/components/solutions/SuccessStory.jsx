"use client";
import { motion } from "framer-motion";

export default function SuccessStory() {
  return (
    <section className="relative bg-white py-8 lg:py-20 font-karla text-gray-900">
      <div className="max-w-8xl mx-auto px-5 sm:px-10 md:px-20">
        {/* Heading */}
        <div className="text-center mb-14 relative">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#3D297A] relative z-10">
            Why AppDeploy Was Built
          </h2>
          <p className="mt-3 text-gray-600 font-lora text-lg max-w-3xl mx-auto">
            The product direction came from a real internal distribution
            problem and turned into a clearer operational model for private iOS
            delivery.
          </p>
          <span className="absolute text-nowrap hidden lg:block text-[90px] font-bold text-gray-300/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
            Success Story
          </span>
        </div>

        {/* Story content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-100 shadow-md py-4 lg:py-7 px-8 md:px-10 lg:px-14 relative z-10 font-lora"
        >
          <h3 className="text-2xl font-semibold text-[#3D297A] mb-6 font-karla text-center lg:text-left">
            The Journey From Friction to a Better Workflow
          </h3>

          <div className="space-y-6 text-gray-700 text-[15px] leading-relaxed">
            <p>
              It started with a setback. When{" "}
              <strong>Apple rejected our app ClarityPath</strong> under
              Guideline{" "}
              <span className="italic text-[#7E1A8E]">
                4.3(b) “Design – Spam”
              </span>
              , we saw how difficult internal distribution workflows could
              become for small teams and organisations trying to ship private
              iOS apps cleanly.
            </p>

            <p>
              Instead of treating that as a one-off problem, we built a product
              around the operational gaps we had experienced ourselves.
              <br />
              <strong>That decision led to two major outcomes:</strong>
            </p>

            <div className="bg-[#F9F6FF] border-l-4 border-[#7E1A8E] p-5 rounded-md text-sm">
              <p className="text-gray-800 whitespace-pre-wrap">
                👉 <strong className="font-karla">ClarityPath</strong> —
                redesigned, improved, and successfully deployed via Apple
                Business Manager.{"\n"}
                👉 <strong className="font-karla">AppDeploy</strong> — a branded
                internal distribution platform built around Apple Business
                workflows so teams can manage private app delivery with more
                clarity.
              </p>
            </div>

            <p className="font-medium">
              <strong className="font-karla">
                AppDeploy was developed for real-world use cases where:
              </strong>
              <br />• You need a clearer route for internal iOS distribution,
              <br />• You do not want to default every rollout to a full MDM
              programme,
              <br />• You need a branded operational layer around Apple
              Business based app delivery.
            </p>

            <blockquote className="border-l-4 border-[#7E1A8E] bg-[#F5EDFF] p-6 rounded-lg italic text-gray-800">
              “AppDeploy exists because internal app distribution needed a more
              usable operational layer, not because organisations needed
              another full mobility suite.”
            </blockquote>
          </div>

          {/* Images with Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 lg:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 hidden"
          >
            <motion.img
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              src="/images/products/appdeploy/1.jpeg"
              alt="Setup"
              className="rounded-xl object-center w-full shadow-sm hover:scale-[1.02] transition"
            />
            <motion.img
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              src="/images/products/appdeploy/2.jpeg"
              alt="Process"
              className="rounded-xl object-center w-full shadow-sm hover:scale-[1.02] transition"
            />
            <motion.img
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              src="/images/products/appdeploy/3.jpeg"
              alt="System"
              className="rounded-xl object-center w-full shadow-sm hover:scale-[1.02] transition"
            />
            <motion.img
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              src="/images/products/appdeploy/4.jpeg"
              alt="Team"
              className="rounded-xl object-center w-full shadow-sm hover:scale-[1.02] transition"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
