
import SubscribeSection from "./SubscribeSection";
import ScotiTechPulse from "./ScotiTechPulse";
import FaqSection from "./FaqSection";
import WhyChooseScotiTech from "./WhyChooseScotiTech";
import OurProducts from "./OurProducts";
import HeroSection from "./HeroSection";

const Pagehome = () => {
  return (
    <>
      <div className=" bg-white">
        <HeroSection/>
        <OurProducts/>
        <WhyChooseScotiTech/>
        <FaqSection />
        <ScotiTechPulse />   
        <SubscribeSection />
      </div>
    </>
  );
};

export default Pagehome;
