import type { Metadata } from "next";
import { Bebas_Neue, Figtree } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Have Fun Athletics",
  description:
    "Athletic training for grades 5–12 in Winthrop, MA. Train hard. Have fun.",
  openGraph: {
    title: "Have Fun Athletics",
    description: "Athletic training for grades 5–12 in Winthrop, MA. Train hard. Have fun.",
    siteName: "Have Fun Athletics",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${figtree.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
