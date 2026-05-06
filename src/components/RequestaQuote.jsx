"use client";

import { useModal } from "@/components/ModalContext";
import { useEffect } from "react";
import { meetingLinks } from "@/lib/scheduling";
import {
  ArrowRight,
  Clock3,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const productSessions = [
  {
    key: "appdeploy",
    title: "AppDeploy session",
    description:
      "For teams distributing private or internal iOS apps through ABM with controlled installs and clear rollout governance.",
    cta: "Book AppDeploy session",
    href: meetingLinks.appdeploy,
  },
  {
    key: "axos",
    title: "AXOS session",
    description:
      "For teams planning a private workspace for communication, files, tasks, and governance-aligned AI operations.",
    cta: "Book AXOS session",
    href: meetingLinks.axos,
  },
];

export default function RequestaQuote() {
  const { showModal, setShowModal } = useModal();

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      window.history.pushState({ modalOpen: true }, "");
      document.body.style.overflow = "hidden";
    }

    const handleBack = () => {
      if (showModal) {
        closeModal();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape" && showModal) {
        closeModal();
      }
    };

    window.addEventListener("popstate", handleBack);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("popstate", handleBack);
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/55 p-3 backdrop-blur-md sm:p-5"
      onClick={closeModal}
      role="presentation"
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/15 bg-white shadow-[0_32px_90px_rgba(0,0,0,0.35)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sales-dialog-title"
      >
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 z-[60] rounded-full border border-white/20 bg-white/90 p-2 text-slate-700 shadow-sm transition hover:bg-white hover:text-slate-950"
          aria-label="Close sales meeting request"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid max-h-[91vh] overflow-y-auto lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="relative overflow-hidden bg-[#0E1116] px-6 py-8 text-white sm:px-8 lg:min-h-[560px] lg:py-10">
            <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl" />
            <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col justify-between gap-8">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-karla text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">
                  <Sparkles className="h-3.5 w-3.5 text-[#B7A84D]" />
                  Talk to sales
                </div>

                <h2
                  id="sales-dialog-title"
                  className="max-w-md font-karla text-3xl font-semibold leading-tight text-white sm:text-4xl"
                >
                  Book a focused product session.
                </h2>
                <p className="mt-4 max-w-md font-karla text-base leading-7 text-slate-300">
                  Choose AppDeploy or AXOS and schedule the right session.
                  We will cover product fit, deployment approach, and practical
                  next steps for your team.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: Clock3, text: "45-min session" },
                    { icon: ShieldCheck, text: "Security aligned" },
                    { icon: Sparkles, text: "Product-specific guidance" },
                  ].map(({ icon: Icon, text }) => (
                    <span
                      key={text}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-karla text-sm text-slate-100"
                    >
                      <Icon className="h-4 w-4 text-[#B7A84D]" />
                      {text}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative rounded-3xl border border-white/15 bg-white/[0.08] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur">
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
                  aria-hidden="true"
                />
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-karla text-sm font-semibold text-white">
                    Meeting agenda
                  </p>
                  <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 font-karla text-xs font-semibold text-emerald-200">
                    Prepared
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    "Select the product session that matches your use case",
                    "Review deployment, control, and rollout expectations",
                    "Leave with a clear next-step plan",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.07] p-3"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-[#0E1116]">
                        {index + 1}
                      </span>
                      <p className="font-karla text-sm leading-6 text-slate-200">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 border-t border-white/10 pt-4 font-karla text-sm leading-6 text-slate-300">
                  No generic pitch. Each session is aligned to the product and
                  rollout context you choose.
                </p>
              </div>
            </div>
          </aside>

          <section className="bg-[#F7F7F5] px-5 py-8 sm:px-8 lg:px-9 lg:py-10">
            <div className="mb-6 pr-10">
              <p className="font-karla text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Schedule a meeting
              </p>
              <h3 className="mt-2 font-karla text-2xl font-semibold text-[#0F172A]">
                Book the session that fits your goals.
              </h3>
              <p className="mt-2 font-karla text-sm leading-6 text-slate-600">
                Choose AppDeploy for private iOS rollout or AXOS for secure
                workspace planning, then book instantly with the right team.
              </p>
            </div>

            <div className="space-y-4 font-karla">
              {productSessions.map((item) => (
                <article
                  key={item.key}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_16px_35px_rgba(15,23,42,0.06)]"
                >
                  <h4 className="text-xl font-semibold text-[#0F172A]">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeModal}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
                  >
                    {item.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              ))}
              <p className="pt-1 text-center text-xs leading-5 text-slate-500">
                Need help deciding first? Email info@scotitech.com and we'll
                guide you to the right product session.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
