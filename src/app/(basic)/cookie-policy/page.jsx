import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Cookie policy",
  description:
    "How ScotiTech uses cookies and similar technologies on scotitech.com, in line with UK GDPR and PECR.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 font-lora text-black sm:px-6 lg:px-8">
      <div className="space-y-12 text-gray-800">
        <div>
          <h1 className="text-center font-karla text-4xl font-bold text-main-dark">
            Cookie Policy
          </h1>
          <p className="mt-4 text-center text-sm text-gray-500">Last Updated: 22 October 2026</p>
        </div>

        {/* 1. What Are Cookies */}
        <div className="space-y-4 pl-1">
          <h2 className="font-karla text-2xl font-semibold text-main-dark">1. What Are Cookies</h2>
          <p className="leading-7">
            Cookies are small text files placed on your device when you visit a website. They are widely
            used to make websites work or work more efficiently, and to provide information to the site owner.
            We record your cookie choices in a first-party cookie. Some of the optional tools described
            below may also use your browser&apos;s local storage.
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
              With your consent, we use analytics tools to understand how visitors use our site, for
              example which pages are visited most. We look at this information in aggregate. We do not
              load these tools unless you consent.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full font-karla text-sm">
                <thead className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <tr>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Provider</th>
                    <th className="px-4 py-3">Purpose</th>
                    <th className="px-4 py-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_ga</td>
                    <td className="px-4 py-3">Google Analytics 4</td>
                    <td className="px-4 py-3">Tells visits from the same browser apart</td>
                    <td className="px-4 py-3">Up to 2 years (most browsers cap this at 400 days)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_ga_XBZFK78JCX</td>
                    <td className="px-4 py-3">Google Analytics 4</td>
                    <td className="px-4 py-3">Keeps track of the current visit</td>
                    <td className="px-4 py-3">Up to 2 years (most browsers cap this at 400 days)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">Speed Insights</td>
                    <td className="px-4 py-3">Vercel</td>
                    <td className="px-4 py-3">Measures how quickly our pages load, using anonymous performance data</td>
                    <td className="px-4 py-3">No cookie set</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm leading-6 text-gray-500">
              Google Analytics 4 does not log or store IP addresses. Google&apos;s privacy policy is available at{" "}
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
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">__cf_bm</td>
                    <td className="px-4 py-3">Cloudflare, for Apollo.io</td>
                    <td className="px-4 py-3">Protects Apollo&apos;s tracking service from automated traffic. Set on apollo.io, not on scotitech.com.</td>
                    <td className="px-4 py-3">30 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 2.4 Content from other sites */}
          <div className="space-y-3">
            <h3 className="font-karla text-xl font-semibold">2.4 Content From Other Sites</h3>
            <p className="leading-7">
              We do not embed maps, videos or booking widgets from other services. Links to Google Maps,
              YouTube and Calendly open those sites, where their own cookie policies apply. The Vamiq
              product film plays from vamiq.app, a ScotiTech service, and sets no cookies.
            </p>
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
            If you withdraw consent, we delete the Google Analytics cookies on scotitech.com, clear
            Apollo&apos;s data in your browser, and stop loading these tools straight away. Cookies that
            other sites set on their own domains, such as apollo.io, expire on their own.
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
            Strictly necessary cookies do not need consent under PECR, and we rely on our legitimate
            interest in running the site for the small amount of data they hold. Optional cookies and
            tools are only used with your freely given, informed, specific and unambiguous consent,
            which you can withdraw at any time.
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
