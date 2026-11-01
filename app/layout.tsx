import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NK Gabru Photography | Luxury Wedding & Cinematography Studio",
  description:
    "NK Gabru Photography is a premier luxury photography and cinematography studio based in Faridabad, Haryana. Specializing in royal weddings, pre-wedding shoots, modeling portfolios, and cinematic video productions.",
  keywords: [
    "NK Gabru Photography",
    "Wedding Photographer Faridabad",
    "Luxury Wedding Photography Haryana",
    "Cinematic Pre-Wedding Shoots",
    "Droneography Faridabad",
    "Modeling Portfolio Photography Delhi NCR",
    "Destination Wedding Filmmaker India",
  ],
  authors: [{ name: "NK Gabru Photography" }],
  creator: "NK Gabru Photography",
  metadataBase: new URL("https://nkgabruphotography.com"),
  openGraph: {
    title: "NK Gabru Photography | We Create Memories",
    description:
      "Every frame tells a story. Every moment becomes timeless. Discover luxury wedding photography and cinematography by NK Gabru Photography, Faridabad.",
    url: "https://nkgabruphotography.com",
    siteName: "NK Gabru Photography",
    images: [
      {
        url: "/images/hero/hero_bg.jpg",
        width: 1920,
        height: 1080,
        alt: "NK Gabru Photography Royal Wedding Portrait",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NK Gabru Photography | Capture • Create • Cherish",
    description:
      "Award-winning luxury wedding photography and cinema studio based in Faridabad, Haryana.",
    images: ["/images/hero/hero_bg.jpg"],
  },
  icons: {
    icon: "/images/logo/logo-mark.svg",
    apple: "/images/logo/logo-mark.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cinzel.variable} ${outfit.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#050505] text-[#F5F2EA] font-sans antialiased selection:bg-[#D4AF37] selection:text-[#050505]">
        {children}
      </body>
    </html>
  );
}
