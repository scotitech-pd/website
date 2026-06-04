
import React from "react";
export const metadata = {
  title: "Privacy Policy | ScotiTech Solutions Limited",
}
const  PrivacyPolicy  = () => {
  return (
    <section className="max-w-5xl mx-auto px-5 min-[500px]:px-10 md:px-20 py-16 text-black font-lora">
      <div className="space-y-12 text-gray-800">

        {/* Heading */}
        <div>
          <h1 className="text-4xl font-karla font-bold text-main-dark text-center">Privacy Policy</h1>
          {/* <p className="mt-2">Effective Date: [Insert Date]</p> */}
          <p className="mt-4 text-center">Last Updated: 13-November-2025</p>
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
            </ul>
          </div>

          <div className="pl-3">
            <h3 className="text-xl font-karla font-semibold">2.3 Information from Third Parties</h3>
            <p className="mt-2 leading-7">We may receive information from our business partners or analytics providers.</p>
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
            <li>Provide personalised experiences.</li>
          </ul>
          <p className="mt-1 leading-7">
            You can disable cookies through your browser settings, but some features may not function properly.
          </p>
        </div>

        {/* 5. Data Sharing */}
        <div className="space-y-4 pl-1">
          <h2 className="text-2xl font-karla font-semibold text-main-dark">5. Data Sharing & Third-Party Disclosure</h2>
          <p className="leading-7">We do not sell your personal data. However, we may share data with:</p>
          <ul className="list-disc ml-6 space-y-2 leading-7">
            <li>Service providers (e.g., payment processors, cloud hosting).</li>
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
            To exercise your rights, contact us at privacy@scotitech.com.
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

        {/* 10. Changes */}
        <div className="space-y-4 pl-1">
          <h2 className="text-2xl font-karla font-semibold text-main-dark">10. Changes to This Privacy Policy</h2>
          <p className="leading-7">
            We may update this policy from time to time. Changes will be posted on this page with the
            \"Last Updated\" date.
          </p>
        </div>

        {/* 11. Contact */}
        <div className="space-y-4 pl-1">
          <h2 className="text-2xl font-karla font-semibold text-main-dark">11. Contact Us</h2>
          <p className="leading-7 font-karla text-main-dark">📍 ScotiTech Solutions Limited</p>

          <p className="leading-7">
            Eurocentral, 2 Parklands Way Maxim 1, Maxim Business Park, 1st, Motherwell ML1 4WR, UK
          </p>

          <div className="text-center font-karla block text-red-600 leading-7">
            <a href="mailto:privacy@scotitech.com" className="inline-block pr-5">
              📧 privacy@scotitech.com
            </a>
            <a href="tel:01698 708203" className="inline-block">
              📞 01698 708203
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
export default PrivacyPolicy;
