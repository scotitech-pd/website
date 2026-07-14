"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Trophy, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/ModalContext";

export default function HeroSection() {
  const { setShowModal } = useModal();
  const reduce = useReducedMotion();

  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
        };

  return (
    <section className="relative min-h-screen bg-[#080d18] flex flex-col" style={{ marginBottom: "-80px", paddingBottom: "80px" }}>
      {/* ── Background layers ── */}
      {/* Deep radial brand glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(226,88,14,0.18),transparent_65%)]" />
      {/* Subtle bottom-left warmth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_-5%_100%,rgba(184,67,11,0.10),transparent_60%)]" />
      {/* Fine dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      {/* Horizontal scan line */}
      <div className="pointer-events-none absolute inset-x-0 top-[72px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── Main content ── */}
      <Container className="relative z-10 flex flex-1 flex-col items-center justify-center pt-28 pb-20 text-center md:pt-36 md:pb-28">
        {/* Award badge */}
        <motion.div {...rise(0)}>
          <Link
            href="/media"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-1.5 font-karla text-xs font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur-sm transition-colors hover:border-brand/40 hover:text-white"
          >
            <Trophy size={13} className="text-brand" />
            Scotland StartUp Awards 2026 — Finalist
          </Link>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...rise(0.08)}
          className="mt-8 max-w-4xl font-geist-sans text-[clamp(2.6rem,1.6rem+4.2vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white"
        >
          Software that gives teams{" "}
          <span className="bg-gradient-to-r from-brand to-[#f97316] bg-clip-text text-transparent">
            real control
          </span>{" "}
          over how apps ship and where data lives.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          {...rise(0.16)}
          className="mt-6 max-w-2xl font-karla text-[clamp(1rem,0.9rem+0.5vw,1.2rem)] leading-relaxed text-white/55"
        >
          ScotiTech builds focused, privacy-conscious products for internal app
          distribution and private enterprise operations — live today with{" "}
          <span className="text-white/80 font-medium">AppDeploy</span> and{" "}
          <span className="text-white/80 font-medium">AXOS</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...rise(0.24)}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-karla text-[15px] font-semibold text-white shadow-[0_0_32px_rgba(226,88,14,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-strong hover:shadow-[0_0_44px_rgba(226,88,14,0.50)]"
          >
            Talk to our team
            <ArrowRight size={16} />
          </button>
          <Link
            href="#products"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 font-karla text-[15px] font-semibold text-white/80 backdrop-blur-sm transition-all duration-200 hover:border-white/25 hover:text-white"
          >
            Explore products
          </Link>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          {...rise(0.30)}
          className="mt-10 flex items-center justify-center gap-2 text-white/40"
        >
          <ShieldCheck size={15} className="text-brand/70" />
          <p className="font-karla text-xs tracking-wide">
            UK-registered · privacy-conscious by design · trusted by early clients and partners
          </p>
        </motion.div>

        {/* Product preview card */}
        <motion.div
          {...rise(0.20)}
          className="relative mt-16 w-full max-w-4xl"
        >
          {/* Glow under card */}
          <div className="pointer-events-none absolute -inset-x-8 -bottom-6 h-24 bg-[radial-gradient(ellipse_70%_100%_at_50%_100%,rgba(226,88,14,0.20),transparent_70%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_32px_80px_rgba(0,0,0,0.55)] backdrop-blur-sm">
            <motion.div
              animate={
                reduce
                  ? undefined
                  : { y: [0, -6, 0] }
              }
              transition={
                reduce
                  ? undefined
                  : { duration: 7, ease: "easeInOut", repeat: Infinity }
              }
            >
              <Image
                src="/images/products/appdeploy/phonepic.png"
                alt="AppDeploy workspace dashboard"
                width={1200}
                height={688}
                priority
                className="h-auto w-full rounded-[22px]"
              />
            </motion.div>
          </div>

          {/* Floating stat pills */}
          <motion.div
            {...rise(0.38)}
            className="absolute -left-4 bottom-10 hidden rounded-xl border border-white/12 bg-[#080d18]/80 px-4 py-3 shadow-xl backdrop-blur-md sm:block"
          >
            <p className="font-karla text-xl font-bold text-white">
              From £79<span className="text-sm font-medium text-white/50">/mo</span>
            </p>
            <p className="mt-0.5 font-karla text-xs text-white/50">AppDeploy cloud</p>
          </motion.div>

          <motion.div
            {...rise(0.44)}
            className="absolute -right-4 top-16 hidden rounded-xl border border-white/12 bg-[#080d18]/80 px-4 py-3 shadow-xl backdrop-blur-md sm:block"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 font-karla text-[11px] font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Live in production
            </span>
            <p className="mt-1.5 font-karla text-xs text-white/50">AppDeploy</p>
          </motion.div>
        </motion.div>
      </Container>

      {/* ── Scroll indicator ── */}
      <div className="relative z-10 flex justify-center pb-8">
        <motion.div
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={reduce ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/25"
        >
          <span className="font-karla text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </div>
    </section>
  );
}
