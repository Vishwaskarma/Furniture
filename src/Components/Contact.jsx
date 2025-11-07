'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendWhatsApp = () => {
    const text = `Hi WoodCraft!%0AI'm ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AProject: ${formData.message || 'Full Home Design'}`;
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSending(true);
    setIsSent(false);

    try {
      // EMAILJS - 3 IDs yahan daal dena
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',     // ← daal yahan
        'YOUR_TEMPLATE_ID',    // ← daal yahan
        e.target,
        'YOUR_PUBLIC_KEY'      // ← daal yahan
      );

      setIsSent(true);
      sendWhatsApp();

      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', message: '' });
        setIsSent(false);
      }, 4000);
    } catch (err) {
      alert('Error! Try WhatsApp button');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* SAME EMERALD GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/50 via-black to-green-950/30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGIzODEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoMnYyaC0yem0wLTEwaDJ2MmgtMnptMCAxMGgydjJoLTJ6bTEwIDBoMnYyaC0yem0tMTAgMTBoMnYyaC0yem0xMCAwaDJ2MmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
            <Phone className="h-6 w-6 text-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-black tracking-wider">BOOK FREE SITE VISIT</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
            One Call,
            <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
              Dream Home Ready
            </span>
          </h2>
          <p className="text-xl text-gray-400">Only 3 slots left today • Free 3D design in 2 hours</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="space-y-6">
              {[
                { icon: Phone, text: '+91 98765-43210' },
                { icon: Mail, text: 'hello@jantafurniture.in' },
                { icon: MapPin, text: 'Main Market, Jalandhar, Punjab' }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl group-hover:bg-emerald-500/20 transition-all">
                      <Icon className="h-7 w-7 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Contact</p>
                      <p className="text-white font-bold text-lg group-hover:text-emerald-400 transition-colors">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/5 backdrop-blur-xl p-8 rounded-3xl border border-emerald-500/30">
              <h3 className="text-2xl font-black text-white mb-4">What You Get FREE</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-emerald-400" /> Site visit + measurement</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-emerald-400" /> 3D design in 2 hours</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-emerald-400" /> Quotation in 10 minutes</li>
              </ul>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 backdrop-blur-2xl p-10 rounded-3xl border border-emerald-500/30 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="to_name" value="WoodCraft Team" />

                <input
                  type="text" name="name" required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-5 rounded-2xl bg-gray-900/50 border border-emerald-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/20 transition-all text-lg"
                />

                <input
                  type="tel" name="phone" required
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-6 py-5 rounded-2xl bg-gray-900/50 border border-emerald-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/20 transition-all text-lg"
                />

                <input
                  type="email" name="email"
                  placeholder="Email (optional)"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-5 rounded-2xl bg-gray-900/50 border border-emerald-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/20 transition-all text-lg"
                />

                <textarea
                  name="message" rows="3"
                  placeholder="Bedroom, Kitchen or Full Home?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-6 py-5 rounded-2xl bg-gray-900/50 border border-emerald-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/20 transition-all resize-none text-lg"
                />

                <button 
                  type="submit"
                  disabled={isSending}
                  className="w-full relative bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white py-6 rounded-2xl font-black text-xl shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden flex items-center justify-center gap-3"
                >
                  {isSending ? (
                    <>Sending...</>
                  ) : isSent ? (
                    <>Sent! Check WhatsApp</>
                  ) : (
                    <>
                      <Send className="h-6 w-6" />
                      SEND ENQUIRY
                    </>
                  )}
                </button>
              </form>

              {isSent && (
                <div className="mt-6 p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400 text-center font-bold animate-pulse">
                  WhatsApp opened! Reply “Hi” → get 3D design in 2 hours
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}