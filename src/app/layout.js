// // app/layout.jsx
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ["latin"] });

// // ──────────────────────────────────────
// // 1. METADATA (Title, Description, OG, etc.)
// // ──────────────────────────────────────
// export const metadata = {
//   metadataBase: new URL('https://www.vishwakarmacarpenter.shop'),
//   title: {
//     default: "Vishwakarma Carpenter – Custom Furniture Maker in Mumbai",
//     template: "%s | Vishwakarma Carpenter Mumbai",
//   },
//   description:
//     "Expert furniture carpenter in Mumbai. Custom wooden wardrobes, beds, TV units, tables & modular kitchens. Call +91 81695 41472 for a free quote.",
//   keywords:
//     "furniture carpenter mumbai, custom furniture mumbai, wooden wardrobe, carpenter near me, vishwakarma carpenter, modular kitchen mumbai, carpenter nallasopara, vasai virar carpenter",
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   alternates: {
//     canonical: "https://www.vishwakarmacarpenter.shop",
//   },
//   openGraph: {
//     title: "Vishwakarma Carpenter – Custom Furniture Maker in Mumbai",
//     description:
//       "Handcrafted wooden furniture with 10+ years experience. Free site visit in Mumbai.",
//     url: "https://www.vishwakarmacarpenter.shop",
//     siteName: "Vishwakarma Carpenter",
//     images: [
//       {
//         url: "https://www.vishwakarmacarpenter.shop/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Custom wooden wardrobe by Vishwakarma Carpenter",
//       },
//     ],
//     locale: "hi_IN",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Vishwakarma Carpenter Mumbai",
//     description: "Custom wooden furniture – free quote in 5 mins!",
//     images: ["https://www.vishwakarmacarpenter.shop/og-image.jpg"],
//   },
//   verification: {
//     google: 'googlecc389cdb92b2893f',
//   },
// };

// export const viewport = {
//   width: "device-width",
//   initialScale: 1,
//   themeColor: "#10b981",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="hi" className="scroll-smooth">
//       <head>
//         <link rel="icon" href="/favicon.ico" sizes="any" />
//         <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
//         <link rel="preload" href="/hero.jpg" as="image" />
//         <link rel="alternate" hrefLang="hi" href="https://www.vishwakarmacarpenter.shop" />
//         <link rel="alternate" hrefLang="en" href="https://www.vishwakarmacarpenter.shop/en" />
        
//         {/* LocalBusiness Schema – EMAIL UPDATED */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "LocalBusiness",
//               name: "Vishwakarma Carpenter",
//               image: "https://www.vishwakarmacarpenter.shop/og-image.jpg",
//               telephone: "+918169541472",
//               email: "dineshkvish662@gmail.com", // ← UPDATED
//               url: "https://www.vishwakarmacarpenter.shop",
//               description:
//                 "Custom furniture carpenter in Mumbai specializing in wooden wardrobes, beds, TV units, dining tables, and modular kitchens.",
//               address: {
//                 "@type": "PostalAddress",
//                 streetAddress: "Dhaniv Baug, Ganesh Nagar, Nallasopara East",
//                 addressLocality: "Vasai Virar",
//                 addressRegion: "Maharashtra",
//                 postalCode: "401209",
//                 addressCountry: "IN",
//               },
//               geo: {
//                 "@type": "GeoCoordinates",
//                 latitude: 19.437723,
//                 longitude: 72.861581,
//               },
//               openingHours: "Mo-Sa 09:00-19:00",
//               priceRange: "₹₹",
//               contactPoint: {
//                 "@type": "ContactPoint",
//                 telephone: "+918169541472",
//                 contactType: "Customer Service",
//                 areaServed: "Mumbai, Vasai Virar, Nallasopara",
//                 availableLanguage: ["Hindi", "English", "Marathi"],
//               },
//               aggregateRating: {
//                 "@type": "AggregateRating",
//                 ratingValue: "4.9",
//                 reviewCount: "150",
//               },
//             }),
//           }}
//         />
//       </head>
//       <body className={inter.className}>
//         {children}
//         <Toaster position="top-right" />
//       </body>
//     </html>
//   );
// }

// app/layout.jsx
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://www.vishwakarmacarpenter.shop'),
  title: {
    default: "Best Carpenter Near Me in Mumbai | Carpenter Services | Vishwakarma Carpenter",
    template: "%s | Carpenter Near Me - Vishwakarma Carpenter Mumbai",
  },
  description:
    "Find the best carpenter near you in Mumbai. Professional furniture carpenter in Nallasopara, Vasai Virar. Custom wardrobes, beds, modular kitchens. Free quote. Call +91 81695 41472 now!",
  keywords:
    "carpenter near me, best carpenter in mumbai, carpenter mumbai, furniture carpenter, custom furniture carpenter, carpenter in nallasopara, carpenter in vasai virar, wooden furniture carpenter, modular kitchen carpenter, wardrobe carpenter, carpenter services, professional carpenter, experienced carpenter, affordable carpenter, custom carpenter, interior carpenter, home carpenter, wood carpenter, skilled carpenter, carpentry services mumbai, furniture maker, bed carpenter, tv unit carpenter, table carpenter, best carpenter near me, hire carpenter, carpenter for hire, custom carpentry, carpentry contractor, wooden bed carpenter, kitchen cabinet carpenter, dining table carpenter",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.vishwakarmacarpenter.shop",
  },
  openGraph: {
    title: "Best Carpenter Near Me in Mumbai | Professional Furniture Carpenter",
    description:
      "Expert carpenter services in Mumbai. Custom wooden furniture, wardrobes, beds, modular kitchens. Free site visit & quote!",
    url: "https://www.vishwakarmacarpenter.shop",
    siteName: "Vishwakarma Carpenter - Best Carpenter Near Me",
    images: [
      {
        url: "https://www.vishwakarmacarpenter.shop/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best Carpenter in Mumbai - Professional Furniture Carpenter Services",
      },
    ],
    locale: "hi_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Carpenter Near Me - Vishwakarma Carpenter Mumbai",
    description: "Professional carpenter for custom furniture – free quote in 5 mins!",
    images: ["https://www.vishwakarmacarpenter.shop/og-image.jpg"],
  },
  verification: {
    google: 'googlecc389cdb92b2893f',
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10b981",
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.vishwakarmacarpenter.shop",
    name: "Vishwakarma Carpenter - Best Carpenter Near Me in Mumbai",
    alternateName: [
      "Carpenter Near Me",
      "Best Carpenter in Mumbai",
      "Furniture Carpenter",
      "Professional Carpenter",
      "Wood Carpenter",
      "Carpenter Services",
      "Custom Furniture Carpenter"
    ],
    image: "https://www.vishwakarmacarpenter.shop/og-image.jpg",
    telephone: "+918169541472",
    email: "dineshkvish662@gmail.com",
    url: "https://www.vishwakarmacarpenter.shop",
    description:
      "Best carpenter near you in Mumbai. Professional furniture carpenter specializing in custom wooden furniture, wardrobes, beds, TV units, dining tables, and modular kitchens. Serving Nallasopara, Vasai Virar, and all of Mumbai with 10+ years experience.",
    areaServed: [
      {
        "@type": "City",
        name: "Mumbai",
        "@id": "https://en.wikipedia.org/wiki/Mumbai"
      },
      {
        "@type": "City",
        name: "Nallasopara",
        "@id": "https://en.wikipedia.org/wiki/Nallasopara"
      },
      {
        "@type": "City",
        name: "Vasai Virar",
        "@id": "https://en.wikipedia.org/wiki/Vasai"
      },
      {
        "@type": "City",
        name: "Andheri"
      },
      {
        "@type": "City",
        name: "Borivali"
      }
    ],
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
      areaServed: "Mumbai, Vasai Virar, Nallasopara, Andheri, Borivali",
      availableLanguage: ["Hindi", "English", "Marathi"],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      offers: [
        {
          "@type": "Offer",
          name: "Custom Wardrobe Carpenter",
          description: "Professional wardrobe carpenter for custom wooden wardrobes"
        },
        {
          "@type": "Offer",
          name: "Modular Kitchen Carpenter",
          description: "Expert modular kitchen carpenter services in Mumbai"
        },
        {
          "@type": "Offer",
          name: "Custom Bed & Furniture",
          description: "Professional bed carpenter and furniture maker"
        },
        {
          "@type": "Offer",
          name: "TV Unit & Tables",
          description: "Skilled carpenter for TV units, dining tables, and more"
        }
      ]
    },
    knowsAbout: [
      "Carpentry",
      "Furniture Making",
      "Wood Work",
      "Custom Furniture",
      "Modular Kitchen Design",
      "Interior Carpentry",
      "Wooden Wardrobes",
      "Home Carpentry",
      "Professional Carpentry Services"
    ],
    sameAs: [
      "https://www.facebook.com/vishwakarmacarpenter",
      "https://www.instagram.com/vishwakarmacarpenter"
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I find a carpenter near me in Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Call Vishwakarma Carpenter at +91 81695 41472 for the best carpenter near you. We provide free site visits and quotes for all carpenter services in Mumbai, Nallasopara, and Vasai Virar."
        }
      },
      {
        "@type": "Question",
        name: "Who is the best carpenter in Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vishwakarma Carpenter is the best professional carpenter in Mumbai with 10+ years of experience in custom furniture making, wardrobes, modular kitchens, and all carpentry services."
        }
      },
      {
        "@type": "Question",
        name: "What services does a professional carpenter offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A professional carpenter offers custom wardrobes, beds, TV units, dining tables, modular kitchens, and other wooden furniture services. Vishwakarma Carpenter specializes in all these services."
        }
      },
      {
        "@type": "Question",
        name: "How much does a carpenter cost in Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Carpenter costs vary based on project complexity and materials. Contact Vishwakarma Carpenter for a free quote and site visit to get accurate pricing for your custom furniture needs."
        }
      },
      {
        "@type": "Question",
        name: "Where can I hire a skilled carpenter near me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hire Vishwakarma Carpenter - a skilled and experienced carpenter in Mumbai, Nallasopara, and Vasai Virar. Call +91 81695 41472 for carpentry services near you."
        }
      },
      {
        "@type": "Question",
        name: "Do carpenters provide free estimates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Vishwakarma Carpenter provides free site visits and quotes for all carpentry and furniture services in Mumbai."
        }
      }
    ]
  };

  return (
    <html lang="hi" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preload" href="/hero.jpg" as="image" />
        <link rel="alternate" hrefLang="hi" href="https://www.vishwakarmacarpenter.shop" />
        <link rel="alternate" hrefLang="en" href="https://www.vishwakarmacarpenter.shop/en" />
        
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />

        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqData),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.vishwakarmacarpenter.shop"
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Gallery",
                  item: "https://www.vishwakarmacarpenter.shop/gallery"
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Contact",
                  item: "https://www.vishwakarmacarpenter.shop/contact"
                }
              ]
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
