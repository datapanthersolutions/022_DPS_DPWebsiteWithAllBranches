import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Floating from "@/components/layout/Floating";
import ChatWidget from "@/components/chat/ChatWidget";
import SmoothScroll from "@/components/motion/SmoothScroll";
import TransitionProvider from "@/components/transition/TransitionProvider";
import Preloader from "@/components/transition/Preloader";
import Cursor from "@/components/motion/Cursor";
import { SITE_URL, SITE_NAME, seo } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...seo({ title: SITE_NAME, path: "/" }),
  alternates: undefined, // canonical is set per page, so the 404 page doesn't claim to be the home page
  applicationName: SITE_NAME,
  icons: { icon: "/img/dpfavicon.png", apple: "/img/dpfavicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Inter+Tight:wght@500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body>
        <TransitionProvider>
          <SmoothScroll />
          <Preloader />
          <Header />
          <main>{children}</main>
          <Footer />
          <Floating />
          <ChatWidget />
          <Cursor />
        </TransitionProvider>
      </body>
    </html>
  );
}
