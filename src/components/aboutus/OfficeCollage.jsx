import Image from "next/image";
import { Building2, MapPin } from "lucide-react";

export default function OfficeCollage() {
  return (
    <figure className="relative mx-auto w-full max-w-[660px]">
      <div className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(226,88,14,0.13),rgba(226,88,14,0.03)_48%,transparent_72%)] blur-2xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white p-2.5 shadow-[0_28px_70px_rgba(15,23,42,0.16)] sm:p-3">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-slate-100">
          <Image
            src="/images/aboutus/office/office-exterior.jpg"
            alt="Maxim 1 at Eurocentral, where ScotiTech maintains its Regus operational address"
            fill
            priority
            sizes="(max-width: 1024px) 92vw, 48vw"
            className="object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1220]/70 via-[#0b1220]/5 to-transparent" />

          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-2 shadow-sm backdrop-blur-md sm:left-5 sm:top-5">
            <Building2 className="h-3.5 w-3.5 text-brand-strong" />
            <span className="font-karla text-[10px] font-bold uppercase tracking-[0.13em] text-strong sm:text-[11px]">
              Serviced operational address
            </span>
          </div>

          <div className="absolute bottom-5 left-5 right-5 max-w-sm text-white sm:bottom-6 sm:left-6">
            <p className="font-karla text-xs font-semibold uppercase tracking-[0.15em] text-white/75">
              Regus Eurocentral
            </p>
            <p className="mt-1.5 font-lora text-2xl font-semibold leading-tight sm:text-3xl">
              A professional base in Scotland
            </p>
          </div>

          <div className="absolute bottom-[-1px] right-4 hidden w-[36%] rotate-[2deg] overflow-hidden rounded-t-[18px] border-[5px] border-b-0 border-white bg-white shadow-2xl sm:block">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/aboutus/office/meeting-room.jpg"
                alt="Meeting facilities available through the Regus Eurocentral serviced workspace"
                fill
                sizes="(max-width: 1024px) 32vw, 17vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <figcaption className="grid gap-3 px-3 pb-2 pt-4 sm:grid-cols-[auto_1fr] sm:items-start sm:px-4 sm:pb-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft text-brand-strong">
            <MapPin className="h-4 w-4" />
          </span>
          <div>
            <p className="font-karla text-sm font-bold text-strong">
              Operational address · Eurocentral, Motherwell
            </p>
            <p className="mt-1 font-karla text-sm leading-relaxed text-muted">
              ScotiTech maintains its operational address at Regus Eurocentral,
              with professionally managed meeting and workspace facilities
              available through the centre.
            </p>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
