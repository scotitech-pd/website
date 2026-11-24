import HeroSection from "./HeroSection";
import VamiqSection from "./VamiqSection";
import PricingSection from "./PricingSection";
import SecuritySection from "./SecuritySection";
import ServicesSection from "./ServicesSection";
import CompanySection from "./CompanySection";
import InsightsSection from "./InsightsSection";
import ContactSection from "./ContactSection";

/*
 * The home page leads with Vamiq (founder, 24 Nov 2026): what it does, the
 * devices it covers, its price and its security, then the services around
 * it, the company, insights and how to reach us.
 */
const Pagehome = () => {
  return (
    <>
      <HeroSection />
      <VamiqSection />
      <PricingSection />
      <SecuritySection />
      <ServicesSection />
      <CompanySection />
      <InsightsSection />
      <ContactSection />
    </>
  );
};

export default Pagehome;
