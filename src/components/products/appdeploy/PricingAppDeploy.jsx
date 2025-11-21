"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useModal } from "@/components/ModalContext";

export default function PricingAppDeploy() {
  const { setShowModal } = useModal();

  const plans = [
    // {
    //   name: "Starter",
    //   price: "£15/mo",
    //   desc: "Best for independent developers",
    //   features: [
    //     "Upload up to 3 apps (iOS & Android)",
    //     "Up to 100 installs per month",
    //     "Secure HTTPS hosting",
    //     "Basic dashboard & support",
    //   ],
    //   btn: "Start Free Trial",
    // },
    // {
    //   name: "Pro",
    //   price: "£39/mo",
    //   desc: "Perfect for SMEs, schools & agencies",
    //   features: [
    //     "Upload up to 10 apps",
    //     "1,000 installs per month",
    //     "App analytics dashboard",
    //     "Team access (3 users)",
    //   ],
    //   btn: "Get Pro",
    // },
    {
      name: "Enterprise",
      price: "Get Quote",
      desc: "For large organizations & enterprises",
      features: [
        "Unlimited apps & installs",
        "Custom domain & branding",
        "Priority 24/7 support",
        "Dedicated onboarding & integration",
      ],
      btn: "Contact Sales",
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-[#3D297A] to-[#406E8F] text-white py-16 overflow-hidden font-karla">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        {/* Heading */}
        <div className="text-3xl lg:text-5xl font-semibold relative text-center lg:mb-16 mb-10">
          Pricing Plans
          <p className="absolute hidden lg:block text-[83px] opacity-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-nowrap font-karla">
            Pricing Plans
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-14 relative z-10 
            place-items-center 
            /* 
              NOTE: When uncommenting the other plans (Starter and Pro),
              REMOVE 'place-items-center' and UPDATE grid classes to:
              'sm:grid-cols-2 lg:grid-cols-3'
              for proper multi-column alignment
            */
          "
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="
                bg-white text-gray-800 font-lora rounded-xl shadow-xl py-8 px-5 flex flex-col items-center text-center 
                border-b-[12px] border-[#7E1A8E]/50 hover:shadow-[0_0_25px_rgba(126,26,142,0.4)] duration-300 
                w-full sm:max-w-[400px] lg:max-w-[500px]  
                /* Increased width for LG only, mobile and tablet remain unchanged */
              "
            >
              <h4 className="text-2xl font-karla font-semibold mb-1 text-[#3D297A]">
                {plan.name}
              </h4>
              <p className="text-gray-500 text-sm mb-3">{plan.desc}</p>
              <div className="text-3xl font-semibold text-[#7E1A8E] mb-4">
                {plan.price}
              </div>

              <ul className="space-y-2 text-gray-700 text-sm mb-6 text-left">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#7E1A8E]" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setShowModal(true)} // <-- PRICE BUTTON REPLACED
                className="mt-auto cursor-pointer bg-[#7E1A8E] hover:bg-[#A52EB8] text-white font-semibold text-sm py-2.5 px-6 rounded-lg transition duration-300"
              >
                {plan.btn}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
