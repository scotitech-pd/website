import Hero from "@/components/contact/Hero";
import GetInTouch from "@/components/contact/Getintouch";
import SpecificSolution from "@/components/contact/Specificsolution";
import BeyondBusiness from "@/components/contact/BeyondBusiness";
import NewsletterSubscription from "@/components/contact/NewsletterSubscription";
import CalendlyBooking from "@/components/contact/CalendlyBooking";
import { CaseLower } from "lucide-react";
import CaseStudiesAppDeploy from "@/components/contact/CaseStudiesAppDeploy";

const page = () => {
  return (
    <>
      <Hero />
      <GetInTouch />
      <CalendlyBooking/>
      <SpecificSolution />
      <NewsletterSubscription />
      {/* <CaseStudiesAppDeploy /> */}
      <BeyondBusiness />
    </>
  );
};  

export default page;
