/**
 * SEO helpers — JSON-LD builders, canonicals, and per-route metadata.
 *
 * Use `siteUrl(path)` to build absolute URLs from a relative path; use
 * `canonical(path)` inside a Next.js `metadata` export.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://scotitech.com";

export const SITE_NAME = "ScotiTech Solutions";

export const siteUrl = (path = "/") => new URL(path, SITE_URL).toString();

export const canonical = (path) => ({ canonical: siteUrl(path) });

/**
 * SoftwareApplication / Product schema generated from products.js entries.
 * Renders pricing offers when `product.pricing.plans` is present.
 */
export function productJsonLd(product, path) {
  const url = siteUrl(path);
  const ld = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    alternateName: product.tagline,
    description: product.description,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: product.operatingSystem || "iOS, Web, Android",
    brand: { "@type": "Brand", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      sameAs: [
        "https://www.linkedin.com/company/scotitech-ltd/",
        "https://find-and-update.company-information.service.gov.uk/company/SC829021",
        "https://www.capterra.com/p/10056775/AppDeploy/",
        "https://www.getapp.com/all-software/a/appdeploy-1/",
        "https://www.softwareadvice.com/product/564477-AppDeploy/",
      ],
    },
  };

  if (product.logo) ld.image = siteUrl(product.logo);

  if (product.pricing?.plans?.length) {
    // Only emit Offer entries for plans with a real numeric price; skip
    // "Custom" / "Contact" tiers since Google requires a price on Offer.
    const offers = product.pricing.plans
      .map((p) => {
        if (typeof p.price !== "string" && typeof p.price !== "number") return null;
        const raw = String(p.price).trim();
        if (!raw || /^[A-Za-z]/.test(raw)) return null;
        const cleanPrice = raw.replace(/[^\d.]/g, "");
        if (!cleanPrice) return null;
        return {
          "@type": "Offer",
          name: p.name,
          price: cleanPrice,
          priceCurrency: "GBP",
          url: p.cta?.external ? p.cta.href : url,
          availability: "https://schema.org/InStock",
        };
      })
      .filter(Boolean);
    if (offers.length) ld.offers = offers;
  }

  return ld;
}

/**
 * FAQPage schema — turns the existing faqs array into a SERP-eligible block.
 */
export function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/**
 * BreadcrumbList — gives Google a clean trail to render in search results.
 * Pass an array of { name, path } in order, root → current page.
 */
export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: siteUrl(it.path),
    })),
  };
}

/**
 * Article schema used on /insights/[slug].
 */
export function articleJsonLd(insight, path) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.seoDescription || insight.summary,
    image: insight.image ? siteUrl(insight.image) : undefined,
    datePublished: insight.date,
    dateModified: insight.updated || insight.date,
    keywords: Array.isArray(insight.tags) ? insight.tags.join(", ") : undefined,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: siteUrl("/logo/logo.png"),
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": siteUrl(path) },
  };
}

/** Safe-escape a JSON-LD payload for inlining in a <script> tag. */
export function jsonLdScript(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
