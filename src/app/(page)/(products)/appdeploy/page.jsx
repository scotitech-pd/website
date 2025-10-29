import AppDeployInfo from "@/components/products/appdeploy/AppDeployInfo"
import AppDeploySection from "@/components/products/appdeploy/AppDeploySection"
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
    </>
  )
}

export default page