import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import LocaleSync from "@/components/LocaleSync";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hamzleroc.github.io"),
  title: {
    default: "Altrix Engineering | Electrical & Solar Experts in Belgium",
    template: "%s | Altrix Engineering",
  },
  description:
    "Altrix Engineering designs, installs and maintains solar panels, batteries, EV chargers, heat pumps and electrical systems across Belgium. Engineering tomorrow's infrastructure.",
  keywords:
    "solar panels Belgium, electrical installation, zonnepanelen, elektricien, heat pump, EV charging, home battery, Altrix Engineering",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-paper text-navy font-sans">
        <LocaleSync />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
