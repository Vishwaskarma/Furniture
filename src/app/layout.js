
// // app/layout.jsx - ULTRA-OPTIMIZED FOR CARPENTER & FURNITURE SEARCHES
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   metadataBase: new URL('https://www.vishwakarmacarpenter.shop'),
//   title: {
//     default: "Carpenter | Carpenter Near Me | Furniture Carpenter Mumbai | Best Carpenter Services | Vishwakarma Carpenter",
//     template: "%s | Carpenter Mumbai - Vishwakarma",
//   },
//   description:
//     "🔨 #1 CARPENTER in Mumbai! Expert furniture carpenter, wood carpenter, interior carpenter. Custom wardrobes, modular kitchens, beds, tables, TV units, sofas, doors, windows. ✓ 15+ Years ✓ FREE Site Visit ✓ Best Prices. Call +91 81695 41472 - Top carpenter near you!",
//   keywords: [
//     // Primary Carpenter Keywords
//     "carpenter",
//     "carpenter near me",
//     "carpenter mumbai",
//     "best carpenter",
//     "furniture carpenter",
//     "wood carpenter",
//     "professional carpenter",
//     "expert carpenter",
//     "skilled carpenter",
//     "experienced carpenter",
    
//     // Location-Based Carpenter
//     "carpenter in mumbai",
//     "carpenter in nallasopara",
//     "carpenter in vasai virar",
//     "carpenter in andheri",
//     "carpenter in borivali",
//     "carpenter in thane",
//     "carpenter in bandra",
//     "carpenter in malad",
//     "carpenter in kandivali",
//     "carpenter in powai",
//     "carpenter in goregaon",
//     "carpenter in dahisar",
//     "carpenter in mira road",
//     "carpenter in bhayander",
//     "carpenter in virar",
    
//     // Service-Based Carpenter
//     "carpenter services",
//     "carpenter services mumbai",
//     "carpenter services near me",
//     "carpentry services",
//     "carpentry work",
//     "carpenter work",
//     "home carpenter",
//     "interior carpenter",
//     "residential carpenter",
//     "commercial carpenter",
//     "custom carpenter",
//     "affordable carpenter",
    
//     // Furniture Carpenter Keywords
//     "furniture carpenter",
//     "furniture carpenter mumbai",
//     "furniture carpenter near me",
//     "custom furniture carpenter",
//     "furniture maker",
//     "furniture making",
//     "wooden furniture carpenter",
//     "furniture designer",
//     "furniture craftsman",
    
//     // Wardrobe Carpenter
//     "wardrobe carpenter",
//     "wardrobe carpenter mumbai",
//     "wardrobe carpenter near me",
//     "custom wardrobe carpenter",
//     "wooden wardrobe carpenter",
//     "sliding wardrobe carpenter",
//     "almirah carpenter",
//     "cupboard carpenter",
//     "closet carpenter",
    
//     // Kitchen Carpenter
//     "kitchen carpenter",
//     "kitchen carpenter mumbai",
//     "kitchen carpenter near me",
//     "modular kitchen carpenter",
//     "kitchen cabinet carpenter",
//     "kitchen furniture carpenter",
//     "kitchen interior carpenter",
    
//     // Bed Carpenter
//     "bed carpenter",
//     "bed carpenter mumbai",
//     "bed carpenter near me",
//     "wooden bed carpenter",
//     "custom bed carpenter",
//     "bed frame carpenter",
//     "cot carpenter",
//     "double bed carpenter",
    
//     // Table Carpenter
//     "table carpenter",
//     "dining table carpenter",
//     "center table carpenter",
//     "coffee table carpenter",
//     "study table carpenter",
//     "computer table carpenter",
//     "wooden table carpenter",
    
//     // TV Unit Carpenter
//     "tv unit carpenter",
//     "tv unit carpenter mumbai",
//     "tv cabinet carpenter",
//     "tv stand carpenter",
//     "entertainment unit carpenter",
    
//     // Sofa Carpenter
//     "sofa carpenter",
//     "sofa carpenter mumbai",
//     "wooden sofa carpenter",
//     "sofa set carpenter",
//     "sofa frame carpenter",
    
//     // Door & Window Carpenter
//     "door carpenter",
//     "door carpenter mumbai",
//     "main door carpenter",
//     "wooden door carpenter",
//     "window carpenter",
//     "door frame carpenter",
    
//     // Other Furniture Carpenter
//     "bookshelf carpenter",
//     "bookcase carpenter",
//     "shoe rack carpenter",
//     "dressing table carpenter",
//     "pooja mandir carpenter",
//     "temple carpenter",
//     "partition carpenter",
//     "false ceiling carpenter",
//     "wall panel carpenter",
    
//     // Hire/Find Carpenter
//     "hire carpenter",
//     "hire carpenter mumbai",
//     "find carpenter",
//     "find carpenter near me",
//     "carpenter for hire",
//     "get carpenter",
//     "book carpenter",
//     "call carpenter",
//     "contact carpenter",
    
//     // Quality Carpenter
//     "best carpenter in mumbai",
//     "top carpenter mumbai",
//     "professional carpenter mumbai",
//     "expert carpenter mumbai",
//     "reliable carpenter",
//     "trusted carpenter",
//     "certified carpenter",
//     "licensed carpenter",
    
//     // Custom Work Carpenter
//     "custom furniture maker",
//     "bespoke furniture carpenter",
//     "made to order furniture",
//     "tailor made furniture",
//     "custom wood work",
//     "custom carpentry",
    
//     // Material-Based
//     "wood work carpenter",
//     "wooden work carpenter",
//     "teak wood carpenter",
//     "plywood carpenter",
//     "laminate carpenter",
//     "veneer carpenter",
    
//     // Style-Based
//     "modern furniture carpenter",
//     "contemporary furniture carpenter",
//     "classic furniture carpenter",
//     "traditional carpenter",
//     "minimalist carpenter",
    
//     // General Terms
//     "vishwakarma carpenter",
//     "carpenter shop",
//     "carpenter workshop",
//     "furniture shop",
//     "furniture workshop",
//     "wood shop",
//     "carpentry contractor",
//     "furniture contractor"
//   ].join(", "),
  
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
//     title: "Carpenter | Best Furniture Carpenter in Mumbai | Vishwakarma Carpenter",
//     description:
//       "Mumbai's #1 CARPENTER - Expert furniture carpenter with 15+ years. Custom wardrobes, kitchens, beds, tables. FREE site visit!",
//     url: "https://www.vishwakarmacarpenter.shop",
//     siteName: "Vishwakarma Carpenter - Best Carpenter in Mumbai",
//     images: [
//       {
//         url: "https://www.vishwakarmacarpenter.shop/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Best Carpenter in Mumbai - Expert Furniture Carpenter - Vishwakarma",
//       },
//     ],
//     locale: "hi_IN",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Best Carpenter in Mumbai | Expert Furniture Carpenter",
//     description: "Mumbai's #1 Carpenter - Custom furniture, wardrobes, kitchens. FREE quote!",
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
//   const schemaData = {
//     "@context": "https://schema.org",
//     "@type": "LocalBusiness",
//     "@id": "https://www.vishwakarmacarpenter.shop",
//     name: "Vishwakarma Carpenter - Best Carpenter & Furniture Carpenter in Mumbai",
//     alternateName: [
//       "Carpenter",
//       "Carpenter Near Me",
//       "Furniture Carpenter",
//       "Best Carpenter in Mumbai",
//       "Wood Carpenter",
//       "Professional Carpenter",
//       "Expert Carpenter Mumbai",
//       "Carpenter Services Mumbai",
//       "Custom Furniture Carpenter",
//       "Wardrobe Carpenter",
//       "Kitchen Carpenter",
//       "Vishwakarma Carpenter Mumbai"
//     ],
//     image: [
//       "https://www.vishwakarmacarpenter.shop/og-image.jpg",
//       "https://www.vishwakarmacarpenter.shop/wardrobe.jpg",
//       "https://www.vishwakarmacarpenter.shop/kitchen.jpg",
//       "https://www.vishwakarmacarpenter.shop/bed.jpg"
//     ],
//     telephone: "+918169541472",
//     email: "dineshkvish662@gmail.com",
//     url: "https://www.vishwakarmacarpenter.shop",
//     description:
//       "Best carpenter and furniture carpenter in Mumbai. Professional carpentry services specializing in custom wooden furniture, wardrobes, modular kitchens, beds, tables, TV units, sofas, doors, and all wood work. Expert carpenter with 15+ years experience serving Nallasopara, Vasai Virar, Andheri, Borivali, Thane, Bandra, Malad, and all Mumbai areas. Call for FREE site visit and quote!",
    
//     priceRange: "₹₹",
    
//     makesOffer: [
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "Custom Wardrobe Carpenter Services",
//           description: "Professional wardrobe carpenter for sliding, hinged & walk-in wardrobes"
//         }
//       },
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "Modular Kitchen Carpenter Services",
//           description: "Expert modular kitchen carpenter with L-shape, U-shape & straight designs"
//         }
//       },
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "Bed & Bedroom Furniture Carpenter",
//           description: "Custom bed carpenter for wooden beds, cots & bedroom furniture"
//         }
//       },
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "Dining & Center Table Carpenter",
//           description: "Professional table carpenter for dining, center & study tables"
//         }
//       },
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "TV Unit & Entertainment Carpenter",
//           description: "Modern TV unit carpenter for wall mount & floor units"
//         }
//       },
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "Sofa & Seating Carpenter",
//           description: "Wooden sofa carpenter for custom sofa frames & seating"
//         }
//       },
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "Door & Window Carpenter Services",
//           description: "Main door carpenter for wooden doors, frames & windows"
//         }
//       },
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "Pooja Mandir & Temple Carpenter",
//           description: "Custom pooja mandir carpenter for home temples"
//         }
//       },
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "Home Interior Carpentry Services",
//           description: "Complete home carpenter for all interior wood work"
//         }
//       }
//     ],
    
//     areaServed: [
//       {
//         "@type": "City",
//         name: "Mumbai",
//         "@id": "https://en.wikipedia.org/wiki/Mumbai"
//       },
//       {
//         "@type": "City",
//         name: "Nallasopara"
//       },
//       {
//         "@type": "City",
//         name: "Vasai Virar"
//       },
//       {
//         "@type": "City",
//         name: "Andheri"
//       },
//       {
//         "@type": "City",
//         name: "Borivali"
//       },
//       {
//         "@type": "City",
//         name: "Thane"
//       },
//       {
//         "@type": "City",
//         name: "Bandra"
//       },
//       {
//         "@type": "City",
//         name: "Malad"
//       },
//       {
//         "@type": "City",
//         name: "Kandivali"
//       },
//       {
//         "@type": "City",
//         name: "Powai"
//       },
//       {
//         "@type": "City",
//         name: "Goregaon"
//       },
//       {
//         "@type": "City",
//         name: "Dahisar"
//       },
//       {
//         "@type": "City",
//         name: "Mira Road"
//       },
//       {
//         "@type": "City",
//         name: "Bhayander"
//       },
//       {
//         "@type": "City",
//         name: "Virar"
//       }
//     ],
    
//     address: {
//       "@type": "PostalAddress",
//       streetAddress: "Dhaniv Baug, Ganesh Nagar, Nallasopara East",
//       addressLocality: "Vasai Virar",
//       addressRegion: "Maharashtra",
//       postalCode: "401209",
//       addressCountry: "IN",
//     },
    
//     geo: {
//       "@type": "GeoCoordinates",
//       latitude: 19.437723,
//       longitude: 72.861581,
//     },
    
//     openingHoursSpecification: [
//       {
//         "@type": "OpeningHoursSpecification",
//         dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//         opens: "09:00",
//         closes: "19:00"
//       }
//     ],
    
//     contactPoint: {
//       "@type": "ContactPoint",
//       telephone: "+918169541472",
//       contactType: "Customer Service",
//       contactOption: "TollFree",
//       areaServed: "IN",
//       availableLanguage: ["Hindi", "English", "Marathi"],
//     },
    
//     aggregateRating: {
//       "@type": "AggregateRating",
//       ratingValue: "4.9",
//       bestRating: "5",
//       worstRating: "1",
//       reviewCount: "150",
//     },
    
//     hasOfferCatalog: {
//       "@type": "OfferCatalog",
//       name: "Carpenter & Furniture Services",
//       itemListElement: [
//         {
//           "@type": "OfferCatalog",
//           name: "Wardrobe Carpenter Services",
//           itemListElement: [
//             {
//               "@type": "Offer",
//               itemOffered: {
//                 "@type": "Service",
//                 name: "Sliding Wardrobe Carpenter"
//               }
//             },
//             {
//               "@type": "Offer",
//               itemOffered: {
//                 "@type": "Service",
//                 name: "Hinged Wardrobe Carpenter"
//               }
//             },
//             {
//               "@type": "Offer",
//               itemOffered: {
//                 "@type": "Service",
//                 name: "Walk-in Closet Carpenter"
//               }
//             }
//           ]
//         },
//         {
//           "@type": "OfferCatalog",
//           name: "Kitchen Carpenter Services",
//           itemListElement: [
//             {
//               "@type": "Offer",
//               itemOffered: {
//                 "@type": "Service",
//                 name: "L-Shape Kitchen Carpenter"
//               }
//             },
//             {
//               "@type": "Offer",
//               itemOffered: {
//                 "@type": "Service",
//                 name: "U-Shape Kitchen Carpenter"
//               }
//             },
//             {
//               "@type": "Offer",
//               itemOffered: {
//                 "@type": "Service",
//                 name: "Parallel Kitchen Carpenter"
//               }
//             }
//           ]
//         }
//       ]
//     },
    
//     knowsAbout: [
//       "Carpentry",
//       "Furniture Carpentry",
//       "Wood Work",
//       "Furniture Making",
//       "Custom Furniture",
//       "Wardrobe Making",
//       "Kitchen Cabinet Making",
//       "Bed Manufacturing",
//       "Table Making",
//       "Interior Carpentry",
//       "Residential Carpentry",
//       "Commercial Carpentry",
//       "Door Installation",
//       "Window Installation",
//       "Wood Finishing",
//       "Furniture Design",
//       "Home Improvement"
//     ],
    
//     sameAs: [
//       "https://www.facebook.com/vishwakarmacarpenter",
//       "https://www.instagram.com/vishwakarmacarpenter"
//     ],
    
//     slogan: "Mumbai's Best Carpenter - Expert Furniture Carpenter for Your Dream Home"
//   };

//   const faqData = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: [
//       {
//         "@type": "Question",
//         name: "Who is the best carpenter near me in Mumbai?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Vishwakarma Carpenter is the best carpenter near you in Mumbai with 15+ years of experience. We are expert furniture carpenters specializing in wardrobes, modular kitchens, beds, tables, and all wood work. Call +91 81695 41472 for FREE site visit."
//         }
//       },
//       {
//         "@type": "Question",
//         name: "What does a furniture carpenter do?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "A furniture carpenter designs and builds custom wooden furniture including wardrobes, beds, tables, TV units, sofas, and modular kitchens. Vishwakarma Carpenter provides complete furniture carpentry services in Mumbai."
//         }
//       },
//       {
//         "@type": "Question",
//         name: "How much does a carpenter charge in Mumbai?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Carpenter charges vary based on project type, materials, and complexity. Vishwakarma Carpenter offers competitive rates with FREE site visits and quotes. Call +91 81695 41472 for accurate pricing for your furniture project."
//         }
//       },
//       {
//         "@type": "Question",
//         name: "Do you provide carpenter services in my area?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Yes! Vishwakarma Carpenter provides services across Mumbai including Nallasopara, Vasai Virar, Andheri, Borivali, Thane, Bandra, Malad, Kandivali, Goregaon, and surrounding areas."
//         }
//       },
//       {
//         "@type": "Question",
//         name: "What furniture can a carpenter make?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "A professional carpenter can make wardrobes, modular kitchens, beds, dining tables, center tables, TV units, sofas, doors, windows, pooja mandirs, bookshelves, and all custom wooden furniture. Vishwakarma Carpenter specializes in all these services."
//         }
//       },
//       {
//         "@type": "Question",
//         name: "How do I hire a good carpenter?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Hire Vishwakarma Carpenter - a trusted, experienced carpenter in Mumbai. Check our portfolio, read reviews, and call +91 81695 41472 for FREE consultation. We provide quality workmanship with lifetime guarantee."
//         }
//       },
//       {
//         "@type": "Question",
//         name: "Do carpenters make custom furniture?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Yes! Vishwakarma Carpenter specializes in custom furniture making. We create tailor-made furniture according to your exact requirements, space, and design preferences."
//         }
//       },
//       {
//         "@type": "Question",
//         name: "What is the best wood for furniture?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Best wood depends on budget and usage. Teak, oak, and sheesham are premium choices. Plywood with laminate/veneer is cost-effective. Vishwakarma Carpenter guides you in selecting the right material for your furniture."
//         }
//       }
//     ]
//   };

//   const breadcrumbData = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         name: "Carpenter",
//         item: "https://www.vishwakarmacarpenter.shop"
//       },
//       {
//         "@type": "ListItem",
//         position: 2,
//         name: "Carpenter Services",
//         item: "https://www.vishwakarmacarpenter.shop/#services"
//       },
//       {
//         "@type": "ListItem",
//         position: 3,
//         name: "Gallery",
//         item: "https://www.vishwakarmacarpenter.shop/#gallery"
//       },
//       {
//         "@type": "ListItem",
//         position: 4,
//         name: "Contact Carpenter",
//         item: "https://www.vishwakarmacarpenter.shop/#contact"
//       }
//     ]
//   };

//   return (
//     <html lang="hi" className="scroll-smooth">
//       <head>
//         <link rel="icon" href="/favicon.ico" sizes="any" />
//         <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
//         <link rel="preload" href="/hero.jpg" as="image" />
//         <link rel="alternate" hrefLang="hi" href="https://www.vishwakarmacarpenter.shop" />
//         <link rel="alternate" hrefLang="en" href="https://www.vishwakarmacarpenter.shop/en" />
        
//         {/* LocalBusiness Schema - Enhanced */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemaData),
//           }}
//         />

//         {/* FAQPage Schema - Enhanced */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(faqData),
//           }}
//         />

//         {/* BreadcrumbList Schema */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(breadcrumbData),
//           }}
//         />

//         {/* Organization Schema */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               name: "Vishwakarma Carpenter",
//               url: "https://www.vishwakarmacarpenter.shop",
//               logo: "https://www.vishwakarmacarpenter.shop/logo.png",
//               description: "Professional carpenter and furniture carpenter in Mumbai",
//               telephone: "+918169541472",
//               email: "dineshkvish662@gmail.com",
//               address: {
//                 "@type": "PostalAddress",
//                 streetAddress: "Dhaniv Baug, Ganesh Nagar, Nallasopara East",
//                 addressLocality: "Vasai Virar",
//                 addressRegion: "Maharashtra",
//                 postalCode: "401209",
//                 addressCountry: "IN"
//               }
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











// app/layout.jsx - COMPLETE AND FINAL OPTIMIZED VERSION

import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

// =================================================================
// 1. METADATA EXPORT (SEO Titles, Description, Keywords, OpenGraph)
// =================================================================
export const metadata = {
  metadataBase: new URL('https://www.vishwakarmacarpenter.shop'),
  
  // OPTIMIZED TITLE (Short, strong primary keyword, high CTR)
  title: {
    default: "Best Carpenter in Mumbai → Vishwakarma Carpenter",
    template: "%s → Best Carpenter Mumbai | Vishwakarma",
  },
  
  // OPTIMIZED DESCRIPTION (Action-oriented, includes key services and CTA)
  description:
    "Mumbai #1 Carpenter → Custom Furniture, Modular Kitchen, Wardrobe, Bed, TV Unit. 15+ Years Experience ✓ FREE Site Visit ✓ Best Price Guaranteed. Call +91 81695 41472 Now!",

  // EXPANDED KEYWORDS (Includes local Indian search terms like 'mistri' and specific service/location combos)
  keywords: [
    "carpenter","carpenter near me","carpenter mumbai","best carpenter","furniture carpenter","wood carpenter","professional carpenter","expert carpenter","skilled carpenter","experienced carpenter",
    "carpenter in mumbai","carpenter in nallasopara","carpenter in vasai virar","carpenter in andheri","carpenter in borivali","carpenter in thane","carpenter in bandra","carpenter in malad","carpenter in kandivali","carpenter in powai","carpenter in goregaon","carpenter in dahisar","carpenter in mira road","carpenter in bhayander","carpenter in virar",
    "carpenter services","carpenter services mumbai","carpenter services near me","carpentry services","carpentry work","carpenter work","home carpenter","interior carpenter","residential carpenter","commercial carpenter","custom carpenter","affordable carpenter",
    "furniture carpenter","furniture carpenter mumbai","furniture carpenter near me","custom furniture carpenter","furniture maker","furniture making","wooden furniture carpenter","furniture designer","furniture craftsman",
    "wardrobe carpenter","wardrobemumbai","wardrobe near me","custom wardrobe carpenter","wooden wardrobe carpenter","sliding wardrobe carpenter","almirah carpenter","cupboard carpenter","closet carpenter",
    "kitchen carpenter","kitchen carpenter mumbai","kitchen carpenter near me","modular kitchen carpenter","kitchen cabinet carpenter","kitchen furniture carpenter","kitchen interior carpenter",
    "bed carpenter","bed carpenter mumbai","bed carpenter near me","wooden bed carpenter","custom bed carpenter","bed frame carpenter","cot carpenter","double bed carpenter",
    "table carpenter","dining table carpenter","center table carpenter","coffee table carpenter","study table carpenter","computer table carpenter","wooden table carpenter",
    "tv unit carpenter","tv unit carpenter mumbai","tv cabinet carpenter","tv stand carpenter","entertainment unit carpenter",
    "sofa carpenter","sofa carpenter mumbai","wooden sofa carpenter","sofa set carpenter","sofa frame carpenter",
    "door carpenter","door carpenter mumbai","main door carpenter","wooden door carpenter","window carpenter","door frame carpenter",
    "bookshelf carpenter","bookcase carpenter","shoe rack carpenter","dressing table carpenter","pooja mandir carpenter","temple carpenter","partition carpenter","false ceiling carpenter","wall panel carpenter",
    "hire carpenter","hire carpenter mumbai","find carpenter","find carpenter near me","carpenter for hire","get carpenter","book carpenter","call carpenter","contact carpenter",
    "best carpenter in mumbai","top carpenter mumbai","professional carpenter mumbai","expert carpenter mumbai","reliable carpenter","trusted carpenter","certified carpenter","licensed carpenter",
    "custom furniture maker","bespoke furniture carpenter","made to order furniture","tailor made furniture","custom wood work","custom carpentry",
    "wood work carpenter","wooden work carpenter","teak wood carpenter","plywood carpenter","laminate carpenter","veneer carpenter",
    "modern furniture carpenter","contemporary furniture carpenter","classic furniture carpenter","traditional carpenter","minimalist carpenter",
    "vishwakarma carpenter","carpenter shop","carpenter workshop","furniture shop","furniture workshop","wood shop","carpentry contractor","furniture contractor",
    
    // NEW 2025 HIGH-VOLUME INDIAN KEYWORDS (for local search)
    "mistri near me","barhai near me","badhai near me","carpenter service","furniture work near me","wood work near me","wooden work in home","home furniture carpenter","interior work carpenter",
    "furniture repair near me","sofa repair carpenter","door repair carpenter","wood polish carpenter","furniture polish","wooden almirah","wooden wardrobe price","modular wardrobe","kitchen trolley carpenter",
    "plywood work","laminate work","carpenter charges","carpenter rate per day","carpenter ka rate","carpenter ka number","carpenter contact number","local carpenter","nearby carpenter",
    "carpenter whatsapp number","carpenter booking","carpenter online","carpenter at home","home carpenter service","furniture maker near me","wooden furniture maker","custom furniture mumbai",
    "carpenter in my area","carpenter home service","carpenter home visit","carpenter ka kaam","bhaiya carpenter","carpenter bhaiya","wooden work contractor","interior carpenter contractor",
    "furniture contractor mumbai","carpenter job work","carpenter labour","carpenter thekedar","thekedar carpenter","carpenter charges in mumbai","modular kitchen price in mumbai","wardrobe design 2025"
  ].join(", "),

  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: "https://www.vishwakarmacarpenter.shop" },

  openGraph: {
    title: "Best Carpenter in Mumbai → Vishwakarma Carpenter | Custom Furniture",
    description: "Mumbai #1 Carpenter → Wardrobe, Modular Kitchen, Bed, TV Unit. FREE Site Visit in 2 Hours!",
    url: "https://www.vishwakarmacarpenter.shop",
    siteName: "Vishwakarma Carpenter Mumbai",
    images: [{ url: "https://www.vishwakarmacarpenter.shop/og-image.jpg", width: 1200, height: 630, alt: "Best Carpenter in Mumbai - Vishwakarma" }],
    locale: "hi_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Carpenter Mumbai → Vishwakarma Carpenter",
    description: "Custom Furniture • FREE Quote • Call +91 81695 41472",
    images: ["https://www.vishwakarmacarpenter.shop/og-image.jpg"],
  },
  verification: {
    google: 'googlecc389cdb92b2893f',
  },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#10b981" };

// =================================================================
// 2. ROOT LAYOUT COMPONENT
// =================================================================
export default function RootLayout({ children }) {
  
  // ------------------------------------
  // Schema 1: LocalBusiness Schema
  // ------------------------------------
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.vishwakarmacarpenter.shop",
    name: "Vishwakarma Carpenter - Best Carpenter & Furniture Carpenter in Mumbai",
    alternateName: [
      "Carpenter", "Carpenter Near Me", "Furniture Carpenter", "Best Carpenter in Mumbai", "Wood Carpenter",
      "Professional Carpenter", "Expert Carpenter Mumbai", "Carpenter Services Mumbai", "Custom Furniture Carpenter",
      "Wardrobe Carpenter", "Kitchen Carpenter", "Vishwakarma Carpenter Mumbai"
    ],
    image: [
      "https://www.vishwakarmacarpenter.shop/og-image.jpg",
      "https://www.vishwakarmacarpenter.shop/wardrobe.jpg",
      "https://www.vishwakarmacarpenter.shop/kitchen.jpg",
      "https://www.vishwakarmacarpenter.shop/bed.jpg"
    ],
    telephone: "+918169541472",
    email: "dineshkvish662@gmail.com",
    url: "https://www.vishwakarmacarpenter.shop",
    description:
      "Best carpenter and furniture carpenter in Mumbai. Professional carpentry services specializing in custom wooden furniture, wardrobes, modular kitchens, beds, tables, TV units, sofas, doors, and all wood work. Expert carpenter with 15+ years experience serving Nallasopara, Vasai Virar, Andheri, Borivali, Thane, Bandra, Malad, and all Mumbai areas. Call for FREE site visit and quote!",
    
    priceRange: "₹₹",
    
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Wardrobe Carpenter Services", description: "Professional wardrobe carpenter for sliding, hinged & walk-in wardrobes" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Modular Kitchen Carpenter Services", description: "Expert modular kitchen carpenter with L-shape, U-shape & straight designs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bed & Bedroom Furniture Carpenter", description: "Custom bed carpenter for wooden beds, cots & bedroom furniture" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dining & Center Table Carpenter", description: "Professional table carpenter for dining, center & study tables" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "TV Unit & Entertainment Carpenter", description: "Modern TV unit carpenter for wall mount & floor units" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sofa & Seating Carpenter", description: "Wooden sofa carpenter for custom sofa frames & seating" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Door & Window Carpenter Services", description: "Main door carpenter for wooden doors, frames & windows" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pooja Mandir & Temple Carpenter", description: "Custom pooja mandir carpenter for home temples" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Interior Carpentry Services", description: "Complete home carpenter for all interior wood work" } }
    ],
    
    areaServed: [
      { "@type": "City", name: "Mumbai", "@id": "https://en.wikipedia.org/wiki/Mumbai" },
      { "@type": "City", name: "Nallasopara" },
      { "@type": "City", name: "Vasai Virar" },
      { "@type": "City", name: "Andheri" },
      { "@type": "City", name: "Borivali" },
      { "@type": "City", name: "Thane" },
      { "@type": "City", name: "Bandra" },
      { "@type": "City", name: "Malad" },
      { "@type": "City", name: "Kandivali" },
      { "@type": "City", name: "Powai" },
      { "@type": "City", name: "Goregaon" },
      { "@type": "City", name: "Dahisar" },
      { "@type": "City", name: "Mira Road" },
      { "@type": "City", name: "Bhayander" },
      { "@type": "City", name: "Virar" }
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
    
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00"
      }
    ],
    
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+918169541472",
      contactType: "Customer Service",
      contactOption: "TollFree",
      areaServed: "IN",
      availableLanguage: ["Hindi", "English", "Marathi"],
    },
    
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "150",
    },
    
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Carpenter & Furniture Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Wardrobe Carpenter Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sliding Wardrobe Carpenter" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hinged Wardrobe Carpenter" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Walk-in Closet Carpenter" } }
          ]
        },
        {
          "@type": "OfferCatalog",
          name: "Kitchen Carpenter Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "L-Shape Kitchen Carpenter" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "U-Shape Kitchen Carpenter" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Parallel Kitchen Carpenter" } }
          ]
        }
      ]
    },
    
    knowsAbout: [
      "Carpentry", "Furniture Carpentry", "Wood Work", "Furniture Making", "Custom Furniture", "Wardrobe Making",
      "Kitchen Cabinet Making", "Bed Manufacturing", "Table Making", "Interior Carpentry", "Residential Carpentry",
      "Commercial Carpentry", "Door Installation", "Window Installation", "Wood Finishing", "Furniture Design",
      "Home Improvement"
    ],
    
    sameAs: [
      "https://www.facebook.com/vishwakarmacarpenter",
      "https://www.instagram.com/vishwakarmacarpenter"
    ],
    
    slogan: "Mumbai's Best Carpenter - Expert Furniture Carpenter for Your Dream Home"
  };

  // ------------------------------------
  // Schema 2: FAQPage Schema
  // ------------------------------------
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is the best carpenter near me in Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vishwakarma Carpenter is the best carpenter near you in Mumbai with 15+ years of experience. We are expert furniture carpenters specializing in wardrobes, modular kitchens, beds, tables, and all wood work. Call +91 81695 41472 for FREE site visit."
        }
      },
      {
        "@type": "Question",
        name: "What does a furniture carpenter do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A furniture carpenter designs and builds custom wooden furniture including wardrobes, beds, tables, TV units, sofas, and modular kitchens. Vishwakarma Carpenter provides complete furniture carpentry services in Mumbai."
        }
      },
      {
        "@type": "Question",
        name: "How much does a carpenter charge in Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Carpenter charges vary based on project type, materials, and complexity. Vishwakarma Carpenter offers competitive rates with FREE site visits and quotes. Call +91 81695 41472 for accurate pricing for your furniture project."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide carpenter services in my area?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Vishwakarma Carpenter provides services across Mumbai including Nallasopara, Vasai Virar, Andheri, Borivali, Thane, Bandra, Malad, Kandivali, Goregaon, and surrounding areas."
        }
      },
      {
        "@type": "Question",
        name: "What furniture can a carpenter make?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A professional carpenter can make wardrobes, modular kitchens, beds, dining tables, center tables, TV units, sofas, doors, windows, pooja mandirs, bookshelves, and all custom wooden furniture. Vishwakarma Carpenter specializes in all these services."
        }
      },
      {
        "@type": "Question",
        name: "How do I hire a good carpenter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hire Vishwakarma Carpenter - a trusted, experienced carpenter in Mumbai. Check our portfolio, read reviews, and call +91 81695 41472 for FREE consultation. We provide quality workmanship with lifetime guarantee."
        }
      },
      {
        "@type": "Question",
        name: "Do carpenters make custom furniture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Vishwakarma Carpenter specializes in custom furniture making. We create tailor-made furniture according to your exact requirements, space, and design preferences."
        }
      },
      {
        "@type": "Question",
        name: "What is the best wood for furniture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Best wood depends on budget and usage. Teak, oak, and sheesham are premium choices. Plywood with laminate/veneer is cost-effective. Vishwakarma Carpenter guides you in selecting the right material for your furniture."
        }
      }
    ]
  };

  // ------------------------------------
  // Schema 3: BreadcrumbList Schema
  // ------------------------------------
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Carpenter", item: "https://www.vishwakarmacarpenter.shop" },
      { "@type": "ListItem", position: 2, name: "Carpenter Services", item: "https://www.vishwakarmacarpenter.shop/#services" },
      { "@type": "ListItem", position: 3, name: "Gallery", item: "https://www.vishwakarmacarpenter.shop/#gallery" },
      { "@type": "ListItem", position: 4, name: "Contact Carpenter", item: "https://www.vishwakarmacarpenter.shop/#contact" }
    ]
  };
  
  // ----------------------------------------------------
  // Schema 4: HomeAndConstructionBusiness Schema (NEW)
  // ----------------------------------------------------
  const homeConstructionSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Vishwakarma Carpenter - Best Carpenter in Mumbai",
    "image": "https://www.vishwakarmacarpenter.shop/og-image.jpg",
    "telephone": "+918169541472",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dhaniv Baug, Ganesh Nagar, Nallasopara East",
      "addressLocality": "Vasai Virar",
      "addressRegion": "Maharashtra",
      "postalCode": "401209",
      "addressCountry": "IN"
    },
    "url": "https://www.vishwakarmacarpenter.shop",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.437723,
      "longitude": 72.861581
    },
    "makesOffer": schemaData.makesOffer, // Re-uses the offers from LocalBusiness
    "areaServed": schemaData.areaServed // Re-uses the areas from LocalBusiness
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

        {/* FAQPage Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

        {/* Organization Schema (Crucial for linking to GBP) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vishwakarma Carpenter",
              url: "https://www.vishwakarmacarpenter.shop",
              logo: "https://www.vishwakarmacarpenter.shop/logo.png",
              telephone: "+918169541472",
              // IMPORTANT: Replace the placeholder below with your actual Google Business Profile (GBP) link
              sameAs: ["https://g.co/kgs/YOUR_GBP_LINK", "https://www.facebook.com/vishwakarmacarpenter"], 
            }),
          }}
        />
        
        {/* HomeAndConstructionBusiness Schema (Most relevant type for this service) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeConstructionSchema) }} />

      </head>
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}