"use client";

import { useEffect, useRef, useState } from "react";

const variants = {
  up: "translate-y-6",
  soft: "translate-y-4 scale-[0.985]",
  none: "",
};

export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  threshold = 0.14,
  variant = "up",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setVisible(true);
      return undefined;
    }

    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transform-gpu transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : `opacity-0 ${variants[variant] || variants.up}`
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
