'use client'
import React, { useState, useEffect } from 'react';
import { ChevronRight, Hammer, Sparkles, ChevronLeft, Star } from 'lucide-react';

// Sample project data
const projects = [
  {
    id: 1,
    title: "Modern Oak Dining Table",
    description: "Handcrafted solid oak table with epoxy river feature",
    image: "/api/placeholder/600/400",
    category: "Furniture"
  },
  {
    id: 2,
    title: "Custom Walnut Cabinetry",
    description: "Built-in wall unit with hidden storage compartments",
    image: "/api/placeholder/600/400",
    category: "Cabinetry"
  },
  {
    id: 3,
    title: "Live Edge Conference Table",
    description: "Executive boardroom table with steel base",
    image: "/api/placeholder/600/400",
    category: "Commercial"
  },
  {
    id: 4,
    title: "Artisan Bookshelf",
    description: "Floating shelf system with integrated lighting",
    image: "/api/placeholder/600/400",
    category: "Storage"
  }
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="home" className="relative pt-20 min-h-screen bg-black flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-orange-400 animate-pulse" />
              <span className="text-orange-400 text-sm font-semibold tracking-wide">Premium Woodworking Studio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Crafting
              <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent mt-2">
                Masterpieces
              </span>
              <span className="block text-white">in Wood</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Transform your space with custom woodwork that blends artistry, precision, and innovation. Over 15 years of excellence in every grain.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Start Your Project</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <button className="relative bg-zinc-900/50 backdrop-blur-sm text-orange-400 px-8 py-4 rounded-full font-semibold border-2 border-orange-500/30 hover:border-orange-500 hover:bg-zinc-900 transition-all duration-300 group">
                <span className="flex items-center space-x-2">
                  <span>View Gallery</span>
                  <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-800">
              <div>
                <div className="text-3xl font-bold text-orange-400">500+</div>
                <div className="text-gray-500 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">15+</div>
                <div className="text-gray-500 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">98%</div>
                <div className="text-gray-500 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Slider Section */}
          <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              {/* Main slider container */}
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-6 border border-orange-500/20 backdrop-blur-sm overflow-hidden">
                {/* Slider header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-orange-400 fill-current" />
                    <span className="text-white font-semibold">Featured Projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-400 text-sm font-medium">
                      {String(currentSlide + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Slider content */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-800/50">
                  {/* Project image */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/10 flex items-center justify-center transition-opacity duration-500"
                    style={{
                      backgroundImage: `url(${projects[currentSlide].image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-black/40"></div>
                    <Hammer className="h-20 w-20 text-orange-400 opacity-80" />
                  </div>

                  {/* Project info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                          {projects[currentSlide].category}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {projects[currentSlide].title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {projects[currentSlide].description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation arrows */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${((currentSlide + 1) / projects.length) * 100}%` 
                      }}
                    />
                  </div>
                </div>

                {/* Slide indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-orange-500 w-6' 
                          : 'bg-gray-600 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 bg-zinc-800/50 hover:bg-zinc-700/50 backdrop-blur-sm border border-orange-500/30 hover:border-orange-500 text-orange-400 py-3 rounded-xl font-semibold transition-all duration-300 group">
                  <span className="flex items-center justify-center space-x-2">
                    <span>View Project Details</span>
                    <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                  </span>
                </button>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-orange-500/50 animate-bounce z-10">
                15+ Years
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}