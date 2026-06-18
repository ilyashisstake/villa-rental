import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://safavilla.com"),
  title: {
    default: "Safa Villa | Villa de luxe avec piscine a Marrakech",
    template: "%s | Safa Villa",
  },
  description:
    "Decouvrez Safa Villa, une villa de luxe a Marrakech avec piscine privee, jardins paysagers, terrasse en zellige et four a bois. Location ideale pour vos vacances au Maroc.",
  keywords: [
    "villa marrakech",
    "location villa maroc",
    "villa luxe piscine marrakech",
    "vacances marrakech",
    "villa avec piscine privee",
    "hebergement marrakech",
    "safa villa",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://safavilla.com",
    siteName: "Safa Villa",
    title: "Safa Villa | Villa de luxe avec piscine a Marrakech",
    description:
      "Villa de luxe a Marrakech avec piscine privee, jardins paysagers et terrasse en zellige. Reservez votre sejour de reve.",
    images: [
      {
        url: "/images/villa-vue-ensemble.jpg",
        width: 1200,
        height: 630,
        alt: "Safa Villa - Vue d'ensemble avec piscine et jardins",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safa Villa | Villa de luxe a Marrakech",
    description:
      "Villa de luxe avec piscine privee a Marrakech. Reservez maintenant.",
    images: ["/images/villa-vue-ensemble.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://safavilla.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
