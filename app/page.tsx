'use client';

import { useState, useEffect } from 'react';
import Hero from '@/app/sections/hero';
import About from '@/app/sections/about';
import Vision from '@/app/sections/vision';
import Core_values from '@/app/sections/core_values';
import Ministries from '@/app/sections/ministries';
import Cta from '@/app/sections/cta';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Contact from '@/app/sections/contact';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      <Header isScrolled={isScrolled} />


      {/* Hero Section */}
      <Hero />


      {/* About Section */}
      <About />



      {/* Vision & Mission Section */}
      <Vision />

      {/* Core Values Section */}
      <Core_values />

      {/* Ministries Section */}
      <Ministries />


      {/* CTA Section */}
      <Cta />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

    </div>
  );
}

