
import AiCaptionHero from "@/components/products/aicaptionstudio/AiCaptionHero"
import WhyChooseAICaptionStudio from '@/components/products/aicaptionstudio/WhyChoose'
import HowToGetAISection from '@/components/products/aicaptionstudio/HowToGetAISection'
import ComplianceSecurity from '@/components/products/aicaptionstudio/ComplianceSecurity'
import CaptionStudio from '@/components/products/aicaptionstudio/CaptionStudio'
import FeaturesCarousel from '@/components/products/aicaptionstudio/KeyCarousal'


const page = () => {
  return (
    <>
    
    <AiCaptionHero/>
    <CaptionStudio/>
    <FeaturesCarousel />
    <WhyChooseAICaptionStudio/>
    <HowToGetAISection/>
    <ComplianceSecurity/>
    
  </>

  )
}

export default page
