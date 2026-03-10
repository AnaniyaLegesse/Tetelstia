'use client'

import Image from 'next/image'
import React from 'react'
import { Facebook, Instagram, Twitter, Youtube, ArrowUpRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'About',
      links: [
        { name: 'Our Story', href: '#story' },
        { name: 'Vision & Mission', href: '#vision' },
        { name: 'Core Values', href: '#values' },
        { name: 'Statement of Faith', href: '#faith' }
      ]
    },
    {
      title: 'Ministries',
      links: [
        { name: 'Discipleship', href: '#ministries' },
        { name: 'Music Evangelism', href: '#ministries' },
        { name: 'Church Planting', href: '#ministries' },
        { name: 'Community Service', href: '#ministries' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'Get Involved', href: '#contact' },
        { name: 'Prayer Support', href: '#contact' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Partnership', href: '#contact' }
      ]
    }
  ];

  return (
    <footer className="bg-[#06133b] text-white pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Abstract Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7A1909]/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Identity Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative h-[80px] w-[80px] group">
              <div className="absolute inset-0 bg-white/10 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <Image
                  src="/Tccc.png"
                  alt="TCCS Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight italic">Tetelestai</h3>
              <p className="text-blue-100/60 font-light leading-relaxed max-w-sm">
                Community Centered Service — dedicated to making renewed disciples who transform their communities through the finished work of Christ.
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#7A1909] hover:border-[#7A1909] transition-all duration-300">
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a81f0a]">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="group flex items-center text-blue-100/70 hover:text-white transition-colors font-light text-sm"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium tracking-widest uppercase text-blue-200/40">
          <div className="flex items-center gap-4">
            <p>&copy; {currentYear} TCCS Africa</p>
            <div className="w-1 h-1 bg-[#7A1909] rounded-full" />
            <p>Proclaiming the Finished Work</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer