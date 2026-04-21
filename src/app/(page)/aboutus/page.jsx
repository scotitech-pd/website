export const metadata = {
  title: "About us | ScotiTech Solutions Limited",
}

import AboutScotiTech from "@/components/aboutus/AboutScotitech";
import ClientLogoStrip from "@/components/aboutus/ClientLogoStrip";
import FoundersSection from "@/components/aboutus/FoundersSection";
import GlobalD from "@/components/aboutus/GlobalD";
import HowWeWorks from "@/components/aboutus/HowWeWorks";
import LeadershipTeam from "@/components/aboutus/Leadershipteam";
import MissionVision from "@/components/aboutus/MissionVision";
import ProductPlatformStory from "@/components/aboutus/ProductPlatformStory";
import Timeline from "@/components/aboutus/TimelineData";

const page = () => {
  return (
    <>
      <AboutScotiTech />
      <ClientLogoStrip />
      <Timeline />
      <FoundersSection />
      <ProductPlatformStory />
      <MissionVision />
      <LeadershipTeam />
      <HowWeWorks />
      <GlobalD />
    </>
  );
};

export default page;
