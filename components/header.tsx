'use client'

import Image from 'next/image'
import { Menu, X, Heart } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LogoSrc = '/Tccc.png';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on resize to prevent layout glitches
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`fixed w-full z-[100] transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-sm py-2' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 max-w-7xl"> 
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <a href="#home" className="relative group flex items-center gap-3">
            <div className={`relative transition-all duration-500 transform ${
              isScrolled ? 'h-12 w-12' : 'h-14 w-14'
            }`}>
              <Image
                src={LogoSrc}
                alt="TCCS Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            {!isScrolled && (
              <span className="hidden lg:block text-white font-serif italic text-lg opacity-90 tracking-wide">
                Tetelestai
              </span>
            )}
          </a>

          {/* Desktop Navigation - Modern Underline Effect */}
          <nav className="hidden md:flex items-center space-x-1">
            {['Home', 'About', 'Vision', 'Values', 'Ministries', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 group ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                <span className="relative z-10 group-hover:text-blue-500 transition-colors">
                  {item}
                </span>
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="hidden md:flex items-center space-x-5">
            <a href='#contact' className="relative inline-flex group">
              <button className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                isScrolled 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700' 
                : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'
              }`}>
                <Heart size={16} className={isScrolled ? 'fill-white' : 'fill-blue-400 text-blue-400'} />
                Donate Today
              </button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10 backdrop-blur-md'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Modern Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl border-t border-slate-100 overflow-hidden"
            >
              <div className="container mx-auto px-8 py-10 flex flex-col space-y-6">
                {['Home', 'About', 'Vision', 'Values', 'Ministries', 'Contact'].map((item, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-200"
                >
                  Join the Mission
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header