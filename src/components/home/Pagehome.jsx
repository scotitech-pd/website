
import SubscribeSection from "./SubscribeSection";
import InsightsSection from "./InsightsSection";
import ScotiTechPulse from "./ScotiTechPulse";
import FaqSection from "./FaqSection";
import WhyChooseScotiTech from "./WhyChooseScotiTech";
import OurProducts from "./OurProducts";
import HeroSection from "./HeroSection";

const Pagehome = () => {
  return (
    <>
      <div className="bg-[#f7f7f5]">
        <HeroSection/>
        <OurProducts/>
        <WhyChooseScotiTech/>
        <FaqSection />
        <ScotiTechPulse />   
        <InsightsSection />
        <SubscribeSection />
      </div>
    </>
  );
};

export default Pagehome;
