import ProductTemplate from "@/components/products/ProductTemplate";
import JsonLd from "@/components/seo/JsonLd";
import { getProduct } from "@/lib/products";
import { ogImage, pageMetadata, siteUrl } from "@/lib/seo";
import { vamiqMedia } from "@/lib/company";

export const metadata = pageMetadata({
  title: "Vamiq: device management for small businesses",
  description:
    "Vamiq (formerly AppDeploy) is device management for small businesses: iPhones, iPads, Macs and Windows PCs in one workspace, with a branded app store.",
  path: "/products/vamiq",
  image: ogImage("vamiq.jpg", "Vamiq: your devices and your own apps, managed in one place"),
  keywords: [
    "Vamiq",
    "AppDeploy",
    "device management for small businesses",
    "Apple device management",
    "Windows device management",
    "private app distribution",
    "internal iOS app distribution",
    "branded app store",
    "Mac management",
    "Apple Business",
    "release controls",
  ],
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

export default function VamiqPage() {
  return (
    <>
      <JsonLd data={filmJsonLd} />
      <ProductTemplate product={getProduct("vamiq")} />
    </>
  );
}
