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
    title: "Have Fun Athletics — Train Hard. Have Fun.",
    description: "Outdoor athletic training for grades 5–12 in Winthrop, MA. Performance training, baseball coaching, and personal training. Summer 2026.",
    siteName: "Have Fun Athletics",
    url: "https://havefunathletics.com",
    type: "website",
    images: [
      {
        url: "https://havefunathletics.com/home_hero.jpg",
        width: 5472,
        height: 3648,
        alt: "Have Fun Athletics — Train Hard. Have Fun.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Have Fun Athletics — Train Hard. Have Fun.",
    description: "Outdoor athletic training for grades 5–12 in Winthrop, MA. Summer 2026.",
    images: ["https://havefunathletics.com/home_hero.jpg"],
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
