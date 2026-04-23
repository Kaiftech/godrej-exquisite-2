import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://godrej-exquisite-thane.com"),
  title: "Godrej Exquisite Thane | 2 & 3 BHK Luxury Homes at Ghodbunder Road",
  description: "Experience luxury living at Godrej Exquisite, Thane West. Featuring 3 magnificent towers with exclusive rooftop amenities, no shared walls, and world-class connectivity. Book your 2 & 3 BHK home today.",
  keywords: "Godrej Exquisite Thane, Godrej Properties Thane, 2 BHK in Thane West, 3 BHK in Thane West, Luxury Flats in Ghodbunder Road, Godrej Exquisite Price, Real Estate Thane",
  openGraph: {
    title: "Godrej Exquisite Thane | Luxury 2 & 3 BHK Residences",
    description: "Exclusive lifestyle with rooftop amenities and no shared walls. Starting from ₹ 1.79 Cr* Onwards.",
    url: "https://godrej-exquisite-thane.com",
    siteName: "Godrej Exquisite",
    images: [
      {
        url: "/BANNER1.jpeg",
        width: 1200,
        height: 630,
        alt: "Godrej Exquisite Thane Exterior",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://godrej-exquisite-thane.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased text-slate-900 bg-[#FDFDFD]`}>
        {children}
      </body>
    </html>
  );
}
