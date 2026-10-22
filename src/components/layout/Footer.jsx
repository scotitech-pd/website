import Link from "next/link";
import Image from "next/image";
import CookiePreferencesButton from "@/components/cookie/CookiePreferencesButton";
import { VAMIQ_URL, contact } from "@/lib/company";

const columns = [
  {
    title: "Products",
    links: [
      { title: "Vamiq", href: "/products/vamiq" },
      { title: "Vamiq website", href: VAMIQ_URL, external: true },
      { title: "AXOS", href: "/products/axos" },
      { title: "ClarityPath", href: "/products/claritypath" },
      { title: "All products", href: "/products" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About ScotiTech", href: "/aboutus" },
      { title: "Services", href: "/#services" },
      { title: "Trust and security", href: "/trust" },
      { title: "Media and awards", href: "/media" },
      { title: "Careers", href: "/careers" },
      { title: "Insights", href: "/insights" },
    ],
  },
  {
    title: "Contact",
    links: [
      { title: contact.email, href: `mailto:${contact.email}` },
      { title: contact.phone, href: contact.phoneHref },
      { title: "Contact page", href: "/contact" },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/scotitech-ltd/", external: true },
      { title: "Instagram", href: "https://www.instagram.com/scotitechsolutions/", external: true },
      { title: "WhatsApp", href: "https://wa.me/447424331001", external: true },
    ],
  },
];

/* Software-directory listings (Vamiq is listed under its former name). */
const listings = [
  { name: "Capterra", href: "https://www.capterra.com/p/10056775/AppDeploy/" },
  { name: "GetApp", href: "https://www.getapp.com/all-software/a/appdeploy-1/" },
  { name: "Software Advice", href: "https://www.softwareadvice.com/product/564477-AppDeploy/" },
  { name: "Sell With Boost", href: "https://sellwithboost.com/startups/appdeploy" },
];

const linkClass = "text-[14px] text-body transition-colors hover:text-strong";

function FooterLink({ link }) {
  return link.external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {link.title}
    </a>
  ) : (
    <Link href={link.href} className={linkClass}>
      {link.title}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface-sunken/60">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <Link href="/" aria-label="ScotiTech home" className="inline-block">
              <Image src="/logo/scotitech-wordmark.png" alt="ScotiTech" width={538} height={150} className="h-7 w-auto brightness-0" />
            </Link>
            <p className="mt-5 text-[14px] leading-6 text-body">
              The company behind Vamiq and AXOS.
            </p>
            <p className="mt-4 text-[13px] leading-6 text-muted">{contact.office}</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">{col.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.title}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-hairline py-5 text-[13px] text-muted">
          <span>Vamiq (listed as AppDeploy) on</span>
          {listings.map((l, i) => (
            <span key={l.name}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:text-strong hover:underline">
                {l.name}
              </a>
              {i < listings.length - 1 ? "," : ""}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-hairline py-6 md:flex-row md:items-start md:justify-between">
          <p className="max-w-2xl text-[12px] leading-5 text-muted">
            © {new Date().getFullYear()} ScotiTech Solutions Limited. Registered in Scotland, company no.{" "}
            <a
              href="https://find-and-update.company-information.service.gov.uk/company/SC829021"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:text-strong hover:underline"
            >
              SC829021
            </a>
            . ICO registration ZB925464. Registered office: 11 Caldervale Drive, Motherwell ML1 2GB, UK.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-muted">
            <Link href="/privacy-policy" className="hover:text-strong">Privacy</Link>
            <Link href="/cookie-policy" className="hover:text-strong">Cookies</Link>
            <Link href="/terms-and-conditions" className="hover:text-strong">Terms</Link>
            <Link href="/trust#disclosure" className="hover:text-strong">Responsible disclosure</Link>
            <CookiePreferencesButton className="cursor-pointer hover:text-strong" />
          </div>
        </div>
      </div>
    </footer>
  );
}
