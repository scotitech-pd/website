import AboutScotiTech from "@/components/aboutus/AboutScotitech";
import GlobalD from "@/components/aboutus/GlobalD";
import LeadershipTeam from "@/components/aboutus/Leadershipteam";
import MissionVision from "@/components/aboutus/MissionVision";
import Timeline from "@/components/aboutus/TimelineData";
import React from "react";

const page = () => {
  return <>
  <AboutScotiTech />
  <Timeline />
  <LeadershipTeam />
  <MissionVision />
  <GlobalD/>
  </>;
};

export default page;
