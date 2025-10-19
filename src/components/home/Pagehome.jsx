import SubscribeSection from "./SubscribeSection";
import ScotiTechPulse from "./ScotiTechPulse ";
import TrustAndCompliance from "./TrustAndCompliance ";
import UnlockSection from "./UnlockSection";
import FaqSection from "./FaqSection";
import DownloadDashboard from "./DownloadDashboard";
import WhyChooseScotiTech from "./WhyChooseScotiTech";
import OurProducts from "./OurProducts";
import OurStory from "./OurStory";

const Pagehome = () => {
  return (
    <>
      {/* Stay Ahead With ScotiTech */}
      <div className=" bg-white">
        <OurStory/>
        <OurProducts/>
        <WhyChooseScotiTech/>
        <DownloadDashboard />
        <FaqSection />
        <UnlockSection />
        <TrustAndCompliance />
        <ScotiTechPulse />
        <SubscribeSection />
      </div>
    </>
  );
};

export default Pagehome;
