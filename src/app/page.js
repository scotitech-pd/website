import Pagehome from "@/components/home/Pagehome";

export const metadata = {
  title: {
    absolute: "ScotiTech Solutions | Private App Distribution & AI Workspace Products",
  },
  description:
    "ScotiTech Solutions builds focused software products: AppDeploy for private app distribution and AXOS for private AI workspace, secure collaboration, enterprise knowledge management, and digital workplace control.",
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
