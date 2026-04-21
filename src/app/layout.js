import { Geist, Geist_Mono, Karla, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GotoTop from "@/components/GotoTop";
import RouteLoader from "@/components/RouteLoader";
import { ModalProvider } from "@/components/ModalContext";
import RequestaQuote from "@/components/RequestaQuote";   // ✅ MUST ADD THIS

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
  title: "ScotiTech Solutions | Practical Digital Products for Modern Teams",
  description:
    "ScotiTech Solutions builds practical digital products across internal app distribution, private operational tooling, accessibility, and privacy-conscious software.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${karla.variable} ${lora.variable} antialiased`}
      >
        {/* ✅ Provider ALWAYS wraps body children */}
        <ModalProvider>
          <Navbar />

          {/* ✅ GLOBAL MODAL Mount (always present but hidden) */}
          <RequestaQuote />

          <GotoTop />

           <RouteLoader>{children}</RouteLoader>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
