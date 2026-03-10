'use client';

import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'
import React, { useState, FormEvent } from 'react'
import { LucideIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// --- Types ---
interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  detail: string;
  link?: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface IStatus {
  loading: boolean;
  error: string | null;
  success: boolean;
}

// --- Data ---
const contactInfo: ContactInfoItem[] = [
  {
    icon: MapPin,
    title: 'Our Office',
    detail: 'Addis Ababa, Ethiopia Kirkos Sub-city, Woreda 01, House No. 123',
    link: 'https://maps.google.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    detail: '+251 979 860 887',
    link: 'tel:+251979860887',
  },
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'tccs1930@gmail.com',
    link: 'mailto:tccs1930@gmail.com',
  },
];

// --- Sub-Components ---
const ContactCard: React.FC<ContactInfoItem> = ({ icon: Icon, title, detail, link }) => (
  <a
    href={link}
    target={link?.startsWith('http') ? '_blank' : '_self'}
    rel={link?.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="flex items-center space-x-5 p-6 bg-white rounded-2xl border border-slate-100 hover:border-[#7A1909]/20 transition-all duration-300 group shadow-sm hover:shadow-md"
  >
    <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#0C2B85] group-hover:text-white text-[#0C2B85]">
      <Icon size={20} strokeWidth={1.5} />
    </div>
    <div>
      <h4 className="text-xs font-black uppercase tracking-widest text-[#7A1909] mb-1">{title}</h4>
      <p className="text-slate-600 font-light text-sm">{detail}</p>
    </div>
  </a>
);

// --- Main Component ---
const Contact: React.FC = () => {
  const accessKey = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY;

  const [formData, setFormData] = useState<FormState>({
    name: '', email: '', phone: '', message: '',
  });

  const [status, setStatus] = useState<IStatus>({
    loading: false, error: null, success: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      if (!accessKey) {
        setStatus({ loading: false, error: 'Configuration Error.', success: false });
        return;
      }
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
          from_name: "Tetelestai Contact Form",
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus({ loading: false, error: null, success: true });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(s => ({ ...s, success: false })), 5000);
      } else {
        setStatus({ loading: false, error: result.message || 'Failed to send.', success: false });
      }
    } catch (error) {
      setStatus({ loading: false, error: 'Network error.', success: false });
      console.log("Contact form submission error:", error);
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-20 text-center">
          <span className="inline-block px-4 py-1 text-[10px] font-black tracking-[0.4em] text-[#7A1909] uppercase border border-[#7A1909]/20 rounded-full mb-6">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#0C2B85]">
            Connect With Our <span className="font-semibold italic">Mission.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-2xl font-bold text-[#0C2B85] mb-8">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:border-[#0C2B85] focus:ring-0 transition-all outline-none font-light placeholder:text-slate-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                      className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:border-[#0C2B85] focus:ring-0 transition-all outline-none font-light placeholder:text-slate-300"
                      placeholder="+251..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:border-[#0C2B85] focus:ring-0 transition-all outline-none font-light placeholder:text-slate-300"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                  <textarea
                    name="message" rows={5} value={formData.message} onChange={handleChange} required
                    className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:border-[#0C2B85] focus:ring-0 transition-all outline-none font-light placeholder:text-slate-300 resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="group w-full md:w-auto px-10 py-4 bg-[#0C2B85] text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-3 hover:bg-[#061a52] disabled:opacity-70"
                >
                  {status.loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={18} />}
                  <span>{status.loading ? 'Sending...' : 'Send Message'}</span>
                </button>

                <AnimatePresence>
                  {status.success && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 text-sm font-medium">
                      Message sent successfully. We will be in touch soon.
                    </motion.p>
                  )}
                  {status.error && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#7A1909] text-sm font-medium">
                      {status.error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#0C2B85] mb-2">Our Details</h3>
              <p className="text-slate-400 font-light mb-8 italic text-sm">Feel free to reach out via any of these channels.</p>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <ContactCard key={index} {...item} />
                ))}
              </div>
            </div>

            {/* Subtle Brand Accent Card */}
            <div className="p-8 bg-[#0C2B85] rounded-[2rem] text-white relative overflow-hidden group">
               <div className="absolute -right-4 -bottom-4 text-white opacity-5 transform group-hover:scale-110 transition-transform duration-700">
                  <Mail size={160} />
               </div>
               <h4 className="text-lg font-bold mb-2">Join the Community</h4>
               <p className="text-blue-100 font-light text-sm leading-relaxed mb-6">
                 Stay updated on our global missions and local community impact. 
               </p>
               <div className="w-12 h-1 bg-[#7A1909] rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;