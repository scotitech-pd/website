import AboutSection from "@/components/products/claritypath/AboutSection"
import ClarityPathSection from "@/components/products/claritypath/ClarityPathSection"
import ClarityPathSteps from "@/components/products/claritypath/ClarityPathSteps"
import ComplianceSecurity from "@/components/products/claritypath/ComplianceSecurity"
import KeyFeaturesSection from "@/components/products/claritypath/KeyFeaturesSection"
import WhatIsClarityPath from "@/components/products/claritypath/WhatIsClarityPath"
import WhyChooseSection from "@/components/products/claritypath/WhyChooseSection"

const claritypath = () => {
  return (
    <>
        <ClarityPathSection/>
        <WhatIsClarityPath/>
        <KeyFeaturesSection/> //carousal needs improvement
        <WhyChooseSection/>
        <ClarityPathSteps/>
        <ComplianceSecurity/> // needs improvement between 760 and 1260px
        <AboutSection/>
    </>
  )
}

export default claritypath