"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A muted, looping product clip that only plays while on screen, and only on
 * tablet and desktop screens without a reduced-motion setting. The poster
 * is a real frame of the clip, so the page looks finished before any video
 * byte arrives.
 */
export default function LoopVideo({ src, poster, width, height, label, className }) {
  const ref = useRef(null);
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    // Phones and reduced-motion visitors keep the poster: the clip is a
    // 2.8 MB download that adds little on a small screen.
    const mq = window.matchMedia("(prefers-reduced-motion: no-preference) and (min-width: 768px)");
    const update = () => setAllowMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video || !allowMotion) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.2 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, [allowMotion]);

  return (
    <video
      ref={ref}
      className={className}
      width={width}
      height={height}
      poster={poster}
      muted
      loop
      playsInline
      preload={allowMotion ? "auto" : "none"}
      aria-label={label}
    >
      {allowMotion && <source src={src} type="video/mp4" />}
    </video>
  );
}
