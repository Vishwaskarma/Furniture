// app/page.js
import Navigation from '@/Components/Navigation';
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Services from '@/Components/Services';
import Gallery from './Gallery';
import Testimonials from '@/Components/Testimonials';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';

// ✅ ADDED: Metadata for homepage (inherits from layout.js but you can override)
export const metadata = {
  title: "Vishwakarma Carpenter – Custom Furniture Maker in Mumbai | 15+ Years Experience",
  description: "Premium custom furniture in Mumbai. Specializing in wooden wardrobes, modular kitchens, beds, TV units & dining tables. ✓ Free Site Visit ✓ 21-Day Delivery ✓ Lifetime Guarantee. Call +91 81695 41472",
  keywords: "carpenter mumbai, custom furniture mumbai, modular kitchen, wooden wardrobe, furniture maker vasai, nallasopara carpenter, carpenter near me",
  openGraph: {
    title: "Vishwakarma Carpenter – Premium Furniture in Mumbai",
    description: "15+ years crafting custom furniture. Free quote in 10 minutes. Call now!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom wooden furniture by Vishwakarma Carpenter Mumbai",
      },
    ],
  },
};

export default function Home() {
  // ✅ ADDED: BreadcrumbList Schema for better SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.vishwakarmacarpenter.shop"
      }
    ]
  };

  // ✅ ADDED: Service Schema (tells Google what services you offer)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom Furniture Manufacturing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Vishwakarma Carpenter"
    },
    "areaServed": {
      "@type": "City",
      "name": "Mumbai"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Furniture Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Wardrobes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Modular Kitchen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wooden Beds"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "TV Units"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dining Tables"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Main Doors"
          }
        }
      ]
    }
  };

  return (
    <>
      {/* ✅ ADDED: JSON-LD Structured Data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main className="font-sans bg-slate-950">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}