import ContactExperience from "@/components/contact/ContactExperience";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact ScotiTech: Vamiq, AXOS and partnerships",
  absoluteTitle: true,
  description:
    "Talk to ScotiTech about Vamiq, an AXOS deployment, Apple Business set-up or partnerships. Email info@scotitech.com or call 01698 609091.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactExperience />;
}
