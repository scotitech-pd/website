import { Geist, Geist_Mono, Karla, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GotoTop from "@/components/GotoTop";
import RouteLoader from "@/components/RouteLoader";
import { ModalProvider } from "@/components/ModalContext";
import RequestaQuote from "@/components/RequestaQuote";
import { CookieConsentProvider } from "@/components/cookie/CookieConsentContext";
import CookieBanner from "@/components/cookie/CookieBanner";
import CookiePreferencesModal from "@/components/cookie/CookiePreferencesModal";
import JsonLd from "@/components/seo/JsonLd";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";
import ApolloTracker from "@/components/seo/ApolloTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800"],
  variable: "--font-karla",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://scotitech.com"),
  title: {
    default: "ScotiTech Solutions | Business Software for Controlled Operations",
    template: "%s | ScotiTech Solutions",
  },
  description:
    "ScotiTech Solutions is a UK-registered technology company building and supporting privacy-conscious software products for organisations worldwide, including AppDeploy, AXOS and ClarityPath.",
  applicationName: "ScotiTech Solutions",
  authors: [{ name: "ScotiTech Solutions Limited", url: "https://scotitech.com" }],
  creator: "ScotiTech Solutions Limited",
  publisher: "ScotiTech Solutions Limited",
  keywords: [
    "ScotiTech",
    "AppDeploy",
    "AXOS",
    "ClarityPath",
    "internal app distribution",
    "Apple Business",
    "private app delivery",
    "private workspace",
    "self-hosted AI",
    "governance-first AI",
    "enterprise iOS distribution",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "ScotiTech Solutions",
    title: "ScotiTech Solutions | Business Software for Controlled Operations",
    description:
      "A UK-registered technology company building and supporting focused software products for organisations worldwide.",
    url: "https://scotitech.com",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScotiTech Solutions",
    description:
      "UK-registered technology company building and supporting focused software products for organisations worldwide.",
    creator: "@scotitech",
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
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://scotitech.com/#organization",
  name: "ScotiTech Solutions Limited",
  alternateName: "ScotiTech",
  url: "https://scotitech.com",
  logo: {
    "@type": "ImageObject",
    url: "https://scotitech.com/logo/logo.png",
    width: 168,
    height: 42,
  },
  email: "info@scotitech.com",
  telephone: "+44-1698-609091",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Pardeep Kumar",
      jobTitle: "Founder & CEO, Lead Developer",
      url: "https://www.linkedin.com/in/pradeepkumar2411/",
    },
    {
      "@type": "Person",
      name: "Daniel Chapman",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${karla.variable} ${lora.variable} antialiased`}
      >
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <ModalProvider>
          <CookieConsentProvider>
            <Navbar />
            <RequestaQuote />

            <GotoTop />

            <RouteLoader>{children}</RouteLoader>
            <Footer />

            <CookieBanner />
            <CookiePreferencesModal />
            <GoogleAnalytics />
            <ApolloTracker />
          </CookieConsentProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
