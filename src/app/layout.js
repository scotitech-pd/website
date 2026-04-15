import { Geist, Geist_Mono, Karla, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/CursorGlow";
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
  title: "ScotiTech | Empowering Digital Solutions",
  description: "Building Trusted Technology for a Smarter, Safer Digital Future. ScotiTech Solutions Limited specialize in app development, AI, and enterprise software.",
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

          <CursorGlow />
          <GotoTop />

           <RouteLoader>{children}</RouteLoader>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
