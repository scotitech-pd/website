import { cn } from "@/lib/utils";

const variants = {
  live: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/15",
  early: "bg-brand-soft text-brand-strong ring-1 ring-brand/20",
  supporting: "bg-slate-100 text-slate-600 ring-1 ring-slate-500/15",
  neutral: "bg-surface-sunken text-muted ring-1 ring-hairline-strong/40",
  brand: "bg-brand text-brand-contrast",
  onInk: "bg-white/10 text-on-ink ring-1 ring-white/15",
};

/**
 * Status / category pill. `dot` adds a leading status dot (good for Live).
 */
export default function Badge({ variant = "neutral", dot = false, className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-karla text-xs font-semibold uppercase tracking-[0.1em]",
        variants[variant],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      {children}
    </span>
  );
}
