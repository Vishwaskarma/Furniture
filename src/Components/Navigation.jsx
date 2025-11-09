'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer, Mail, Phone, User, MessageSquare, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', message: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Services', 'Gallery', 'Contact'];

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter valid 10-digit mobile number';
    }
    
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = () => {
    if (!validateForm()) {
      toast.error('Please fix the errors before submitting', {
        duration: 3000,
        position: 'top-center',
      });
      return;
    }
    
    setSending(true);
    
    const templateParams = {
      to_name: 'WoodCraft Team',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
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
          style: {
            background: '#18181b',
            color: '#fff',
            border: '1px solid #f97316',
          },
        });
        setTimeout(() => {
          setShowPopup(false);
          setSent(false);
          setFormData({ name: '', phone: '', email: '', message: '' });
          setErrors({});
        }, 1500);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setSending(false);
        toast.error('Failed to send. Please try again.', {
          duration: 3000,
          position: 'top-center',
        });
      });
  };

  const closePopup = () => {
    setShowPopup(false);
    setSent(false);
    setFormData({ name: '', phone: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl shadow-2xl border-b border-orange-500/20' : 'bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* === MODERN & ELEGANT LOGO === */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-50 group-hover:opacity-80 transition-all duration-500 scale-110"></div>
                
                {/* Hammer Icon with 3D Effect */}
                <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-2xl shadow-2xl transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                  <Hammer className="h-7 w-7 text-white drop-shadow-md" />
                </div>
              </div>

              {/* Name & Tagline */}
              <div className="ml-3 flex flex-col justify-center">
                <h1 className="text-2xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent leading-tight tracking-tight">
                  Dinesh Vishwakarma
                </h1>
                <p className="text-[9px] font-bold text-orange-400/80 tracking-widest uppercase letter-spacing-widest opacity-90">
                  Masterpieces
                </p>
              </div>
            </div>
            {/* === END LOGO === */}

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, i) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-gray-400 hover:text-orange-400 transition-all font-medium group overflow-hidden"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-0 bg-orange-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <button
                onClick={() => setShowPopup(true)}
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-all flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                ENQUIRY
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-gray-400 hover:text-orange-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => { setShowPopup(true); setIsOpen(false); }}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-bold flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" /> ENQUIRY
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ENQUIRY POPUP */}
      {showPopup && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closePopup();
            }
          }}
        >
          <div className="relative w-full max-w-md bg-gradient-to-br from-zinc-900 to-black border border-orange-500/30 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/10 blur-3xl"></div>
            
            <div className="relative p-8">
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 p-2 hover:bg-orange-500/20 rounded-full transition-all"
              >
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
                  {sending ? (
                    <>Sending...</>
                  ) : sent ? (
                    <>Sent! Check WhatsApp</>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      SEND ENQUIRY
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-xs text-gray-500 mt-4">
                We reply on WhatsApp within 2 hours
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}