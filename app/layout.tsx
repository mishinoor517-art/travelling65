import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wayfarer — Explore The World Like Never Before",
  description:
    "Premium travel and tourism experiences. Curated destinations, luxury tours, and unforgettable journeys across the globe with Wayfarer.",
  keywords: [
    "travel agency",
    "luxury tours",
    "vacation packages",
    "honeymoon packages",
    "adventure travel",
    "Wayfarer travel",
  ],
  openGraph: {
    title: "Wayfarer — Explore The World Like Never Before",
    description:
      "Curated destinations, luxury tours, and unforgettable journeys across the globe.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} font-body antialiased bg-surface text-ink`}>
        {children}
      </body>
    </html>
  );
}
