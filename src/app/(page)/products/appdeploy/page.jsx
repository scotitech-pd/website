export const metadata = {
  title: "AppDeploy | ScotiTech Solutions Limited",
}
import AppDeployCTA from "@/components/products/appdeploy/AppDeployCTA";
import AppDeployInfo from "@/components/products/appdeploy/AppDeployInfo";
import AppDeploySection from "@/components/products/appdeploy/AppDeploySection";
import CompetitorAnalysis from "@/components/products/appdeploy/CompetitorAnalysis";
import ComplianceSecurity from "@/components/products/appdeploy/ComplianceSecurity";
import KeyFeatures from "@/components/products/appdeploy/KeyFeatures";
import PricingAppDeploy from "@/components/products/appdeploy/PricingAppDeploy";
import PricingSection from "@/components/products/appdeploy/PricingSection";
import WhyChooseAppDeploy from "@/components/products/appdeploy/WhyChooseAppDeploy";
import ProblemSolutionFlow from "@/components/products/appdeploy/ProblemSolutionFlow";

const page = () => {
  return (
    <>
      <AppDeploySection />
      <AppDeployInfo />
      <ProblemSolutionFlow />
      <CompetitorAnalysis />
      <KeyFeatures />
      <WhyChooseAppDeploy />
      <PricingAppDeploy />
      <AppDeployCTA />
      <ComplianceSecurity />
    </>
  );
};

export default page;
