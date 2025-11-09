'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Sparkles, ChevronLeft, Star, Mail, X, Phone, User, MessageSquare, Send, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const projects = [
  { id: 1, title: 'Modern Bedroom Setup', description: 'Complete bedroom furniture with AC installation', image: '/sliderImages/img1.jpeg', category: 'Bedroom' },
  { id: 2, title: 'Custom Kitchen Cabinets', description: 'Full modular kitchen with premium finish', image: '/sliderImages/img2.jpeg', category: 'Kitchen' },
  { id: 3, title: 'Living Room Furniture', description: 'Elegant living room setup with storage', image: '/sliderImages/img3.jpeg', category: 'Living Room' },
  { id: 4, title: 'Wardrobe Design', description: 'Spacious wardrobe with modern aesthetics', image: '/sliderImages/img4.jpeg', category: 'Storage' },
  { id: 5, title: 'TV Unit & Storage', description: 'Wall-mounted TV unit with drawers', image: '/sliderImages/img5.jpeg', category: 'Entertainment' },
  { id: 6, title: 'Study Table Design', description: 'Functional workspace with bookshelf', image: '/sliderImages/img6.jpeg', category: 'Office' },
  { id: 7, title: 'Dining Area Setup', description: 'Complete dining furniture arrangement', image: '/sliderImages/img7.jpeg', category: 'Dining' },
  { id: 8, title: 'Kids Room Furniture', description: 'Colorful and functional kids bedroom', image: '/sliderImages/img8.jpeg', category: 'Kids Room' },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  // Zoom & Pan
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  useEffect(() => setMounted(true), []);

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isAutoPlaying]);

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) newErrors.phone = 'Enter valid 10-digit mobile number';
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Send email
  const sendEmail = () => {
    if (!validateForm()) {
      toast.error('Please fix the errors before submitting', { duration: 3000, position: 'top-center' });
      return;
    }
    setSending(true);
    const templateParams = { 
      to_name: 'WoodCraft Team', 
      user_name: formData.name, 
      user_phone: formData.phone, 
      user_email: formData.email, 
      message: formData.message 
    };
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setSending(false);
        setSent(true);
        toast.success('🎉 Enquiry Sent! We\'ll reach out to you shortly on WhatsApp', {
          duration: 4000,
          position: 'top-center',
          style: { background: '#18181b', color: '#fff', border: '1px solid #f97316' }
        });
        setTimeout(() => {
          setShowEnquiryModal(false);
          setSent(false);
          setFormData({ name: '', phone: '', email: '', message: '' });
          setErrors({});
        }, 1500);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setSending(false);
        toast.error('Failed to send. Please try again.', { duration: 3000, position: 'top-center' });
      });
  };

  // Modal handlers
  const openEnquiry = () => setShowEnquiryModal(true);
  const closeEnquiry = () => { 
    setShowEnquiryModal(false); 
    setSent(false); 
    setFormData({ name: '', phone: '', email: '', message: '' }); 
    setErrors({}); 
  };

  const openImageModal = (index) => {
    setModalImageIndex(index);
    setShowImageModal(true);
    resetZoom();
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    resetZoom();
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const nextSlide = () => { 
    setCurrentSlide((c) => (c + 1) % projects.length); 
    setIsAutoPlaying(false); 
  };

  const prevSlide = () => { 
    setCurrentSlide((c) => (c - 1 + projects.length) % projects.length); 
    setIsAutoPlaying(false); 
  };

  const goToSlide = (i) => { 
    setCurrentSlide(i); 
    setIsAutoPlaying(false); 
  };

  const nextImage = () => {
    setModalImageIndex((prev) => (prev + 1) % projects.length);
    resetZoom();
  };

  const prevImage = () => {
    setModalImageIndex((prev) => (prev - 1 + projects.length) % projects.length);
    resetZoom();
  };

  // Zoom & Pan Logic
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setScale((prev) => Math.max(1, Math.min(prev * delta, 5)));
  };

  const handleMouseDown = (e) => {
    if (scale === 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleImageClick = (e) => {
    e.stopPropagation();
    setScale(prev => prev > 1 ? 1 : 2.5);
    if (scale === 1) setPosition({ x: 0, y: 0 });
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev * 1.2, 5));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev / 1.2, 1));
    if (scale <= 1.2) setPosition({ x: 0, y: 0 });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!showImageModal) return;
      if (e.key === 'Escape') closeImageModal();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      // Use standard keys for accessibility/simplicity
      if (e.key === '=' || e.key === '+') zoomIn();
      if (e.key === '-' || e.key === '_') zoomOut();
      if (e.key === '0') resetZoom();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [showImageModal]);

  return (
    <>
      <section id="home" className="relative pt-16 min-h-screen bg-black flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><defs><pattern id="grain" width="100" height="100"><path d="M0,20 Q10,15 20,20 T40,20 T60,20 T80,20 T100,20 M0,40 Q10,35 20,40 T40,40 T60,40 T80,40 T100,40 M0,60 Q10,55 20,60 T40,60 T60,60 T80,60 T100,60 M0,80 Q10,75 20,80 T40,80 T60,80 T80,80 T100,80" stroke="%23FF6B35" stroke-width="0.8"/><path d="M20,0 Q15,10 20,20 T20,40 T20,60 T20,80 T20,100 M40,0 Q35,10 40,20 T40,40 T40,60 T40,80 T40,100 M60,0 Q55,10 60,20 T60,40 T60,60 T60,80 T60,100 M80,0 Q75,10 80,20 T80,40 T80,60 T80,80 T100,100" stroke="%23FF6B35" stroke-width="0.6"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>')`,
            backgroundSize: '120px 120px',
            animation: 'grain-move 40s linear infinite'
          }} />
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-orange-400/60 rounded-full blur-sm animate-float" style={{ 
              top: `${20 + i * 15}%`, 
              left: `${10 + i * 13}%`, 
              animationDelay: `${i * 0.8}s`, 
              animationDuration: `${6 + i}s` 
            }} />
          ))}
          <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-orange-500/20 via-amber-600/15 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-orange-500/20 via-red-600/15 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(255,107,53,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.08) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* LEFT – TEXT */}
            <div className={`space-y-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-orange-400 animate-pulse" />
                <span className="text-orange-400 text-sm font-semibold">Premium Carpentry Studio</span>
              </div>

              <div className="relative z-20">
                <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight">
                  <div className={`block bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent transition-all duration-1000 delay-200 overflow-hidden ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ 
                  animation: mounted ? 'typing 2s steps(18, end), blink-caret 0.75s step-end infinite' : 'none', 
                  whiteSpace: 'nowrap', 
                  borderRight: mounted ? '2px solid orange' : 'none', 
                  width: mounted ? '100%' : '0', 
                  lineHeight: '1.2' 
                }}>
                    VishwakarmaCarpenter
                  </div>
                  <span className={`block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mt-1 font-bold transition-all duration-1000 delay-800 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ lineHeight: '1.3' }}>
                    Dinesh Vishwakarma – Master Craftsman
                  </span>
                </h1>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-prose">
                Turn ordinary wood into <strong className="text-orange-400">extraordinary spaces</strong>.
                15+ years of Mumbai's finest craftsmanship – <strong className="text-orange-400">Lifetime Guarantee</strong> on every piece.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4">
                <button onClick={openEnquiry} className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 flex items-center justify-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 relative z-10" />
                  <span className="relative z-10">ENQUIRY</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </button>

                <button className="bg-zinc-900/50 backdrop-blur-sm text-orange-400 px-6 py-3 rounded-full font-bold border-2 border-orange-500/30 hover:border-orange-500 hover:bg-zinc-900 transition-all duration-300 group flex items-center justify-center space-x-2 text-sm">
                  <span>Explore Gallery</span>
                  <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                </button>
              </div>

              <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-800">
                <div><div className="text-2xl font-bold text-orange-400">1,200+</div><div className="text-gray-500 text-xs">Homes Transformed</div></div>
                <div><div className="text-2xl font-bold text-orange-400">15+</div><div className="text-gray-500 text-xs">Years of Mastery</div></div>
                <div><div className="text-2xl font-bold text-orange-400">100%</div><div className="text-gray-500 text-xs">Lifetime Guarantee</div></div>
              </div>
            </div>

            {/* RIGHT – SLIDER */}
            <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-4 border border-orange-500/20 backdrop-blur-sm overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2"><Star className="h-4 w-4 text-orange-400 fill-current" /><span className="text-white font-semibold text-sm">Featured Work</span></div>
                    <span className="text-orange-400 text-xs font-medium">{String(currentSlide + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}</span>
                  </div>
                  
                      {/* FIXED IMAGE CONTAINER */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-800/50">
                    {projects.map((project, idx) => (
                      <div
                        key={project.id}
                        className={`absolute inset-0 transition-all duration-700 ${
                          idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                      >
                        <div className="w-full h-full relative">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-contain cursor-zoom-in"
                            onClick={(e) => { e.stopPropagation(); openImageModal(currentSlide); }}
                          />
                          {/* Zoom overlay icon */}
                          <div 
                            className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-2 rounded-full transition-all hover:scale-110 border border-white/20 cursor-pointer z-10"
                            onClick={(e) => { e.stopPropagation(); openImageModal(currentSlide); }}
                          >
                            <ZoomIn className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        
                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4">
                          <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium mb-1">
                            {projects[currentSlide].category}
                          </span>
                          <h3 className="text-lg font-bold text-white mb-1">{projects[currentSlide].title}</h3>
                          <p className="text-gray-300 text-xs">{projects[currentSlide].description}</p>
                        </div>

                        {/* Navigation Buttons */}
                        <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 backdrop-blur-sm text-white p-2 rounded-full transition-all hover:scale-110 border border-white/10 z-10">
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 backdrop-blur-sm text-white p-2 rounded-full transition-all hover:scale-110 border border-white/10 z-10">
                          <ChevronRight className="h-4 w-4" />
                        </button>

                        {/* Progress Bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                          <div className="h-full bg-gradient-to-r from-orange-500 to-red-400 transition-all duration-1000 ease-out" style={{ width: `${((currentSlide + 1) / projects.length) * 100}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dots Indicators */}
                  <div className="flex justify-center space-x-1 mt-4">
                    {projects.map((_, i) => (
                      <button key={i} onClick={() => goToSlide(i)} className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentSlide ? 'bg-orange-500 w-4' : 'bg-gray-600 hover:bg-gray-400'}`} />
                    ))}
                  </div>

                  {/* Enquiry Button */}
                  <button onClick={openEnquiry} className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-red-500 text-white py-2 rounded-lg font-semibold transition-all group flex items-center justify-center space-x-2 text-sm">
                    <Mail className="h-3 w-3" />
                    <span>ENQUIRY</span>
                    <Sparkles className="h-3 w-3 group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-orange-500/50 animate-bounce z-10">15+ Years</div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes grain-move { 0% { background-position: 0 0; } 100% { background-position: 120px 120px; } }
          @keyframes float { 0%, 100% { transform: translateY(0) translateX(0); opacity: 0.6; } 50% { transform: translateY(-20px) translateX(10px); opacity: 1; } }
          .animate-float { animation: float 6s ease-in-out infinite; }
          @keyframes typing { from { width: 0 } to { width: 100% } }
          @keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: orange } }
        `}</style>
      </section>

      {/* ENQUIRY MODAL (Unchanged) */}
      {showEnquiryModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) closeEnquiry(); }}
        >
          <div className="relative w-full max-w-md bg-gradient-to-br from-zinc-900 to-black border border-orange-500/30 rounded-3xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/10 blur-3xl"></div>
            <div className="relative p-8">
              <button onClick={closeEnquiry} className="absolute top-4 right-4 p-2 hover:bg-orange-500/20 rounded-full transition-all">
                <X className="h-5 w-5 text-gray-400" />
              </button>
              <div className="text-center mb-6">
                <div className="inline-flex p-4 bg-orange-500/20 rounded-full mb-4">
                  <Mail className="h-10 w-10 text-orange-400" />
                </div>
                <h2 className="text-3xl font-black text-white">Free Design Enquiry</h2>
                <p className="text-gray-400 mt-2">Reply in 2 hours • 100% Free</p>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-orange-400" />
                  <input 
                    type="text" 
                    value={formData.name} 
                    onChange={(e) => {
                      setFormData({...formData, name: e.target.value});
                      if (errors.name) setErrors({...errors, name: ''});
                    }}
                    placeholder="Your Name" 
                    className={`w-full pl-12 pr-4 py-3 bg-zinc-800/50 border ${errors.name ? 'border-red-500' : 'border-orange-500/30'} rounded-xl text-white placeholder-gray-500 focus:border-orange-400 focus:outline-none transition-all`} 
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>}
                </div>
                
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-orange-400" />
                  <input 
                    type="tel" 
                    value={formData.phone} 
                    onChange={(e) => {
                      setFormData({...formData, phone: e.target.value});
                      if (errors.phone) setErrors({...errors, phone: ''});
                    }}
                    placeholder="Phone Number (10 digits)" 
                    maxLength="10"
                    className={`w-full pl-12 pr-4 py-3 bg-zinc-800/50 border ${errors.phone ? 'border-red-500' : 'border-orange-500/30'} rounded-xl text-white placeholder-gray-500 focus:border-orange-400 focus:outline-none transition-all`} 
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone}</p>}
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-orange-400" />
                  <input 
                    type="email" 
                    value={formData.email} 
                    onChange={(e) => {
                      setFormData({...formData, email: e.target.value});
                      if (errors.email) setErrors({...errors, email: ''});
                    }}
                    placeholder="Email (optional)" 
                    className={`w-full pl-12 pr-4 py-3 bg-zinc-800/50 border ${errors.email ? 'border-red-500' : 'border-orange-500/30'} rounded-xl text-white placeholder-gray-500 focus:border-orange-400 focus:outline-none transition-all`} 
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>}
                </div>
                
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-orange-400" />
                  <textarea 
                    rows="3" 
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Bedroom ya kitchen?" 
                    className="w-full pl-12 pr-4 py-3 bg-zinc-800/50 border border-orange-500/30 rounded-xl text-white placeholder-gray-500 focus:border-orange-400 focus:outline-none transition-all resize-none" 
                  />
                </div>
                
                <button 
                  onClick={sendEmail}
                  disabled={sending} 
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black rounded-xl hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {sending ? 'Sending...' : sent ? 'Sent! Check WhatsApp' : <><Send className="h-5 w-5" /> SEND ENQUIRY</>}
                </button>
              </div>
              
              <p className="text-center text-xs text-gray-500 mt-4">We reply on WhatsApp within 2 hours</p>
            </div>
          </div>
        </div>
      )}

      {/* IMAGE ZOOM MODAL (FIX APPLIED HERE) */}
      {showImageModal && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={closeImageModal}
          onWheel={handleWheel}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Removed max-w-6xl max-h-[90vh] from the div below for better sizing */}
          <div className="relative w-full h-[95vh] bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-20 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all hover:scale-110 border border-white/20 backdrop-blur-sm"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all hover:scale-110 border border-white/20 backdrop-blur-sm"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all hover:scale-110 border border-white/20 backdrop-blur-sm"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Zoom Controls */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
              <button 
                onClick={zoomOut}
                className="bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all hover:scale-110 border border-white/20 backdrop-blur-sm"
              >
                <ZoomOut className="h-6 w-6" />
              </button>
              <button 
                onClick={resetZoom}
                className="bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all hover:scale-110 border border-white/20 backdrop-blur-sm"
              >
                <RotateCcw className="h-6 w-6" />
              </button>
              <button 
                onClick={zoomIn}
                className="bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all hover:scale-110 border border-white/20 backdrop-blur-sm"
              >
                <ZoomIn className="h-6 w-6" />
              </button>
            </div>

            {/* Zoomable Image Container */}
            <div
              className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
              style={{ touchAction: 'none' }}
              onMouseDown={handleMouseDown}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                onClick={handleImageClick} // Click to zoom in/out quickly
              >
                <img 
                  src={projects[modalImageIndex].image} 
                  alt={projects[modalImageIndex].title}
                  // Image must maintain ratio and be contained within the display area
                  className="max-w-full max-h-full object-contain transition-transform duration-200 select-none"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    cursor: scale > 1 ? 'grab' : 'zoom-in'
                  }}
                  draggable={false}
                />
              </div>
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6">
              <div className="text-center">
                <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {projects[modalImageIndex].category}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">{projects[modalImageIndex].title}</h3>
                <p className="text-gray-300 text-base">{projects[modalImageIndex].description}</p>
                <div className="text-orange-400 text-sm font-medium mt-2">
                  {modalImageIndex + 1} / {projects.length}
                </div>
              </div>
            </div>

            {/* Zoom Level Indicator */}
            {scale > 1 && (
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
                {Math.round(scale * 100)}%
              </div>
            )}

            {/* Keyboard Navigation Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm border border-white/20">
              ← → to navigate • Scroll/Drag to pan/zoom • ESC to close
            </div>
          </div>
        </div>
      )}
    </>
  );
}