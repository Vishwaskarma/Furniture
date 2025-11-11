// app/gallery/[id]/page.jsx
'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Home, Star } from 'lucide-react';

// Your actual gallery data with proper image paths
const galleryData = {
  dining: {
    title: "Royal Oak Dining",
    images: [
      '/gallaryimg/diminigtable.jpg',
    ],
    description: "Handcrafted royal oak dining table with intricate details",
    rating: "4.9"
  },
  mandir: {
    title: "Sheesham Mandir",
    images: [
      '/gallaryimg/mandir.jpg',
    ],
    description: "Traditional sheesham wood mandir with brass fittings",
    rating: "4.8"
  },
  center: {
    title: "Wood Center Table",
    images: [
      '/gallaryimg/center_table.jpg',
    ],
    description: "Elegant wooden center table with glass top",
    rating: "4.9"
  },
  bed: {
    title: "Teak King Bed",
    images: [
      '/gallaryimg/bed.jpg',
    ],
    description: "Solid teak king size bed with storage",
    rating: "5.0"
  },
  sofa: {
    title: "L-Shape Sofa Set",
    images: [
      '/gallaryimg/sofa.jpg',
    ],
    description: "Modern L-shaped sofa set with premium upholstery",
    rating: "4.7"
  },
  kitchen: {
    title: "Modular Kitchen",
    images: [
      '/gallaryimg/kitchen.jpg',
    ],
    description: "Custom modular kitchen with smart storage",
    rating: "4.9"
  }
};

export default function GalleryDetail() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);

  const projectId = params.id;
  const project = galleryData[projectId];

  // Redirect if project not found
  useEffect(() => {
    if (!project) {
      router.push('/');
    }
  }, [project, router]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Project not found</div>
      </div>
    );
  }

  const openImage = (img) => {
    setSelectedImage(img);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    setImageError(false);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = project.images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % project.images.length;
    setSelectedImage(project.images[nextIndex]);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    setImageError(false);
  };

  const prevImage = () => {
    const currentIndex = project.images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + project.images.length) % project.images.length;
    setSelectedImage(project.images[prevIndex]);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    setImageError(false);
  };

  const handleWheel = (e) => {
    if (selectedImage) {
      e.preventDefault();
      const newZoom = zoom + (e.deltaY > 0 ? -0.1 : 0.1);
      setZoom(Math.max(0.5, Math.min(3, newZoom)));
    }
  };

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - startPosition.x,
        y: e.clientY - startPosition.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      switch (e.key) {
        case 'Escape':
          closeImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case '+':
        case '=':
          setZoom(prev => Math.min(3, prev + 0.2));
          break;
        case '-':
          setZoom(prev => Math.max(0.5, prev - 0.2));
          break;
        case '0':
          resetZoom();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, zoom]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-xl border-b border-orange-500/30 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors bg-orange-500/10 px-4 py-2 rounded-lg border border-orange-500/30"
          >
            <ChevronLeft className="h-5 w-5" />
            Back to Home
          </button>
          
          <h1 className="text-xl font-bold text-orange-400 hidden sm:block">{project.title}</h1>
          
          <button
            onClick={() => router.push('/#gallery')}
            className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors bg-orange-500/10 px-4 py-2 rounded-lg border border-orange-500/30"
          >
            <Home className="h-5 w-5" />
            Gallery
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-8 px-4 sm:px-6">
        {/* Project Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-6 w-6 text-orange-400 fill-current" />
            <span className="text-orange-400 font-bold text-lg">{project.rating}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            {project.description}
          </p>
          <p className="text-orange-400 text-lg font-semibold">
            {project.images.length} High Quality Photo{project.images.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {project.images.map((img, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-gray-900 aspect-[4/3] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
              onClick={() => openImage(img)}
            >
              <img
                src={img}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${img}`);
                  e.target.style.display = 'none';
                }}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-center w-full">
                  <p className="text-orange-400 font-bold text-lg mb-2">Click to View</p>
                  <p className="text-white text-sm">Zoom & Explore Details</p>
                </div>
              </div>
              {/* Image Number Badge */}
              <div className="absolute top-4 right-4 bg-black/70 text-orange-400 px-3 py-1 rounded-full text-sm font-bold border border-orange-500/50">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button 
            onClick={() => window.open('https://wa.me/918169541472?text=Hi%2C%20I%20saw%20your%20' + encodeURIComponent(project.title) + '%20and%20want%20a%20quote', '_blank')}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-orange-500/30 border-2 border-orange-300"
          >
            Get Quote on WhatsApp
          </button>
        </div>
      </main>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeImage}
        >
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute -top-4 -right-4 z-10 bg-black/80 hover:bg-black text-white p-3 rounded-full transition-all duration-300 border border-orange-500/50 hover:border-orange-400"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-3 rounded-full transition-all duration-300 border border-orange-500/50 hover:border-orange-400"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-3 rounded-full transition-all duration-300 border border-orange-500/50 hover:border-orange-400"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image Container */}
            <div
              className="relative w-full h-full max-h-[80vh] overflow-hidden rounded-2xl bg-gray-900 flex items-center justify-center"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {imageError ? (
                <div className="text-center text-gray-500 p-8">
                  <p className="text-lg">Failed to load image</p>
                  <button 
                    onClick={() => setImageError(false)}
                    className="text-orange-400 mt-2"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <img
                  src={selectedImage}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                    transition: isDragging ? 'none' : 'transform 0.2s ease-out',
                    cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                  }}
                  draggable={false}
                  onError={() => setImageError(true)}
                />
              )}
            </div>

            {/* Controls Bar */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4 bg-black/80 backdrop-blur-sm rounded-2xl p-4 border border-orange-500/30">
              {/* Zoom Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoom(Math.max(0.5, zoom - 0.2))}
                  className="text-white hover:text-orange-400 transition-colors p-2 disabled:opacity-50"
                  disabled={zoom <= 0.5}
                >
                  <ZoomOut className="h-5 w-5" />
                </button>
                
                <span className="text-white text-sm min-w-12 text-center font-mono">
                  {Math.round(zoom * 100)}%
                </span>
                
                <button
                  onClick={() => setZoom(Math.min(3, zoom + 0.2))}
                  className="text-white hover:text-orange-400 transition-colors p-2 disabled:opacity-50"
                  disabled={zoom >= 3}
                >
                  <ZoomIn className="h-5 w-5" />
                </button>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetZoom}
                className="text-white hover:text-orange-400 transition-colors p-2 ml-2 border-l border-orange-500/30 pl-4"
              >
                <RotateCcw className="h-5 w-5" />
              </button>

              {/* Image Counter */}
              {project.images.length > 1 && (
                <div className="text-white text-sm font-mono bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/50 ml-4">
                  {project.images.indexOf(selectedImage) + 1} / {project.images.length}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}