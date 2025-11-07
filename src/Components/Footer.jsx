'use client';
import React from 'react';
import { Hammer, Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 via-black to-slate-900 relative overflow-hidden">
      {/* PREMIUM ANIMATED BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-green-500/15 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-green-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* BRAND - Enhanced & Updated */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2 -ml-4"> {/* Moved further left with -ml-4 and reduced gap */}
              <div className="p-3 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl shadow-lg">
                <Hammer className="h-6 w-6 text-black" />
              </div>
              <span className="text-2xl font-black text-green-500 tracking-tight">
                VishwakarmaCarpenter
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-light">
              15 saal ton mumbai de 1200+ ghar sajaye ne. Premium quality craftsmanship with <span className="text-green-400 font-semibold">Lifetime Guarantee</span> on every project.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'Youtube' }
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="p-3 bg-white/5 border border-green-500/20 rounded-lg hover:bg-green-500/20 hover:border-green-400/60 hover:scale-110 transition-all duration-300 group/social"
                >
                  <social.icon className="h-4 w-4 text-green-300 group-hover/social:text-green-100" />
                </a>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-black mb-6 text-sm uppercase tracking-widest">Services</h3>
            <ul className="space-y-3">
              {['Free 3D Design', 'Site Visit', '50+ Reviews', 'WhatsApp Catalog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-green-300 transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-white font-black mb-6 text-sm uppercase tracking-widest">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group cursor-pointer">
                <Phone className="h-4 w-4 text-green-400 mt-1 group-hover:scale-125 transition-transform" />
                <div className="flex flex-col text-sm">
                  <span className="text-gray-300 hover:text-green-300 transition-colors">+91 8983481025</span>
                  <span className="text-gray-400 text-xs">or</span>
                  <span className="text-gray-300 hover:text-green-300 transition-colors">+91 8169541472</span>
                </div>
              </div>
              <div className="flex items-start gap-3 group cursor-pointer">
                <Mail className="h-4 w-4 text-green-400 mt-1 group-hover:scale-125 transition-transform" />
                <span className="text-gray-300 hover:text-green-300 transition-colors text-sm">Dummyhaiabhi@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 group cursor-pointer">
                <MapPin className="h-4 w-4 text-green-400 mt-1 group-hover:scale-125 transition-transform" />
                <span className="text-gray-300 hover:text-green-300 transition-colors text-sm">Vasai, Mumbai</span>
              </div>
            </div>
          </div>

          {/* CTA CARD */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-green-500/30 group-hover:border-green-400/60 rounded-3xl p-6 transition-all duration-300">
              <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="text-white font-black mb-2 text-sm uppercase tracking-widest">Quick Quote</h3>
              <p className="text-gray-400 text-xs mb-4">Free 3D design in 2 hours</p>
              <button className="w-full bg-gradient-to-r from-green-500 to-green-500 hover:from-green-400 hover:to-green-600 text-black font-black py-3 rounded-xl shadow-xl hover:shadow-green-500/40 hover:scale-105 transition-all duration-300 text-xs uppercase tracking-wider">
                WhatsApp: 8169541472
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent mb-8"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-xs">
            © 2025 Himanshu Vishwakarma • Made in Mumbai with <span className="text-green-400 font-bold">Passion</span>
          </p>
          <p className="text-gray-600 text-xs">Premium Carpentry | Lifetime Quality Guarantee</p>
        </div>
      </div>
    </footer>
  );
}