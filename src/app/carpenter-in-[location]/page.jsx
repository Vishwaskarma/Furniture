// app/carpenter-in-[location]/page.jsx
// This template creates pages for each location: nallasopara, vasai-virar, andheri, borivali, etc.

'use client';
import React from 'react';
import { MapPin, Phone, Star } from 'lucide-react';

const locations = {
  nallasopara: {
    name: "Nallasopara",
    title: "Best Carpenter in Nallasopara | Professional Carpentry Services",
    description: "Expert carpenter in Nallasopara for custom furniture, wardrobes, modular kitchens. Professional carpentry services near you.",
    keywords: "carpenter in nallasopara, carpenter nallasopara, carpentry services nallasopara",
    fullDescription: "Looking for the best carpenter in Nallasopara? Vishwakarma Carpenter offers professional carpentry services including custom wardrobes, beds, modular kitchens, TV units, and dining tables. Free site visit and quote!"
  },
  "vasai-virar": {
    name: "Vasai Virar",
    title: "Best Carpenter in Vasai Virar | Professional Carpentry Services",
    description: "Expert carpenter in Vasai Virar for custom furniture. Professional carpentry services. Free quote!",
    keywords: "carpenter in vasai virar, carpenter vasai, carpentry services vasai virar",
    fullDescription: "Find the best carpenter in Vasai Virar with Vishwakarma Carpenter. We provide professional carpentry services for all your furniture needs."
  },
  andheri: {
    name: "Andheri",
    title: "Best Carpenter in Andheri Mumbai | Professional Carpentry Services",
    description: "Expert carpenter in Andheri for custom furniture and carpentry services.",
    keywords: "carpenter in andheri, carpenter andheri, carpentry services andheri",
    fullDescription: "Professional carpenter in Andheri offering custom furniture, wardrobes, modular kitchens and all carpentry services."
  },
  borivali: {
    name: "Borivali",
    title: "Best Carpenter in Borivali | Professional Carpentry Services",
    description: "Expert carpenter in Borivali for custom furniture and carpentry services.",
    keywords: "carpenter in borivali, carpenter borivali, carpentry services borivali",
    fullDescription: "Find professional carpenter in Borivali for all your carpentry and custom furniture needs."
  }
};

export async function generateStaticParams() {
  return Object.keys(locations).map((location) => ({
    location: location,
  }));
}

export function generateMetadata({ params }) {
  const location = locations[params.location];
  if (!location) return {};

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

export default function LocationPage({ params }) {
  const location = locations[params.location];

  if (!location) {
    return <div className="text-center py-20 text-white">Location not found</div>;
  }

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-6 h-6 text-orange-400" />
          <span className="text-orange-400 font-bold">Carpenter Services</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black mb-6">
          Best <span className="text-orange-400">Carpenter in {location.name}</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          {location.fullDescription}
        </p>

        <div className="flex gap-4 flex-wrap">
          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-bold">
            Get Free Quote
          </button>
          <a
            href="tel:+918169541472"
            className="border-2 border-orange-500 px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-orange-500/10"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
        </div>
      </section>

      {/* Services in this location */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            Carpentry Services in <span className="text-orange-400">{location.name}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Custom Wardrobe", icon: "📦", desc: "Professional wardrobe carpenter services" },
              { title: "Modular Kitchen", icon: "🍳", desc: "Expert kitchen design and carpentry" },
              { title: "Beds & Furniture", icon: "🛏️", desc: "Custom beds and furniture making" },
              { title: "TV Units & Tables", icon: "📺", desc: "Custom TV units and dining tables" }
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
              {
                title: "Expert Carpenter",
                desc: "10+ years experience in professional carpentry"
              },
              {
                title: "Quality Work",
                desc: "High-quality materials and expert craftsmanship"
              },
              {
                title: "Free Quote",
                desc: "Free site visit and consultation for all projects"
              }
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

      {/* CTA */}
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
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100"
          >
            <Phone className="inline w-5 h-5 mr-2" /> +91 81695 41472
          </a>
        </div>
      </section>
    </div>
  );
}