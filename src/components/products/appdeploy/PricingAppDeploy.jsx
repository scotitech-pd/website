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
    <section className="relative bg-[#F9F9FB] py-10 lg:py-16 overflow-hidden font-karla">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F5EDFF] to-transparent -z-1" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#7E1A8E]/5 rounded-full blur-3xl" />

      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Messaging */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-[#3D297A] leading-tight">
                Enterprise-Grade <br /> Distribution Plans
              </h2>
              <p className="text-gray-600 font-lora text-lg lg:text-xl max-w-xl leading-relaxed">
                AppDeploy offers flexible, scalable distribution architecture designed 
                to grow with your organization. From small internal teams to global 
                workforces, we provide the security and control you need.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Unlimited Internal Distribution",
                "Full ABM Workflow Support",
                "Real-time Deployment Analytics",
                "Dedicated Onboarding Support"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-[#7E1A8E]/10 p-1 rounded-full">
                    <CheckCircle className="w-5 h-5 text-[#7E1A8E]" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 font-lora italic pt-4">
              * Custom deployment plans available based on your user volume and security requirements.
            </p>
          </div>

          {/* RIGHT COLUMN: Premium Card */}
          <div className="flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[480px]"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#3D297A] to-[#7E1A8E] rounded-3xl blur opacity-20" />
              
              <div className="relative bg-white border border-gray-100 rounded-3xl shadow-2xl p-8 lg:p-12 text-center text-gray-900 border-b-[1px] border-b-gray-200">
                <div className="flex justify-center mb-6">
                  <div className="bg-[#F5EDFF] px-4 py-1.5 rounded-full">
                    <span className="text-[#3D297A] font-bold text-xs tracking-widest uppercase">
                      Enterprise Suite
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-4xl font-bold text-[#3D297A] mb-4">
                  Scalable Architecture
                </h3>
                
                <p className="text-gray-600 font-lora mb-10 text-base">
                  Get a tailored deployment strategy that fits your unique compliance 
                  and user profile needs. No hidden fees, just pure performance.
                </p>

                <div className="space-y-4">
                  <button
                    onClick={() => setShowModal(true)}
                    className="w-full bg-[#3D297A] hover:bg-[#7E1A8E] text-white font-bold py-4 rounded-xl shadow-lg transition duration-300 flex items-center justify-center gap-2 group"
                  >
                    Request Custom Quote
                    <motion.span 
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </button>
                  
                  <p className="text-xs text-gray-400 font-lora">
                    Average response time: Under 2 hours
                  </p>
                </div>

                <div className="mt-12 pt-10 border-t border-gray-100 grid grid-cols-2 gap-4">
                  <div className="text-left">
                    <p className="text-sm font-bold text-[#3D297A] mb-1">Guaranteed</p>
                    <p className="text-xs text-gray-500">Uptime & Delivery</p>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-[#3D297A] mb-1">Certified</p>
                    <p className="text-xs text-gray-500">Security Protocols</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
