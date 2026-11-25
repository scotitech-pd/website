import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { certifications } from "@/lib/company";

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

/**
 * Dormant slot for certificates ScotiTech holds. It renders NOTHING while
 * `certifications` in lib/company.js is empty, which it is until a
 * certificate has been issued: no heading, no badge, no "in progress".
 * Each entry links to the public register so a reader can check it.
 */
export default function CertificationsSection({ className }) {
  if (!certifications.length) return null;

  return (
    <div className={className}>
      <Reveal>
        <h3 className="t-h3">Certifications</h3>
      </Reveal>
      <ul className="mt-6 grid gap-5 md:grid-cols-2">
        {certifications.map((c) => (
          <Reveal as="li" key={`${c.name}-${c.number}`} className="flex">
            <article className="flex w-full flex-col rounded-xl border border-hairline bg-surface p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-brand-soft text-brand-strong">
                  <BadgeCheck size={19} aria-hidden="true" />
                </span>
                <h4 className="text-[17px] font-semibold text-strong">{c.name}</h4>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[14px]">
                {c.body && (
                  <>
                    <dt className="text-muted">Certified by</dt>
                    <dd className="text-strong">{c.body}</dd>
                  </>
                )}
                {c.number && (
                  <>
                    <dt className="text-muted">Certificate</dt>
                    <dd className="text-strong">{c.number}</dd>
                  </>
                )}
                {c.issued && (
                  <>
                    <dt className="text-muted">Issued</dt>
                    <dd className="text-strong">{formatDate(c.issued)}</dd>
                  </>
                )}
                {c.expires && (
                  <>
                    <dt className="text-muted">Valid until</dt>
                    <dd className="text-strong">{formatDate(c.expires)}</dd>
                  </>
                )}
              </dl>
              {c.verifyUrl && (
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-semibold text-brand-strong hover:text-brand"
                >
                  {c.verifyLabel || "Check the public register"}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
