"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Trophy } from "lucide-react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import Badge from "@/components/ui/Badge";
import { useModal } from "@/components/ModalContext";

export default function HeroSection() {
  const { setShowModal } = useModal();
  const reduce = useReducedMotion();

  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
        };

  return (
    <section className="relative overflow-hidden bg-surface pt-28 pb-16 md:pt-32 md:pb-24">
      {/* soft brand wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_85%_-5%,rgba(226,88,14,0.10),transparent_60%),radial-gradient(45%_40%_at_-5%_10%,rgba(251,146,60,0.06),transparent_55%)]" />
      {/* faint grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)] bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 xl:grid-cols-[48%_52%]">
          {/* Copy */}
          <div className="max-w-2xl">
            <motion.div {...rise(0)}>
              <Link
                href="#proof"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3.5 py-1.5 font-karla text-sm font-medium text-body shadow-soft transition-colors hover:border-brand/40"
              >
                <Trophy size={15} className="text-brand-strong" />
                Finalist — Scotland StartUp Awards 2026
                <ArrowRight size={14} className="text-muted" />
              </Link>
            </motion.div>

            <motion.h1 {...rise(0.06)} className="t-display mt-6">
              Software that gives teams real control over how apps ship and where
              data lives.
            </motion.h1>

            <motion.p {...rise(0.12)} className="t-lead mt-6 max-w-xl">
              ScotiTech builds focused, privacy-conscious products for internal
              app distribution and private enterprise operations — live today
              with AppDeploy and AXOS.
            </motion.p>

            <motion.div {...rise(0.18)} className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => setShowModal(true)}>
                Talk to our team
                <ArrowRight size={17} />
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#products">Explore products</Link>
              </Button>
            </motion.div>

            <motion.div
              {...rise(0.24)}
              className="mt-10 flex items-center gap-3 text-muted"
            >
              <ShieldCheck size={18} className="text-brand-strong" />
              <p className="t-small">
                UK-registered · privacy-conscious by design · trusted by early
                clients and partners
              </p>
            </motion.div>
          </div>

          {/* Product preview */}
          <motion.div {...rise(0.12)} className="relative [perspective:1200px]">
            <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_62%_38%,rgba(226,88,14,0.18),transparent_58%)] blur-3xl" />
            <div className="pointer-events-none absolute inset-x-12 bottom-3 h-16 rounded-full bg-ink/15 blur-2xl" />

            <motion.div
              animate={
                reduce
                  ? undefined
                  : {
                      y: [0, -8, 0],
                      rotateZ: [-2.4, -1.2, -2.4],
                      rotateX: [1.5, 0, 1.5],
                    }
              }
              transition={
                reduce
                  ? undefined
                  : {
                      duration: 8,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
              }
              className="relative mx-auto max-w-[680px] origin-center -rotate-2 drop-shadow-[0_32px_55px_rgba(15,23,42,0.20)] [transform-style:preserve-3d]"
            >
              <Image
                src="/images/products/appdeploy/phonepic.png"
                alt="AppDeploy workspace dashboard shown inside a tilted laptop preview"
                width={1200}
                height={688}
                priority
                className="h-auto w-full"
              />
            </motion.div>

            {/* floating proof cards */}
            <motion.div
              {...rise(0.34)}
              className="absolute -left-4 bottom-8 hidden rounded-2xl border border-hairline bg-surface px-4 py-3 shadow-card sm:block"
            >
              <p className="font-karla text-2xl font-semibold text-strong">
                From £79<span className="text-base font-medium text-muted">/mo</span>
              </p>
              <p className="t-small">AppDeploy cloud</p>
            </motion.div>

            <motion.div
              {...rise(0.42)}
              className="absolute -right-3 top-10 hidden rounded-2xl border border-hairline bg-surface px-4 py-3 shadow-card sm:block"
            >
              <Badge variant="live" dot>
                Live
              </Badge>
              <p className="t-small mt-1.5">AppDeploy in production</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
