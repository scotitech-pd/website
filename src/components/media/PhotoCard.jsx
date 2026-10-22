import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A real photo under the deep-teal grade, with the words on top as real text.
 * Photos are licensed (see docs/photo-credits.md). They are decorative
 * (alt=""): the heading and line carry the meaning for search engines and
 * screen readers. The people in stock photos are never presented as clients.
 */
export default function PhotoCard({
  photo,
  eyebrow,
  title,
  body,
  href,
  linkLabel = "Learn more",
  external = false,
  className,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  position = "50% 50%",
}) {
  const LinkTag = external ? "a" : Link;
  const linkProps = external ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };
  const Arrow = external ? ArrowUpRight : ArrowRight;

  return (
    <LinkTag
      {...linkProps}
      className={cn(
        "group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-xl bg-grade shadow-card sm:min-h-[400px]",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/photos/${photo}-1400.webp`}
        srcSet={`/images/photos/${photo}-720.webp 720w, /images/photos/${photo}-1400.webp 1400w`}
        sizes={sizes}
        alt=""
        width={1400}
        height={933}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: position }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <span className="photo-tint absolute inset-0" aria-hidden="true" />
      <span className="photo-grade absolute inset-0" aria-hidden="true" />
      <span className="relative p-6 sm:p-7">
        {eyebrow && (
          <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9fe0d4]">{eyebrow}</span>
        )}
        <span className="mt-2 block text-[1.35rem] font-semibold leading-tight tracking-[-0.01em] text-white">{title}</span>
        {body && <span className="mt-2 block max-w-md text-[15px] leading-6 text-white/80">{body}</span>}
        <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-white">
          {linkLabel}
          <Arrow size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </span>
    </LinkTag>
  );
}
