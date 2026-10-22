import ProductTemplate from "@/components/products/ProductTemplate";
import JsonLd from "@/components/seo/JsonLd";
import { getProduct } from "@/lib/products";
import { ogImage, pageMetadata, siteUrl } from "@/lib/seo";
import { vamiqMedia } from "@/lib/company";

export const metadata = pageMetadata({
  title: "Vamiq: Apple device management and private apps",
  description:
    "Vamiq (formerly AppDeploy) manages your company's iPhones, iPads and Macs and gives your people a branded app store for your private apps, with build checks before each release.",
  path: "/products/vamiq",
  image: ogImage("vamiq.jpg", "Vamiq: your Apple devices and your own apps, managed in one place"),
  keywords: [
    "Vamiq",
    "AppDeploy",
    "Apple device management",
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
