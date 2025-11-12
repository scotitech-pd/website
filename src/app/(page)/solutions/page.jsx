import GlobalD from "@/components/aboutus/GlobalD";
import AppDeploySection from "@/components/solutions/AppDeploySection";
import ComparisonSection from "@/components/solutions/ComparisonSection";
import CtaSection from "@/components/solutions/CtaSection";
import FaqSection from "@/components/solutions/FaqSection";
import HeroScotitech from "@/components/solutions/HeroScotitech";
import HowItWorks from "@/components/solutions/HowItWorks";
import KnowledgeSection from "@/components/solutions/KnowledgeSection";
import ProductShowcase from "@/components/solutions/ProductShowcase";
import SecurityCompliance from "@/components/solutions/SecurityCompliance";
import TechnologySection from "@/components/solutions/TechnologySection";
import Testimonials from "@/components/solutions/Testimonials";
import WhoUsesAppDeploy from "@/components/solutions/WhoUsesAppDeploy";
import WhyScotitech from "@/components/solutions/WhyScotitech";

const page = () => {
  return (
    <>
      <HeroScotitech />
      <TechnologySection />
      <ProductShowcase />
      <WhyScotitech />
      <AppDeploySection/>
      <HowItWorks />
      <ComparisonSection/>
      <SecurityCompliance/>
      <WhoUsesAppDeploy/>
       
      <Testimonials/>
     
      <KnowledgeSection/>
      <FaqSection/>
      <CtaSection/>
    </>
  );
};

export default page;
