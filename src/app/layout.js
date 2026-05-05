import { Geist_Mono, Karla, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GotoTop from "@/components/GotoTop";
import RouteLoader from "@/components/RouteLoader";
import { ModalProvider } from "@/components/ModalContext";
import RequestaQuote from "@/components/RequestaQuote";

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
  title: "ScotiTech Solutions | Focused Software Products",
  description:
    "ScotiTech builds focused software products for private app rollout, secure AI workflows, and practical team operations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${karla.variable} ${lora.variable} antialiased`}
      >
        <ModalProvider>
          <Navbar />
          <RequestaQuote />

          <GotoTop />

          <RouteLoader>{children}</RouteLoader>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
