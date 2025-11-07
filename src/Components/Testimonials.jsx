'use client';
import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const reviews = [
    { name: 'Priya Sharma', area: 'Bandra West', text: 'Bedroom film jaisa ban gaya! Exactly like Pinterest.' },
    { name: 'Rohan Mehta', area: 'Juhu', text: 'Kitchen German fittings – wife khush! 21 days mein ready.' },
    { name: 'Neha Kapoor', area: 'Worli', text: 'Full home ek call mein! Lifetime guarantee, no tension.' }
  ];

  return (
    <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Orange Glow Background – Same as Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Subtle Grain */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className={`inline-flex items-center gap-3 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3 mb-6 backdrop-blur-sm transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Quote className="h-6 w-6 text-orange-400 animate-pulse" />
          <span className="text-orange-400 font-black tracking-wider text-sm uppercase">Real Mumbai Voices</span>
        </div>

        {/* Heading */}
        <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          1,200+ Mumbai
          <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
            Homes Transformed
          </span>
        </h2>

        {/* Stats */}
        <p className={`text-lg sm:text-xl text-gray-400 mb-16 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          21-day delivery • Lifetime Guarantee • 100% Mumbai Craftsmanship
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`
                group relative bg-gradient-to-br from-zinc-900/95 to-black/90 
                backdrop-blur-xl p-6 lg:p-8 rounded-3xl 
                border border-orange-500/30 
                hover:border-orange-500/70 
                transition-all duration-500 
                hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30
                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl -z-10"></div>

              {/* Stars */}
              <div className="flex justify-center mb-4 gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 lg:h-6 lg:w-6 text-orange-400 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-200 italic mb-6 text-sm lg:text-base leading-relaxed relative z-10">
                "{r.text}"
              </p>

              {/* Avatar + Name */}
              <div className="flex items-center justify-center gap-4 relative z-10">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50">
                  <span className="text-white font-black text-lg lg:text-xl">{r.name[0]}</span>
                </div>
                <div className="text-left">
                  <div className="font-black text-white text-sm lg:text-base">{r.name}</div>
                  <div className="text-orange-400 text-xs lg:text-sm font-bold">{r.area}, Mumbai</div>
                </div>
              </div>

              {/* REAL Badge */}
              <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-full shadow-2xl text-xs font-black">
                  REAL
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}