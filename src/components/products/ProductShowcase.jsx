import Image from "next/image";
import {
  Building2,
  CheckCircle2,
  LockKeyhole,
  ScanLine,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const showcaseContent = {
  appdeploy: {
    kicker: "AppDeploy control plane",
    status: "Live",
    index: "01 / Distribution",
    primaryLabel: "Business",
    primaryValue: "From £79/mo",
    secondaryLabel: "Apple Business",
    secondaryValue: "Aligned rollout",
    Icon: Building2,
  },
  axos: {
    kicker: "AXOS command centre",
    status: "Private",
    index: "02 / Workspace",
    primaryLabel: "Private AI",
    primaryValue: "Governed by design",
    secondaryLabel: "Deployment",
    secondaryValue: "Your perimeter",
    Icon: LockKeyhole,
  },
};

export default function ProductShowcase({
  variant,
  src,
  alt,
  compact = false,
  priority = false,
  className,
}) {
  const isAxos = variant === "axos";
  const content = showcaseContent[variant] || showcaseContent.appdeploy;
  const ProductIcon = content.Icon;

  return (
    <div
      className={cn(
        "group/showcase relative isolate w-full overflow-hidden border border-white/10",
        compact
          ? "h-full min-h-[300px] rounded-none"
          : "min-h-[340px] rounded-[1.75rem] shadow-[0_34px_90px_rgba(15,23,42,0.24)] sm:min-h-[430px]",
        isAxos ? "bg-[#050910]" : "bg-[#06343c]",
        className
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          isAxos
            ? "bg-[radial-gradient(circle_at_78%_12%,rgba(16,185,129,0.20),transparent_30%),radial-gradient(circle_at_16%_88%,rgba(59,130,246,0.20),transparent_34%)]"
            : "bg-[radial-gradient(circle_at_82%_10%,rgba(45,212,191,0.30),transparent_30%),radial-gradient(circle_at_12%_92%,rgba(249,115,22,0.20),transparent_34%)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-8 -top-8 size-36 rounded-full border border-white/10" />

      <div className="absolute inset-x-5 top-5 z-30 flex items-center justify-between gap-3 sm:inset-x-7 sm:top-7">
        <div className="flex min-w-0 items-center gap-2.5 text-white">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md">
            <ProductIcon size={15} />
          </span>
          <p className="truncate font-karla text-[10px] font-semibold uppercase tracking-[0.18em] text-white/72 sm:text-[11px]">
            {content.kicker}
          </p>
        </div>
        <span
          className={cn(
            "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-karla text-[9px] font-bold uppercase tracking-[0.16em] backdrop-blur-md sm:text-[10px]",
            isAxos
              ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-100"
              : "border-emerald-300/20 bg-emerald-300/10 text-emerald-100"
          )}
        >
          <span className="size-1.5 rounded-full bg-current" />
          {content.status}
        </span>
      </div>

      <p className="absolute left-6 top-[23%] z-20 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35 sm:left-8 sm:text-[10px]">
        {content.index}
      </p>

      <div
        className={cn(
          "absolute inset-x-[6%] top-[29%] z-10 overflow-hidden rounded-xl border border-white/15 bg-black/30 p-1 shadow-[0_28px_70px_rgba(0,0,0,0.48)] transition-transform duration-700 ease-out sm:rounded-2xl sm:p-1.5",
          isAxos
            ? "rotate-[1.8deg] group-hover/showcase:rotate-[0.6deg] group-hover/showcase:scale-[1.015]"
            : "rotate-[-2.2deg] group-hover/showcase:rotate-[-0.7deg] group-hover/showcase:scale-[1.015]"
        )}
      >
        <div
          className={cn(
            "h-1 rounded-t-lg",
            isAxos
              ? "bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"
              : "bg-gradient-to-r from-orange-500 via-amber-300 to-emerald-400"
          )}
        />
        <Image
          src={src}
          alt={alt}
          width={isAxos ? 1720 : 1357}
          height={isAxos ? 914 : 772}
          priority={priority}
          sizes={compact ? "(max-width: 1024px) 100vw, 42vw" : "(max-width: 1024px) 100vw, 50vw"}
          className="h-auto w-full rounded-b-lg"
        />
      </div>

      <div className="absolute bottom-4 left-4 z-30 min-w-[138px] rounded-xl border border-white/15 bg-[#07121c]/82 px-3.5 py-3 shadow-2xl backdrop-blur-xl sm:bottom-6 sm:left-6 sm:min-w-[160px]">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={14} className={isAxos ? "text-cyan-300" : "text-emerald-300"} />
          <p className="font-karla text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">
            {content.primaryLabel}
          </p>
        </div>
        <p className="mt-1.5 font-karla text-xs font-semibold text-white sm:text-sm">
          {content.primaryValue}
        </p>
      </div>

      <div className="absolute bottom-6 right-6 z-30 hidden min-w-[160px] rounded-xl border border-white/15 bg-[#07121c]/82 px-3.5 py-3 shadow-2xl backdrop-blur-xl sm:block">
        <div className="flex items-center gap-2">
          {isAxos ? (
            <ServerCog size={14} className="text-cyan-200" />
          ) : (
            <ShieldCheck size={14} className="text-emerald-200" />
          )}
          <p className="font-karla text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">
            {content.secondaryLabel}
          </p>
        </div>
        <p className="mt-1.5 font-karla text-sm font-semibold text-white">
          {content.secondaryValue}
        </p>
      </div>

      <ScanLine className="pointer-events-none absolute bottom-5 right-5 z-20 size-5 text-white/20 sm:hidden" />
    </div>
  );
}
