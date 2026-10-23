import { ogImage, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Media and awards",
  description:
    "ScotiTech news and awards: UK StartUp Awards 2026 Scotland Regional Finalist, and NextGen Innovator of the Year 2025 for founder Pradeep Dahiya.",
  path: "/media",
  image: ogImage("company.jpg", "ScotiTech Solutions, the company behind Vamiq and AXOS"),
});

export default function MediaLayout({ children }) {
  return children;
}
