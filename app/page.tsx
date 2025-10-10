'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Vision from '@/components/sections/vision';
import Core_values from '@/components/sections/core_values';
import Ministries from '@/components/sections/ministries';
import Cta from '@/components/sections/cta';
import Footer from '@/components/sections/footer';
import Header from '@/components/sections/header';
import Contact from '@/components/sections/contact';

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

