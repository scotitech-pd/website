export const metadata = {
  title: "Contact",
  description:
    "Contact ScotiTech for AppDeploy access, AXOS enterprise evaluation, partnerships, and product-fit conversations.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact ScotiTech",
    description:
      "Talk to the team about AppDeploy, AXOS, partnerships, or a product-fit conversation.",
    url: "/contact",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};
import ContactExperience from "@/components/contact/ContactExperience";

const page = () => {
  return <ContactExperience />;
};  

export default page;
