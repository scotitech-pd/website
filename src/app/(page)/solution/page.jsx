import CircularProgress from "@/components/solutions/CircularProgress";
import ComparisonSection from "@/components/solutions/ComparisonSection";
import HowItWorks from "@/components/solutions/HowItWorks";
import ProductShowcase from "@/components/solutions/ProductShowcase";
import TechnologySection from "@/components/solutions/TechnologySection";
import WhyScotitech from "@/components/solutions/WhyScotitech";

const page = () => {
  return (
    <>
      <TechnologySection/>
      <ProductShowcase/>
      <WhyScotitech/>
      <HowItWorks />
      <ComparisonSection/>
      
    </>
  );
};

export default page;
