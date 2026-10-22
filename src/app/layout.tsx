import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Floating from "@/components/layout/Floating";
import SmoothScroll from "@/components/motion/SmoothScroll";
import TransitionProvider from "@/components/transition/TransitionProvider";
import Preloader from "@/components/transition/Preloader";
import Cursor from "@/components/motion/Cursor";

export const metadata: Metadata = {
  title: "Data Panther",
  description: "Your AI-powered data analysis platform",
  icons: {
    icon: [
      { url: "/img/dpfavicon.png", media: "(prefers-color-scheme: light)" },
      { url: "/img/dpfavicondark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Inter+Tight:wght@500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      {/* GSAP ScrollTrigger leaves an empty style="" on <body> when it loads; ignore that one attribute during hydration. */}
      <body suppressHydrationWarning>
        <TransitionProvider>
          <SmoothScroll />
          <Preloader />
          <Header />
          <main>{children}</main>
          <Footer />
          <Floating />
          <Cursor />
        </TransitionProvider>
      </body>
    </html>
  );
}
