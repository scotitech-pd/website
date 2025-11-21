export const metadata = {
  title: "Opsly | ScotiTech Solutions Limited",
}
import ComingSoon from "@/components/products/opsly/ComingSoon"
import ComplianceSecurity from "@/components/products/opsly/ComplianceSecurity"
import HowToGetOpsly from "@/components/products/opsly/HowToGetOpsly"
import OpslyFeaturesSection from "@/components/products/opsly/OpslyFeaturesSection"
import OpslyHeroSection from "@/components/products/opsly/OpslyHeroSection"
import OpslyInfoSection from "@/components/products/opsly/OpslyInfoSection"
import OpslyOverview from "@/components/products/opsly/OpslyOverview"
import WhyChooseOpsly from "@/components/products/opsly/WhyChooseOpsly"

const Opsly = () => {
  return (
    <>
      <ComingSoon/>
        {/* <OpslyHeroSection/> */}
        <OpslyInfoSection/>
        <OpslyOverview />
        {/* <OpslyFeaturesSection/>
        <WhyChooseOpsly/>
        <HowToGetOpsly/>
        <ComplianceSecurity/> */}
      
    </>
  )
}

export default Opsly