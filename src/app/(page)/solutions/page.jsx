export const metadata = {
  title: "Solutions | ScotiTech Solutions Limited",
};
import ComparisonSection from "@/components/solutions/ComparisonSection";
import CtaSection from "@/components/solutions/CtaSection";
import FaqSection from "@/components/solutions/FaqSection";
import HeroScotitech from "@/components/solutions/HeroScotitech";
import TechnologySection from "@/components/solutions/TechnologySection";
import Testimonials from "@/components/solutions/Testimonials";

const page = () => {
  return (
    <>
      <HeroScotitech />
      <TechnologySection />
      <ComparisonSection />
      <Testimonials />
      <FaqSection />
      <CtaSection />
    </>
  );
};

export default page;
