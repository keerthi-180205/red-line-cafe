import type { Metadata } from "next";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { businessConfig } from "@/data/business";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap"
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "RED LINE CAFE | Basaveshwaranagar, Bengaluru",
    template: "%s | RED LINE CAFE"
  },
  description: businessConfig.shortDescription,
  keywords: [
    "Red Line Cafe",
    "Basaveshwaranagar cafe",
    "Bengaluru burgers",
    "loaded fries",
    "cafe Maggi",
    "Oreo shakes",
    "Bangalore cafe"
  ],
  authors: [{ name: "Red Line Cafe" }],
  openGraph: {
    title: "RED LINE CAFE | Basaveshwaranagar, Bengaluru",
    description: businessConfig.shortDescription,
    type: "website",
    locale: "en_IN",
    siteName: "RED LINE CAFE"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${plusJakartaSans.variable} dark scroll-smooth`}>
      <body className="bg-background text-on-background font-body-md antialiased selection:bg-primary-container selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
