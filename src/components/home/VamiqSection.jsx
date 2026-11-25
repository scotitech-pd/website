import { ArrowUpRight, Laptop, Monitor, Smartphone } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import PhotoCard from "@/components/media/PhotoCard";
import { vamiqLinks } from "@/lib/company";

/*
 * Every line here is taken from what vamiq.app says (checked 24 Nov 2026).
 * Change a claim here only after vamiq.app says it.
 */

const parts = [
  {
    photo: "device-macbook",
    eyebrow: "For your devices",
    title: "Device management",
    body: "Enrol company devices, install their apps, and manage their settings and security.",
    href: vamiqLinks.devices,
    position: "55% 50%",
  },
  {
    photo: "iphone-at-work",
    eyebrow: "For your people",
    title: "Private app distribution",
    body: "Your own branded app store for your company's private and internal apps.",
    href: vamiqLinks.privateApps,
  },
  {
    photo: "code-on-mac",
    eyebrow: "For your releases",
    title: "Release controls",
    body: "Check each new build before it reaches a device, and keep a record of what was released.",
    href: vamiqLinks.releases,
  },
];

const platforms = [
  {
    icon: Smartphone,
    name: "iPhone and iPad",
    body: "Zero-touch setup for devices bought through Apple Business, or enrolment by link. App installs with the status of each one, Web Clips, and lock or erase for a lost iPhone or iPad.",
    href: vamiqLinks.devices,
    linkLabel: "Device management",
  },
  {
    icon: Laptop,
    name: "Mac",
    body: "Enrol Macs running macOS 14 or later. See FileVault, firewall and System Integrity Protection, install apps and signed .pkg packages, and see which Macs are behind on macOS updates.",
    href: vamiqLinks.mac,
    linkLabel: "Mac management",
  },
  {
    icon: Monitor,
    name: "Windows PC",
    body: "Enrol Windows 11 Pro PCs with a link and a one-time code. Set screen lock, Windows Update active hours and Microsoft Defender real-time protection, install apps, and restart, locate or erase a PC.",
    href: vamiqLinks.windows,
    linkLabel: "Windows management",
  },
];

const steps = [
  {
    title: "Set up your workspace",
    body: "Link your Apple Business account to bring in your apps and licences. They stay yours. For Windows PCs, no extra Microsoft licence is needed.",
  },
  {
    title: "Enrol your devices",
    body: "Send an enrolment link, or use zero-touch enrolment: devices bought through Apple Business set themselves up out of the box. Windows 11 Pro PCs enrol with a link and a one-time code.",
  },
  {
    title: "Publish your apps",
    body: "People find them in your branded app store, and Vamiq installs them on the devices you manage. You see the status of each install.",
  },
];

/** What Vamiq does, the devices it covers, and how a team gets started. */
export default function VamiqSection() {
  return (
    <>
      <Section id="vamiq" surface="base" spacing="lg" className="border-y border-hairline">
        <Reveal className="max-w-3xl">
          <p className="t-eyebrow">What Vamiq does</p>
          <h2 className="t-h1 mt-3">Use one part or all three, in the same workspace.</h2>
          <p className="t-lead mt-5">
            Manage your team&apos;s devices, give your people a branded app store for your own apps, and
            check each release before it reaches a device.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {parts.map((part, i) => (
            <Reveal key={part.title} delay={i * 0.05}>
              <PhotoCard {...part} external linkLabel="On vamiq.app" />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="devices" surface="muted" spacing="lg">
        <Reveal className="max-w-3xl">
          <p className="t-eyebrow">Every device your team uses</p>
          <h2 className="t-h1 mt-3">Apple devices and Windows PCs, side by side.</h2>
          <p className="t-lead mt-5">
            Each iPhone, iPad, Mac or Windows PC counts as one device, at the same price.
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {platforms.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal as="li" key={p.name} delay={i * 0.05} className="flex">
                <article className="flex w-full flex-col rounded-xl border border-hairline bg-surface p-6 shadow-soft sm:p-7">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-brand-soft text-brand-strong">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-[1.2rem] font-semibold leading-snug text-strong">{p.name}</h3>
                  <p className="mt-2 text-[15px] leading-6 text-body">{p.body}</p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-semibold text-brand-strong hover:text-brand"
                  >
                    {p.linkLabel} on vamiq.app
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <Reveal>
            <h2 className="t-h2">Up and running in three steps.</h2>
            <p className="t-lead mt-4">
              Every trial includes a free 30-minute setup call: we help you connect Apple Business and
              enrol your first device. Email{" "}
              <a href="mailto:info@vamiq.app" className="font-semibold text-brand-strong underline-offset-2 hover:underline">
                info@vamiq.app
              </a>{" "}
              to book yours.
            </p>
          </Reveal>
          <ol className="grid gap-5">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.05} className="flex gap-5 rounded-xl border border-hairline bg-surface p-6">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-[15px] font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold text-strong">{step.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-6 text-body">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>
    </>
  );
}
