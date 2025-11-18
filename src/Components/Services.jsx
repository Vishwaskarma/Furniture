'use client';
import React from 'react';
import { ChevronRight, Zap, Hammer, Phone } from 'lucide-react';

export default function Services() {
  const services = [
    { 
      icon: '🛋️', 
      title: 'Custom Furniture Carpenter', 
      desc: 'Professional custom furniture carpenter for bespoke pieces tailored to your unique style and space.',
      keyword: 'custom furniture carpenter',
      details: 'Expert wood carpenter specializing in handcrafted custom furniture'
    },
    { 
      icon: '🏠', 
      title: 'Full Home Makeover', 
      desc: 'Complete carpentry solutions and home transformations that breathe new life into your space.',
      keyword: 'home carpenter services',
      details: 'Professional carpenter for complete home renovation and interior work'
    },
    { 
      icon: '🚪', 
      title: 'Main Doors & Teak Doors', 
      desc: 'Premium Teak & Sheesham doors crafted by expert carpenter for royal first impressions.',
      keyword: 'wooden door carpenter',
      details: 'Skilled carpenter for custom wooden doors and entrance design'
    },
    { 
      icon: '🙏', 
      title: 'Mandir & Pooja Units', 
      desc: 'Divine woodwork blessed with expert carpentry and traditional Punjab craftsmanship.',
      keyword: 'mandir carpenter',
      details: 'Specialized carpenter for custom mandir and pooja room design'
    },
    { 
      icon: '🍳', 
      title: 'Modular Kitchen Carpenter', 
      desc: 'Professional modular kitchen carpenter with German fittings + 10-year warranty + 45-day installation.',
      keyword: 'modular kitchen carpenter',
      details: 'Expert kitchen carpenter specializing in modular kitchen design and installation'
    },
    { 
      icon: '🔧', 
      title: 'Furniture Restoration', 
      desc: 'Professional carpenter specializing in old furniture repair and restoration - bringing vintage pieces back to life.',
      keyword: 'furniture repair carpenter',
      details: 'Experienced carpenter for furniture restoration and antique repair'
    }
  ];

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* ORANGE GLOW BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING WITH SEO KEYWORDS */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-5 py-3 mb-5">
            <Zap className="h-5 w-5 text-orange-400 animate-pulse" />
            <span className="text-orange-400 font-bold tracking-wide">PROFESSIONAL CARPENTER SERVICES</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
            One Call,
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              Expert Carpenter Ready
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional Carpenter • Premium Materials • Lifetime Guarantee • Best Carpenter in Mumbai
          </p>
        </div>

        {/* SERVICE CARDS WITH CARPENTER KEYWORDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                {/* Icon + Title */}
                <div className="text-7xl mb-4">{s.icon}</div>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {s.title}
                </h3>
                
                {/* SEO Keyword Badge */}
                <div className="inline-block bg-orange-500/20 text-orange-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {s.keyword}
                </div>

                <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                  {s.desc}
                </p>

                {/* Additional service details for SEO */}
                <p className="text-gray-500 text-xs mb-4 border-t border-gray-700 pt-3">
                  {s.details}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-orange-400 font-bold text-sm group-hover:text-orange-300 transition-colors">
                  Get Quote <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FEATURED CARPENTER KEYWORDS SECTION */}
        <div className="bg-gradient-to-r from-orange-600/10 to-amber-600/10 border border-orange-500/30 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">🔍 Our Carpentry Expertise</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold text-lg">✓</span>
              <div>
                <p className="text-white font-bold">Best Carpenter in Mumbai</p>
                <p className="text-gray-400 text-sm">Professional carpenter services with 10+ years experience</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold text-lg">✓</span>
              <div>
                <p className="text-white font-bold">Carpenter Near Me</p>
                <p className="text-gray-400 text-sm">Find expert carpenter in Nallasopara, Vasai Virar, and all of Mumbai</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold text-lg">✓</span>
              <div>
                <p className="text-white font-bold">Custom Furniture Carpenter</p>
                <p className="text-gray-400 text-sm">Specialized carpenter for custom wardrobes, beds, and furniture</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold text-lg">✓</span>
              <div>
                <p className="text-white font-bold">Professional Carpentry Services</p>
                <p className="text-gray-400 text-sm">Experienced carpenter offering complete home carpentry solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* BIG BOTTOM CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="group relative bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-black py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-orange-500/50 flex items-center justify-center gap-2">
              <Hammer className="h-6 w-6" />
              Call Best Carpenter Now
              <span className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <a
              href="tel:+918169541472"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl border border-white/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="h-6 w-6" />
              +91 81695 41472
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            ✓ Free Site Visit • ✓ Free Quote • ✓ Professional Carpenter • ✓ Best Rates
          </p>
        </div>

        {/* SEO TRUST BADGES */}
        <div className="mt-12 pt-8 border-t border-gray-800 grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-black text-orange-400 mb-2">150+</div>
            <p className="text-gray-400 text-sm">Happy Customers</p>
          </div>
          <div>
            <div className="text-3xl font-black text-orange-400 mb-2">10+</div>
            <p className="text-gray-400 text-sm">Years Carpenter Experience</p>
          </div>
          <div>
            <div className="text-3xl font-black text-orange-400 mb-2">4.9★</div>
            <p className="text-gray-400 text-sm">Professional Carpenter Rating</p>
          </div>
          <div>
            <div className="text-3xl font-black text-orange-400 mb-2">100%</div>
            <p className="text-gray-400 text-sm">Quality Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
}