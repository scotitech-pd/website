import React from 'react'
import AiCaptionHero from "@/components/products/aicaptionstudio/AiCaptionHero"
import WhyChooseAICaptionStudio from '@/components/products/aicaptionstudio/WhyChoose'
import HowToGetAISection from '@/components/products/aicaptionstudio/HowToGetAISection'
import ComplianceSecurity from '@/components/products/aicaptionstudio/ComplianceSecurity'
import CaptionStudio from '@/components/products/aicaptionstudio/CaptionStudio'

const page = () => {
  return (
    <>
    <AiCaptionHero/>
    <CaptionStudio/>
    <WhyChooseAICaptionStudio/>
    <HowToGetAISection/>
    <ComplianceSecurity/>
  </>
  )
}

export default page
