import Pagehome from "@/components/home/Pagehome";

export const metadata = {
  title: {
    absolute: "ScotiTech Solutions | Business Software for Controlled Operations",
  },
  description:
    "ScotiTech Solutions is a UK-registered technology company serving organisations worldwide with AppDeploy for private app distribution, AXOS for controlled enterprise operations, and focused digital products.",
  keywords: [
    "private app distribution",
    "AI workspace",
    "private AI",
    "enterprise AI platform",
    "digital workplace solutions",
    "secure collaboration software",
    "enterprise knowledge management",
    "Google Workspace alternative",
    "Microsoft 365 alternative",
    "self-hosted AI",
    "on premise AI",
    "ScotiTech",
  ],
  alternates: { canonical: "/" },
};

export default function Page() {
  return <Pagehome />;
}
