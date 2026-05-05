import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Brandsparc",
  description:
    "Brandsparc is a US-based AI automation agency helping businesses eliminate manual work, reduce costs, and scale operations with custom AI agents and workflows. Book a free audit.",
  metadataBase: new URL("https://brandsparc.com"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Brandsparc",
    title: "AI Automation Agency for US Businesses | Brandsparc",
    description:
      "Custom AI agents, voice bots, and workflow automations — fully built and deployed for US businesses. 150+ projects delivered.",
    url: "/",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen bg-bs-navy text-bs-muted font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
