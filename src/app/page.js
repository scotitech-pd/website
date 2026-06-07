import Pagehome from "@/components/home/Pagehome";

export const metadata = {
  title: {
    absolute: "ScotiTech Solutions | Private App Distribution & AI Workspaces",
  },
  description:
    "ScotiTech Solutions builds focused, privacy-conscious software — AppDeploy for private iOS rollout and AXOS for governance-first AI workspaces. UK-registered, worldwide delivery.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <Pagehome />;
}
