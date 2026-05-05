import HeroSection from "./HeroSection";
import OurProducts from "./OurProducts";
import InsideProducts from "./InsideProducts";
import WhyChooseScotiTech from "./WhyChooseScotiTech";
import ScotiTechPulse from "./ScotiTechPulse";
import InsightsSection from "./InsightsSection";
import SubscribeSection from "./SubscribeSection";

const Pagehome = () => {
  return (
    <div className="bg-[#F7F7F5]">
      <HeroSection />
      <OurProducts />
      <InsideProducts />
      <WhyChooseScotiTech />
      <ScotiTechPulse />
      <InsightsSection />
      <SubscribeSection />
    </div>
  );
};

export default Pagehome;
