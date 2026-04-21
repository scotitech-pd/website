"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const featuredProducts = [
  {
    name: "AppDeploy",
    eyebrow: "Featured Product",
    tagline: "Internal app distribution built around Apple Business workflows",
    description:
      "A branded operational layer for private iOS app delivery, with clearer release visibility, simpler employee access, and a more usable internal distribution workflow.",
    logo: "/images/brand/appdeploy-logo-black.png",
    link: "/products/appdeploy",
    cta: "Explore AppDeploy",
  },
  {
    name: "Opsly",
    eyebrow: "Featured Product",
    tagline: "A private operational workspace built for control and clarity",
    description:
      "Reduce SaaS sprawl with self-hosted tools that support day-to-day operations, visibility, and collaboration in one environment.",
    logo: "/images/home/opsly.png",
    link: "/products/opsly",
    cta: "Explore Opsly",
    status: "Coming Soon",
  },
];

export default function OurProducts() {
  return (
    <section
      id="products"
      className="pt-8 pb-20 text-center relative w-full overflow-hidden"
    >
      <div className="absolute bottom-0 w-screen -left-0.5">
        <img
          src="/images/home/bgjoint.png"
          alt="background"
          className="object-cover w-screen"
        />
      </div>

      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full relative z-10">
        <motion.h2
          className="text-main font-karla text-4xl sm:text-5xl font-semibold mb-3 sm:mb-5"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Featured Products
        </motion.h2>

        <motion.h3
          className="text-xl sm:text-3xl min-[1170px]:text-4xl lg:text-2xl font-semibold font-karla text-gray-900 mb-4"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Opsly and AppDeploy are at the centre of our product strategy
        </motion.h3>

        <motion.p
          className="text-black/80 max-w-4xl mx-auto mb-12 font-lora leading-7"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          We focus the homepage on the two products with the clearest business
          value today: AppDeploy for controlled app distribution and Opsly for
          streamlined, private operational tooling.
        </motion.p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, x: index === 0 ? -60 : 60, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 110,
                damping: 14,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-gray-200 shadow-[0_18px_40px_rgba(15,23,42,0.08)] overflow-hidden text-left h-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-[44%_56%] h-full">
                <div className="bg-slate-50 flex items-center justify-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                  <img
                    src={product.logo}
                    alt={product.name}
                    className="w-full max-w-[340px] h-auto object-contain"
                  />
                </div>

                <div className="p-8 md:p-10 flex flex-col">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="inline-flex items-center rounded-full bg-slate-100 text-main-dark px-3 py-1 text-xs font-semibold font-karla uppercase tracking-[0.14em]">
                      {product.eyebrow}
                    </span>
                    {product.status ? (
                      <span className="inline-flex items-center rounded-full bg-main/10 text-main px-3 py-1 text-xs font-semibold font-karla uppercase tracking-[0.12em]">
                        {product.status}
                      </span>
                    ) : null}
                  </div>

                  <h4 className="text-3xl font-semibold font-karla text-main-dark mb-3">
                    {product.name}
                  </h4>

                  <p className="text-lg font-semibold text-slate-800 font-karla mb-4 leading-7">
                    {product.tagline}
                  </p>

                  <p className="text-black/75 font-lora leading-7 mb-8 max-w-xl">
                    {product.description}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href={product.link}
                      className="inline-flex items-center rounded-full bg-main text-white px-6 py-3 text-sm font-semibold font-karla tracking-[0.04em] hover:bg-main/90 transition-colors"
                    >
                      {product.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
