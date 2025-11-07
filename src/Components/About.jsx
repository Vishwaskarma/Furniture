'use client';
import React, { useState, useEffect } from 'react';
import { Award, Zap, Star, Shield, Sparkles } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const element = document.getElementById('about');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const section = document.getElementById('about');
      if (section) {
        const rect = section.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = document.getElementById('about');
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const stats = [
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '500+', label: 'Projects Done', icon: Zap },
    { number: '98%', label: 'Happy Clients', icon: Star },
    { number: '50+', label: 'Awards Won', icon: Shield }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/50 via-black to-green-950/30"></div>
      
      {/* Cursor follow spotlight effect */}
      <div 
        className="absolute w-96 h-96 rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 25%, rgba(16, 185, 129, 0.03) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      ></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGIzODEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoMnYyaC0yem0wLTEwaDJ2MmgtMnptMCAxMGgydjJoLTJ6bTEwIDBoMnYyaC0yem0tMTAgMTBoMnYyaC0yem0xMCAwaDJ2MmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 animate-pulse"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              {/* Glow effect on hover */}
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/30 via-green-500/20 to-emerald-600/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"></div>
              
              {/* Main card with glass effect */}
              <div className="relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-xl rounded-3xl p-12 border border-emerald-500/30 group-hover:border-emerald-400/60 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-emerald-500/50">
                {/* Animated shine effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
                
                <Award className="h-56 w-56 mx-auto text-emerald-400 group-hover:text-emerald-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]" />
                
                {/* Particle effects */}
                <div className="absolute top-10 right-10 w-3 h-3 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                <div className="absolute bottom-10 left-10 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{animationDelay: '0.3s'}}></div>
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Badge with green theme */}
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-5 py-2 backdrop-blur-sm hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
              <Sparkles className="h-4 w-4 text-emerald-400 group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-emerald-400 text-sm font-semibold tracking-wide">About Us</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Excellence in Every
              <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent animate-gradient">
                Detail
              </span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300">
              WoodCraft isn't just about creating furniture - it's about crafting experiences. Our master artisans blend traditional techniques with cutting-edge design to deliver pieces that tell your story.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300">
              From sustainably sourced materials to precision craftsmanship, every project reflects our commitment to quality and your vision.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-gray-900/90 via-black to-gray-900/90 backdrop-blur-xl p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-400/60 transition-all duration-500 hover:scale-110 cursor-pointer overflow-hidden"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-green-500/0 to-emerald-500/0 group-hover:from-emerald-500/20 group-hover:via-green-500/10 group-hover:to-emerald-600/20 transition-all duration-500"></div>
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>
                    
                    {/* Glowing border effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl opacity-0 group-hover:opacity-20 blur group-hover:animate-pulse"></div>
                    
                    <Icon className="relative h-8 w-8 text-emerald-400 mb-3 group-hover:text-emerald-300 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                    <div className="relative">
                      <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                      <div className="text-gray-400 group-hover:text-gray-300 text-sm mt-1 transition-colors duration-300">{stat.label}</div>
                    </div>
                    
                    {/* Corner accents */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{animationDelay: '0.2s'}}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}