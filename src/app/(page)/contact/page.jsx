import ContactExperience from "@/components/contact/ContactExperience";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact ScotiTech: Vamiq demos, setup and partners",
  absoluteTitle: true,
  description:
    "Talk to ScotiTech about Vamiq, Apple Business set-up, private app publishing or partnering. Email info@scotitech.com or call 01698 609091.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactExperience />;
}
