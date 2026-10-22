import { cn } from "@/lib/utils";

/**
 * Tier-1 motion backbone: a calm fade + small rise as the element scrolls into
 * view. Pure CSS (see `.reveal` in globals.css): scroll-driven where the
 * browser supports it, otherwise the content is simply shown. No JavaScript,
 * so nothing is hidden from crawlers, no-JS visitors or slow connections.
 *
 * `immediate` animates on load (above-the-fold content); `delay` staggers it.
 * The old framer-motion props (y, duration, once, amount) are accepted and
 * ignored so existing call sites keep working.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  immediate = false,
  className,
  style,
  children,
  // eslint-disable-next-line no-unused-vars
  y, duration, once, amount,
  ...props
}) {
  return (
    <Tag
      className={cn(immediate ? "reveal-now" : "reveal", className)}
      style={immediate && delay ? { animationDelay: `${delay}s`, ...style } : style}
      {...props}
    >
      {children}
    </Tag>
  );
}
