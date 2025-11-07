'use client';
import React from 'react';
import { ChevronRight, Zap, Hammer } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: 'Chair', title: 'Custom Furniture', desc: 'Bespoke pieces tailored to your unique style and space.' },
    { icon: 'Home', title: 'Full Home Makeover', desc: 'Complete transformations that breathe new life into your home.' },
    { icon: 'Door', title: 'Main Doors', desc: 'Teak & Sheesham doors that make first impression royal.' },
    { icon: 'Trees', title: 'Mandir & Pooja Units', desc: 'Divine woodwork blessed with Punjab craftsmanship.' },
    { icon: 'Package', title: 'Modular Kitchen', desc: 'German fittings + 10-year warranty + 45-day install.' },
    { icon: 'Wrench', title: 'Old Furniture Fix', desc: 'We bring your grandpa’s chair back to life.' }
  ];

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* ORANGE GLOW BACKGROUND – SAME AS HERO */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING – EXACT HERO STYLE */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-5 py-3 mb-5">
            <Zap className="h-5 w-5 text-orange-400 animate-pulse" />
            <span className="text-orange-400 font-bold tracking-wide">WHAT WE BUILD FOR YOU</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
            One Call,
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              Dream Home Ready
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            21-day delivery • Free 3D design • Lifetime wood guarantee
          </p>
        </div>

        {/* CATCHY CARDS – ORANGE ACCENTS */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-orange-500/20 
                         hover:border-orange-500/60 hover:shadow-2xl hover:shadow-orange-500/30 
                         transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              {/* Floating hammer icon */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3 rounded-2xl shadow-xl animate-bounce">
                <Hammer className="h-6 w-6" />
              </div>

              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative">
                {/* Emoji + Title */}
                <div className="text-7xl mb-4">{s.icon}</div>
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  {s.desc}
                </p>

                {/* CTA */}
                <div className="flex items-center text-orange-400 font-bold group-hover:translate-x-3 transition-transform">
                  <span className="text-lg">Get Free Quote</span>
                  <ChevronRight className="h-6 w-6 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BIG BOTTOM CTA */}
      
      </div>
    </section>
  );
}