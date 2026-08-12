import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { BUSINESS_INFO, SITE_METADATA } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  keywords: SITE_METADATA.keywords,
  authors: [{ name: BUSINESS_INFO.founder }],
  openGraph: {
    title: SITE_METADATA.title,
    description: "23+ Years of AC & Refrigeration Experience | Mumbai & Pune",
    url: SITE_METADATA.siteUrl,
    siteName: BUSINESS_INFO.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_METADATA.siteUrl}/images/pravin-chavan.jpeg`,
        width: 1200,
        height: 630,
        alt: "Samarth Cool AC & Refrigeration Service Pravin Chavan",
      },
    ],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: BUSINESS_INFO.name,
    description: SITE_METADATA.description,
    telephone: "+919821460883",
    url: SITE_METADATA.siteUrl,
    areaServed: BUSINESS_INFO.locations.map((loc) => ({
      "@type": "AdministrativeArea",
      name: loc,
    })),
    founder: {
      "@type": "Person",
      name: BUSINESS_INFO.founder,
      jobTitle: "Founder & Senior Technician",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AC & Refrigeration Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AC Repair",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AC Servicing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AC Installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Refrigerator Repair",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Refrigeration Service",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hotel & Studio Cooling Service",
          },
        },
      ],
    },
    sameAs: [BUSINESS_INFO.googleMapsUrl, BUSINESS_INFO.instagramUrl],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-slate-900 bg-[#F7FAFC] selection:bg-blue-600 selection:text-white">
        <Header />
        {children}
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
