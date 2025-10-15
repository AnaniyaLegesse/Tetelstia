
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'


// ASSUME this is how you handle your img in your project setup.
// You need to ensure 'Tccc.png' is accessible at this path.
const LogoSrc = '/Tccc.png'; 

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled } : HeaderProps) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const textColor = isScrolled ? 'text-gray-900' : 'text-white';
  const hoverTextColor = isScrolled ? 'hover:text-blue-600' : 'hover:text-blue-400';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6 max-w-6xl"> 
        <div className="flex items-center justify-between">
          
          {/* Logo - Updated to use the img file */}
          <a href="#home" className="flex items-center space-x-2">
            <div className={`relative h-[60px] w-[60px]`}>
              <Image
                src={LogoSrc}
                alt="TCCS"
                fill
                className={`object-contain transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-90'}`}
                sizes="60px"
                priority={false}
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Vision', 'Values', 'Ministries', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors duration-200 font-medium ${textColor} ${hoverTextColor}`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href='#contact'>
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md font-medium transform hover:scale-105">
              Donate today
            </button>
            </a>
          </div>

          {/* Mobile Menu Button - Icon color changes based on scroll */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${textColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation (remains the same) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
            <div className="px-6 py-4 space-y-3">
              {['Home', 'About', 'Vision', 'Values', 'Ministries', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium shadow-md">
                Get Involved
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header