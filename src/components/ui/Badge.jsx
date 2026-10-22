import { cn } from "@/lib/utils";

const variants = {
  live: "bg-brand-soft text-brand-strong ring-1 ring-brand/20",
  early: "bg-[#e8eef5] text-axos ring-1 ring-axos/20",
  supporting: "bg-surface-sunken text-body ring-1 ring-hairline-strong/60",
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
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.1em]",
        variants[variant],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      {children}
    </span>
  );
}
