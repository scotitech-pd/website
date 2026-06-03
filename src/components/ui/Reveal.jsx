"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Tier-1 motion backbone: a calm fade + small rise as the element scrolls into
 * view. Animates once. Honors prefers-reduced-motion (renders static).
 *
 * Use `delay` for staggered lists; `y`/`direction` to tweak the rise.
 */
export default function Reveal({
  as = "div",
  delay = 0,
  y = 14,
  duration = 0.5,
  once = true,
  amount = 0.2,
  className,
  children,
  ...props
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const StaticTag = as;
    return (
      <StaticTag className={className} {...props}>
        {children}
      </StaticTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
