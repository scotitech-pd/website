import ContactExperience from "@/components/contact/ContactExperience";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact ScotiTech",
  description:
    "Talk to ScotiTech about Vamiq, an AXOS deployment, Apple Business set-up, partnerships or our services.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactExperience />;
}
