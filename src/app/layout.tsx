import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";

const titillium = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "VOSS Autoservis | Bratislava",
  description:
    "Autoservis s dlhoročnými skúsenosťami v Bratislave. Mechanické, klampiarske, elektrikárske a lakovnícke práce. Kompletné riešenie poistných udalostí.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={`${titillium.className} ${titillium.variable} antialiased`}>{children}</body>
    </html>
  );
}
