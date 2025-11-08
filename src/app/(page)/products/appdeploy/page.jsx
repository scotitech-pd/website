import AppDeployInfo from "@/components/products/appdeploy/AppDeployInfo"
import AppDeploySection from "@/components/products/appdeploy/AppDeploySection"
import ComplianceSecurity from "@/components/products/appdeploy/ComplianceSecurity"
import HowAppDeployWorks from "@/components/products/appdeploy/HowAppDeployWorks"
import KeyFeatures from "@/components/products/appdeploy/KeyFeatures"
import WhyChooseAppDeploy from "@/components/products/appdeploy/WhyChooseAppDeploy"

const page = () => {
  return (                        
    <>
        <AppDeploySection/>  
        <AppDeployInfo/>
        <KeyFeatures/>  
        <WhyChooseAppDeploy/>
        <HowAppDeployWorks/>
        <ComplianceSecurity/>
    </>
  )
}

export default page