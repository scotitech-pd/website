
import React from "react";
export const metadata = {
  title: "Privacy Policy",
  description: "How ScotiTech Solutions Limited handles personal data, in line with UK GDPR.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
}
const  PrivacyPolicy  = () => {
  return (
    <section className="max-w-5xl mx-auto px-5 min-[500px]:px-10 md:px-20 py-16 text-black font-lora">
      <div className="space-y-12 text-gray-800">

        {/* Heading */}
        <div>
          <h1 className="text-4xl font-karla font-bold text-main-dark text-center">Privacy Policy</h1>
          {/* <p className="mt-2">Effective Date: [Insert Date]</p> */}
          <p className="mt-4 text-center">Last Updated: 24 August 2026</p>
        </div>

        {/* 1. Introduction */}
        <div className="space-y-4 pl-1">
          <h2 className="text-2xl font-karla font-semibold text-main-dark">1. Introduction</h2>
          <p className="leading-7">
            ScotiTech Solutions Limited ("Company," "we," "our," or "us") is committed to protecting your
            privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information
            when you visit our website (https://www.scotitech.com) and use our services.
          </p>
          <p className="leading-7">
            ScotiTech Solutions Limited (company number SC829021, registered office 11 Caldervale Drive,
            Motherwell ML1 2GB, United Kingdom) is the data controller for personal data collected through
            this website. We are registered with the Information Commissioner&apos;s Office under reference
            ZB925464. Our Data Protection Officer is Pradeep Dahiya, who can be reached at{" "}
            <a href="mailto:pradeepdahiya@scotitech.com" className="text-main-dark underline">pradeepdahiya@scotitech.com</a>.
          </p>
          <p className="leading-7">
            By accessing our website and services, you agree to this Privacy Policy. If you do not agree,
            please do not use our website.
          </p>
        </div>

        {/* 2. Information We Collect */}
        <div className="space-y-6 pl-1">
          <h2 className="text-2xl font-karla font-semibold text-main-dark">2. Information We Collect</h2>

          <div className="pl-3">
            <h3 className="text-xl font-karla font-semibold">2.1 Information You Provide to Us</h3>
            <ul className="list-disc ml-6 mt-2 space-y-2 leading-7">
              <li>Name, email address, phone number, and company details when you contact us or fill out a form.</li>
              <li>Payment details when purchasing our services.</li>
            </ul>
          </div>

          <div className="pl-3">
            <h3 className="text-xl font-karla font-semibold">2.2 Information We Collect Automatically</h3>
            <ul className="list-disc ml-6 mt-2 space-y-2 leading-7">
              <li>IP address, browser type, and device information.</li>
              <li>Cookies and usage data to improve our website experience.</li>
              <li>Company-level visitor identification data where you have allowed marketing tracking.</li>
            </ul>
          </div>

          <div className="pl-3">
            <h3 className="text-xl font-karla font-semibold">2.3 Information from Third Parties</h3>
            <p className="mt-2 leading-7">
              We may receive information from our business partners, analytics providers, or marketing
              technology providers such as Apollo.io where you have allowed optional marketing tracking.
            </p>
          </div>
        </div>

        {/* 3. How We Use Your Information */}
        <div className="space-y-4 pl-1">
          <h2 className="text-2xl font-karla font-semibold text-main-dark">3. How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-2 leading-7">
            <li>To provide and improve our IT services.</li>
            <li>To process payments and invoices.</li>
            <li>To communicate with you regarding inquiries, services, and updates.</li>
            <li>To analyze website traffic and enhance user experience.</li>
            <li>To understand business interest in our products and support relevant B2B outreach.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </div>

        {/* 4. Cookies */}
        <div className="space-y-4 pl-1">
          <h2 className="text-2xl font-karla font-semibold text-main-dark">4. Cookies and Tracking Technologies</h2>
          <p className="leading-7">We use cookies to:</p>
          <ul className="list-disc ml-6 space-y-2 leading-7 mt-2">
            <li>Enhance website functionality.</li>
            <li>Track visitor behaviour for analytics.</li>
            <li>Identify business visitors and support relevant B2B marketing where consent has been given.</li>
          </ul>
          <p className="mt-1 leading-7">
            Optional analytics and marketing technologies are controlled through the cookie banner and
            Cookie Settings link in the footer. You can also disable cookies through your browser settings,
            but some features may not function properly.
          </p>
        </div>

        {/* 5. Data Sharing */}
        <div className="space-y-4 pl-1">
          <h2 className="text-2xl font-karla font-semibold text-main-dark">5. Data Sharing & Third-Party Disclosure</h2>
          <p className="leading-7">We do not sell your personal data. However, we may share data with:</p>
          <ul className="list-disc ml-6 space-y-2 leading-7">
            <li>Service providers (e.g., payment processors, cloud hosting).</li>
            <li>Analytics and marketing technology providers where you have given optional consent.</li>
            <li>Legal authorities if required by law.</li>
            <li>Business partners in case of mergers or acquisitions.</li>
          </ul>
        </div>

        {/* 6. Data Security */}
        <div className="space-y-4 pl-1">
          <h2 className="text-2xl font-karla font-semibold text-main-dark">6. Data Security</h2>
          <p className="leading-7">
            We implement industry-standard security measures to protect your data, including encryption,
            access controls, and authentication mechanisms. Regular security audits help strengthen our systems.
            Despite these efforts, no system is completely secure. Use our website at your own risk.
          </p>
        </div>

        {/* 7. Your Rights */}
        <div className="space-y-4 pl-1">
          <h2 className="text-2xl font-karla font-semibold text-main-dark">7. Your Rights & Choices</h2>
          <p className="leading-7">
            Under applicable laws (e.g., GDPR, UK Data Protection Act), you have the right to:
          </p>
          <ul className="list-disc ml-6 space-y-2 leading-7">
            <li>Access, update, or delete your personal data.</li>
            <li>Opt-out of marketing communications.</li>
            <li>Restrict data processing under certain conditions.</li>
          </ul>
          <p className="mt-1 leading-7">
            To exercise your rights, contact us at info@scotitech.com.
          </p>
          <p className="leading-7">
            If you are unhappy with how we have handled your personal data, you can complain to the
            Information Commissioner&apos;s Office at{" "}
            <a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="text-main-dark underline">
              ico.org.uk
            </a>
            . We would appreciate the chance to address your concern first.
          </p>
        </div>

        {/* 8. Data Retention */}
        <div className="space-y-4 pl-1">
          <h2 className="text-2xl font-karla font-semibold text-main-dark">8. Data Retention</h2>
          <p className="leading-7">
            We retain your data only as long as necessary to fulfil business and legal obligations.
            When no longer needed, we securely delete or anonymise it.
          </p>
        </div>

        {/* 9. Third-Party Links */}
        <div className="space-y-4 pl-1">
          <h2 className="text-2xl font-karla font-semibold text-main-dark">9. Third-Party Links</h2>
          <p className="leading-7">
            Our website may contain links to external sites. We are not responsible for their privacy practices.
            Please review their policies separately.
          </p>
        </div>

        {/* 10. Product services */}
        <div className="space-y-4 pl-1">
          <h2 className="text-2xl font-karla font-semibold text-main-dark">10. Product Services (AppDeploy and AXOS)</h2>
          <p className="leading-7">
            This policy covers personal data collected through this website. Customer and end-user data
            processed inside our products is governed by each product&apos;s own privacy policy and Data
            Processing Agreement, under which we act as processor for the customer organisation.
          </p>
          <ul className="list-disc ml-6 space-y-2 leading-7">
            <li>
              AppDeploy —{" "}
              <a href="https://appdeploy.scotitech.com/privacy" target="_blank" rel="noreferrer" className="text-main-dark underline">privacy policy</a>
              {" "}and{" "}
              <a href="https://appdeploy.scotitech.com/dpa" target="_blank" rel="noreferrer" className="text-main-dark underline">data processing agreement</a>.
            </li>
            <li>
              AXOS —{" "}
              <a href="https://axos.scotitech.com/privacy" target="_blank" rel="noreferrer" className="text-main-dark underline">privacy policy</a>
              {" "}and{" "}
              <a href="https://axos.scotitech.com/dpa" target="_blank" rel="noreferrer" className="text-main-dark underline">data processing agreement</a>.
            </li>
          </ul>
        </div>

        {/* 11. India DPDP */}
        <div className="space-y-4 pl-1">
          <h2 className="text-2xl font-karla font-semibold text-main-dark">11. Additional Information for India (DPDP Act, 2023)</h2>
          <p className="leading-7">
            Where we process personal data of individuals in India, we act consistently with the Digital
            Personal Data Protection Act, 2023:
          </p>
          <ul className="list-disc ml-6 space-y-2 leading-7">
            <li>
              <strong>Notice and consent.</strong> Where processing is based on consent, we describe the
              purpose in clear terms at the point of collection, and withdrawing consent is as simple as
              giving it — cookie choices can be changed at any time from the footer.
            </li>
            <li>
              <strong>Grievance redressal.</strong> Our Grievance Officer is Pradeep Dahiya, Data Protection
              Officer, ScotiTech Solutions Limited, reachable at{" "}
              <a href="mailto:info@scotitech.com?subject=DPDP%20grievance" className="text-main-dark underline">info@scotitech.com</a>
              {" "}(mark the subject &quot;DPDP grievance&quot;). We acknowledge grievances within 72 hours and aim to
              resolve them within 30 days.
            </li>
            <li>
              <strong>Data Protection Board.</strong> If your grievance is not resolved to your satisfaction,
              you may approach the Data Protection Board of India.
            </li>
          </ul>
        </div>

        {/* 12. US state privacy laws */}
        <div className="space-y-4 pl-1">
          <h2 className="text-2xl font-karla font-semibold text-main-dark">12. Additional Information for United States Residents</h2>
          <p className="leading-7">
            Where we process personal data of residents of California or other US states with comprehensive
            privacy laws (including the CCPA/CPRA, and the laws of Virginia, Colorado, Connecticut, and Utah):
          </p>
          <ul className="list-disc ml-6 space-y-2 leading-7">
            <li>
              <strong>We do not sell or share personal information</strong> as those terms are defined by the
              CCPA/CPRA, and we have not done so in the preceding 12 months. We use no third-party advertising
              cookies; optional analytics runs only after opt-in.
            </li>
            <li>
              <strong>Your rights.</strong> You may request to know, access, correct, or delete the personal
              information we hold about you, and you will not be discriminated against for exercising these
              rights. Contact us at{" "}
              <a href="mailto:info@scotitech.com" className="text-main-dark underline">info@scotitech.com</a>;
              we verify requests using the email address associated with the data and respond within the
              timeframe your state&apos;s law requires (typically 45 days).
            </li>
            <li>
              <strong>Service-provider role.</strong> For data processed on behalf of a customer organisation
              we act as a service provider or processor. If you are an employee of one of our customers,
              please direct rights requests to your organisation.
            </li>
          </ul>
        </div>

        {/* 13. Changes */}
        <div className="space-y-4 pl-1">
          <h2 className="text-2xl font-karla font-semibold text-main-dark">13. Changes to This Privacy Policy</h2>
          <p className="leading-7">
            We may update this policy from time to time. Changes will be posted on this page with the
            \"Last Updated\" date.
          </p>
        </div>

        {/* 14. Contact */}
        <div className="space-y-4 pl-1">
          <h2 className="text-2xl font-karla font-semibold text-main-dark">14. Contact Us</h2>
          <p className="leading-7 font-karla text-main-dark">📍 ScotiTech Solutions Limited</p>

          <p className="leading-7">
            Company number SC829021, registered in Scotland
          </p>
          <p className="leading-7">
            ICO data protection registration: ZB925464
          </p>
          <p className="leading-7">
            11 Caldervale Drive, Motherwell ML1 2GB, United Kingdom
          </p>

          <div className="text-center font-karla block text-red-600 leading-7">
            <a href="mailto:info@scotitech.com" className="inline-block pr-5">
              📧 info@scotitech.com
            </a>
            <a href="tel:+441698609091" className="inline-block">
              📞 01698 609091
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
export default PrivacyPolicy;
