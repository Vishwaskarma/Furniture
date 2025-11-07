// app/layout.jsx
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// ──────────────────────────────────────
// 1. METADATA (Title, Description, OG, etc.)
// ──────────────────────────────────────
export const metadata = {
  title: {
    default: "Vishwakarma Carpenter – Custom Furniture Maker in Mumbai",
    template: "%s | Vishwakarma Carpenter Mumbai",
  },
  description:
    "Expert furniture carpenter in Mumbai. Custom wooden wardrobes, beds, TV units, tables & modular kitchens. Call +91 81695 41472 for a free quote.",
  keywords:
    "furniture carpenter mumbai, custom furniture mumbai, wooden wardrobe, carpenter near me, vishwakarma carpenter, modular kitchen mumbai, carpenter nallasopara, vasai virar carpenter",
  robots: "index, follow",
  alternates: {
    canonical: "https://vishwakarmacarpenter.shop",
  },
  openGraph: {
    title: "Vishwakarma Carpenter – Custom Furniture Maker in Mumbai",
    description:
      "Handcrafted wooden furniture with 10+ years experience. Free site visit in Mumbai.",
    url: "https://vishwakarmacarpenter.shop",
    siteName: "Vishwakarma Carpenter",
    images: [
      {
        url: "https://vishwakarmacarpenter.shop/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom wooden wardrobe by Vishwakarma Carpenter",
      },
    ],
    locale: "hi_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwakarma Carpenter Mumbai",
    description: "Custom wooden furniture – free quote in 5 mins!",
    images: ["https://vishwakarmacarpenter.shop/og-image.jpg"],
  },
};

// ──────────────────────────────────────
// 2. VIEWPORT EXPORT (NEW IN NEXT.JS 14+)
// ──────────────────────────────────────
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10b981", // emerald-500
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preload" href="/hero.jpg" as="image" />

        {/* Language alternates */}
        <link rel="alternate" hreflang="hi" href="https://vishwakarmacarpenter.shop" />
        <link rel="alternate" hreflang="en" href="https://vishwakarmacarpenter.shop/en" />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Vishwakarma Carpenter",
              image: "https://vishwakarmacarpenter.shop/og-image.jpg",
              telephone: "+918169541472",
              email: "healthymumbai@gmail.com",
              url: "https://vishwakarmacarpenter.shop",
              description:
                "Custom furniture carpenter in Mumbai specializing in wooden wardrobes, beds, TV units, dining tables, and modular kitchens.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dhaniv Baug, Ganesh Nagar, Nallasopara East",
                addressLocality: "Vasai Virar",
                addressRegion: "Maharashtra",
                postalCode: "401209",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 19.437723,
                longitude: 72.861581,
              },
              openingHours: "Mo-Sa 09:00-19:00",
              priceRange: "₹₹",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+918169541472",
                contactType: "Customer Service",
                areaServed: "Mumbai, Vasai Virar, Nallasopara",
                availableLanguage: ["Hindi", "English", "Marathi"],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}