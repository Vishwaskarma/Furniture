'use client';
import React from 'react';
import { Hammer, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* ROYAL GOLD GLOW – same as Hero */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Hammer className="h-10 w-10 text-gold-400" />
              <span className="text-3xl font-black bg-gradient-to-r from-gold-400 to-amber-400 bg-clip-text text-transparent">
                JANTA FURNITURE
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              15 saal ton Punjab de 1200+ ghar sajaye ne.  
              <span className="text-gold-400 font-bold">Lifetime guarantee</span>
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-3 bg-gold-500/10 border border-gold-500/30 rounded-xl hover:bg-gold-500/20 transition-all">
                <Facebook className="h-5 w-5 text-gold-400" />
              </a>
              <a href="#" className="p-3 bg-gold-500/10 border border-gold-500/30 rounded-xl hover:bg-gold-500/20 transition-all">
                <Instagram className="h-5 w-5 text-gold-400" />
              </a>
              <a href="#" className="p-3 bg-gold-500/10 border border-gold-500/30 rounded-xl hover:bg-gold-500/20 transition-all">
                <Youtube className="h-5 w-5 text-gold-400" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-black mb-5 text-lg">Jaldi Jao</h3>
            <ul className="space-y-3">
              {['Free 3D Design', 'Site Visit Book', '50+ Video Reviews', 'WhatsApp Catalog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-black mb-5 text-lg">Gall Baat</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold-400" />
                <span className="text-gray-300">janta@jantafurniture.in</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold-400" />
                <span className="text-gray-300">Main Market, Jalandhar</span>
              </div>
            </div>
          </div>

          {/* WHATSAPP CTA */}
          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-gold-500/10 to-amber-500/5 backdrop-blur-xl border border-gold-500/30 rounded-3xl p-6 hover:border-gold-400/60 transition-all">
              <h3 className="text-white font-black mb-3">Free Design in 2 Hours</h3>
              <p className="text-gray-400 text-sm mb-4">Send room photo → get 3D in 2 hours</p>
              <button className="w-full bg-gradient-to-r from-gold-500 to-amber-500 hover:from-amber-500 hover:to-orange-500 text-black font-black py-4 rounded-2xl shadow-2xl hover:shadow-gold-500/50 hover:scale-105 transition-all duration-300">
                WhatsApp Now
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-8 border-t border-gold-500/20 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Janta Furniture • Made in Punjab with 
            <span className="text-gold-400 font-bold"> Passion & German Machines</span>
          </p>
        </div>
      </div>
    </footer>
  );
}