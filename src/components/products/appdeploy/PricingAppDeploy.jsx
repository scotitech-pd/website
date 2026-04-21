"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useModal } from "@/components/ModalContext";

export default function PricingAppDeploy() {
  const { setShowModal } = useModal();

  const plans = [
    {
      name: "Cloud",
      price: "£79 / month",
      secondaryPrice: "£600 / year",
      desc: "For organisations that want a hosted internal iOS distribution workspace with a simple onboarding path.",
      features: [
        "Hosted AppDeploy workspace",
        "Internal iOS app distribution",
        "Branded distribution page",
        "Release and version management",
        "Admin access and operational visibility",
      ],
      cta: "Request Access",
      mode: "external",
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For organisations that need tailored rollout, deeper Apple Business workflow support, or optional Android capability.",
      features: [
        "Tailored deployment model",
        "Deeper Apple Business workflow support",
        "Dedicated onboarding and rollout planning",
        "Optional Android support",
        "Internal deployment and custom branding options",
      ],
      cta: "Request Access",
      mode: "external",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#F9F9FB] py-10 font-karla lg:py-16 scroll-mt-28"
    >
      <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-[#F5EDFF] to-transparent -z-1" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#7E1A8E]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-8xl px-5 min-[500px]:px-10 md:px-20">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold leading-tight text-[#3D297A] lg:text-5xl">
                Choose the deployment model that fits your organisation
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-gray-600 font-lora lg:text-xl">
                AppDeploy is structured around a focused Cloud offer for hosted
                internal iOS distribution and a tailored Enterprise path for
                organisations with deeper Apple Business workflow support,
                rollout planning, and optional Android capability.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                "Hosted iOS-first Cloud workspace",
                "Built around Apple Business workflows",
                "Branded employee distribution experience",
                "Enterprise onboarding and rollout support",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="rounded-full bg-[#7E1A8E]/10 p-1">
                    <CheckCircle className="h-5 w-5 text-[#7E1A8E]" />
                  </div>
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <p className="pt-4 text-sm italic text-gray-500 font-lora">
              * Cloud subscriptions are billed in GBP. Enterprise rollout is tailored to the organisation’s deployment and support needs.
            </p>
          </div>

          <div className="grid gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#3D297A] to-[#7E1A8E] opacity-15 blur" />
                <div className="relative rounded-3xl border border-gray-100 bg-white p-8 text-left text-gray-900 shadow-2xl">
                  <div className="mb-5 inline-flex rounded-full bg-[#F5EDFF] px-4 py-1.5">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#3D297A]">
                      {plan.name}
                    </span>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-[#3D297A]">{plan.price}</h3>
                  {"secondaryPrice" in plan ? (
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                      {plan.secondaryPrice}
                    </p>
                  ) : null}
                  <p className="mb-6 text-base text-gray-600 font-lora">{plan.desc}</p>
                  <ul className="mb-6 space-y-3 text-sm text-gray-700">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#7E1A8E]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.mode === "external" ? (
                    <a
                      href="https://appdeploy.scotitech.com/request-access"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-xl bg-[#3D297A] py-4 text-center font-bold text-white shadow-lg transition duration-300 hover:bg-[#7E1A8E]"
                    >
                      {plan.cta}
                    </a>
                  ) : (
                    <button
                      onClick={() => setShowModal(true)}
                      className="w-full rounded-xl bg-[#3D297A] py-4 font-bold text-white shadow-lg transition duration-300 hover:bg-[#7E1A8E]"
                    >
                      {plan.cta}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
