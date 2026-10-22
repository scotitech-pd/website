import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ModalProvider } from "@/components/ModalContext";
import RequestaQuote from "@/components/RequestaQuote";
import { CookieConsentProvider } from "@/components/cookie/CookieConsentContext";
import CookieBanner from "@/components/cookie/CookieBanner";
import CookiePreferencesModal from "@/components/cookie/CookiePreferencesModal";
import JsonLd from "@/components/seo/JsonLd";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";
import ApolloTracker from "@/components/seo/ApolloTracker";
import ConsentedSpeedInsights from "@/components/cookie/ConsentedSpeedInsights";
import { DEFAULT_OG_IMAGE, SITE_DESCRIPTION } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL("https://scotitech.com"),
  title: {
    default: "ScotiTech | Software for Apple devices, private apps and AI",
    template: "%s | ScotiTech",
  },
  description: SITE_DESCRIPTION,
  applicationName: "ScotiTech Solutions",
  authors: [{ name: "ScotiTech Solutions Limited", url: "https://scotitech.com" }],
  creator: "ScotiTech Solutions Limited",
  publisher: "ScotiTech Solutions Limited",
  keywords: [
    "ScotiTech",
    "ScotiTech Solutions",
    "Vamiq",
    "AppDeploy",
    "AXOS",
    "ClarityPath",
    "Apple device management",
    "private app store",
    "internal app distribution",
    "Apple Business",
    "self-hosted AI workspace",
    "Apple device management software",
    "private AI workspace",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "ScotiTech Solutions",
    title: "ScotiTech | Software for Apple devices, private apps and AI",
    description: SITE_DESCRIPTION,
    url: "https://scotitech.com",
    locale: "en_GB",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScotiTech Solutions",
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { email: false, address: false, telephone: false },
  category: "technology",
};

export const viewport = {
  themeColor: "#f4f2ec",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://scotitech.com/#organization",
  name: "ScotiTech Solutions",
  legalName: "ScotiTech Solutions Limited",
  alternateName: "ScotiTech",
  url: "https://scotitech.com",
  description:
    "UK software company. Its flagship product, Vamiq (formerly AppDeploy), is Apple device management and a branded app store for your private apps, with build checks before each release. ScotiTech also makes AXOS and ClarityPath.",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "UK Companies House company number",
    value: "SC829021",
  },
  brand: [
    {
      "@type": "Brand",
      name: "Vamiq",
      alternateName: "AppDeploy",
      url: "https://vamiq.app",
    },
  ],
  logo: {
    "@type": "ImageObject",
    url: "https://scotitech.com/logo/logo.png",
    width: 600,
    height: 222,
  },
  image: "https://scotitech.com/og/scotitech-home.jpg",
  email: "info@scotitech.com",
  telephone: "+44-1698-609091",
  foundingDate: "2024",
  founder: [
    {
      "@type": "Person",
      name: "Pradeep Dahiya",
      jobTitle: "Founder and CEO",
      image: "https://scotitech.com/images/company/pradeep-dahiya-800.webp",
      url: "https://www.linkedin.com/in/pradeepkumar2411/",
    },
    {
      "@type": "Person",
      name: "Daniel Chapman",
      jobTitle: "Co-founder and Director",
      url: "https://www.linkedin.com/in/daniel-chapman-755098327/",
    },
  ],
  address: [
    {
      "@type": "PostalAddress",
      name: "Registered office",
      streetAddress: "11 Caldervale Drive",
      addressLocality: "Motherwell",
      postalCode: "ML1 2GB",
      addressCountry: "GB",
    },
    {
      "@type": "PostalAddress",
      name: "Operational office",
      streetAddress: "Maxim 1, 2 Parklands Way, Maxim Business Park, 1st Floor",
      addressLocality: "Motherwell",
      addressRegion: "Eurocentral, Scotland",
      postalCode: "ML1 4WR",
      addressCountry: "GB",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@scotitech.com",
      telephone: "+44-1698-609091",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/scotitech-ltd/",
    "https://www.instagram.com/scotitechsolutions/",
    "https://find-and-update.company-information.service.gov.uk/company/SC829021",
    "https://vamiq.app",
    "https://www.capterra.com/p/10056775/AppDeploy/",
    "https://www.getapp.com/all-software/a/appdeploy-1/",
    "https://www.softwareadvice.com/product/564477-AppDeploy/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://scotitech.com/#website",
  name: "ScotiTech Solutions",
  url: "https://scotitech.com",
  publisher: { "@id": "https://scotitech.com/#organization" },
  inLanguage: "en-GB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <ModalProvider>
          <CookieConsentProvider>
            <Navbar />
            <RequestaQuote />

            <main id="main">{children}</main>
            <Footer />

            <CookieBanner />
            <CookiePreferencesModal />
            <GoogleAnalytics />
            <ApolloTracker />
            <ConsentedSpeedInsights />
          </CookieConsentProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
