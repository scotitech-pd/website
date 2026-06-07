import { jsonLdScript } from "@/lib/seo";

/**
 * Inline a JSON-LD payload (or array of payloads) as <script type="application/ld+json">.
 * Safe to render in either Server or Client components.
 */
export default function JsonLd({ data }) {
  const payloads = Array.isArray(data) ? data : [data];
  return (
    <>
      {payloads.filter(Boolean).map((payload, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(payload) }}
        />
      ))}
    </>
  );
}
