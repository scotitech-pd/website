import AppDeploySection from "@/components/solutions/AppDeploySection";
import CircularProgress from "@/components/solutions/CircularProgress";
import ComparisonSection from "@/components/solutions/ComparisonSection";
import HeroScotitech from "@/components/solutions/HeroScotitech";
import HowItWorks from "@/components/solutions/HowItWorks";
import ProductShowcase from "@/components/solutions/ProductShowcase";
import SecurityCompliance from "@/components/solutions/SecurityCompliance";
import TechnologySection from "@/components/solutions/TechnologySection";
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
    </>
  );
};

export default page;
