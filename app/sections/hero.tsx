'use client'

'use client'

import React from 'react'
import Image from 'next/image'
import { ChevronRight, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center p-6 bg-gray-900">
      <Image
        src="/bg2.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gray-900/70" />

      <div className="relative z-10 container mx-auto max-w-5xl text-white">
        <h1 className="text-5xl sm:text-xl lg:text-5xl font-extrabold leading-none mb-6 max-w-4xl">
          <span className="block">Tetelestai</span>
          <span className="block text-blue-400">Community Centered Service.</span>
        </h1>

        <p className="text-xl sm:text-2xl font-light max-w-3xl mb-10">
          Empowering renewed disciples to live out the Gospel and bring holistic, sustainable change to their communities worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="group w-full sm:w-auto px-10 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2">
            <span>Join Our Mission Today</span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="group w-full sm:w-auto px-10 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
            <Play size={20} className="group-hover:scale-105 transition-transform" />
            <span>Watch Our Story</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero