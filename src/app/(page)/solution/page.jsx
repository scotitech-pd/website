import CircularProgress from "@/components/solutions/CircularProgress";
import ComparisonSection from "@/components/solutions/ComparisonSection";
import HowItWorks from "@/components/solutions/HowItWorks";
import ProductShowcase from "@/components/solutions/ProductShowcase";
import TechnologySection from "@/components/solutions/TechnologySection";

const page = () => {
  return (
    <>
      <TechnologySection/>
      <ProductShowcase/>
      <HowItWorks />
      <ComparisonSection/>
      
    </>
  );
};

export default page;
