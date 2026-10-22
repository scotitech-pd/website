import { ogImage, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Media and awards",
  description:
    "ScotiTech news and recognition: UK StartUp Awards 2026 Scotland Regional Finalist for Digital StartUp of the Year, and NextGen Innovator of the Year 2025 for founder Pradeep Dahiya.",
  path: "/media",
  image: ogImage("company.jpg", "ScotiTech Solutions, a software company built in Scotland"),
});

export default function MediaLayout({ children }) {
  return children;
}
