'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Yup validation schema (cleaner & more powerful than Zod in many cases)
const contactSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name too long')
    .trim(),

  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^[6-9]\d{9}$/, 'Enter valid 10-digit Indian mobile number (e.g. 9812345678)')
    .length(10, 'Phone must be exactly 10 digits'),

  email: yup
    .string()
    .email('Enter a valid email address')
    .optional()
    .nullable()
    .transform((value) => (value === '' ? null : value)), // allows empty string

  message: yup
    .string()
    .optional()
    .max(500, 'Message too long (max 500 characters)')
    .trim(),
});

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
    clearErrors,
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const formData = watch();

  // Open WhatsApp with pre-filled message
  const sendWhatsApp = () => {
    const text = `Hi Vishwakarma Carpenter!%0A%0AI'm *${formData.name}*%0APhone: ${formData.phone}%0AEmail: ${formData.email || 'Not provided'}%0AProject: ${formData.message || 'Need full home carpentry work'}%0A%0ALooking forward to your quote!`;
    window.open(`https://wa.me/918169541472?text=${text}`, '_blank');
  };

  const onSubmit = async (data) => {
    setIsSending(true);
    setIsSent(false);
    clearErrors();

    try {
      const templateParams = {
        to_name: 'Vishwakarma Carpenter',
        name: data.name,
        phone: data.phone,
        email: data.email || 'Not provided',
        message: data.message || 'No message',
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success('Enquiry Sent! Opening WhatsApp...', {
        duration: 5000,
        icon: 'Success',
        style: {
          background: '#18181b',
          color: '#fff',
          border: '2px solid #fb923c',
          fontWeight: 'bold',
        },
      });

      setIsSent(true);
      sendWhatsApp();
      reset();

      setTimeout(() => setIsSent(false), 5000);
    } catch (err) {
      console.error('EmailJS failed:', err);
      toast.error('Failed to send. Opening WhatsApp directly...', {
        duration: 5000,
        style: { background: '#18181b', color: '#fff', border: '2px solid #ef4444' },
      });
      sendWhatsApp(); // fallback
    } finally {
      setIsSending(false);
    }
  };

  const onError = () => {
    toast.error('Please fix the errors and try again', {
      duration: 4000,
      style: { background: '#18181b', color: '#fff', border: '2px solid #ef4444' },
    });
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/50 via-black to-amber-950/30"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYjkyM2MiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoMnYyaC0yem0wLTEwaDJ2MmgtMnptMCAxMGgydjJoLTJ6bTEwIDBoMnYyaC0yem0tMTAgMTBoMnYyaC0yem0xMCAwaDJ2MmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 animate-pulse"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
            One Call,
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Dream Home Ready
            </span>
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {[
                { icon: Phone, text: '+91 81695 41472' },
                { icon: Mail, text: 'dineshkvish662@gmail.com' },
                { icon: MapPin, text: 'Vasai, Mumbai' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-2xl group-hover:bg-orange-500/20 transition-all">
                      <Icon className="h-7 w-7 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Contact</p>
                      <p className="text-white font-bold text-lg group-hover:text-orange-400 transition">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-xl p-8 rounded-3xl border border-orange-500/30">
              <h3 className="text-2xl font-black text-white mb-4">FREE Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-orange-400" /> Site visit + measurement</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-orange-400" /> Quotation in 10 minutes</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-orange-400" /> 3D design preview</li>
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-gray-900/90 via-black to-gray-900/90 backdrop-blur-2xl p-10 rounded-3xl border border-orange-500/30 shadow-2xl group-hover:border-orange-400/60 transition-all">
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name *"
                  {...register('name')}
                  className={`w-full px-6 py-5 rounded-2xl bg-gray-900/50 border text-white placeholder-gray-500 focus:outline-none focus:ring-4 transition-all text-lg ${
                    errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-orange-500/30 focus:border-orange-400 focus:ring-orange-500/20'
                  }`}
                />
                {errors.name && <p className="text-red-400 text-sm ml-2 -mt-2">{errors.name.message}</p>}

                <input
                  type="tel"
                  placeholder="Phone Number * (10 digits)"
                  {...register('phone')}
                  maxLength={10}
                  className={`w-full px-6 py-5 rounded-2xl bg-gray-900/50 border text-white placeholder-gray-500 focus:outline-none focus:ring-4 transition-all text-lg ${
                    errors.phone ? 'border-red-500 focus:ring-red-500/20' : 'border-orange-500/30 focus:border-orange-400 focus:ring-orange-500/20'
                  }`}
                />
                {errors.phone && <p className="text-red-400 text-sm ml-2 -mt-2">{errors.phone.message}</p>}

                <input
                  type="email"
                  placeholder="Email (optional)"
                  {...register('email')}
                  className="w-full px-6 py-5 rounded-2xl bg-gray-900/50 border border-orange-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/20 transition-all text-lg"
                />

                <textarea
                  rows={3}
                  placeholder="Bedroom, Kitchen, Full Home?"
                  {...register('message')}
                  className="w-full px-6 py-5 rounded-2xl bg-gray-900/50 border border-orange-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/20 transition-all resize-none text-lg"
                />

                <button
                  type="submit"
                  disabled={isSending || !isValid}
                  className={`w-full py-6 rounded-2xl font-black text-xl shadow-2xl flex items-center justify-center gap-3 transition-all ${
                    isValid && !isSending
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white hover:scale-105'
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  } disabled:opacity-70`}
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

                {isSent && (
                  <div className="mt-4 p-4 bg-orange-500/10 border border-orange-500/30 rounded-2xl text-orange-400 text-center font-bold animate-pulse">
                    WhatsApp opened! Just say "Hi" to get your free 3D design
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}