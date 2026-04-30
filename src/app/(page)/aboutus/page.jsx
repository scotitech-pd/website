export const metadata = {
  title: "About us | ScotiTech Solutions Limited",
}

import AboutScotiTech from "@/components/aboutus/AboutScotitech";
import ClientLogoStrip from "@/components/aboutus/ClientLogoStrip";
import FoundersSection from "@/components/aboutus/FoundersSection";
import GlobalD from "@/components/aboutus/GlobalD";
import LeadershipTeam from "@/components/aboutus/Leadershipteam";
import ProductPlatformStory from "@/components/aboutus/ProductPlatformStory";

const page = () => {
  return (
    <>
      <AboutScotiTech />
      <ClientLogoStrip />
      <FoundersSection />
      <ProductPlatformStory />
      <LeadershipTeam />
      <GlobalD />
    </>
  );
};

export default page;
