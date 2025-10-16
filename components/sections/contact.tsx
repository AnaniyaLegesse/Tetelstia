'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react'
import React, { useState } from 'react'
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
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          content: formData.message,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        alert("Thank you for your message! We will be in touch shortly. Your message has been saved to our records.");
        console.log('Server response:', result);
      } else {
        const errorText = await response.text();
        console.error('Server error:', errorText);
        setSubmitStatus('error');
        alert("Sorry, there was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
      alert("Network error: Cannot connect to the server. Please make sure the API is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  disabled={isSubmitting}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition duration-150 outline-none disabled:opacity-50"
                />


                {/* Phone Number */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition duration-150 outline-none disabled:opacity-50"
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
                  disabled={isSubmitting}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition duration-150 outline-none disabled:opacity-50"
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
                disabled={isSubmitting}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition duration-150 outline-none resize-none disabled:opacity-50"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                {!isSubmitting && (
                  <Send size={20} className="transform group-hover:translate-x-0.5 transition-transform" />
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                  Message sent successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                  Failed to send message. Please try again.
                </div>
              )}
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