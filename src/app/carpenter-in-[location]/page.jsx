// app/carpenter-in-[location]/page.jsx
import React from "react";
import { MapPin, Phone, Star } from "lucide-react";

// SERVER COMPONENT — NO 'use client' — this is REQUIRED for generateStaticParams()
const locations = {
  "nalla-sopara": {
    name: "Nalla Sopara",
    title: "Best Carpenter in Nalla Sopara | Professional Carpentry Services",
    description: "Expert carpenter in Nalla Sopara for custom furniture, wardrobes, modular kitchens. Professional carpentry services near you.",
    keywords: "carpenter in nalla sopara, carpenter nalla sopara, carpentry services nalla sopara",
    fullDescription: "Looking for the best carpenter in Nalla Sopara? Vishwakarma Carpenter offers professional carpentry services including custom wardrobes, beds, modular kitchens, TV units, and dining tables. Free site visit and quote!"
  },
  "vasai-virar": {
    name: "Vasai Virar",
    title: "Best Carpenter in Vasai Virar | Professional Carpentry Services",
    description: "Expert carpenter in Vasai Virar for custom furniture. Professional carpentry services. Free quote!",
    keywords: "carpenter in vasai virar, carpenter vasai, carpentry services vasai virar",
    fullDescription: "Find the best carpenter in Vasai Virar with Vishwakarma Carpenter. We provide professional carpentry services for all your furniture needs."
  },
  "andheri": {
    name: "Andheri",
    title: "Best Carpenter in Andheri Mumbai | Professional Carpentry Services",
    description: "Expert carpenter in Andheri for custom furniture and carpentry services.",
    keywords: "carpenter in andheri, carpenter andheri, carpentry services andheri",
    fullDescription: "Professional carpenter in Andheri offering custom furniture, wardrobes, modular kitchens and all carpentry services."
  },
  "borivali": {
    name: "Borivali",
    title: "Best Carpenter in Borivali | Professional Carpentry Services",
    description: "Expert carpenter in Borivali for custom furniture and carpentry services.",
    keywords: "carpenter in borivali, carpenter borivali, carpentry services borivali",
    fullDescription: "Find professional carpenter in Borivali for all your carpentry and custom furniture needs."
  },
  "thane": {
    name: "Thane",
    title: "Best Carpenter in Thane | Professional Carpentry Services",
    description: "Expert carpenter in Thane for custom furniture and carpentry services.",
    keywords: "carpenter in thane, carpenter thane, carpentry services thane",
    fullDescription: "Professional carpenter in Thane offering custom furniture, wardrobes, modular kitchens and complete carpentry solutions."
  },
  "dadar": {
    name: "Dadar",
    title: "Best Carpenter in Dadar Mumbai | Professional Carpentry Services",
    description: "Expert carpenter in Dadar for custom furniture and carpentry services.",
    keywords: "carpenter in dadar, carpenter dadar, carpentry services dadar",
    fullDescription: "Find the best carpenter in Dadar for all your custom furniture and professional carpentry needs."
  },
  "bandra": {
    name: "Bandra",
    title: "Best Carpenter in Bandra | Professional Carpentry Services",
    description: "Expert carpenter in Bandra for custom furniture and carpentry services.",
    keywords: "carpenter in bandra, carpenter bandra, carpentry services bandra",
    fullDescription: "Professional carpenter in Bandra specializing in custom furniture and home carpentry services."
  },
  "malad": {
    name: "Malad",
    title: "Best Carpenter in Malad | Professional Carpentry Services",
    description: "Expert carpenter in Malad for custom furniture and carpentry services.",
    keywords: "carpenter in malad, carpenter malad, carpentry services malad",
    fullDescription: "Find expert carpenter in Malad for custom furniture and professional carpentry services."
  },
  "kandivali": {
    name: "Kandivali",
    title: "Best Carpenter in Kandivali | Professional Carpentry Services",
    description: "Expert carpenter in Kandivali for custom furniture and carpentry services.",
    keywords: "carpenter in kandivali, carpenter kandivali, carpentry services kandivali",
    fullDescription: "Professional carpenter in Kandivali offering custom furniture and complete carpentry solutions."
  },
  "powai": {
    name: "Powai",
    title: "Best Carpenter in Powai | Professional Carpentry Services",
    description: "Expert carpenter in Powai for custom furniture and carpentry services.",
    keywords: "carpenter in powai, carpenter powai, carpentry services powai",
    fullDescription: "Find the best carpenter in Powai for custom furniture and professional carpentry services."
  },
  "mira-road": {
    name: "Mira Road",
    title: "Best Carpenter in Mira Road | Professional Carpentry Services",
    description: "Expert carpenter in Mira Road for custom furniture and modular kitchens.",
    keywords: "carpenter in mira road, carpenter mira road, carpentry services mira road",
    fullDescription: "Professional carpenter in Mira Road offering wardrobes, beds, TV units and complete furniture solutions."
  },
  "virar": {
    name: "Virar",
    title: "Best Carpenter in Virar | Professional Carpentry Services",
    description: "Top carpenter in Virar for custom furniture and home interiors.",
    keywords: "carpenter in virar, carpenter virar, carpentry services virar",
    fullDescription: "Get the best carpenter in Virar for modular kitchens, wardrobes, and custom furniture with free quote."
  },
  "goregaon": {
    name: "Goregaon",
    title: "Best Carpenter in Goregaon | Professional Carpentry Services",
    description: "Expert carpenter in Goregaon for all types of custom furniture.",
    keywords: "carpenter in goregaon, carpenter goregaon, carpentry services goregaon",
    fullDescription: "Professional carpenter services in Goregaon – wardrobes, kitchens, beds, and more."
  },
  "jogeshwari": {
    name: "Jogeshwari",
    title: "Best Carpenter in Jogeshwari | Professional Carpentry Services",
    description: "Reliable carpenter in Jogeshwari for furniture and interior work.",
    keywords: "carpenter in jogeshwari, carpenter jogeshwari",
    fullDescription: "Best carpenter in Jogeshwari offering affordable and high-quality carpentry services."
  }
};

// This generates all URLs at build time
export async function generateStaticParams() {
  return Object.keys(locations).map((location) => ({
    location,
  }));
}

// SEO Metadata
export function generateMetadata({ params }) {
  const location = locations[params.location];
  if (!location) return { title: "Carpenter Not Found" };

  return {
    title: location.title,
    description: location.description,
    keywords: location.keywords,
    openGraph: {
      title: location.title,
      description: location.description,
    },
  };
}

// Main Page Component
export default function LocationPage({ params }) {
  const location = locations[params.location];

  if (!location) {
    return (
      <div className="text-center py-20 text-white bg-black min-h-screen flex items-center justify-center text-4xl font-bold">
        Location not found
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-6 h-6 text-orange-400" />
          <span className="text-orange-400 font-bold">Carpenter Services</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black mb-6">
          Best <span className="text-orange-400">Carpenter in {location.name}</span>
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl">{location.fullDescription}</p>

        <div className="flex gap-4 flex-wrap">
          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-bold text-lg">
            Get Free Quote
          </button>
          <a
            href="tel:+918169541472"
            className="border-2 border-orange-500 px-8 py-3 rounded-lg font-bold text-lg flex items-center gap-2 hover:bg-orange-500/10 transition"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            Carpentry Services in <span className="text-orange-400">{location.name}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Custom Wardrobe", icon: "Box", desc: "Professional wardrobe carpenter services" },
              { title: "Modular Kitchen", icon: "Cooking Pot", desc: "Expert kitchen design and carpentry" },
              { title: "Beds & Furniture", icon: "Bed", desc: "Custom beds and furniture making" },
              { title: "TV Units & Tables", icon: "TV", desc: "Custom TV units and dining tables" },
            ].map((service, i) => (
              <div key={i} className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-orange-500 transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            Why Choose Our <span className="text-orange-400">Carpenter Services</span> in {location.name}?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Expert Carpenter", desc: "10+ years experience in professional carpentry" },
              { title: "Quality Work", desc: "High-quality materials and expert craftsmanship" },
              { title: "Free Quote", desc: "Free site visit and consultation for all projects" },
            ].map((point, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                  <p className="text-gray-400">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Ready to Hire a Carpenter in {location.name}?
          </h2>
          <p className="text-xl text-white mb-8">
            Call Vishwakarma Carpenter today for a free quote and site visit!
          </p>
          <a
            href="tel:+918169541472"
            className="inline-block bg-white text-orange-600 px-10 py-5 rounded-lg font-bold text-xl hover:bg-gray-100 transition"
          >
            <Phone className="inline w-6 h-6 mr-3" /> +91 81695 41472
          </a>
        </div>
      </section>
    </div>
  );
}