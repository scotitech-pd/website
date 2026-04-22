"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const coreProducts = [
  {
    id: 1,
    name: "AppDeploy",
    description:
      "A branded internal distribution layer built around Apple Business workflows.",
    buttonText: "Request Access",
    link: "https://appdeploy.scotitech.com/request-access",
    details: "/products/appdeploy",
    accent: "from-indigo-500/15 to-cyan-500/10",
    logo: "/images/brand/appdeploy-logo-black.png",
    secondaryCta: "Open Platform",
    secondaryLink: "https://appdeploy.scotitech.com/w/appdeploy-platform",
  },
  {
    id: 2,
    name: "AXOS",
    description:
      "A private workspace for organisations that want stronger control, less SaaS sprawl, and better day-to-day tooling.",
    buttonText: "View AXOS",
    link: "/products/axos",
    details: "/products/axos",
    accent: "from-emerald-500/15 to-cyan-500/10",
    logo: "/images/brand/axos-icon.png",
    secondaryCta: "Contact Team",
    secondaryLink: "/contact",
  },
];

const supportingProduct = {
  id: 3,
  name: "ClarityPath",
  description:
    "A guided digital tool for planning, reflection, and more structured personal decision support.",
  buttonText: "Access",
  link: "https://appdeploy.scotitech.com/w/appdeploy-platform",
  details: "/products/claritypath",
  accent: "from-violet-500/15 to-indigo-500/10",
  logo: "/images/brand/claritypath-logo.png",
};

const ProductShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 h-[360px] bg-[#0F172A]" />
      <div className="absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_22%)]" />
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full">
        <div className="relative z-10 max-w-4xl mb-12">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.2em] text-cyan-300/90 mb-3">
            Product Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-karla font-semibold text-white mb-5">
            One company, a tighter set of software products
          </h2>
          <p className="text-white/74 font-lora text-lg leading-8">
            The portfolio works best when each product has a clear role.
            AppDeploy and AXOS are the two lead platforms, while ClarityPath
            remains available for its specific use case.
          </p>
        </div>

        <div className="relative z-10 grid gap-5 xl:grid-cols-2">
          {coreProducts.map((product) => (
            <div
              key={product.id}
              className={`rounded-[1.8rem] border border-white/10 bg-[#0F172A] shadow-[0_24px_60px_rgba(2,6,23,0.22)] overflow-hidden flex flex-col`}
            >
              <div
                className={`h-32 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${product.accent}`}
              />

              <div className="px-6 py-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-5 mb-4">
                  <div>
                    <p className="text-xs font-karla uppercase tracking-[0.16em] text-cyan-300/85 mb-3">
                      Core Platform
                    </p>
                    <h3 className="text-2xl font-semibold font-karla text-white">
                      {product.name}
                    </h3>
                  </div>
                  <div className="shrink-0 rounded-[1.2rem] border border-white/10 bg-white/95 p-3 shadow-sm">
                    <Image
                      src={product.logo}
                      alt={`${product.name} logo`}
                      width={64}
                      height={64}
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                </div>

                <p className="text-white/74 font-lora leading-7 text-[15px] mb-6">
                  {product.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-3">
                  <Link
                    href={product.details}
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold font-karla text-white hover:bg-white/12 transition-colors"
                  >
                    Read Details
                  </Link>
                  <Link
                    href={product.link}
                    target={product.link.startsWith("http") ? "_blank" : undefined}
                    className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold font-karla text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    {product.buttonText}
                  </Link>
                  <Link
                    href={product.secondaryLink}
                    target={
                      product.secondaryLink.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold font-karla text-cyan-100 hover:bg-cyan-400/14 transition-colors"
                  >
                    {product.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-8 rounded-[1.9rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.05)] overflow-hidden">
          <div
            className={`h-24 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${supportingProduct.accent}`}
          />
          <div className="grid gap-6 px-6 py-6 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-8">
            <div>
              <p className="text-xs font-karla uppercase tracking-[0.16em] text-slate-500 mb-3">
                Supporting Product
              </p>
              <h3 className="text-2xl font-semibold font-karla text-slate-900 mb-3">
                {supportingProduct.name}
              </h3>
              <p className="text-slate-600 font-lora leading-7 text-[15px]">
                {supportingProduct.description}
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-5 flex flex-col justify-between gap-5">
              <div className="flex items-center justify-between gap-5">
                <p className="text-xs font-karla uppercase tracking-[0.16em] text-slate-500">
                  Supporting Product
                </p>
                <Image
                  src={supportingProduct.logo}
                  alt={`${supportingProduct.name} logo`}
                  width={140}
                  height={56}
                  className="h-12 w-auto rounded-[1rem] object-contain"
                />
              </div>
              <p className="text-slate-700 font-lora leading-7">
                ClarityPath remains part of the portfolio, but serves a
                different use case from the two lead platforms and is presented
                more lightly here.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={supportingProduct.details}
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold font-karla text-slate-900 hover:border-slate-400 transition-colors"
                >
                  Read Details
                </Link>
                <Link
                  href={supportingProduct.link}
                  target="_blank"
                  className="inline-flex items-center rounded-full bg-[#0F172A] px-4 py-2 text-sm font-semibold font-karla text-white hover:bg-slate-900 transition-colors"
                >
                  {supportingProduct.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
