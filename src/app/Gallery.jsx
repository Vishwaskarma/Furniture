'use client';
import React, { useState, useEffect } from 'react';
import { Hammer, Sparkles, Star, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Gallery() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

const projects = [
  { id: 'dining',   label: 'Royal Oak Dining',     img: '/gallaryImg/dining.jpg' },
  { id: 'mandir',   label: 'Sheesham Mandir',      img: '/gallaryImg/mandir.jpg' },
  { id: 'center',   label: 'Wood Center Table',    img: '/gallaryImg/center_table.jpg' },
  { id: 'bed',      label: 'Teak King Bed',        img: '/gallaryImg/bed.jpg' },
  { id: 'sofa',     label: 'L-Shape Sofa Set',     img: '/gallaryImg/sofa.jpg' },
  { id: 'kitchen',  label: 'Modular Kitchen',      img: '/gallaryImg/kitchen.jpg' }
];
  return (
    <section id="gallery" className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Animated Orange Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-5 py-3 mb-5 backdrop-blur-sm">
            <Sparkles className="h-5 w-5 text-orange-400 animate-pulse" />
            <span className="text-orange-400 font-bold tracking-wide text-sm uppercase">Our Masterworks</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
            Built in
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              Mumbai Homes
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">1,200+ families • 21-day delivery • Lifetime Guarantee</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <div
              key={p.id}
              onClick={() => router.push(`/gallery/${p.id}`)}
              className={`
                group relative rounded-3xl overflow-hidden cursor-pointer
                transition-all duration-700 transform
                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20
              `}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.label}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-orange-400 fill-current" />
                  <span className="text-orange-400 font-bold text-sm">4.9</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-1">{p.label}</h3>
                <p className="text-orange-300 text-sm font-bold flex items-center gap-1">
                  Click for 50+ HD Photos
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </p>
              </div>

              {/* Hammer Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce">
                <Hammer className="h-6 w-6" />
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-orange-500/60 transition-all duration-500 pointer-events-none"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 to-orange-600/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}