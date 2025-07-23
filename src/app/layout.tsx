import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import ModernNavbar from "./Navigation";
import ResponsiveFooter from "./Footer";
import { Montserrat } from "next/font/google";


// Font setups
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // ✅ Required
  variable: "--font-poppins",
  display: "swap",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "Data Panther",
  description: "Your AI-powered data analysis platform",
  icons: {
    icon: "/logodp.png",
  },
};

// Root layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className={`${poppins.variable} ${geistMono.variable} min-h-screen flex flex-col`}>
        <ModernNavbar />
        <main className="flex-grow">{children}</main>
        <ResponsiveFooter />
      </body>
    </html>
  );
}

