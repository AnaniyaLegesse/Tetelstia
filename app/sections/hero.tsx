'use client'

import React from 'react'
import Image from 'next/image'
import { ChevronRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-svh flex items-center overflow-hidden bg-slate-950"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg18.jpg"
          alt="Tetelestai Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        
        <div className="absolute inset-0 bg-slate-950/40 z-10" /> 
        
        <div className="absolute inset-0 z-20 
          bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent 
          md:bg-gradient-to-r md:from-slate-950 md:via-slate-950/40 md:to-transparent" 
        />
      </div>

      <div className="relative z-30 container mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="max-w-3xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >

            {/* Minimized Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15]">
              <span className="italic font-serif text-blue-400">Tetelestai</span>
              <br /> 
              Community Centered Service
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-100 font-light max-w-xl leading-relaxed">
              Empowering renewed disciples to live out the Gospel and bring 
              <span className="text-white font-semibold"> holistic change </span> 
              to communities worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="group px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 hover:bg-blue-700 transition-all active:scale-95"
              >
                Join Our Mission
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 transition-all">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500">
                  <Play size={12} fill="white" />
                </span>
                Watch Our Story
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-1.5 bg-blue-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero