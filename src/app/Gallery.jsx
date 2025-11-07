// components/Gallery.jsx
'use client';
import React from 'react';
import { Hammer, Sparkles, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Gallery() {
  const router = useRouter();

  const projects = [
    { id: 'dining',   label: 'Royal Oak Dining',     img: 'https://cdn.pixabay.com/photo/2017/03/28/12/10/chair-2181957_1280.jpg' },
    { id: 'mandir',   label: 'Sheesham Mandir',      img: 'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569318_1280.jpg' },
    { id: 'center',   label: 'Marble Center Table',  img: 'https://cdn.pixabay.com/photo/2017/03/28/12/06/chairs-2181942_1280.jpg' },
    { id: 'bed',      label: 'Teak King Bed',        img: 'https://cdn.pixabay.com/photo/2016/11/19/13/12/bed-1839179_1280.jpg' },
    { id: 'sofa',     label: 'L-Shape Sofa Set',     img: 'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569318_1280.jpg' },
    { id: 'kitchen',  label: 'Modular Kitchen',      img: 'https://cdn.pixabay.com/photo/2017/03/28/12/10/chair-2181957_1280.jpg' }
  ];

  return (
    <section id="gallery" className="py-24 bg-black relative overflow-hidden">
      {/* SAME ORANGE GLOW AS YOUR ORIGINAL */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-5 py-3 mb-5">
            <Sparkles className="h-5 w-5 text-orange-400 animate-pulse" />
            <span className="text-orange-400 font-bold tracking-wide">OUR MASTERWORKS</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
            Built in
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              Punjab Homes
            </span>
          </h2>
          <p className="text-xl text-gray-400">1200+ families • 21-day delivery • Lifetime wood guarantee</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => router.push(`/gallery/${p.id}`)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img src={p.img} alt={p.label} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-orange-400 fill-current" />
                  <span className="text-orange-400 font-bold text-sm">4.9</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-1">{p.label}</h3>
                <p className="text-orange-300 text-sm font-bold">Click for 50+ HD Photos</p>
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce">
                <Hammer className="h-6 w-6" />
              </div>

              <div className="absolute inset-0 border-4 border-transparent rounded-3xl group-hover:border-orange-500/60 transition-all duration-500 pointer-events-none"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 to-orange-600/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>

     
      </div>
    </section>
  );
}