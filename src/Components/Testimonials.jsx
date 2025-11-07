'use client';
import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    { name: 'Jaspreet Kaur', area: 'Model Town', text: 'Bedroom film jaisa ban gaya!' },
    { name: 'Gurmeet Singh', area: 'Civil Lines', text: 'Kitchen German fittings – wife khush!' },
    { name: 'Amandeep Maan', area: 'Green Avenue', text: 'Full home ek call mein!' }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* ORANGE GLOW – EXACT SAME AS CONTACT */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/50 via-black to-amber-950/30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
          <Quote className="h-6 w-6 text-orange-400 animate-pulse" />
          <span className="text-orange-400 font-black tracking-wider">SACHI GAL</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black mb-4">
          1200+ Pind
          <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
            Wale Khush
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-zinc-900/95 to-black/90 backdrop-blur-xl p-8 rounded-3xl border border-orange-500/30 hover:border-orange-500/70 transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-orange-500/30"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Orange Shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>

              <div className="flex mb-4 justify-center">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-6 w-6 text-orange-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-200 italic mb-6 relative z-10">"{r.text}"</p>

              <div className="flex items-center justify-center gap-4 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50 badge-float">
                  <span className="text-white font-black text-xl">{r.name[0]}</span>
                </div>
                <div>
                  <div className="font-black text-white">{r.name}</div>
                  <div className="text-orange-400 text-sm font-bold">{r.area}</div>
                </div>
              </div>

              {/* Floating Hammer Badge */}
              <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-2xl shadow-2xl">
                  <span className="text-xs font-black">REAL</span>
                </div>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
}