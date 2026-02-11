import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";

const titillium = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

const siteUrl = "https://vossautoservis.sk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "VOSS Autoservis Bratislava | Autoopravovňa s 20+ ročnými skúsenosťami",
    template: "%s | VOSS Autoservis Bratislava",
  },
  description:
    "Profesionálny autoservis v Bratislave s viac ako 20-ročnými skúsenosťami. Mechanické, klampiarske, elektrikárske a lakovnícke práce. Kompletné riešenie poistných udalostí. Galvaniho 12B, Bratislava.",
  keywords: [
    "autoservis Bratislava",
    "autoopravovňa Bratislava",
    "oprava áut Bratislava",
    "lakovanie áut Bratislava",
    "klampiarske práce auto",
    "mechanické práce auto",
    "elektrikárske práce auto",
    "poistné udalosti auto",
    "VOSS autoservis",
    "autoservis Galvaniho",
    "autoservis Ružinov",
    "oprava vozidiel Bratislava",
    "lakovňa Bratislava",
    "autoservis poistná udalosť",
    "car repair Bratislava",
  ],
  authors: [{ name: "VOSS AUTOSERVIS s.r.o." }],
  creator: "AEB Digital",
  publisher: "VOSS AUTOSERVIS s.r.o.",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: siteUrl,
    siteName: "VOSS Autoservis",
    title:
      "VOSS Autoservis Bratislava | Autoopravovňa s 20+ ročnými skúsenosťami",
    description:
      "Profesionálny autoservis v Bratislave. Mechanické, klampiarske, elektrikárske a lakovnícke práce. Kompletné riešenie poistných udalostí.",
    images: [
      {
        url: "/galeria/4.jpg",
        width: 1200,
        height: 630,
        alt: "VOSS Autoservis Bratislava",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VOSS Autoservis Bratislava",
    description:
      "Profesionálny autoservis v Bratislave s viac ako 20-ročnými skúsenosťami.",
    images: ["/galeria/4.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo-voss.png" />
      </head>
      <body
        className={`${titillium.className} ${titillium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
