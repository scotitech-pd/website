export const metadata = {
  title: "Contact Us | ScotiTech Solutions Limited",
};
import Hero from "@/components/contact/Hero";
import GetInTouch from "@/components/contact/Getintouch";
import SpecificSolution from "@/components/contact/Specificsolution";
import NewsletterSubscription from "@/components/contact/NewsletterSubscription";
import CalendlyBooking from "@/components/contact/CalendlyBooking";

const page = () => {
  return (
    <>
      <Hero />
      <GetInTouch />
      <CalendlyBooking/>
      <SpecificSolution />
      <NewsletterSubscription />
    </>
  );
};  

export default page;
