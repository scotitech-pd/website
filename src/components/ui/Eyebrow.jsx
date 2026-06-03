import { cn } from "@/lib/utils";

/**
 * Small uppercase label that sits above section headings.
 * `onInk` flips it for use on the dark inverse surface.
 */
export default function Eyebrow({ children, onInk = false, className }) {
  return (
    <p
      className={cn(
        "font-karla text-[0.8125rem] font-semibold uppercase tracking-[0.16em]",
        onInk ? "text-on-ink-muted" : "text-brand-strong",
        className
      )}
    >
      {children}
    </p>
  );
}
