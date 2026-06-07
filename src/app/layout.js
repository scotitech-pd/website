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
    default: "ScotiTech Solutions | Practical Digital Products for Modern Teams",
    template: "%s | ScotiTech Solutions",
  },
  description:
    "ScotiTech Solutions builds focused, privacy-conscious products for internal app distribution and private enterprise operations — AppDeploy, AXOS and ClarityPath.",
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
    title: "ScotiTech Solutions | Practical Digital Products for Modern Teams",
    description:
      "Focused, privacy-conscious products for internal app distribution and private enterprise operations.",
    url: "https://scotitech.com",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScotiTech Solutions",
    description:
      "Focused, privacy-conscious products for internal app distribution and private enterprise operations.",
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
  telephone: "+44-1698-708203",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Pradeep Dahiya",
      url: "https://www.linkedin.com/in/pradeepdahiya/",
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
      name: "Corporate office",
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
      telephone: "+44-1698-708203",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/scotitech-ltd/",
    "https://www.instagram.com/scotitechsolutions/",
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
          </CookieConsentProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
