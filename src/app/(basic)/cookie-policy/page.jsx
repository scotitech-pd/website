export const metadata = {
  title: "Cookie Policy",
  description:
    "How ScotiTech uses cookies and similar technologies on scotitech.com — UK GDPR / PECR aligned.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 font-lora text-black min-[500px]:px-10 md:px-20">
      <div className="space-y-12 text-gray-800">
        <div>
          <h1 className="text-center font-karla text-4xl font-bold text-main-dark">
            Cookie Policy
          </h1>
          <p className="mt-4 text-center text-sm text-gray-500">Last Updated: 8 September 2026</p>
        </div>

        {/* 1. What Are Cookies */}
        <div className="space-y-4 pl-1">
          <h2 className="font-karla text-2xl font-semibold text-main-dark">1. What Are Cookies</h2>
          <p className="leading-7">
            Cookies are small text files placed on your device when you visit a website. They are widely
            used to make websites work or work more efficiently, and to provide information to the site owner.
            We also use similar storage technologies, including browser local storage and first-party cookies,
            to record your preferences.
          </p>
        </div>

        {/* 2. Cookies We Use */}
        <div className="space-y-6 pl-1">
          <h2 className="font-karla text-2xl font-semibold text-main-dark">2. Cookies We Use</h2>

          {/* 2.1 Necessary */}
          <div className="space-y-3">
            <h3 className="font-karla text-xl font-semibold">2.1 Necessary Cookies</h3>
            <p className="leading-7">
              These cookies are essential for the website to function. They cannot be disabled.
              No personal data is shared with third parties through these cookies.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full font-karla text-sm">
                <thead className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <tr>
                    <th className="px-4 py-3">Cookie Name</th>
                    <th className="px-4 py-3">Provider</th>
                    <th className="px-4 py-3">Purpose</th>
                    <th className="px-4 py-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">scotitech-cookie-consent-v1</td>
                    <td className="px-4 py-3">ScotiTech</td>
                    <td className="px-4 py-3">Stores your cookie consent preferences</td>
                    <td className="px-4 py-3">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 2.2 Analytics */}
          <div className="space-y-3">
            <h3 className="font-karla text-xl font-semibold">2.2 Analytics Cookies</h3>
            <p className="leading-7">
              With your consent, we use analytics cookies to understand how visitors interact with our
              site — for example, which pages are most visited. This data is aggregated and anonymised.
              We do not use analytics cookies without your explicit consent.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full font-karla text-sm">
                <thead className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <tr>
                    <th className="px-4 py-3">Cookie Name</th>
                    <th className="px-4 py-3">Provider</th>
                    <th className="px-4 py-3">Purpose</th>
                    <th className="px-4 py-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_ga</td>
                    <td className="px-4 py-3">Google Analytics 4</td>
                    <td className="px-4 py-3">Distinguishes unique users; anonymised</td>
                    <td className="px-4 py-3">2 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_ga_XXXXXXXXXX</td>
                    <td className="px-4 py-3">Google Analytics 4</td>
                    <td className="px-4 py-3">Maintains session state for GA4</td>
                    <td className="px-4 py-3">2 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">vercel-speed-insights</td>
                    <td className="px-4 py-3">Vercel Speed Insights</td>
                    <td className="px-4 py-3">Measures real-user web performance metrics; no personal data leaves the platform</td>
                    <td className="px-4 py-3">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm leading-6 text-gray-500">
              Google Analytics is configured with IP anonymisation enabled (<code className="rounded bg-gray-100 px-1 font-mono text-xs">anonymize_ip: true</code>).
              Google's privacy policy is available at{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline underline-offset-2">
                policies.google.com/privacy
              </a>.
            </p>
          </div>

          {/* 2.3 Marketing */}
          <div className="space-y-3">
            <h3 className="font-karla text-xl font-semibold">2.3 Marketing Cookies</h3>
            <p className="leading-7">
              With your consent, marketing cookies and similar technologies may be used to understand
              business visitors, support relevant outreach, and measure the effectiveness of campaigns.
              We do not use marketing cookies without your explicit consent.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full font-karla text-sm">
                <thead className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <tr>
                    <th className="px-4 py-3">Technology</th>
                    <th className="px-4 py-3">Provider</th>
                    <th className="px-4 py-3">Purpose</th>
                    <th className="px-4 py-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">Apollo website tracker</td>
                    <td className="px-4 py-3">Apollo.io</td>
                    <td className="px-4 py-3">
                      Company-level visitor identification and sales intelligence. For visitors in the United States,
                      person-level identification may apply where lawful. Apollo&apos;s privacy policy is available at{" "}
                      <a href="https://www.apollo.io/privacy-policy" target="_blank" rel="noreferrer" className="underline underline-offset-2">
                        apollo.io/privacy-policy
                      </a>.
                    </td>
                    <td className="px-4 py-3">Session / persistent (set by Apollo)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 3. Your Choices */}
        <div className="space-y-4 pl-1">
          <h2 className="font-karla text-2xl font-semibold text-main-dark">3. Your Choices</h2>
          <p className="leading-7">
            You can manage your cookie preferences at any time using the <strong>Cookie Settings</strong>{" "}
            link in the footer of every page. You can accept all cookies, reject non-essential cookies,
            or customise your choices by category.
          </p>
          <p className="leading-7">
            Your consent is stored in a first-party cookie on your device and is versioned. If we add
            new cookie categories or update our use of cookies materially, you will be asked to review
            your preferences again.
          </p>
          <p className="leading-7">
            You can also control cookies through your browser settings. Note that disabling cookies
            may affect the functionality of this site.
          </p>
        </div>

        {/* 4. Legal Basis */}
        <div className="space-y-4 pl-1">
          <h2 className="font-karla text-2xl font-semibold text-main-dark">4. Legal Basis</h2>
          <p className="leading-7">
            We operate under UK GDPR and the Privacy and Electronic Communications Regulations (PECR).
            Necessary cookies are used on the basis of legitimate interest to deliver the site. All
            optional cookies are only set on the basis of your freely given, informed, specific, and
            unambiguous consent — which you can withdraw at any time.
          </p>
        </div>

        {/* 5. Contact */}
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
            </a>.
          </p>
          <p className="leading-7">
            To report a concern about our cookie practices, you can also contact the Information
            Commissioner&apos;s Office (ICO) at{" "}
            <a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="underline underline-offset-2">
              ico.org.uk
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
