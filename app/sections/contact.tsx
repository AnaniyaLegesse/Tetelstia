'use client';

import { Mail, Phone, MapPin } from 'lucide-react'
import React, { useState,  FormEvent } from 'react'
import { LucideIcon } from 'lucide-react'

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

// Define an interface for the submission status state
interface IStatus {
  loading: boolean;
  error: string | null;
  success: boolean;
}

// --- Data ---
const contactInfo: ContactInfoItem[] = [
  {
    icon: MapPin,
    title: 'Our Office Address',
    detail: 'Addis Ababa, Ethiopia Kirkos Sub-city, Woreda 01, House No. 123',
    link: 'https://maps.app.goo.gl/qt5zhrFuyyRut2bP9?g_st=atm',
  },
  {
    icon: Phone,
    title: 'Call Us Directly',
    detail: '+251979860887',
    link: 'tel:+251979860887',
  },
  {
    icon: Mail,
    title: 'Email Us Anytime',
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
    className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
  >
    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-700">
      <Icon size={24} className="text-white" />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-600 text-sm">{detail}</p>
    </div>
  </a>
);

// --- Main Component ---
const Contact: React.FC = () => {
  // Public env var (exposed to client at build time)
  const accessKey = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY;

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

    // State for form submission status, typed with IStatus
  const [status, setStatus] = useState<IStatus>({
    loading: false,
    error: null,
    success: false,
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

async function handleSubmit(event: FormEvent) {
  event.preventDefault();
  setStatus({ loading: true, error: null, success: false });

  try {
    if (!accessKey) {
      setStatus({ loading: false, error: 'Missing form access key. Ensure NEXT_PUBLIC_FORM_ACCESS_KEY is set.', success: false });
      return;
    }
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        from_name: "Tetelestai Contact Form",
      })
    });
    
    const result = await response.json();
    
    if (result.success) {
      setStatus({ loading: false, error: null, success: true });
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } else {
      setStatus({ loading: false, error: result.message || 'Failed to send message', success: false });
    }
  } catch (error: unknown) { // Explicitly type error as unknown
    let errorMessage = 'Network error. Please try again.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    setStatus({ loading: false, error: errorMessage, success: false });
  }
}

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest text-center mb-2">
            Get in Touch
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">
            Connect With Our Mission
          </h2>
        </div>

        {/* Contact Layout: Form on Left, Info on Right */}
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Contact Form (Takes up 2/3 of the width on large screens) */}
          <div className="lg:col-span-2 bg-blue-50 p-8 sm:p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">

                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition duration-150 outline-none"
                />


                {/* Phone Number */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition duration-150 outline-none"
                />
              </div>

              <div className="grid sm:grid-cols-1 gap-6">
                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition duration-150 outline-none"
                />

              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition duration-150 outline-none resize-none"
              ></textarea>

              {/* Submit Button */}

              <button
                type="submit"
                disabled={status.loading}
                className="group w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                {status.loading ? 'Sending...' : 'Send Message'}
              </button>
            
              {/* Status Messages */}
              <div className="mt-4 text-center">
                  {status.success && <p className="text-green-600">Thank you, I will contact you soon!</p>}
                  {status.error && <p className="text-red-600">{status.error}</p>}
              </div>      
            </form>
          </div>

          {/* Contact Information (Takes up 1/3 of the width) */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Details</h3>
            {contactInfo.map((item, index) => (
              <ContactCard key={index} {...item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;