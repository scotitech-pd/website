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
  keywords: [
    "ScotiTech",
    "AppDeploy",
    "AXOS",
    "internal app distribution",
    "private workspace",
    "Apple Business",
    "self-hosted",
  ],
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
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ScotiTech Solutions Limited",
  url: "https://scotitech.com",
  logo: "https://scotitech.com/logo/logo.png",
  email: "info@scotitech.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Maxim Business Park, 2 Parklands Way",
    addressLocality: "Motherwell",
    postalCode: "ML1 4WR",
    addressCountry: "GB",
  },
  sameAs: [
    "https://www.linkedin.com/company/scotitech-ltd/",
    "https://www.instagram.com/scotitechsolutions/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${karla.variable} ${lora.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
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
