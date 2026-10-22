"use client";

import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { vamiqMedia } from "@/lib/company";

/**
 * "Watch the film" trigger + full-screen player for the 75-second Vamiq
 * film. The film only loads when someone asks for it. Renders either a
 * text button (variant "link") or a poster with a play button ("poster").
 */
export default function FilmDialog({ variant = "link", className, tone = "light" }) {
  const film = vamiqMedia.film;
  const dialogRef = useRef(null);
  const videoRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      videoRef.current?.play().catch(() => {});
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const close = () => {
    videoRef.current?.pause();
    setOpen(false);
  };

  return (
    <>
      {variant === "poster" ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(
            "group relative block w-full overflow-hidden rounded-xl bg-ink text-left shadow-lift ring-1 ring-white/10",
            className
          )}
          aria-label={`Watch ${film.title} (${film.durationLabel})`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={film.poster}
            alt=""
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-grade/70 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 flex items-center gap-3 sm:bottom-6 sm:left-6">
            <span className="flex size-12 items-center justify-center rounded-full bg-white text-brand shadow-card transition-transform duration-300 group-hover:scale-105 sm:size-14">
              <Play size={20} fill="currentColor" aria-hidden="true" />
            </span>
            <span className="text-white">
              <span className="block text-[15px] font-semibold">Watch the film</span>
              <span className="block text-[13px] text-white/75">{film.durationLabel}, music only</span>
            </span>
          </span>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(
            "group inline-flex items-center gap-2.5 text-[15px] font-semibold",
            tone === "dark" ? "text-white" : "text-brand-strong",
            className
          )}
        >
          <span
            className={cn(
              "flex size-8 items-center justify-center rounded-full transition-transform group-hover:scale-105",
              tone === "dark" ? "bg-white text-brand" : "bg-brand text-white"
            )}
          >
            <Play size={13} fill="currentColor" aria-hidden="true" />
          </span>
          Watch the Vamiq film ({film.durationLabel})
        </button>
      )}

      <dialog
        ref={dialogRef}
        onClose={close}
        onClick={(e) => e.target === dialogRef.current && close()}
        aria-label={film.title}
        className="m-auto w-[min(1100px,94vw)] max-w-none overflow-visible bg-transparent p-0 backdrop:bg-[#061514]/85 backdrop:backdrop-blur-sm"
      >
        {open && (
          <div className="relative">
            <button
              type="button"
              onClick={close}
              className="absolute -top-12 right-0 flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-semibold text-white/90 hover:text-white"
            >
              <X size={18} aria-hidden="true" /> Close
            </button>
            <video
              ref={videoRef}
              src={film.src}
              poster={film.poster}
              controls
              playsInline
              preload="auto"
              className="aspect-video w-full rounded-xl bg-black shadow-lift"
            >
              Your browser cannot play this film.
            </video>
            <p className="mt-3 text-center text-[13px] text-white/70">
              {film.title}. Sample workspace, music only.
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}
