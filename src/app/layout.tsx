import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ModernNavbar from "./Navigation";
import ResponsiveFooter from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Data Panther",
  description: "Your AI-powered data analysis platform",
  icons: {
    icon: "/dataPantherLogo-removebg-preview.png", // ✅ Correct favicon path
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}>
        
        {/* Static Navbar */}
        <ModernNavbar />

        {/* Dynamic Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Static Footer */}
        <ResponsiveFooter />
        
      </body>
    </html>
  );
}
