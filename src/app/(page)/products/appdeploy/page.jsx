import AppDeployCTA from "@/components/products/appdeploy/AppDeployCTA";
import AppDeployInfo from "@/components/products/appdeploy/AppDeployInfo";
import AppDeploySection from "@/components/products/appdeploy/AppDeploySection";
import CompetitorAnalysis from "@/components/products/appdeploy/CompetitorAnalysis";
import ComplianceSecurity from "@/components/products/appdeploy/ComplianceSecurity";
import HowAppDeployWorks from "@/components/products/appdeploy/HowAppDeployWorks";
import KeyFeatures from "@/components/products/appdeploy/KeyFeatures";
import PainPointStory from "@/components/products/appdeploy/PainPointStory";
import PricingAppDeploy from "@/components/products/appdeploy/PricingAppDeploy";
import PricingSection from "@/components/products/appdeploy/PricingSection";
import WhyChooseAppDeploy from "@/components/products/appdeploy/WhyChooseAppDeploy";

const page = () => {
  return (
    <>
      <AppDeploySection />
      <AppDeployInfo />
      <CompetitorAnalysis />
      <PainPointStory />
      <KeyFeatures />
      <WhyChooseAppDeploy />
      <PricingAppDeploy />
      <HowAppDeployWorks />
      <AppDeployCTA />
      <ComplianceSecurity />
    </>
  );
};

export default page;
