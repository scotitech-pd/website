import Pagehome from "@/components/home/Pagehome";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata, SITE_DESCRIPTION, siteUrl } from "@/lib/seo";
import { vamiqMedia } from "@/lib/company";

export const metadata = pageMetadata({
  title: "ScotiTech | Software for Apple devices, private apps and AI",
  absoluteTitle: true,
  description: SITE_DESCRIPTION,
  path: "/",
});

const filmJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: vamiqMedia.film.title,
  description: vamiqMedia.film.description,
  thumbnailUrl: siteUrl(vamiqMedia.film.poster),
  contentUrl: vamiqMedia.film.src,
  uploadDate: vamiqMedia.film.uploadDate,
  duration: vamiqMedia.film.duration,
  publisher: { "@id": "https://scotitech.com/#organization" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={filmJsonLd} />
      <Pagehome />
    </>
  );
}
