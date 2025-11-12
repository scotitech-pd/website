import AboutScotiTech from "@/components/aboutus/AboutScotitech";
import FoundersSection from "@/components/aboutus/FoundersSection";
import GlobalD from "@/components/aboutus/GlobalD";
import HowWeWorks from "@/components/aboutus/HowWeWorks";
import LeadershipTeam from "@/components/aboutus/Leadershipteam";
import MissionVision from "@/components/aboutus/MissionVision";
import Timeline from "@/components/aboutus/TimelineData";
import WhyThisMatters from "@/components/aboutus/WhyThisMatters";

const page = () => {
  return (
    <>
      <AboutScotiTech />
      <Timeline />
      <FoundersSection />
      <MissionVision />
      <LeadershipTeam />
      <HowWeWorks />
      <GlobalD />
      <WhyThisMatters />
    </>
  );
};

export default page;
