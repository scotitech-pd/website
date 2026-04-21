
import SubscribeSection from "./SubscribeSection";
import ScotiTechPulse from "./ScotiTechPulse";
import TrustAndCompliance from "./TrustAndCompliance";
import FaqSection from "./FaqSection";
import WhyChooseScotiTech from "./WhyChooseScotiTech";
import OurProducts from "./OurProducts";
import OurStory from "./OurStory";
import HeroSection from "./HeroSection";

const Pagehome = () => {
  return (
    <>
      <div className=" bg-white">
        <HeroSection/>
        <OurStory/>
        <OurProducts/>
        <WhyChooseScotiTech/>
        <FaqSection />
        <TrustAndCompliance />
        <ScotiTechPulse />   
        <SubscribeSection />
      </div>
    </>
  );
};

export default Pagehome;
