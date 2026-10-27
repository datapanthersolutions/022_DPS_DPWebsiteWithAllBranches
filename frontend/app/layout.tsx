import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Floating from "@/components/layout/Floating";
import SmoothScroll from "@/components/motion/SmoothScroll";
import TransitionProvider from "@/components/transition/TransitionProvider";
import Preloader from "@/components/transition/Preloader";
import Cursor from "@/components/motion/Cursor";
import { SITE_URL, SITE_NAME, seo } from "@/lib/seo";
import { GTM_ID, consentDefaultsScript, gtmScript } from "@/lib/analytics";
import RouteTracker from "@/components/analytics/RouteTracker";

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
        {/* Consent defaults must run before GTM loads. See docs/integrations/gtm.md */}
        <script dangerouslySetInnerHTML={{ __html: consentDefaultsScript }} />
        {GTM_ID && <script dangerouslySetInnerHTML={{ __html: gtmScript(GTM_ID) }} />}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Inter+Tight:wght@500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body>
        {GTM_ID && (
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
          </noscript>
        )}
        <RouteTracker />
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
