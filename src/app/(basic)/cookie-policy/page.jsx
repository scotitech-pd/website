export const metadata = {
  title: "Cookie Policy | ScotiTech Solutions Limited",
};

export default function CookiePolicyPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 font-lora text-black min-[500px]:px-10 md:px-20">
      <div className="space-y-12 text-gray-800">
        <div>
          <h1 className="text-center font-karla text-4xl font-bold text-main-dark">
            Cookie Policy
          </h1>
          <p className="mt-4 text-center">Last Updated: 14 May 2026</p>
        </div>

        <div className="space-y-4 pl-1">
          <h2 className="font-karla text-2xl font-semibold text-main-dark">1. What Are Cookies</h2>
          <p className="leading-7">
            Cookies are small text files placed on your device when you visit a website. They are widely
            used to make websites work or work more efficiently, and to provide information to the site owner.
          </p>
        </div>

        <div className="space-y-4 pl-1">
          <h2 className="font-karla text-2xl font-semibold text-main-dark">2. Cookies We Use</h2>

          <div className="space-y-3 pl-3">
            <div>
              <h3 className="font-karla text-xl font-semibold">2.1 Necessary Cookies</h3>
              <p className="mt-2 leading-7">
                These cookies are essential for the website to function. They cannot be disabled. Examples
                include session management and security tokens. No personal data is shared with third parties
                through these cookies.
              </p>
            </div>
            <div>
              <h3 className="font-karla text-xl font-semibold">2.2 Analytics Cookies</h3>
              <p className="mt-2 leading-7">
                With your consent, we use analytics cookies to understand how visitors interact with our
                site — for example, which pages are most visited. This data is aggregated and anonymised.
                We do not use analytics cookies without your explicit consent.
              </p>
            </div>
            <div>
              <h3 className="font-karla text-xl font-semibold">2.3 Marketing Cookies</h3>
              <p className="mt-2 leading-7">
                With your consent, marketing cookies may be used to deliver relevant content and measure
                the effectiveness of campaigns. We do not use marketing cookies without your explicit
                consent.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 pl-1">
          <h2 className="font-karla text-2xl font-semibold text-main-dark">3. Your Choices</h2>
          <p className="leading-7">
            You can manage your cookie preferences at any time using the <strong>Cookie Settings</strong>{" "}
            link in the footer of every page. You can accept all cookies, reject non-essential cookies,
            or customise your choices by category.
          </p>
          <p className="leading-7">
            Your consent is stored locally on your device and is versioned. If we update our cookie
            categories, you will be asked to review your preferences again.
          </p>
        </div>

        <div className="space-y-4 pl-1">
          <h2 className="font-karla text-2xl font-semibold text-main-dark">4. Legal Basis</h2>
          <p className="leading-7">
            We operate under UK GDPR and the Privacy and Electronic Communications Regulations (PECR).
            Necessary cookies are used on the basis of legitimate interest to deliver the site. All
            optional cookies are only set on the basis of your freely given, informed, and specific
            consent.
          </p>
        </div>

        <div className="space-y-4 pl-1">
          <h2 className="font-karla text-2xl font-semibold text-main-dark">5. Contact</h2>
          <p className="leading-7">
            For questions about our use of cookies, contact us at{" "}
            <a href="mailto:info@scotitech.com" className="underline underline-offset-2">
              info@scotitech.com
            </a>{" "}
            or see our full{" "}
            <a href="/privacy-policy" className="underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
