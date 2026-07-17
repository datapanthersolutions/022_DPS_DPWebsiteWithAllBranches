
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ModernNavbar from "./Navigation";
import ResponsiveFooter from "./Footer";
import CookieBanner from "@/components/cookieBanner";
import WhatsAppFloat from "@/app/whatsappfloat";

// Google fonts (Geist retained for the .geist-font utility)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Local font — Champagne & Limousines (headings)
const champagne = localFont({
  src: [
    {
      path: "./fonts/Champagne-Limousines.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Champagne-Limousines-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Champagne-Limousines-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Champagne-Limousines-Bold-Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-champagne",
  display: "swap",
});

// Local font — Gilroy (body)
const gilroy = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "Data Panther",
  description: "Your AI-powered data analysis platform",
  icons: {
    icon: "/dpfavicon.png",
  },
};

// Root layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${champagne.variable} ${gilroy.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <ModernNavbar />
        <main className="flex-grow">{children}</main>

        <ResponsiveFooter />

        <CookieBanner />

        <WhatsAppFloat
          phoneNumber="7075928464"
          message="Hi Data Panther, I'd like to know more about your services."
          label="Chat with us"
        />
      </body>
    </html>
  );
}