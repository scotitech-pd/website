"use client";

import { useModal } from "@/components/ModalContext";
import { useEffect } from "react";
import { ArrowRight, Clock, ShieldCheck, Sparkles, X } from "lucide-react";
import { meetingLinks } from "@/lib/scheduling";

const chips = [
  { icon: Clock, label: "30-minute call" },
  { icon: ShieldCheck, label: "With the founder" },
  { icon: Sparkles, label: "Your devices, your apps" },
];

const agenda = [
  "Tell us about your team's devices and apps",
  "See how Vamiq would set them up and keep them secure",
  "Leave with a clear next step",
];

const sessions = [
  {
    name: "Vamiq call",
    body: "For small and growing businesses with iPhones, iPads, Macs and Windows PCs to manage, or private apps to put on their Apple devices through a branded app store.",
    cta: "Book a call",
    href: meetingLinks.vamiq,
  },
];

export default function RequestaQuote() {
  const { showModal, setShowModal } = useModal();

  const closeModal = () => setShowModal(false);

  // Back button + ESC + scroll lock while open
  useEffect(() => {
    if (!showModal) return;

    window.history.pushState({ modalOpen: true }, "");
    const onPop = () => setShowModal(false);
    const onKey = (e) => e.key === "Escape" && setShowModal(false);

    window.addEventListener("popstate", onPop);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [showModal, setShowModal]);

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-ink/55 p-4 backdrop-blur-sm"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-label="Book a call about Vamiq"
    >
      <div
        className="relative grid max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-hairline bg-surface shadow-lift animate-scale-in lg:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT — dark context panel */}
        <div className="relative hidden flex-col overflow-y-auto bg-ink p-8 lg:flex lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_0%,rgba(15,118,110,0.28),transparent_60%)]" />
          <div className="relative z-10 flex h-full flex-col">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-karla text-xs font-semibold uppercase tracking-[0.14em] text-on-ink">
              <Sparkles size={14} className="text-brand-soft" />
              Talk to sales
            </span>

            <h2 className="t-h2 mt-6 text-on-ink">Book a call about Vamiq.</h2>
            <p className="mt-4 font-karla leading-relaxed text-on-ink-muted">
              A 30-minute call with the team that builds Vamiq. We&apos;ll cover your devices, your
              apps and practical next steps for your team.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {chips.map((c) => (
                <span
                  key={c.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 font-karla text-xs font-medium text-on-ink"
                >
                  <c.icon size={13} className="text-brand-soft" />
                  {c.label}
                </span>
              ))}
            </div>

            <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center justify-between">
                <p className="font-karla text-sm font-semibold text-on-ink">Meeting agenda</p>
                <span className="rounded-full bg-emerald-400/15 px-2.5 py-0.5 font-karla text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
                  Prepared
                </span>
              </div>
              <ol className="mt-4 space-y-3">
                {agenda.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 font-karla text-xs font-semibold text-on-ink">
                      {i + 1}
                    </span>
                    <span className="font-karla text-sm leading-snug text-on-ink-muted">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 border-t border-white/10 pt-3 font-karla text-xs leading-relaxed text-on-ink-muted">
                No generic pitch: the call is about your team and your devices.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — booking panel */}
        <div className="relative flex flex-col overflow-y-auto bg-surface p-7 sm:p-9">
          <button
            onClick={closeModal}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-hairline text-muted transition-colors hover:bg-surface-sunken hover:text-strong"
          >
            <X size={17} />
          </button>

          <span className="t-eyebrow">Schedule a meeting</span>
          <h2 className="t-h3 mt-2 pr-8">Pick a time that suits you.</h2>
          <p className="t-body mt-3">
            Book instantly in the calendar. Start free on vamiq.app any time; the call is there when
            you want a hand.
          </p>

          <div className="mt-6 space-y-4">
            {sessions.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl border border-hairline bg-surface-muted p-5 shadow-soft transition-shadow hover:shadow-card"
              >
                <h3 className="font-karla text-lg font-semibold text-strong">{s.name}</h3>
                <p className="t-small mt-1.5 leading-6">{s.body}</p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-karla text-sm font-semibold text-on-ink transition-colors hover:bg-ink-soft"
                >
                  {s.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center font-karla text-xs leading-relaxed text-muted">
            Prefer email? Write to{" "}
            <a href="mailto:info@scotitech.com" className="font-semibold text-brand-strong hover:text-brand">
              info@scotitech.com
            </a>{" "}
            and we'll find a time that works.
          </p>
        </div>
      </div>
    </div>
  );
}
